import React from 'react'
import './App.css'
import HeroImage from './components/HeroImage'
import NavBar from './components/NavBar'
import PageTitle from './components/PageTitle'
import PreviewCard from './components/PreviewCard'
import Row from './components/Row'

const App = () => {
  return (
    <>
      <header>
        <NavBar dropDir={'dropdown'} />
      </header>
      <HeroImage />
    <div className="container">
      <body>
        <PageTitle />
        <div class="h-25 cards-container">
          <Row />
          <Row />
          <Row />
        </div>
      </body>
    </div>
    <footer>
      <NavBar dropDir={'dropup'}/>
    </footer>
    </>
  )
}

export default App