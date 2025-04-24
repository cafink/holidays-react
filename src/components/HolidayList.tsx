interface Props {
  holidays: Object[];
}

const HolidayList = ({ holidays }: Props) => {
  return (
    <ul>
      { holidays.map((holiday) => (
        <li key={ holiday.date + holiday.name }>
          { new Date(holiday.date).toLocaleDateString() }:&nbsp;
          <strong>{ holiday.name }</strong>
        </li>
      )) }
    </ul>
  );
}

export default HolidayList;