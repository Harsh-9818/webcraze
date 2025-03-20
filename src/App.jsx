import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// import HomePage from './components/Home'
import Home from './components/Home'
// import ProductDetail from './components/ProductD'
import ProductDisplay from './components/Tshirts'

function App() {

  return(
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product' element={<ProductDisplay/>}/>

     </Routes>
    </div>

  )
}

export default App
