const CountryList = ({ data, onSelectedCountry }) => {
  return (
    <div>
      {data.map((country) => (
        <article key={country.id} onClick={() => onSelectedCountry(country.id)}>
          <p>{country.nom}</p>
          <p>Nombre de destinations: {country.destinations.length}</p>
        </article>
      ))}
    </div>
  )
}

export default CountryList
