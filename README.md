# Resume Website

This is a data-driven resume website built with React, Vite, and TailwindCSS. It dynamically renders resume data from a structured JSON file, allowing easy customization and updates.

## Features
- **React + Vite** for a fast development experience
- **TailwindCSS** for styling
- **JSON-driven** resume data for easy modifications
- **Responsive design** for mobile and desktop viewing

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
Create a file named `resume.js` inside the `src/data/` directory and populate it with your resume data in the following format:

#### Example `resume.js` File:
```js
export const resumeData = {
    personalInfo: {
        name: "",
        title: "",
        description: "",
        image: "",
        coverImage: "",
        contact: {
        email: "",
        github: "",
        linkedin: "",
        location: ""
        }
    },
    experience: [
        {
            company: "",
            logo: "",
            position: "",
            location: "",
            duration: "",
            type: "",
            description: "",
            achievements: []
        }
    ],
    education: [
        {
            institution: "",
            logo: "",
            degree: "",
            location: "",
            duration: "",
            grade: ""
        }
    ],
    skills: {
        languages: { title: "Programming Languages", items: [] },
        frameworks: { title: "Frameworks & Libraries", items: [] },
        tools: { title: "Tools & Infrastructure", items: [] },
        practices: { title: "Practices & Methodologies", items: [] }
    },
    projects: [
        {
            title: "",
            description: "",
            link: "",
            icon: "",
            date: "",
            technologies: []
        }
    ],
    publications: [
        {
            title: "",
            type: "",
            image: "",
            link: ""
        }
    ]
};
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


## Customization
- Modify `resume.js` to add your own information.
- Customize React components in `src/components/` to change the layout.

## License
This project is open-source and can be modified freely.

---

For any issues or contributions, feel free to open a pull request or submit an issue on GitHub.

