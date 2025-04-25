import { useState, MouseEvent } from "react";

interface Props {
  holidays: Object[];
}

const HolidayList = ({ holidays }: Props) => {

  const [holidayList, setHolidayList] = useState(holidays);

  const removeHoliday = (id: string) => {
    const updatedList = holidayList.filter((item) => item.date + item.name !== id);
    setHolidayList(updatedList);
  }

  return (
    <ul className="list-group">
      { holidayList.map((holiday, index) => (
        <li className="list-group-item" key={ holiday.date + holiday.name }>
          { new Date(holiday.date).toLocaleDateString() }:&nbsp;
          <strong>{ holiday.name }</strong>&nbsp;
          <span onClick={() => removeHoliday(holiday.date + holiday.name)}>&#10060;</span>
        </li>
      )) }
    </ul>
  );
}

export default HolidayList;