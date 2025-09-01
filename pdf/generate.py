import json
import os
import sys
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, TemplateNotFound, TemplateSyntaxError
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

def load_resume_data(filepath):
    """
    Loads resume data directly from a JSON file.
    Includes error handling for missing files or invalid JSON.
    """
    try:
        # Convert to absolute path for better error messages
        abs_path = Path(filepath).absolute()
        with open(abs_path, 'r', encoding='utf-8') as f:
            print(f"Loading resume data from: {abs_path}")
            data = json.load(f)
            # Validate required fields
            required_fields = ['personalInfo', 'experience', 'education', 'skills']
            for field in required_fields:
                if field not in data:
                    print(f"Warning: Missing required field in resume data: {field}")
            return data
    except FileNotFoundError:
        print(f"Error: The data file was not found at '{abs_path}'.")
        print("Please ensure the script is run from the project's root directory.")
        return None
    except json.JSONDecodeError as e:
        print(f"Error: The file at '{abs_path}' is not a valid JSON file.")
        print(f"Error details: {str(e)}")
        return None
    except Exception as e:
        print(f"Unexpected error loading resume data: {str(e)}")
        return None

def generate_pdf(html_content, output_path):
    """Generate PDF from HTML content with error handling."""
    try:
        # Configure font settings
        font_config = FontConfiguration()
        
        # Generate PDF with additional weasyprint options for better compatibility
        HTML(
            string=html_content,
            base_url=os.path.dirname(os.path.abspath(__file__))
        ).write_pdf(
            output_path,
            stylesheets=[],
            font_config=font_config,
            presentational_hints=True
        )
        return True
    except Exception as e:
        print(f"Error generating PDF: {str(e)}")
        return False

def main():
    """
    Main function to generate the PDF resume.
    """
    # Define the path to the single source of truth for resume data.
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_filepath = os.path.join(script_dir, '../src/data/resumeData.json')
    
    print("Starting PDF generation...")
    
    # Load resume data
    resume_data = load_resume_data(data_filepath)
    
    # If data loading fails, abort the script.
    if not resume_data:
        print("Error: Failed to load resume data. Aborting PDF generation.")
        return 1

    try:
        # Set up Jinja2 environment
        env = Environment(
            loader=FileSystemLoader(script_dir),
            autoescape=True
        )
        
        # Load template
        try:
            template = env.get_template("template_pdf.html")
        except TemplateNotFound:
            print(f"Error: Template file 'template_pdf.html' not found in {script_dir}")
            return 1
        except TemplateSyntaxError as e:
            print(f"Template syntax error: {str(e)}")
            return 1
        
        print("Rendering HTML content...")
        
        # Prepare template context with defaults
        skills_dict = resume_data.get('skills', {})
        skills_list = [
            {
                'title': category.get('title', 'Untitled'),
                '_items': ', '.join(category.get('items', []))
            }
            for category in skills_dict.values()
        ]
        
        # Truncate achievements to save space
        experience_data = resume_data.get('experience', [])
        for i, job in enumerate(experience_data):
            if 'achievements' in job:
                if i == 0:  # Most recent job
                    job['achievements'] = job['achievements'][:3]
                else:
                    job['achievements'] = job['achievements'][:2]

        context = {
            'personalInfo': resume_data.get('personalInfo', {}),
            'experience': experience_data,
            'education': resume_data.get('education', []),
            'skills_list': skills_list,
            'projects': resume_data.get('projects', []),
            'publications': resume_data.get('publications', [])
        }
        
        # Render HTML
        try:
            html_out = template.render(**context)
        except Exception as e:
            print(f"Error rendering template: {str(e)}")
            return 1
        
        # Define output path
        output_filename = "Linden_Hutchinson_Resume.pdf"
        output_path = os.path.join(script_dir, output_filename)
        
        print(f"Generating PDF at: {output_path}")
        
        # Generate PDF
        if generate_pdf(html_out, output_path):
            print(f"✓ PDF generated successfully: {output_path}")
            print(f"File size: {os.path.getsize(output_path) / 1024:.1f} KB")
            return 0
        else:
            print("✗ Failed to generate PDF")
            return 1
            
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == "__main__":
    sys.exit(main())

