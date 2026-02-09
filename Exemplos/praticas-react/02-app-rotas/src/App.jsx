import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/footer'
import Menu from './components/menu'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <header>
        <nav className='container'>
          <Menu />
        </nav>
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
