# Resume Website

This is a data-driven resume website built with React, Vite, and TailwindCSS. It dynamically renders resume data from a structured JSON file, allowing easy customization and updates.

## Features
- **React + Vite** for a fast development experience
- **TailwindCSS** for styling
- **JSON-driven** resume data for easy modifications
- **Responsive design** for mobile and desktop viewing
- **PDF Resume Generation** from the same data source.

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/resume-website.git
cd resume-website
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Add Your Resume Data
Modify the file named `resumeData.json` inside the `src/data/` directory and populate it with your resume data in the following format:

#### Example `resumeData.json` File:
```json
{
    "personalInfo": {
        "name": "",
        "title": "",
        "description": "",
        "image": "",
        "coverImage": "",
        "contact": {
        "email": "",
        "github": "",
        "linkedin": "",
        "location": ""
        }
    },
    "experience": [
        {
            "company": "",
            "logo": "",
            "position": "",
            "location": "",
            "duration": "",
            "type": "",
            "description": "",
            "achievements": []
        }
    ],
    "education": [
        {
            "institution": "",
            "logo": "",
            "degree": "",
            "location": "",
            "duration": "",
            "grade": ""
        }
    ],
    "skills": {
        "languages": { "title": "Programming Languages", "items": [] },
        "frameworks": { "title": "Frameworks & Libraries", "items": [] },
        "tools": { "title": "Tools & Infrastructure", "items": [] },
        "practices": { "title": "Practices & Methodologies", "items": [] }
    },
    "projects": [
        {
            "title": "",
            "description": "",
            "link": "",
            "icon": "",
            "date": "",
            "technologies": []
        }
    ],
    "publications": [
        {
            "title": "",
            "type": "",
            "image": "",
            "link": ""
        }
    ]
}
```

### 4. Run the Development Server
```sh
npm run dev
```
This will start the Vite development server. Open your browser and navigate to `http://localhost:5173/` to view the website.

### 5. Build for Production
```sh
npm run build
```
This will generate optimized static files in the `dist` directory.

## PDF Resume Generation

The `pdf` directory is a [uv](https://docs.astral.sh/uv/) project that renders `resumeData.json` to PDF with WeasyPrint.

WeasyPrint needs the Pango system library. On Linux/WSL install `libpango-1.0-0` and `libpangoft2-1.0-0`; on Windows, run it from WSL.

```sh
cd pdf
uv run generate.py
```

`uv run` creates the environment from `uv.lock` on first use. The PDF is written to `public/Linden_Hutchinson_Resume.pdf`, where the site serves it as a download.

## Customization
- Modify `src/data/resumeData.json` to add your own information.
- Customize React components in `src/components/` to change the layout.
- Modify `pdf/template_pdf.html` to change the PDF layout.

## License
This project is open-source and can be modified freely.

---

For any issues or contributions, feel free to open a pull request or submit an issue on GitHub.

