import { loremIpsum } from "lorem-ipsum";
import { Badge } from "../ui/badge";

function Footer() {
  return (
    <div className="flex flex-col items-center border-t-2 border-solid border-neutral-300 mt-20">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center">
        <div className="w-full flex justify-between items-center h-[80px]">
          <div className="flex items-center gap-2">
            <p className="font-[700] font-mono text-[24px] py-[20px]">
              LEEINS FRIENDS
            </p>
            <p>| 스토어찜하고 다양한 소식을 받아보세요.</p>
          </div>
          <Badge className="w-[130px] h-[34px] flex justify-center items-center">
            스토어 찜 9404
          </Badge>
        </div>
      </div>
      <div className="bg-neutral-50 flex w-full py-[40px]">
        <div className="max-w-[1280px] w-full mx-auto flex gap-10 items-start ">
          <div className="font-[500] font-mono text-[20px]">
            두사람몰 쇼핑하기
          </div>
          <div className="flex flex-col flex-1 text-neutral-400 text-[14px]">
            <div className="flex justify-between w-full">
              <p className="text-[12px]">
                (주)두사람 대표이사 : 이인 주소 : 서울특별시 동작구 사당동
              </p>
              <p>
                고객센터 | 이용약관 | 개인정보처리방침 | 지식재산권보호센터 |
                안전거래센터
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p>{loremIpsum()}</p>
              <p>{loremIpsum()}</p>
              <p>{loremIpsum()}</p>
              <p>{loremIpsum()}</p>
              <p>{loremIpsum()}</p>
            </div>
            <div className="my-3">
              Copyright © LEEINS Corp. All rights reserved
            </div>
            <div className="flex flex-col gap-1">
              <p>
                (주)두사람에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
                포함되어 있습니다.
              </p>
              <p>
                개별판매자가 판매하는 상품에 대해 (주)두사람은
                통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
                배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
