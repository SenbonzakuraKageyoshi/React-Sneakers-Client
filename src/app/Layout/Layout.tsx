import React from 'react';
import Header from '../../widgets/Header/Header';

type Layout = {
    children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <>
    <Header/>
    <div className="mainContent">
      <div className="container">
        { children }
      </div>
    </div>
    </>
  )
}

export default Layout