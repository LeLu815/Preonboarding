import { useNickname, useProfileUrl } from "@/store/auth.store";
import { PropsWithChildren } from "react";
import defaultProfile from "../../../public/defaultProfile.svg";

function Nav({ children }: PropsWithChildren) {
  const nickname = useNickname();
  const profileUrl = useProfileUrl();
  return (
    <div className="h-[50px] flex justify-between p-3">
      <div>쇼핑하기</div>
      <div>
        {profileUrl ? (
          <img src={profileUrl} alt="유저 프로필 이미지" />
        ) : (
          <img src={defaultProfile} alt="기본 이미지" />
        )}
        <p>{nickname}</p>
      </div>
      {children}
    </div>
  );
}

export default Nav;
