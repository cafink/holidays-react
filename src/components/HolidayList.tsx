interface Props {
  holidays: string[];
}

const HolidayList = ({ holidays }: Props) => {
  return (
    <ul>
      { holidays.map((holiday) => (
        <li key={ holiday }>{ holiday }</li>
      )) }
    </ul>
  );
}

export default HolidayList;