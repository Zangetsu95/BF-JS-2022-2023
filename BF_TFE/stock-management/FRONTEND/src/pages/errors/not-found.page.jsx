import React from "react"
import pageNotFound from "../../utils/image/404.jpg"
import { Link } from "react-router-dom"
import styles from "./not-found.module.css"

const NotFound = () => {
  return (
    <div className={styles["not-found-container"]}>
      <img
        src={pageNotFound}
        alt="404 Not Found"
        className={styles["not-found-image"]}
      />
      <h1 className={styles["not-found-title"]}>
        Erreur 404 - Page non trouvée
      </h1>
      <Link to="/" className={styles["not-found-link"]}>
        Retour à la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound
