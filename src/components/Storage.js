import React from "react";

export default function Storage() {
  return (
    <div className="relative flex w-full flex-col items-center gap-4 rounded-[10px] bg-[#1E2D69] px-8 pt-8 pb-[3.25rem] shadow-[0px_75px_100px_-30px_rgba(0,0,0,0.2478)] xl:mt-[2.938rem] xl:h-[9.625rem] xl:w-[33.75rem] xl:items-start xl:p-10">
      <p className="text-[0.875rem] font-normal leading-4 tracking-normal text-[#DBD9FF]">
        You’ve used <span className="font-bold">815 GB</span> of your storage
      </p>
      <div className=" flex w-full flex-col gap-[0.625rem] xl:gap-2">
        <div className="h-[1.25rem] w-full rounded-[10px] bg-[#0C122C]/[49.79] py-[0.188rem] pl-[0.188rem]">
          <div className="relative h-[0.875rem] w-[12.063rem]  rounded-[10px] bg-gradient-to-r from-[#FFA197] to-[#FF4A95] xl:w-[21.188rem]">
            <div className="absolute right-[0.125rem] top-[0.125rem] h-[0.625rem] w-[0.625rem] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold leading-[0.875rem] tracking-normal text-[#DBD9FF]">
            0 GB
          </p>
          <p className="text-xs font-bold leading-[0.875rem] tracking-normal text-[#DBD9FF]">
            1000 GB
          </p>
        </div>
      </div>
      <div
        id="storage-left"
        className="absolute top-[7.75rem] left-[4.625rem] h-[4.5rem] w-[11.188rem] rounded-[10px] bg-white px-6 py-4 xl:top-[-2.938rem] xl:left-[20.063rem] xl:rounded-br-none"
      >
        <p className="flex items-center gap-[0.563rem] text-xs font-bold uppercase leading-[0.875rem] tracking-[1px] text-[#0C122C]/50">
          <span className="text-[2.5rem] font-bold leading-[2.5rem] tracking-normal text-[#0C122C]">
            185
          </span>{" "}
          GB left
        </p>
      </div>
    </div>
  );
}
