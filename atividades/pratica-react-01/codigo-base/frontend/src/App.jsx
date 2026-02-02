import { useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
// import { useEffect } from "react";

const listCars = [
  {
    id: 1,
    brand: "Hyundai",
    model: "HB20",
    km: "65.000",
    category: "Hatch",
    year: "2018",
    price: "55.000,00",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Hilux",
    km: "100.000",
    category: "Picape",
    year: "2019",
    price: "155.000,00",
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "T-Cross",
    km: "20.000",
    category: "SUV",
    year: "2021",
    price: "135.000,00",
  },
];

const App = () => {
  const [cars, setCars] = useState(listCars);

/*   useEffect(() => {
    async function fetchCars() {
      const res = await fetch("http://localhost:3000/cars");
      const data = await res.json();
      setCars(data);
    }

    fetchCars();
  }, []); */

  const handleSearch = async (query) => {
    if (query === '') {
/*       const res = await fetch("http://localhost:3000/cars");
      const data = await res.json();
      setCars(data); */
      setCars(listCars);
      return;
    }

    setCars(listCars.filter( ({ model }) => model.toLowerCase().includes(query.toLowerCase()) ));
  }
  
  return (
    <>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className='cards'>
        {cars && cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default App;
