import React from "react";
import WeekCard from "./WeekCard";

const weeks = [
  {
    startDate: "2022/11/11",
    endDate: "2022/11/17",
    nthWeekInYear: 45,
  },
  {
    startDate: "2022/11/18",
    endDate: "2022/11/24",
    nthWeekInYear: 46,
  },
  {
    startDate: "2022/11/25",
    endDate: "2022/12/01",
    nthWeekInYear: 47,
  },
  {
    startDate: "2022/12/02",
    endDate: "2022/12/08",
    nthWeekInYear: 48,
  },
  {
    startDate: "2022/12/09",
    endDate: "2022/12/15",
    nthWeekInYear: 49,
  },
  {
    startDate: "2022/12/16",
    endDate: "2022/12/22",
    nthWeekInYear: 50,
  },
  {
    startDate: "2022/12/23",
    endDate: "2022/12/29",
    nthWeekInYear: 51,
  },
  {
    startDate: "2022/12/30",
    endDate: "2023/01/05",
    nthWeekInYear: 52,
  },
  {
    startDate: "2023/01/06",
    endDate: "2023/01/12",
    nthWeekInYear: 1,
  },
  {
    startDate: "2023/01/13",
    endDate: "2023/01/19",
    nthWeekInYear: 2,
  },
];

export default function SelectWeek() {
  return (
    <div>
      <div className="flex flex-col col-span-12">
        <div className="flex w-full gap-4 items-center">
          <div className="bg-gray-700 h-8 w-8 text-white text-center items-center flex rounded">
            <div className="w-full">2</div>
          </div>
          <h2 className="text-xl font-medium">Pick a week</h2>
        </div>

        <div className="mt-8" />

        <div className="flex gap-4">
          {/*<Button>*/}
          {/*  <ArrowLeftIcon className="h-4 w-4 text-gray-500" />*/}
          {/*</Button>*/}
          <div className="grid grid-cols-5 gap-4">
            {weeks.map((week) => (
              <WeekCard
                key={week.nthWeekInYear}
                startDate={week.startDate}
                endDate={week.endDate}
                nthWeekInYear={week.nthWeekInYear}
                selected={false}
                onClick={() => {}}
              />
            ))}
          </div>
          {/*<Button>*/}
          {/*  <ArrowRightIcon className="h-4 w-4 text-gray-500" />*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  );
}
