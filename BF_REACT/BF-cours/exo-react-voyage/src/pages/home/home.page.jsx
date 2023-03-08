import style from "./home.page.module.css"

const HomePage = () => {
  return (
    <>
      <div className={style.hero}>
        <h1>Welcome to Elegant Agency</h1>
      </div>
      <div>
        <h2>We offer you the best travel around the world</h2>
        <img
          src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg"
          alt="logo elegant agency"
        />
      </div>
    </>
  )
}

export default HomePage
