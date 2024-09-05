import { Input } from "@/components/ui/input";
import { useState } from "react";

const navs: string[] = [
  "홈",
  "베스트",
  "베이비민동이",
  "카테고리",
  "기획전",
  "공지사항",
];
function HomeNav() {
  const [selectedNav, setSelectedNav] = useState<string>(navs[0]);
  return (
    <div className="w-full flex flex-col items-center border-b-[1px] border-solid border-neutral-200 mb-[30px]">
      <div className="font-[700] font-mono text-[24px] py-[20px]">
        LEEINS FRIENDS
      </div>
      <div className="flex justify-between mt-[40px] w-full max-w-[1280px] items-end">
        <ul className="flex gap-10">
          {navs.map((nav) => (
            <li
              onClick={() => {
                setSelectedNav(nav);
              }}
              key={nav}
              className={`${selectedNav === nav ? "font-[700]" : ""}`}
            >
              <div className="flex flex-col gap-3 cursor-pointer">
                <p>{nav}</p>
                <span
                  className={`${
                    selectedNav === nav
                      ? "border-b-2 border-solid border-neutral-800"
                      : ""
                  }`}
                ></span>
              </div>
            </li>
          ))}
        </ul>
        <div className="pb-[5px] relative">
          <Input className="w-[250px] h-[34px]" />
          <svg
            className="absolute w-[20px] h-[20px] right-4 cursor-pointer top-[7px] fill-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
