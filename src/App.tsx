import './App.css'
import Viewport from './components/layout/Viewport'
import Sidebar from './components/layout/Sidebar'

function App() {
  return(
    <div className='flex flex-col h-screen'>
      <header className='h-12 bg-neutral-400 flex items-center px-4'>Toolbar (placeholder)</header>
      <div className='flex flex-1'>
        <Sidebar />
        <Viewport />
      </div>
    </div>
  )
}

export default App
