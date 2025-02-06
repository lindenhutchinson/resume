import PropTypes from 'prop-types'

export const ExperienceSection = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 animate-fade-in">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-3 ml-2">
        Experience
      </h2>
      
      <div className="space-y-4 stagger-animation">
        {data.map((experience, index) => (
          <div 
            key={index}
            className="mb-3 md:flex md:items-start p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors animate-slide-in"
          >
            <div className="md:flex md:items-start">
              {experience.logo && (
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  className="mb-2 md:mb-0 w-12 h-12 object-contain"
                />
              )}
              
              <div className="md:ml-4 flex-grow">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {experience.position}
                  </h3>
                  <span className="inline-flex items-center bg-white dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-lg">
                    {experience.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    {experience.company}
                  </div>

                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {experience.location}
                  </div>

                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {experience.duration}
                  </div>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="mb-2">{experience.description}</p>
                  {experience.achievements && (
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ExperienceSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      logo: PropTypes.string,
      position: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
} 