import PropTypes from 'prop-types'

export const PublicationsSection = ({ data }) => {
  return (
    <div className="card bg-white dark:bg-gray-800 p-4 pt-2 rounded-lg">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-4">
        Publications
      </h2>

      <div className="space-y-4">
        {data.map((pub, index) => (
          <div key={index} className="flex items-center">
            <img 
              src={pub.image} 
              alt={pub.title}
              className="w-8 h-8 object-contain mr-4"
            />
            <div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                {pub.title}
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {pub.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

PublicationsSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
} 