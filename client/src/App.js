import React from 'react';
import Product from './Components/Product/Product';
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Product />
    </BrowserRouter>
  )
}

export default App;
