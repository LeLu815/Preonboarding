import { CarouselHome } from "./CarouselHome";
import HomeNav from "./HomeNav";

function HomePage() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <HomeNav />
      <CarouselHome />
    </div>
  );
}

export default HomePage;
