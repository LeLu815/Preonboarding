import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useJoinMutation } from "@/hooks/useAuthMutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastAction } from "@radix-ui/react-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("유효한 이메일을 입력해주세요.")
      .required("이메일은 필수 항목입니다."),
    password: yup
      .string()
      .max(20, "비밀번호는 최대 20자까지 가능합니다.")
      .required("비밀번호는 필수 항목입니다."),
    passwordCheck: yup
      .string()
      .max(20, "비밀번호는 최대 20자까지 가능합니다.")
      .required("비밀번호 확인은 필수 항목입니다.")
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."), // 비밀번호 확인이 비밀번호와 일치하는지 확인
    nickname: yup
      .string()
      .max(10, "닉네임은 최대 10자까지 가능합니다.")
      .required("닉네임은 필수 항목입니다."),
  })
  .required();

function JoinPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { mutate, isPending } = useJoinMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return mutate(
      {
        id: data.email,
        password: data.password,
        nickname: data.nickname,
      },
      {
        onSuccess: () => {
          toast({
            title: "회원가입 성공",
            description: "회원가입을 축하드립니다 :)",
            action: <ToastAction altText="확인">확인</ToastAction>,
          });
          navigate("/login");
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "회원가입 실패",
            description: "다시 한번 시도해주세요 :(",
            action: <ToastAction altText="확인">확인</ToastAction>,
          });
        },
      }
    );
  };

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle className="text-center">회원가입</CardTitle>
        <CardDescription className="text-center">
          프리온보딩 회원가입 페이지 입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="이메일을 입력해주세요."
              />
              {errors.email && (
                <CardDescription className="text-rose-500 text-[12px]">
                  {errors.email.message}
                </CardDescription>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="비밀번호를 입력해주세요."
              />

              {errors.password && (
                <CardDescription className="text-rose-500 text-[12px]">
                  {errors.password.message}
                </CardDescription>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password check</Label>
              <Input
                id="passwordCheck"
                type="password"
                {...register("passwordCheck")}
                placeholder="비밀번호를 다시 한번 입력해주세요"
              />
              {errors.passwordCheck && (
                <CardDescription className="text-rose-500 text-[12px]">
                  {errors.passwordCheck.message}
                </CardDescription>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                type="text"
                {...register("nickname")}
                placeholder="닉네임을 입력해주세요."
              />
              {errors.nickname && (
                <CardDescription className="text-rose-500 text-[12px]">
                  {errors.nickname.message}
                </CardDescription>
              )}
            </div>
            <Button disabled={isPending} className="w-full" type="submit">
              회원가입
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <CardDescription className="mx-auto underline underline-offset-2">
          <Link to="/login">로그인</Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default JoinPage;
