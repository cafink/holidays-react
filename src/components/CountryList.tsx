import axios from "axios"
import { useEffect, useState } from "react"
import HolidayList from "./HolidayList"

interface Props {
  year: string;
  countries: Object;
}

const CountryList = ({ year }: Props) => {
  const url = "http://localhost:5254/"

  const[countries, setCountries] = useState<Object>([]);

  useEffect(() => { getCountries(); },[])

  const getCountries = () => {
    axios.get<Object>(url).then(results => {
      console.log(results.data);
      setCountries(results.data);
    });
  }

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