import { IconDownload } from '@tabler/icons-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello world</h1>
        <p className="text-gray-600">Tailwind CSS is configured and working!</p>
        <div className="mt-4 flex items-center gap-2 text-blue-600">
          <IconDownload size={20} />
          <span>Tabler Icons working!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
