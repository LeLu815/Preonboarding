import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import useImagrQuery from "@/hooks/useImagrQuery";
import classNames from "classnames";
import { useEffect, useState } from "react";

export function CarouselHome() {
  const { data, isFetching, isError } = useImagrQuery();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-[1280px] max-h-[420px] h-[420px]"
    >
      {!isFetching || !isError ? (
        <>
          <CarouselContent className="h-full">
            {data &&
              data.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="h-full">
                    <Card className="h-full">
                      <img src={url} alt="랜덤 이미지" />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <ul className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3">
            {data?.map((_, index) => {
              return (
                <li
                  className={classNames(
                    index + 1 === current ? "" : "opacity-60",
                    "rounded-full aspect-square w-2 bg-white"
                  )}
                  key={index}
                ></li>
              );
            })}
          </ul>
        </>
      ) : (
        <Skeleton className="w-full h-full"></Skeleton>
      )}
    </Carousel>
  );
}
