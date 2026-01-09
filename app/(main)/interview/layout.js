import React, { Suspense } from 'react'
import BarLoader from 'react-spinners/BarLoader'

const Layout = ({children}) => {
  return (
    <div className='px-5'>
      {children}
      <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="gray"/>}>
      </Suspense>
    </div>
  )
}

export default Layout
