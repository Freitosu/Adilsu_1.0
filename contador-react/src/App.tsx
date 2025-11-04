import React, { useState } from "react";
import "./App.css";

interface Produto {
  id: number;
  nome: string;
  preco: string;
}

export default function App() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarProduto = () => {
    if (nome.trim() === "" || preco.trim() === "") return;
    const novoProduto = { id: Date.now(), nome, preco };
    setProdutos([...produtos, novoProduto]);
    setNome("");
    setPreco("");
  };

  const removerUltimo = () => {
    setProdutos(produtos.slice(0, -1));
  };

  const apagarLista = () => {
    setProdutos([]);
  };

  const limparCampos = () => {
    setNome("");
    setPreco("");
  };

  const removerSelecionado = (id: number) => {
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h1>Cadastro de Produtos</h1>

      <div className="form">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Ex: Teclado Mecânico"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Preço (R$)</label>
        <input
          type="number"
          placeholder="Ex: 199.90"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <div className="buttons">
          <button onClick={adicionarProduto} className="add">
            Adicionar produto
          </button>
          <button onClick={limparCampos} className="clean">
            Limpar campos
          </button>
          <button
            onClick={removerUltimo}
            disabled={produtos.length === 0}
            className="remove"
          >
            Remover último
          </button>
          <button
            onClick={apagarLista}
            disabled={produtos.length === 0}
            className="delete"
          >
            Apagar lista
          </button>
        </div>
      </div>

      <hr />

      <p>
        Você tem <b>{produtos.length}</b> produto(s) cadastrado(s).
      </p>

      {produtos.length === 0 ? (
        <p className="vazio">Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul>
          {produtos.map((produto: Produto) => (
            <li
              key={produto.id}
              onClick={() => removerSelecionado(produto.id)}
              title="Clique para remover este produto"
            >
              {produto.nome} — R$ {parseFloat(produto.preco).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
