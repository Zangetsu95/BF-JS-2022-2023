import { tendances } from "../../api/country.api.js"

const TendancePage = () => {
  const tendancesArray = tendances()

  return (
    <>
      <div>
        <h2>Our best destinations ✈</h2>
        <ul>
          {tendancesArray.map((t) => (
            <li key={`${t.pays}_${t.destination}`}>
              <h3>{t.destination}</h3>
              <p>{t.description}</p>
              {t.image && (
                <img src={t.image} alt={`${t.pays}_${t.destination}`} />
              )}
              <p>Pays: {t.pays}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TendancePage
