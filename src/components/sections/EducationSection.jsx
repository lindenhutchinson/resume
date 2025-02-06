import PropTypes from 'prop-types'

export const EducationSection = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 animate-fade-in">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-4">
        Education
      </h2>

      <div className="space-y-4 stagger-animation">
        {data.map((education, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors animate-slide-in"
          >
            {education.logo && (
              <img 
                src={education.logo} 
                alt={`${education.institution} logo`}
                className="w-8 h-8 object-contain mt-1"
              />
            )}

            <div className="min-w-0">
              <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                {education.institution}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                {education.degree}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{education.duration}</span>
                <span>•</span>
                <span>{education.location}</span>
                {education.grade && (
                  <>
                    <span>•</span>
                    <span>{education.grade}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

EducationSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string.isRequired,
      logo: PropTypes.string,
      degree: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      grade: PropTypes.string
    })
  ).isRequired
} 