
function ErrorMsg({ error, setShowError }) {
  return (
    <div
      className="fixed bottom-[10%] w-[90%] md:w-[25rem]  left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white p-4 rounded-lg shadow-md shadow-rose-400/50 flex items-center justify-between gap-3 border border-red-700"
    >
      <div className="flex items-center gap-3">
        {/* آیکون هشدار */}
        <div className="text-yellow-300 bg-yellow-700 shadow-md shadow-orange-500/40 rounded-full h-8 w-8 flex items-center justify-center">
          ⚠️
        </div>
        {/* متن ارور */}
        <span className="font-semibold">{error}</span>
      </div>
      {/* دکمه بستن */}
      <button
        onClick={() => setShowError(false)}
        className="bg-white text-red-600 rounded-full px-3 py-2 text-sm font-bold hover:bg-gray-200 hover:scale-90 transition duration-500 shadow-lg shadow-red-900"
      >
        ✕
      </button>
    </div>
  );
}

export default ErrorMsg;
