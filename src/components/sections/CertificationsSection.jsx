import PropTypes from 'prop-types'

export const CertificationsSection = ({ data }) => {
  return (
    <div className="card bg-white dark:bg-gray-800 p-4 pt-2 rounded-lg">
      <h2 className="flex text-lg font-semibold text-gray-800 dark:text-white items-center before:inline-block before:h-1.5 before:w-1.5 before:bg-blue-500 before:rounded-full before:mr-2 before:self-center mb-4">
        Certifications
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            title={cert.name}
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full rounded-lg transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-lg" />
          </a>
        ))}
      </div>
    </div>
  )
}

CertificationsSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
} 