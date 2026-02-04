import React from 'react';
import Header from '../../widgets/Header/Header';
import { layoutStore } from '../Store/LayoutStore/LayoutStore';
import Cart from '../../widgets/Cart/Cart';

type Layout = {
    children: React.ReactNode
}

const Layout = ({ children }: Layout) => {

  const { isOpened, toggleIsOpened } = layoutStore();

  return (
    <>
    <Header/>
    <div className="mainContent">
      <div className="container">
        { children }
        {isOpened && <Cart toggleIsOpened={toggleIsOpened}/>}
      </div>
    </div>
    </>
  )
}

export default Layout