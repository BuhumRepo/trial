export default function Home() {
  return (
    <div className="p-12 font-sans max-w-2xl mx-auto mt-20 border rounded-xl shadow-sm bg-white">
      <h1 className="text-2xl font-bold mb-6">Environment Variable Test</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-600 mb-2"><strong>Variable Name:</strong> NEXT_PUBLIC_TEST_MSG</p>
        <p className="text-gray-600 mb-4"><strong>Value:</strong></p>
        
        {process.env.NEXT_PUBLIC_TEST_MSG ? (
          <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md font-mono text-lg font-medium break-all mt-2">
            ✅ {process.env.NEXT_PUBLIC_TEST_MSG}
          </div>
        ) : (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md font-mono mt-2">
            ❌ Not found (Variable is empty or undefined)
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-6">
        When deployed on ArylLabs, if the environment variable is injected correctly, you will see its value instead of "Not found".
      </p>
    </div>
  );
}
