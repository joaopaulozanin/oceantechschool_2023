import './App.css'
import Card from './components/Card/Card'

function App() {
  const personagem1 = {
    id: 0,
    nome: 'Rick Sanches',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const personagem2 = {
    id: 1,
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const personagem3 = {
    id: 2,
    nome: 'Summer Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  const itens = [personagem1, personagem2, personagem3]

  return (
    <>
      {itens.map(function (personagem) {
      return <Card key={personagem.id} item={personagem} />
      })}
    </>
  )
}

export default App
