"use client";


export default function Home() {

  const handleClick = () => {
    alert("Order button clicked!");
   };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white/90 backdrop-blur-md border border-white-300 rounded-xl shadow-lg p-6">
      <img src="logo.avif" alt=" logo " className=" ml-28 w-30 h-30" />
      <h1 className="text-lg font-semibold text-black-900 tracking-wide">
  Capella Bakery
</h1>


      {/* <p className="text-gray-600 mt-6 ml-28">Delicious food, fresh taste!</p> */}
      <button 
      onClick={handleClick}
       className="mt-4 ml-38 bg-orange-600 text-white px-4 py-3 rounded-full">Order Now</button>
       </div>
    </main>
  );
}
