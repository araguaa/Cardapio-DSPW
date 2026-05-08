import "./App.css";
import { useState } from "react";
import ItemCardapio from "./components/ItemCardapio";

function App() {
  const [quantidadePedidos, setQuantidadePedidos] = useState(0);

  function adicionarPedido() {
    setQuantidadePedidos(quantidadePedidos + 1);
  }

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
        }}
      >
        🍔 Cardápio
      </h1>

      <h2
        style={{
          textAlign: "center",
          color: "#000000",
          marginBottom: "30px",
        }}
      >
        Itens pedidos: {quantidadePedidos}
      </h2>

      <ItemCardapio
        nome="X-Burger"
        preco="R$ 18,90"
        adicionarPedido={adicionarPedido}
      />

      <ItemCardapio
        nome="X-Bacon"
        preco="R$ 22,90"
        adicionarPedido={adicionarPedido}
      />

      <ItemCardapio
        nome="Batata Frita"
        preco="R$ 12,00"
        adicionarPedido={adicionarPedido}
      />

      <ItemCardapio
        nome="Milk Shake"
        preco="R$ 15,50"
        adicionarPedido={adicionarPedido}
      />

      <ItemCardapio
        nome="Refrigerante"
        preco="R$ 6,00"
        adicionarPedido={adicionarPedido}
      />
    </div>
  );
}

export default App;