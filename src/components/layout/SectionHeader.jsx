export const SectionHeader = ({ title }) => (
    <h2 className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white">
      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
      {title}
    </h2>
  );