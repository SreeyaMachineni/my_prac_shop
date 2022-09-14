import {Routes,Route} from 'react-router-dom'
import CategoryProducts from './Components/CategoryProducts/CategoryProducts.component';
import Cart from './Routes/Cart/Cart.component';
import Home from './Routes/Home/Home.component';
import Nav from './Routes/Nav/Nav.component'
import Shop from './Routes/Shop/Shop.component'

function App() {
  return (
  //  <Routes>
  //   <Route path='/' element={<Nav/>}>
  //     <Route index element={<Home/>}/>
  //     <Route path='shop' element={<Shop/>}/>
  //   </Route>
  //  </Routes>


  <Routes>
  <Route path='/' element={<Nav />}>
    <Route index element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='shop/:category' element={<CategoryProducts />} />
    <Route path='cart' element={<Cart />} />
  </Route>
</Routes>
  );
}

export default App;
