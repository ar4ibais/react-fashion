import Arrivals from './components/arrivals/Arrivals'
import Brands from './components/brands/Brands'
import Download from './components/download/Download'
import Favourites from './components/favourites/Favourites'
import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Sale from './components/sale/Sale'

function App() {

  return (
    <>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourites />
      <Download />
    </>
  )
}

export default App
