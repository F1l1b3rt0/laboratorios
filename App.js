import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [results, setResults] = useState(null);

  const calcularOperaciones = (e) => {
    e.preventDefault();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const operacionesCalculadas = {
      suma: n1 + n2,
      resta: n1 - n2,
      multiplicacion: n1 * n2,
      division: n2 !== 0 ? (n1 / n2).toFixed(2) : "División por cero no permitida",
    };

    setResults(operacionesCalculadas);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Operaciones Básicas</h1>
      <form onSubmit={calcularOperaciones}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="number"
            placeholder="Primer número"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
          />
          <br />
          <input
            type="number"
            placeholder="Segundo número"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{ padding: "10px", fontSize: "16px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Calcular Operaciones
        </button>
      </form>

      {results && (
        <div style={{ marginTop: "20px" }}>
          <h2>Resultados:</h2>
          <p><strong>Suma:</strong> {results.suma}</p>
          <p><strong>Resta:</strong> {results.resta}</p>
          <p><strong>Multiplicación:</strong> {results.multiplicacion}</p>
          <p><strong>División:</strong> {results.division}</p>
        </div>
      )}
    </div>
  );
};

export default App;