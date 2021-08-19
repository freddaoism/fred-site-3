import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
//import { Gallery } from './components/gallery'//
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import { Gallery2 } from './components/gallery2'


const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Gallery2 />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Header data={landingPageData.Header} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
