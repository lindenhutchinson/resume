import { ProfileSection } from '../sections/ProfileSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { EducationSection } from '../sections/EducationSection'
import { SkillsSection } from '../sections/SkillsSection'
import { ThemeToggle } from '../ui/ThemeToggle'
import { ProjectsSection } from '../sections/ProjectsSection'
import { PublicationsSection } from '../sections/PublicationsSection'
import resumeData from "../../data/resumeData.json"

export const MainLayout = () => {
  const { personalInfo, experience, education, skills, projects, publications } = resumeData

  // Check if the education array has any data
  const hasEducation = education && education.length > 0

  // Check if the experience array has any data
  const hasExperience = experience && experience.length > 0

  // Check if the projects array has any data
  const hasProjects = projects && projects.length > 0

  // Check if the publications array has any data
  const hasPublications = publications && publications.length > 0

  // Check if any of the skills sections contain data
  const hasSkills = skills && Object.values(skills).some(
    skillCategory => Array.isArray(skillCategory.items) && skillCategory.items.length > 0
  )

  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Below lg the columns use display: contents, so every section joins one
            flex column and `order` puts experience straight after the profile. */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-3">
          {/* Left Column - Profile and Additional Info */}
          <div className="contents lg:block lg:space-y-8">
            {personalInfo && <div className="order-1"><ProfileSection data={personalInfo} /></div>}
            {hasEducation && <div className="order-5"><EducationSection data={education} /></div>}
            {hasSkills && <div className="order-4"><SkillsSection data={skills} /></div>}
          </div>

          {/* Right Column - Main Content */}
          <div className="contents lg:block lg:col-span-2 lg:space-y-8">
            {hasExperience && <div className="order-2"><ExperienceSection data={experience} /></div>}
            {hasProjects && <div className="order-3"><ProjectsSection data={projects} /></div>}
            {hasPublications && <div className="order-6"><PublicationsSection data={publications} /></div>}
          </div>
        </div>
      </div>
    </main>
  )
}
