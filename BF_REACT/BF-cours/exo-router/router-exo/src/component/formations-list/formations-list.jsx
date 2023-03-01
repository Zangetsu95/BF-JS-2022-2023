const FormationsList = ({ data, onSelectedFormations }) => {
  return (
    <div>
      {data.map((formations) => (
        <article
          key={formations.id}
          onClick={() => onSelectedFormations(formations.id)}
        >
          <p>{formations.name}</p>
        </article>
      ))}
    </div>
  )
}
export default FormationsList
