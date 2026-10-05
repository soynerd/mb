import React, { useState } from "react";
import MedicineCard from "../components/MedicineCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const apiCalling = async () => {
    if (!search.trim()) return;

    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${search}"`;

    try {
      const data = await fetch(url);
      const res = await data.json();
      setMedicines(res.results);
      setShow(true);
      console.log(medicines);
      localStorage.setItem("medicines", JSON.stringify(res.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Search</h1>
        <input
          type="text"
          value={search}
          name="search here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={apiCalling}>Search</button>
      </div>
      {show && medicines.length === 0 && (
        <div className="status empty">
          <h2>No results found</h2>

          <p>Try searching with another medicine brand name.</p>
        </div>
      )}

      {medicines.length > 0 && (
        <section className="results">
          <div className="results-header">
            <h2>Search Results</h2>

            <span>
              {medicines.length} {medicines.length === 1 ? "result" : "results"}
            </span>
          </div>

          <div className="medicine-grid">
            {medicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
                onClick={() =>
                  navigate(`/medicine/${encodeURIComponent(medicine.id)}`)
                }
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
