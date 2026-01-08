export const FormField = ({ label, children }) => (
  <div className="flex flex-col mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {children}
  </div>
);