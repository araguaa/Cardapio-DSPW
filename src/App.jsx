import "./App.css";

function App() {
  const itens = [
    {
      id: 1,
      nome: "X-Burger",
      descricao: "Pão, hambúrguer artesanal, queijo e molho especial.",
      preco: "R$ 18,90",
    },
    {
      id: 2,
      nome: "X-Bacon",
      descricao: "Hambúrguer com queijo cheddar e bacon crocante.",
      preco: "R$ 22,90",
    },
    {
      id: 3,
      nome: "Batata Frita",
      descricao: "Porção média de batatas fritas crocantes.",
      preco: "R$ 12,00",
    },
    {
      id: 4,
      nome: "Milk Shake",
      descricao: "Milk shake cremoso de chocolate 400ml.",
      preco: "R$ 15,50",
    },
    {
      id: 5,
      nome: "Refrigerante",
      descricao: "Lata 350ml - Coca-Cola, Guaraná ou Fanta.",
      preco: "R$ 6,00",
    },
    {
      id: 6,
      nome: "Suco",
      descricao: "Copo 500ml - Laranja e Abacaxi.",
      preco: "R$ 10,00",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e26600",
        padding: "25px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ffffff",
          marginBottom: "40px",
        }}
      >
        🍔 Cardápio da Lanchonete
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {itens.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#333" }}>{item.nome}</h2>

            <p style={{ color: "#666", margin: "10px 0" }}>
              {item.descricao}
            </p>

            <span
              style={{
                fontWeight: "bold",
                color: "#d62828",
                fontSize: "18px",
              }}
            >
              {item.preco}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;