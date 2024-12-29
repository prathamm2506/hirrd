import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen w-full px-20'>
        <Header/>
        <Outlet/>
      </main>
      <div className='p-10 text-center mt-10 bg-gray-800'>Made by Pratham Matkar.</div>
    </div>
  )
}

export default AppLayout