import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { loremIpsum } from "lorem-ipsum";
import firstUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-1.jpeg";
import secondUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-2.jpeg";
import thirdUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-3.jpeg";
import fourthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-4.jpeg";
import fifthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-10-28-5.jpeg";
import sixthUrl from "../../../public/picture/KakaoTalk_Photo_2024-09-05-20-29-43.jpeg";

function Baby() {
  return (
    <div className="w-full max-w-[800px] flex flex-col mx-auto">
      <img src={secondUrl} alt="배이비 민동이 2" />
      <img src={thirdUrl} alt="배이비 민동이 3" />
      <Card className="flex gap-2 py-6 px-6 items-center">
        <img
          className="w-[156px] h-[156px] object-cover rounded-md"
          src={firstUrl}
          alt="배이비 민동이 1"
        />
        <div className="flex flex-col gap-6">
          <CardTitle className="text-[18px] text-neutral-700">
            애착쿠션 인형_베이비민동이
          </CardTitle>
          <div>
            <Badge className="mb-1">100% 만족</Badge> |{" ⭐️"}
            <span className="text-[14px] text-neutral-500"> 9.99</span>
            <CardDescription>{loremIpsum()}</CardDescription>
            <CardDescription>{loremIpsum()}</CardDescription>
            <CardDescription className="mt-2">{loremIpsum()}</CardDescription>
          </div>
        </div>
      </Card>
      <img src={fourthUrl} alt="배이비 민동이 4" />
      <img src={fifthUrl} alt="배이비 민동이 5" />
      <img src={sixthUrl} alt="배이비 민동이 6" />
    </div>
  );
}

export default Baby;
