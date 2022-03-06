export const FlexBox = () => {
  return (
    <div className="flex flex-row h-screen ">
      <div className="h-40 m-1 border-2 border-black w-80 bg-stone-400 shrink-0"></div>
      <div className="h-32 m-1 border-2 border-black w-80 bg-stone-400"></div>
      <div className="h-40 p-4 m-1 overflow-auto border-2 border-black w-80 bg-stone-400 grow">
        <div className="h-[500px] bg-red-400"></div>
      </div>
    </div>
  );
};
