import logo from "../logo.svg";

export const Intro = () => {
  return (
    <div className="p-2 max-w-md m-6 mx-auto bg-blue-50 rounded-xl shadow-lg flex items-center space-x-4">
      <img className="h-24 w-24" src={logo} alt="ChitChat Logo" />
      <div className="w-full">
        <p className="text-lg font-bold">Christopher Nielsen</p>
        <p className="text-slate-500">Computer Science</p>
        <div className="flex justify-center py-2">
          <button
            className="px-4 py-1 
          text-cyan-400 
          border 
          rounded-full 
          border-cyan-400 
          font-semibold 
          hover:text-white 
          hover:bg-cyan-400
          focus:ring-2"
          >
            message
          </button>
        </div>
      </div>
    </div>
  );
};
