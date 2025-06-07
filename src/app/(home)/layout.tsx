import React from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

function HomeLayout({children}:{
    children: React.ReactNode
}) {
return (
    <div>
        <Header />
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout