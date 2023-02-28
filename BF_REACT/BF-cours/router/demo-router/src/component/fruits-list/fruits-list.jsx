const FruitsList = ({ data, onSelectedFruit }) => {
  return (
    <div>
      {data.map((fruit) => (
        <article onClick={() => onSelectedFruit(fruit.id)}>
          <p>
            {fruit.name} {origin && <span>{fruit.origin}</span>}
          </p>
        </article>
      ))}
    </div>
  )
}

export default FruitsList
