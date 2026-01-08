export const ImageSection = ({ currentImage, onFileChange }) => (
  <div className="space-y-4 mb-6">
    {currentImage && (
      <div className="relative h-48 w-full bg-gray-50 rounded-lg border overflow-hidden">
        <img src={`/${currentImage.replace("public/", "")}`} className="w-full h-full object-contain" />
      </div>
    )}
    <input 
      type="file" 
      onChange={onFileChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  </div>
);