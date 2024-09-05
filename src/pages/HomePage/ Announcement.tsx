import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { loremIpsum } from "lorem-ipsum";

const announcements = [
  {
    date: "2024.09.05",
    title: "2024년 추석 연휴 배송 일정 안내",
  },
  { date: "2024.09.04", title: "9/5 서비스 점검 공지" },
];
function Announcement() {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      {announcements.map((announcement) => (
        <Accordion
          type="single"
          collapsible
          className="mt-4 w-full border border-solid border-neutral-200 py-2 px-4 rounded-md"
        >
          <AccordionItem value={announcement.title}>
            <AccordionTrigger>
              <div className="flex flex-col justify-start gap-2">
                <p className="text-neutral-500 text-[14px] text-start">
                  {announcement.date}
                </p>
                <p>{announcement.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <p>{loremIpsum()}</p>
                <p>{loremIpsum()}</p>
                <p className="mt-4">{loremIpsum()}</p>
                <p>{loremIpsum()}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default Announcement;
