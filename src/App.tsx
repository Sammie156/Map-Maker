import './App.css'
import Viewport from './components/layout/Viewport'

function App() {
  return(
    <div className='flex flex-col h-screen'>
      <header className='h-12 bg-neutral-400 flex items-center px-4'>Toolbar (placeholder)</header>
      <div className='flex flex-1'>
        <aside className='w-64 bg-neutral-800 p-4'>Sidebar</aside>
        <Viewport />
      </div>
    </div>
  )
}

export default App
