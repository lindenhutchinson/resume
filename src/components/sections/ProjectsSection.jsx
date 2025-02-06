import PropTypes from 'prop-types'

export const ProjectsSection = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 animate-fade-in">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-6">
        Projects
      </h2>

      <div className="space-y-8 stagger-animation">
        {data.map((project, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-600 animate-slide-in"
          >
            <div className="flex items-start gap-4">
              {project.icon && (
                <img 
                  src={project.icon} 
                  alt={`${project.title} icon`}
                  className="w-12 h-12 object-contain mt-1 rounded-lg"
                />
              )}
              <div className="flex-grow space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </a>
                    {project.date && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {project.date}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ProjectsSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string,
      date: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
} 