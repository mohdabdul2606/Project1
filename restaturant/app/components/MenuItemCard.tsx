export default function MenuItemCard({ title, price, desc }: { title: string; price: string | number; desc?: string; }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-3">
      <div className="flex justify-between gap-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {desc && <p className="text-gray-500 text-sm mt-1">{desc}</p>}
        </div>
        <div className="text-right">
          <p className="font-semibold">₹ {price}</p>
          <button className="mt-2 text-orange-600 border px-3 py-1 rounded">+ Add</button>
        </div>
      </div>
    </div>
  );
}
