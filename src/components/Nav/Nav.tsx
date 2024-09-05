import { useNickname, useProfileUrl } from "@/store/auth.store";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import defaultProfile from "../../../public/defaultProfile.svg";

function Nav({ children }: PropsWithChildren) {
  const nickname = useNickname();
  const profileUrl = useProfileUrl();
  return (
    <>
      <nav className="z-10 fixed top-0 left-0 right-0 h-[] bg-white py-2 border-b-[1px] border-solid border-neutral-200">
        <div className=" w-full mx-auto max-w-[1280px] h-[50px] flex justify-between items-center">
          <Link to="/" className="font-[700] font-mono text-[22px]">
            쇼핑하기
          </Link>
          <Link to="/my" className="flex justify-between items-center gap-3">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border border-solid border-neutral-300">
              {profileUrl ? (
                <img src={profileUrl} alt="유저 프로필 이미지" />
              ) : (
                <img src={defaultProfile} alt="기본 이미지" />
              )}
            </div>
            <p>{nickname}</p>
          </Link>
          {children}
        </div>
      </nav>
      <div className="py-[35px]" />
    </>
  );
}

export default Nav;
