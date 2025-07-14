import React from 'react'
import './App.css'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Events from './components/Events'
import Counter from './components/Counter'

function App() {

  return (
    <>  {/*É necessário ter a abertura e fechamento de fragment <></>*/}

        <h1>Contador</h1>
        <Counter/>
        <TextComponent text="Meu Primeiro Texto" descricao="Descricao do primeiro texto"/>
        <SecondText text="Meu Segundo Texto" descricao="Descricao do segundo texto"/>
        <ThirdText text="Meu Terceiro Texto" descricao="Descricao do terceiro texto"/>
    </>
  )
}

export default App
