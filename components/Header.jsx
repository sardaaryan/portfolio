// components/Header.jsx
import Socials from "../components/Socials";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-8">
          {/* Socials - Left Aligned */}
          <Socials />

          {/* Nav - Right Aligned on Desktop */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
