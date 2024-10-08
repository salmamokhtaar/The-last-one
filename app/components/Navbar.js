import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Portifolio</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About Me</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
