import React from "react";
import Panel from "../../components/Panel";

interface Props {
  startDate: string;
  endDate: string;
  nthWeekInYear: number;
  selected: boolean;
  onClick: () => void;
}

const WeekCard: React.FC<Props> = ({
  startDate,
  endDate,
  nthWeekInYear,
  selected,
  onClick,
}) => {
  return (
    <Panel
      onClick={onClick}
      className="px-4 py-8 cursor-pointer shadow-none text-center hover:shadow w-full"
    >
      <label className="text-lg text-gray-600">Week {nthWeekInYear}</label>
      <h3 className="text-sm text-gray-500">
        {startDate} - {endDate}
      </h3>
    </Panel>
  );
};

export default WeekCard;
