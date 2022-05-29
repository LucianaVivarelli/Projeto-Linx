import { useState } from 'react'
import {Cabecalho} from '../Components/Cabecalho/Cabecalho'
import {Ajude} from '../Components/Ajude/Ajude'
import {Compartilhe} from '../Components/Compartilhe/Compartilhe'
import {Rodape} from '../Components/Rodape/Rodape'
import {SeusProdutos} from '../Components/SeusProdutos/SeusProdutos'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="Home">
    <Cabecalho />
    <Ajude />
    <SeusProdutos />
    <Compartilhe />
    <Rodape /> 
  
    </div>
  )
}

export default App;
