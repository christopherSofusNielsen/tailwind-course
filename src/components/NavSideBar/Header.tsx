import { HiMenu, HiUserCircle } from "react-icons/hi";

type HeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const Header = ({ onToggle }: HeaderProps) => {
  return (
    <nav className="flex items-center justify-between w-screen p-2 h-14 md:h-16 bg-slate-50 grow-0">
      <div className="basis-1/3">
        <button className="p-1 cursor-pointer" onClick={onToggle}>
          <HiMenu className="w-8 h-8 ml-2 fill-cyan-700" />
        </button>
      </div>
      <div className="text-center basis-1/3">
        <a href="/" className="text-2xl font-semibold text-cyan-700">
          MERLIN
        </a>
      </div>
      <div className="flex items-center justify-end h-full basis-1/3">
        <Link title="Projects" />
        <Link title="Workspace" />
        <LoginLink />
      </div>
    </nav>
  );
};

const LoginLink = () => {
  return (
    <a href="/" className="h-full md:text-lg ">
      <span className="flex items-center h-full p-1 font-semibold rounded text-cyan-700 hover:bg-slate-300 ">
        Login
        <HiUserCircle className="w-8 h-8 ml-2 fill-cyan-700" />
      </span>
    </a>
  );
};

const Link = ({ title }: { title: string }) => {
  return (
    <a
      href="/"
      className="items-center hidden h-full p-1 mx-2 font-semibold rounded md:text-lg text-cyan-700 hover:bg-slate-300 md:flex"
    >
      {title}
    </a>
  );
};
