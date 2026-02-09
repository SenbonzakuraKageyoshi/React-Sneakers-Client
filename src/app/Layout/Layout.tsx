import React, { useState } from 'react';
import Header from '../../widgets/Header/Header';
import Cart from '../../widgets/Cart/Cart';

type Layout = {
    children: React.ReactNode
}

const Layout = ({ children }: Layout) => {

  const [isCartOpened, setCartIsOpened] = useState(false);

  return (
    <>
    <Header setCartIsOpened={setCartIsOpened}/>
      <div className="mainContent">
        <div className="container">
          { children }
          {isCartOpened && <Cart setCartIsOpened={setCartIsOpened}/>}
        </div>
      </div>
    </>
  )
}

export default Layout