const FormationsDetail = ({ name, desc, image }) => (
  <div>
    <p>{name}</p>
    <p>{desc}</p>
    <img src={image} alt={`image de la formation ${name}`}></img>
  </div>
)

export default FormationsDetail
