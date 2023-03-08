const CountryDetail = ({ nom, description, image, destinations }) => {
  return (
    <>
      <h3>{nom}</h3>
      <img src={image} alt={nom} />
      <p>{description}</p>
      <h4>Destinations:</h4>
      {destinations.map((d) => (
        <div key={d.id}>
          <h5>{d.nom}</h5>
          <img src={d.image} alt={d.nom} />
          <p>{d.description}</p>
        </div>
      ))}
    </>
  )
}
export default CountryDetail
