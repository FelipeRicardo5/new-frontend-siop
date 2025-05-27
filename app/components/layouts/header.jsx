import Logo from '/public/LogoWhite.png'

export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full h-12 bg-[#0A4A81] text-white flex items-center px-6 shadow-md z-50">
        <h1 className="text-lg font-semibold">SIOP</h1>
        <img src={Logo}
            width={50}
            />
      </header>
    );
  }
