const PuzzleBackground = () => {
  return (
    <div className="absolute left-[8%] top-[20%] opacity-5 tablet:scale-125">
      <div className="flex">
        <div className="z-10 flex flex-col">
          <div className="puzzle relative overflow-x-clip">
            <div className="circle bg-[#2d3748]"></div>
            <div className="circle bg-[#2d3748]"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="puzzle relative rotate-90 overflow-x-clip">
            <div className="circle bg-[#2d3748]"></div>
            <div className="circle bg-[#2d3748]"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="puzzle relative z-20 rotate-90 overflow-x-clip">
            <div className="circle bg-[#2d3748]"></div>
            <div className="circle bg-white"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="puzzle relative rotate-180 overflow-x-clip">
            <div className="circle bg-[#2d3748]"></div>
            <div className="circle bg-[#2d3748]"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleBackground;
