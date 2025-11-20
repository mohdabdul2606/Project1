"use client";


export default function Home() {

  const handleClick = () => {
    alert("Order button clicked!");
   };

  return (
<main
  className="
    flex flex-col items-center justify-center min-h-screen
    bg-cover bg-center bg-no-repeat bg-white
    md:bg-auto md:bg-top
  "
  style={{ backgroundImage: "url('/background.jpg')" }}
>

    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 w-80 max-w-sm text-center ">
      <img src="logo.avif" alt="logo image" className="w-20 h-20 mx-auto mb-4 rounded-md" />
      <h1 className="text-xl font-bold text-black mb-4">Capella Bakery</h1>
      <button
        onClick={handleClick}
        className="bg-orange-600 text-white px-6 py-2 mx-auto rounded-full flex items-center gap-2 hover:bg-gray-400 transition"
      >
        Order Now  →   </button>
    </div>
    </main>
  );
}
