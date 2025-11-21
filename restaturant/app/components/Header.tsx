export default function Header({ title }: { title: string }) {
  return (
    <div className="px-4 py-3 bg-white shadow-sm sticky top-0 z-20">
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
}
