import { HiOutlineArrowLeft } from "react-icons/hi";

type SideBarProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const SideBar = ({ onClose, isOpen }: SideBarProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen p-2 bg-red-50 sm:relative sm:h-full sm:w-72">
      <span className="flex justify-end w-full sm:hidden">
        <button onClick={onClose} className=" bg-blue-50">
          <HiOutlineArrowLeft className="w-8 h-8" />
        </button>
      </span>
      <h3>Merlin</h3>
      <p>Some data</p>
      <h1 className="absolute bottom-0">Bottom</h1>
    </div>
  );
};
