import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/hooks/usePlaceHolderQuery";
import { Link } from "react-router-dom";

type HomeContentProps = {
  data: Post[];
  selectedNav: string;
};
function HomeContent({ data, selectedNav }: HomeContentProps) {
  return (
    <>
      {selectedNav === "홈" ? (
        <div
          className="w-full max-w-[800px] grid 
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-4
          mt-5"
        >
          {data.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Card className="w-full flex flex-col aspect-[3/5]">
                <img className="aspect-[3/4]" src={post.url} alt="이미지" />
                <CardHeader>
                  <CardDescription>{post.title}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-[800px] flex flex-col gap-4">
          {data.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Card className="w-full flex">
                <img
                  className="aspect-square w-[150px] rounded-lg relative"
                  src={post.thumbnailUrl}
                  alt="이미지"
                />
                <span className="mt-[6px] ml-[6px] absolute w-[22px] h-[22px] rounded-md bg-neutral-900 text-white flex justify-center items-center z-10">
                  {post.id}
                </span>
                <CardHeader>
                  <CardTitle>{post.title.slice(0, 10)}</CardTitle>
                  <CardDescription>{post.title}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default HomeContent;
