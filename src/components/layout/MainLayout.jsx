import { ProfileSection } from '../sections/ProfileSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { EducationSection } from '../sections/EducationSection'
import { SkillsSection } from '../sections/SkillsSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { ThemeToggle } from '../ui/ThemeToggle'
import { resumeData } from '../../data/resumeData'

export const MainLayout = () => {
  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="gap-8 sm:grid lg:grid-cols-3">
          {/* Left Column - Profile and Additional Info */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-0">
            <ProfileSection data={resumeData.personalInfo} />
            <EducationSection data={resumeData.education} />
            <SkillsSection data={resumeData.skills} />
          </div>
          
          {/* Right Column - Main Content */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-2">
            <ExperienceSection data={resumeData.experience} />
            <ProjectsSection data={resumeData.projects} />
          </div>
        </div>
      </div>
    </main>
  )
}