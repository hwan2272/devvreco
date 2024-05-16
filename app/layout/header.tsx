import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">hwan2272 Devvreco</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#aboutme" className="mr-5 hover:text-gray-900">
            About Me
          </Link>
          <Link href="#skills" className="mr-5 hover:text-gray-900">
            Skills
          </Link>
          <Link href="#projects" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link href="#contacts" className="mr-5 hover:text-gray-900">
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
