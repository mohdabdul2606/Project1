export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] flex flex-col justify-between">

  {/* HEADER */}
  <div className="bg-white p-4 shadow-md flex flex-col">

    {/* ROW 1 (logo left + right buttons) */}
    <div className="flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <img src="logo.avif" className="w-10 h-10 rounded-md" />
        <h1 className="text-black text-xl text-font-sans font-bold">Capella Bakery</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        <div className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">7</div>
        <button className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">Group Order</button>
      </div>

    </div>

    {/* ROW 2 (tabs) */}
    <div className="flex items-center mt-3 border-b">

      <button className="flex-1 text-orange-600 border-b-2 border-#F97316-600 py-2 text-md font-bold ">
        Orders
        <span className="text-orange bg-#F97316-100 ml-2 rounded-full px-1 py-1">0</span>
      </button>
      

      <button className="flex-1 text-gray-500 py-2 text-md font-bold ">
        Item List
        <span className="text-orange bg-#F97316-100 ml-2 rounded-full px-1 py-1">0</span>
      </button>

    </div>

  </div>

</main>

  );
}