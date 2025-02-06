import PropTypes from 'prop-types'

export const SkillsSection = ({ data }) => {
  const SkillCategory = ({ title, items }) => (
    <div className="mb-4 animate-slide-in">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-xs font-medium bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )

  SkillCategory.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 animate-fade-in">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-6">
        Skills &amp; Expertise
      </h2>

      <div className="space-y-6 stagger-animation">
        {Object.values(data).map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  )
}

SkillsSection.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
} 