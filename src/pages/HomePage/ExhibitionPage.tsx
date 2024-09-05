import { CardDescription, CardTitle } from "@/components/ui/card";
import { loremIpsum } from "lorem-ipsum";
import thirdUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-3.jpeg";
import fourthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-4.jpeg";
import fifthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-5.jpeg";
import sixthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-29-43.jpeg";

function ExhibitionPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto ">
      <div className="flex flex-col gap-3 mb-8">
        <img
          className="w-[720px] h-[400px] object-cover mx-auto"
          src={thirdUrl}
          alt="처음 이미지"
        />
        <div className="w-[720px] flex flex-col items-start mx-auto">
          <CardTitle>{loremIpsum().slice(0, 10)}</CardTitle>
          <CardDescription>{loremIpsum()}</CardDescription>
        </div>
        <div className="border-b-[8px] border-solid border-neutral-100" />
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <img
          className="w-[720px] h-[400px] object-cover mx-auto"
          src={fourthUrl}
          alt="두번째 이미지"
        />
        <div className="w-[720px] flex flex-col items-start mx-auto">
          <CardTitle>{loremIpsum().slice(0, 10)}</CardTitle>
          <CardDescription>{loremIpsum()}</CardDescription>
        </div>
        <div className="border-b-[8px] border-solid border-neutral-100" />
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <img
          className="w-[720px] h-[400px] object-cover mx-auto"
          src={fifthUrl}
          alt="세번째 이미지"
        />
        <div className="w-[720px] flex flex-col items-start mx-auto">
          <CardTitle>{loremIpsum().slice(0, 10)}</CardTitle>
          <CardDescription>{loremIpsum()}</CardDescription>
        </div>
        <div className="border-b-[8px] border-solid border-neutral-100" />
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <img
          className="w-[720px] h-[400px] object-cover mx-auto"
          src={sixthUrl}
          alt="네번째 이미지"
        />
        <div className="w-[720px] flex flex-col items-start mx-auto">
          <CardTitle>{loremIpsum().slice(0, 10)}</CardTitle>
          <CardDescription>{loremIpsum()}</CardDescription>
        </div>
      </div>
    </div>
  );
}

export default ExhibitionPage;
