import React from 'react'
import './App.css'
import HeroImage from './components/HeroImage'
import NavBar from './components/NavBar'
import PageTitle from './components/PageTitle'
import PreviewCard from './components/PreviewCard'

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
                <div class="row">
                    <div class="col-lg-4 ">
                      <PreviewCard />
                    </div>
                    <div class="col-lg-4">
                      <PreviewCard />
                    </div>
                      <PreviewCard />
                      <PreviewCard />
                    <div class="col-lg-4">
                      <PreviewCard />
                    </div>
                    <div class="col-lg-4">
                      <PreviewCard />
                    </div>
                </div>
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