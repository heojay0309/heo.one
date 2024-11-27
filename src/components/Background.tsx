const PuzzleBackground = () => {
  return (
    <div className="fixed top-[20%] scale-50 opacity-5 shadow-sm tablet:left-[75%] tablet:top-[0%] tablet:scale-50">
      <div className="flex flex-col">
        {/* 1st */}
        <div className="flex gap-[1px]">
          <div className="puzzle relative z-10">
            <div className="innerCircle left-[90px] top-[40px] rotate-[-90deg]"></div>
            <div className="outCircle left-[41px] top-[110px] rotate-[135deg]"></div>
          </div>
          <div className="puzzle relative z-30">
            <div className="outCircle left-[111px] top-[41px] rotate-[45deg]"></div>
            <div className="outCircle left-[41px] top-[110px] rotate-[135deg]"></div>
            <div className="outCircle left-[-30px] top-[41px] rotate-[225deg]"></div>
          </div>
          <div className="puzzle relative z-20">
            <div className="innerCircle left-[-11px] top-[40px] rotate-[90deg]"></div>
            <div className="outCircle left-[111px] top-[41px] rotate-[45deg]"></div>
            <div className="outCircle left-[41px] top-[110px] rotate-[135deg]"></div>
          </div>
          <div className="puzzle relative overflow-hidden">
            <div className="innerCircle left-[-11px] top-[40px] rotate-[90deg]"></div>
            <div className="innerCircle left-[40px] top-[90px]"></div>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex gap-[1px]">
          <div className="puzzle relative">
            <div className="innerCircle left-[40px] top-[-11px] rotate-[-180deg]"></div>
            <div className="innerCircle left-[90px] top-[40px] rotate-[-90deg]"></div>
            <div className="outCircle left-[41px] top-[110px] rotate-[135deg]"></div>
          </div>
          <div className="puzzle relative rotate-90">
            <div className="innerCircle left-[-10px] top-[39px] rotate-[90deg]"></div>
            <div className="innerCircle left-[40px] top-[-10px] rotate-[180deg]"></div>
            <div className="outCircle left-[112px] top-[40px] rotate-[45deg]"></div>
            <div className="outCircle left-[42px] top-[110px] rotate-[135deg]"></div>
          </div>
          <div className="puzzle relative z-10">
            <div className="innerCircle left-[40px] top-[-11px] rotate-[180deg]"></div>
            <div className="innerCircle left-[90px] top-[40px] rotate-[-90deg]"></div>
            <div className="outCircle left-[-31px] top-[40px] rotate-[220deg]"></div>
            <div className="outCircle left-[41px] top-[112px] rotate-[135deg]"></div>
          </div>
          <div className="puzzle relative z-10">
            <div className="outCircle left-[41px] top-[-29px] z-auto rotate-[-45deg]"></div>
            <div className="outCircle left-[-30px] top-[41px] z-auto rotate-[-135deg]"></div>
            <div className="outCircle left-[40px] top-[110px] rotate-[135deg]"></div>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex gap-[1px]">
          <div className="puzzle relative z-[-10]">
            <div className="innerCircle left-[40px] top-[-10px] rotate-[-180deg]"></div>
            <div className="outCircle left-[111px] top-[40px] rotate-[45deg]"></div>
            <div className="innerCircle left-[40px] top-[90px]"></div>
          </div>
          <div className="puzzle relative z-[-20]">
            <div className="innerCircle left-[-11px] top-[39px] rotate-[90deg]"></div>
            <div className="innerCircle left-[40px] top-[90px]"></div>
            <div className="innerCircle left-[40px] top-[-10px] rotate-[180deg]"></div>
            <div className="outCircle left-[111px] top-[40px] rotate-[45deg]"></div>
          </div>
          <div className="relative z-30 h-[120px] w-[120px] bg-transparent"></div>
          <div className="puzzle relative z-[-30]">
            <div className="innerCircle left-[40px] top-[90px]"></div>
            <div className="innerCircle left-[-30px] top-[40px] rotate-[-90deg]"></div>
            <div className="innerCircle left-[39px] top-[-11px] rotate-[180deg]"></div>
          </div>
        </div>
        {/* 4th */}
        <div className="flex gap-[1px]">
          <div className="puzzle relative">
            <div className="outCircle left-[41px] top-[-29px] rotate-[-45deg]"></div>
            <div className="innerCircle left-[90px] top-[39px] rotate-[-90deg]"></div>
          </div>
          <div className="puzzle relative">
            <div className="outCircle left-[41px] top-[-29px] rotate-[-45deg]"></div>
            <div className="outCircle left-[-30px] top-[40px] rotate-[225deg]"></div>
            <div className="innerCircle left-[90px] top-[40px] rotate-[-90deg]"></div>
          </div>
          <div className="puzzle relative z-10">
            <div className="outCircle left-[41px] top-[-30px] rotate-[-45deg]"></div>
            <div className="outCircle left-[-30px] top-[41px] rotate-[225deg]"></div>
            <div className="outCircle left-[112px] top-[41px] rotate-[45deg]"></div>
          </div>
          <div className="puzzle relative">
            <div className="outCircle left-[41px] top-[-29px] rotate-[-45deg]"></div>
            <div className="innerCircle left-[-10px] top-[40px] rotate-[90deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleBackground;
