import api from "@/api";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useUpdateProfileMutation } from "@/hooks/useAuthMutation";
import useAuthQuery from "@/hooks/useAuthQuery";
import { useAuthActions } from "@/store/auth.store";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastAction } from "@radix-ui/react-toast";
import classNames from "classnames";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";

const schema = yup.object({
  nickname: yup.string().max(10, "닉네임은 최대 10자여야 합니다."),
  avatar: yup.mixed(),
});

type Inputs = {
  avatar?: File;
  nickname?: string;
};

function MyPage() {
  const [temperUrl, setTemperUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { setNickname, setProfileUrl } = useAuthActions();
  const { mutate, isPending } = useUpdateProfileMutation();
  const { data } = useAuthQuery();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTemperUrl(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: Inputs) => {
    let avatarFile: File | undefined;

    // data.avatar가 FileList 또는 File일 경우 처리
    if (data.avatar instanceof FileList) {
      avatarFile = data.avatar[0]; // FileList일 경우 첫 번째 파일을 사용
    } else if (data.avatar instanceof File) {
      avatarFile = data.avatar; // 이미 File일 경우 그대로 사용
    }
    mutate(
      {
        avatar: avatarFile || undefined,
        nickname: data.nickname || "",
      },
      {
        onError: (error) => {
          if (error.message === "Request failed with status code 401") {
            api.auth.logout();
            return navigate("/login");
          }
        },
        onSuccess: (variables) => {
          const { data: responseData } = variables;
          if (responseData.nickname) {
            setNickname(responseData.nickname);
          }
          if (responseData.avatar) {
            console.log(responseData.avatar);
            setProfileUrl(responseData.avatar);
          }

          toast({
            title: "프로필 변경 성공",
            description: "프로필 변경이 완료되었습니다 :)",
            action: <ToastAction altText="확인">확인</ToastAction>,
          });
        },
      }
    );
  };

  return (
    <div className="max-w-[1280px] w-full mx-auto flex flex-col mt-10">
      <CardTitle className="mx-auto">프로필 수정</CardTitle>
      <CardDescription className="mx-auto mt-3">
        유저 프로필을 변경하는 페이지입니다.
      </CardDescription>
      <CardDescription
        className={classNames(
          `${temperUrl ? "text-green-500" : "text-neutral-700"}`,
          "text-center mt-10"
        )}
      >
        {temperUrl ? "이미지 선택 완료 :)" : "이미지를 선택해주세요!"}
      </CardDescription>
      <div
        onClick={() => {
          if (fileInputRef.current) {
            fileInputRef.current.click();
          }
        }}
        className="cursor-pointer mt-2 ursor-pointer mx-auto flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm overflow-hidden"
      >
        {temperUrl ? (
          <img src={temperUrl} alt="선택 이미지" />
        ) : (
          "Right click here"
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[400px] w-full mx-auto mt-10"
      >
        <input
          type="file"
          className="hidden"
          id="avatar"
          {...register("avatar", { onChange: imageUpload })} // onChange를 register의 옵션으로 지정
          ref={(e) => {
            fileInputRef.current = e; // ref를 수동으로 설정
            register("avatar").ref(e); // register의 ref를 호출
          }}
        />
        <div>
          <Label htmlFor="nickname">nickname</Label>
          <Input
            max={10}
            id="nickname"
            type="text"
            {...register("nickname")}
            placeholder="닉네임을 입력해주세요."
            defaultValue={data?.data.nickname || ""}
          />
          {errors.nickname && (
            <CardDescription className="text-rose-500 text-[12px]">
              {errors.nickname.message}
            </CardDescription>
          )}
        </div>
        <div className="mt-6 flex gap-3">
          <Button type="button" onClick={() => navigate(-1)} variant="outline">
            취소
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "업데아트 중..." : "프로필 업데이트"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MyPage;
