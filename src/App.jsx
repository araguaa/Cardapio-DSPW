import "./App.css";
import ItemCardapio from "./components/ItemCardapio";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d62828",
          marginBottom: "30px",
        }}
      >
        🍔 Cardápio
      </h1>

      <ItemCardapio nome="X-Burger" preco="R$ 18,90" />

      <ItemCardapio nome="X-Bacon" preco="R$ 22,90" />

      <ItemCardapio nome="Batata Frita" preco="R$ 12,00" />

      <ItemCardapio nome="Milk Shake" preco="R$ 15,50" />

      <ItemCardapio nome="Refrigerante" preco="R$ 6,00" />
    </div>
  );
}

export default App;