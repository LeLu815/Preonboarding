import { usePostsInfiniteQuery } from "@/hooks/usePlaceHolderQuery";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Announcement from "./ Announcement";
import Baby from "./Baby";
import { CarouselHome } from "./CarouselHome";
import ExhibitionPage from "./ExhibitionPage";
import HomeContent from "./HomeContent";
import HomeNav from "./HomeNav";

const navs: string[] = ["홈", "베스트", "베이비민동이", "기획전", "공지사항"];

function HomePage() {
  const [selectedNav, setSelectedNav] = useState<string>(navs[0]);
  const { ref, inView } = useInView();
  const handleSelectNav = (navName: string) => {
    setSelectedNav(navName);
  };
  const { data, isFetchingNextPage, fetchNextPage } = usePostsInfiniteQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const currentComponent = (selectedNav: string) => {
    switch (selectedNav) {
      case navs[0]: {
        return (
          <Suspense fallback={<></>}>
            {data &&
              data.pages.map((value) => (
                <>
                  <HomeContent data={value} selectedNav={selectedNav} />
                </>
              ))}
            <div
              className="h-[200px] flex items-center justify-center"
              ref={ref}
            >
              {isFetchingNextPage && <CircularProgress />}
            </div>
          </Suspense>
        );
      }
      case navs[1]: {
        return (
          <>
            <Suspense fallback={<></>}>
              {data &&
                data.pages.map((value) => (
                  <HomeContent data={value} selectedNav={selectedNav} />
                ))}
            </Suspense>
            <div
              className="h-[200px] flex items-center justify-center"
              ref={ref}
            >
              {isFetchingNextPage && <CircularProgress />}
            </div>
          </>
        );
      }
      case navs[2]: {
        return <Baby />;
      }
      case navs[3]: {
        return <ExhibitionPage />;
      }
      case navs[4]: {
        return <Announcement />;
      }
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center">
      <HomeNav
        navs={navs}
        selected={selectedNav}
        handleClick={handleSelectNav}
      />
      {selectedNav === "홈" && <CarouselHome />}
      {currentComponent(selectedNav)}
    </div>
  );
}

export default HomePage;
