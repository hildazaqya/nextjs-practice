function Navbar() {
    return (
        <nav className="bg-gray-800 w-full">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">My App</a>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;