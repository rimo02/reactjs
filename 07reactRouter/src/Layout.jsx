import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
      <Header />
      <Outlet />
      <Footer />
      </main>
    </div>
  )
}
