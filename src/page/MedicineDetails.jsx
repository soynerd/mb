import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MedicineDetails() {
  const { id } = useParams();
  const [openfda, setOpenfds] = useState();
  const [medicine, setMedicine] = useState();
  useEffect(() => {
    const medi = JSON.parse(localStorage.getItem("medicines"));

    medi.map((med) => {
      if (med.id == id) {
        setOpenfds(med.openfda);
        setMedicine(med);
      }
    });
  });
  return (
    <main className="container">
      <article className="detail-card">
        <h1>{openfda?.brand_name?.[0] ?? "Unknown medicine"}</h1>

        <div className="detail-grid">
          <div>
            <strong>Generic Name</strong>
            <p>{openfda?.generic_name?.join(", ") ?? "Not available"}</p>
          </div>

          <div>
            <strong>Manufacturer</strong>
            <p>{openfda?.manufacturer_name?.join(", ") ?? "Not available"}</p>
          </div>

          <div>
            <strong>Product Type</strong>
            <p>{openfda?.product_type?.join(", ") ?? "Not available"}</p>
          </div>

          <div>
            <strong>Route</strong>
            <p>{openfda?.route?.join(", ") ?? "Not available"}</p>
          </div>

          <div>
            <strong>Substance</strong>
            <p>{openfda?.substance_name?.join(", ") ?? "Not available"}</p>
          </div>

          <div>
            <strong>Application Number</strong>
            <p>{openfda?.application_number?.join(", ") ?? "Not available"}</p>
          </div>
        </div>

        {medicine.purpose?.[0] && (
          <section>
            <h2>Purpose</h2>
            <p>{medicine.purpose[0]}</p>
          </section>
        )}

        {medicine.indications_and_usage?.[0] && (
          <section>
            <h2>Indications & Usage</h2>
            <p>{medicine.indications_and_usage[0]}</p>
          </section>
        )}

        {medicine.warnings?.[0] && (
          <section>
            <h2>Warnings</h2>
            <p>{medicine.warnings[0]}</p>
          </section>
        )}

        {medicine.dosage_and_administration?.[0] && (
          <section>
            <h2>Dosage & Administration</h2>
            <p>{medicine.dosage_and_administration[0]}</p>
          </section>
        )}
      </article>
    </main>
  );
}
