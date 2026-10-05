function MedicineCard({ medicine, onClick }) {
  const openfda = medicine.openfda;
  console.log(medicine.openfda);

  return (
    <div className="border-2 ">
      <article className="medicine-card" onClick={onClick}>
        <h2>{openfda?.brand_name?.[0] ?? "Unknown brand"}</h2>

        <p>
          <strong>Generic:</strong>{" "}
          {openfda?.generic_name?.[0] ?? "Not available"}
        </p>

        <p>
          <strong>Manufacturer:</strong>{" "}
          {openfda?.manufacturer_name?.[0] ?? "Not available"}
        </p>

        <p>
          <strong>Product Type:</strong>{" "}
          {openfda?.product_type?.[0] ?? "Not available"}
        </p>

        <p>
          <strong>Route:</strong> {openfda?.route?.[0] ?? "Not available"}
        </p>

        <span className="view-details">View details →</span>
      </article>
    </div>
  );
}

export default MedicineCard;
