import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex items-center gap-4">
        <span className="w-10 aspect-square bg-[#20c4ae] rounded-md" />
        <strong className="text-black/80">Renal care</strong>
      </div>
      <p className="leading-8 text-black/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est
        libero sapiente molestias sint odit amet quod sed sunt assumenda!
      </p>
      <button className="py-2 max-w-max px-12 bg-white border text-[#20c4ae] hover:text-white rounded-md hover:bg-[#20c4ae] transition-all duration-300">
        View more
      </button>
    </div>
  );
};

export default Card;
