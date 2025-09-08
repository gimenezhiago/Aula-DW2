import { useState } from "react";
import styles from "./Contador.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [passo, setPasso] = useState(1);

  function incrementar() {
    Promise.resolve().then(() => setContador(c => c + Number(passo)));
  }

  function decrementar() {
    Promise.resolve().then(() => setContador(c => c - Number(passo)));
  }

  function reset() {
    Promise.resolve().then(() => setContador(0));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Contador</h1>
      <div className={styles.contadorDisplay}>{contador}</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao} onClick={incrementar}>
          +
        </button>
        <button className={styles.botao} onClick={decrementar}>
          -
        </button>
      </div>
      <label>Passos</label>
      <input
        type="number"
        value={passo}
        onChange={e => setPasso(e.target.value)} 
      />
      <button className={styles.botao} onClick={reset}>Reset</button>
    </div>
  );
}
