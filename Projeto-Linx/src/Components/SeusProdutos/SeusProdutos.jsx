import React, { useState, useEffect} from 'react'

const SeusProdutos = () => {
    const [Produtos, setProdutos] = useState([]);
    useEffect (() => {

          fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
            .then((res) => res.json())
            .then((res) => setProdutos([res]))
            .catch((err) => res.status(400).json(err));
          
          

    },[]
    )
  return (
    <div>
               
    </div>
              )
  }

export default SeusProdutos