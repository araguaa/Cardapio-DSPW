function ItemCardapio(props) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          color: "#000000",
          fontWeight: "bold",
          fontSize: "23px",
          marginBottom: "10px",
        }}
      >
        {props.nome}
      </p>
      <p
        style={{
          color: "#d62828",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {props.preco}
      </p>
       <button
        onClick={props.adicionarPedido}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#d62828",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Adicionar Pedido
      </button>
    </div>
  );
}

export default ItemCardapio;