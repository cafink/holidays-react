import CountryList from "./components/CountryList";

const year = new Date().getFullYear();

function App() {
  return (
    <div><CountryList year={ year } /></div>
  )
}

export default App
