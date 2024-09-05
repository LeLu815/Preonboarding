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
import { useLoginMutation } from "@/hooks/useAuthMutation";
import { ACCESS_TOEKN, setDataToLocal } from "@/utils/localStorage";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastAction } from "@radix-ui/react-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
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
  })
  .required();

function LoginPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { mutate, isPending } = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      {
        id: data.email,
        password: data.password,
      },
      {
        onSuccess: (variables) => {
          setDataToLocal(ACCESS_TOEKN, variables.data.accessToken);
          toast({
            title: "로그인 성공",
            description: "로그인 되었습니다 :)",
            action: <ToastAction altText="확인">확인</ToastAction>,
          });

          return navigate("/");
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "로그인 실패",
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
        <CardTitle className="text-center">로그인</CardTitle>
        <CardDescription className="text-center">
          프리온보딩 로그인 페이지 입니다.
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
            <Button disabled={isPending} className="w-full" type="submit">
              로그인
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <CardDescription className="mx-auto underline underline-offset-2">
          <Link to="/join">회원가입</Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
