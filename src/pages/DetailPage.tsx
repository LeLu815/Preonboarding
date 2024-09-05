import { CommentType } from "@/api/placeholder.api"; // 댓글 타입
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useCommentsQuery, usePostQuery } from "@/hooks/usePlaceHolderQuery";
import { Card, Skeleton } from "@mui/material";
import { loremIpsum } from "lorem-ipsum";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const { data } = usePostQuery(Number(id));
  const { data: commentsResponse } = useCommentsQuery(Number(id)); // AxiosResponse로 가져오기

  // 실제 댓글 데이터
  const comments = commentsResponse?.data; // 댓글 데이터 추출

  console.log("comments:");

  return (
    <>
      <div className="font-[700] font-mono text-[24px] pt-[30px] py-[60px] mx-auto w-full text-center border-b-[1px] border-solid border-neutral-300">
        LEEINS FRIENDS
      </div>
      <div className="max-w-[1280px] w-full flex gap-10 mx-auto mt-5">
        {data ? (
          <img className="w-[430px] h-[430px]" src={data.data.url} alt="" />
        ) : (
          <Skeleton className="w-[430px] h-[430px]" />
        )}
        <div className="flex flex-1 flex-col">
          <div className="flex gap-2 items-center mb-2">
            <p className="text-[23px]">⭐️⭐️⭐️⭐️</p>
            <p className="text-[16px] underline text-neutral-400">리뷰 93건</p>
          </div>

          {data ? (
            <CardTitle className="text-[35px] font-[400]">
              {data.data.title.slice(0, 20)}
            </CardTitle>
          ) : (
            <Skeleton className="" />
          )}

          <CardTitle className="mt-4 text-[34px] font-[700]">
            {getRandomAmount()}
          </CardTitle>
          <Card className="w-[450px] flex flex-col !rounded-[12px] justify-between mt-8 text-neutral-600">
            <p className="text-[16px] font-[600] p-6">
              고객님을 위한 구매 혜택
            </p>
            <hr />
            <p className="p-6">
              쇼핑포인트 최대{" "}
              <span className="font-[700] text-blue-500">420원</span>{" "}
              <span className="font-[700]">적립</span>
            </p>
            <hr />
            <p className="p-6 text-center">마지막 기회!</p>
          </Card>
          <div className="flex flex-col text-[15px] gap-2 mt-8">
            <p>배송비 3,000원 (30,000원 이상 구매시 무료)</p>
            <p>
              평균 배송기간 <span className="text-blue-500">2일 이내</span>{" "}
              (영업일 기준)
            </p>
          </div>
        </div>
      </div>
      <div className="py-[10px]" />
      <hr />
      <div className="max-w-[1280px] w-full mx-auto mt-[70px] flex flex-col gap-5">
        <CardTitle className="mt-4">✨ 상품 후기</CardTitle>
        {comments &&
          comments.map((comment: CommentType) => (
            <Card
              key={comment.id}
              className="py-4 px-5 flex flex-col gap-3 !rounded-lg"
            >
              <CardTitle>{loremIpsum().slice(0, 15)}</CardTitle>
              <CardDescription>{comment.body}</CardDescription>
              <CardDescription>{loremIpsum()}</CardDescription>
              <CardDescription>{loremIpsum()}</CardDescription>
            </Card>
          ))}
      </div>
    </>
  );
}

export default DetailPage;

function formatToWons(amount: number) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"; // 천 단위로 콤마 추가
}

function getRandomAmount() {
  const min = 10000; // 최소값
  const max = 50000; // 최대값
  // 100 단위로 랜덤 숫자 생성
  const randomAmount =
    Math.floor(Math.random() * ((max - min) / 100 + 1)) * 100 + min;

  // 원화 포맷팅 함수
  return formatToWons(randomAmount);
}
