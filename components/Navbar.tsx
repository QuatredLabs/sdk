export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <h1 className="text-xl font-bold">Quatred</h1>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Features</a>
        <a href="https://quatred.markets/" target="_blank">Website</a>
      </div>
    </nav>
  );
}
