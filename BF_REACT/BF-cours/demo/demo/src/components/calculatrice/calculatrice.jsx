import React, { useState } from "react"
/**
 * It's a calculator that takes two numbers and an operation and returns the result of the operation
 * @returns A div with a text input, a dropdown menu, another text input, a button, and another text
 * input.
 */
function Calculatrice() {
  /* Declaring a variable and a function to set the value of the variable. */
  const [nombre1, setNombre1] = useState("")
  const [nombre2, setNombre2] = useState("")
  const [operation, setOperation] = useState("+")
  const [resultat, setResultat] = useState("")

  function calculer() {
    /* Converting the string to a number. */
    const num1 = parseFloat(nombre1)
    const num2 = parseFloat(nombre2)
    /* Checking if the input is a number. */

    if (isNaN(num1) || isNaN(num2)) {
      setResultat("Veuillez saisir des nombres valides.")
      return
    }

    /* Checking the operation and then doing the math. */
    let resultatCalcul
    switch (operation) {
      case "+":
        resultatCalcul = num1 + num2
        break
      case "-":
        resultatCalcul = num1 - num2
        break
      case "*":
        resultatCalcul = num1 * num2
        break
      case "/":
        resultatCalcul = num1 / num2
        break
      default:
        setResultat("Opération invalide.")
        return
    }

    setResultat(resultatCalcul)
  }

  /* A text input that takes the value of the variable nombre1/nombre2 and when the
      value changes, it calls the function setNombre1/setNombre2 and replaces the value
    with a regular expression.

    A dropdown menu that takes the value of the variable operation and when
      the value changes, it calls the function setOperation and replaces the
      value with a regular expression.
      
  */
  return (
    <div>
      <input
        type="text"
        value={nombre1}
        onChange={(e) => setNombre1(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="text"
        value={nombre2}
        onChange={(e) => setNombre2(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <button onClick={calculer}>Calculer</button>
      <input type="text" value={resultat} readOnly />
    </div>
  )
}

export default Calculatrice
