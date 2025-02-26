import Navbar from '@/components/Navbar'
import React from 'react'

function Landinglayout({children}) {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        {children}
    </div>
  )
}

export default Landinglayout