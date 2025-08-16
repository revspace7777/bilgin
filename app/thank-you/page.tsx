export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-6">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl border border-slate-700">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Thank You!</h1>
            <p className="text-gray-300 text-lg">
              Your moving quote request has been submitted successfully.
            </p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">What happens next?</h2>
            <ul className="text-gray-300 space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                We'll review your request within 24 hours
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                A moving specialist will contact you with a detailed quote
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                You'll receive all the information you need to make your decision
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <a
              href="/"
              className="inline-block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return to Homepage
            </a>
            <p className="text-gray-400 text-sm">
              If you have any questions, feel free to contact us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



