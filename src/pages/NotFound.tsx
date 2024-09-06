import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="z-10 fixed top-0 left-0 right-0 bg-white py-2 border-b-[1px] border-solid border-neutral-200">
        <div className="w-full mx-auto max-w-[1280px] h-[50px] flex justify-center items-center">
          <Link to="/" className="font-[700] font-mono text-[22px]">
            쇼핑하기
          </Link>
        </div>
      </nav>
      <div className="max-w-[1280px] w-full mx-auto mt-32 min-h-screen flex justify-center items-center">
        <div>
          <svg
            className="fill-neutral-400 mx-auto w-[15px] h-[45px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
          <CardTitle className="text-center mt-10 text-neutral-600">
            페이지를 찾을 수 없습니다
          </CardTitle>
          <div className="flex flex-col mt-5 gap-2 text-neutral-400">
            <p className="text-center">관련 문의는 고객센터로</p>
            <p className="text-center">연락부탁드립니다</p>
            <p className="text-center">
              고객센터(통화료 발생){" "}
              <span className="text-blue-400 font-[700]">1111-2222</span>
            </p>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Button
              onClick={() => navigate(-1)}
              className="mx-auto w-[90px]"
              variant={"outline"}
            >
              이전
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
