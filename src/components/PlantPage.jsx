import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Load plant data from db.json
  useEffect(() => {
    fetch("/db.json")
      .then((r) => r.json())
      .then((data) => setPlants(data.plants));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleToggleSoldOut(id) {
    setPlants(plants.map((plant) =>
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    ));
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
