import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MedicineDetails() {
  const { id } = useParams();
  useEffect(() => {
    const medicines = JSON.parse(localStorage.getItem("medicines"));
    medicines.map((med) => {
      if (med.id == id) setMed(med);
    });
  });
  return <h1>f</h1>;
}
