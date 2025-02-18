import { ProfileSection } from '../sections/ProfileSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { EducationSection } from '../sections/EducationSection'
import { SkillsSection } from '../sections/SkillsSection'
import { ThemeToggle } from '../ui/ThemeToggle'
import { resumeData } from '../../data/resumeData'
import { ProjectsSection } from '../sections/ProjectsSection'
import { PublicationsSection } from '../sections/PublicationsSection'

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
        <div className="gap-8 sm:grid lg:grid-cols-3">
          {/* Left Column - Profile and Additional Info */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-0">
            {personalInfo && <ProfileSection data={personalInfo} />}
            {hasEducation && <EducationSection data={education} />}
            {hasSkills && <SkillsSection data={skills} />}
          </div>
          
          {/* Right Column - Main Content */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-2">
            {hasExperience && <ExperienceSection data={experience} />}
            {hasProjects && <ProjectsSection data={projects} />}
            {hasPublications && <PublicationsSection data={publications} />}
          </div>
        </div>
      </div>
    </main>
  )
}
