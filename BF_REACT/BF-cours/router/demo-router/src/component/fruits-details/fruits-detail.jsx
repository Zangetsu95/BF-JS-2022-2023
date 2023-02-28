const FruitsDetail = ({ name, desc, origin, image }) => (
  <div>
    <p>
      {name} {origin && <span>(Origine :{origin})</span>}
    </p>
    <img src={image} alt={`image de ${name}`}></img>
    <p>{desc}</p>
  </div>
)

export default FruitsDetail
