import HolidayList from "./HolidayList"

interface Props {
  year: string;
  countries: Object;
}

const CountryList = ({ year, countries }: Props) => {
  return (
    <>
      { countries.map((country) => (
        <div key={country.name}>
          <h1>{ country.name }</h1>
          <h2>Holidays in { year }</h2>
          <HolidayList holidays={ country.holidays } />
        </div>
      )) }
    </>
  );
}

export default CountryList;