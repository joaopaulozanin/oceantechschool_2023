import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    id: 0,
    nome: 'Rick Sanches',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tags: ['Status: Vivo', 'Espécie: Humana']
  }

  const item2 = {
    id: 1,
    nome: 'Morty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tags: ['Origem: Terra C-137']
  }

  const item3 = {
    id: 2,
    nome: 'Summer Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  }

  const itens = [item1, item2, item3]

  return (
    <>
      {itens.map(function (item, index) {
      return <Card item={item} key={`card_${index}`} />
      })}
    </>
  )
}

export default App
