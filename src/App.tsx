import CountryList from "./components/CountryList";

  const year = new Date().getFullYear();

  const countries = [
    { name: "United States", holidays: ["Arbor Day", "National Donut Day"] },
    { name: "Botswana", holidays: ["National Fried Chicken Day", "April Fool's Day"] },
    { name: "Canada", holidays: ["Flag Day", "Boxing Day"] }
  ];

function App() {
  return (
    <div><CountryList countries={ countries } year={ year } /></div>
  )
}

export default App
