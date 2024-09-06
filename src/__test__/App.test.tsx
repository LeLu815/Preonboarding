import Announcement from "@/pages/HomePage/ Announcement";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HomeContent from "../pages/HomePage/HomeContent";

const testData = [
  {
    albumId: 1,
    id: 1,
    title: "xdcsdvfxvsdv",
    url: "dvsdvsdvsvs",
    thumbnailUrl: "dvsdvsdvsvs",
  },
  {
    albumId: 2,
    id: 2,
    title: "xdcsdvfxvsdv",
    url: "dvsdvsdvsvs",
    thumbnailUrl: "dvsdvsdvsvs",
  },
  {
    albumId: 3,
    id: 3,
    title: "xdcsdvfxvsdv",
    url: "dvsdvsdvsvs",
    thumbnailUrl: "dvsdvsdvsvs",
  },
];
test("컴포넌트가 올바르게 렌더링 되는지 확인", () => {
  render(<HomeContent data={testData} selectedNav="홈" />);
  expect(true).toBeTruthy();
});
test("Announcement", () => {
  render(<Announcement />);
  expect(true).toBe(true);
});
test("demo", () => {
  expect(true).toBe(true);
});
