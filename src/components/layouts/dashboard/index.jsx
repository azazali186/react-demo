import React from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

const index = ({ Children }) => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col'>
          <Header />
          <Children />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default index