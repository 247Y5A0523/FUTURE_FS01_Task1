function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-2xl font-bold text-yellow-400">Nagendhar Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
