import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioTareas from './components/FormularioTareas'

function App() {
  
  return (
    <>
    <main className='fondoRosaClaro text-center pt-3'>
      <h1>Lista de tareas</h1>
      <FormularioTareas></FormularioTareas>
    </main>
    <footer className='text-center py-3 fondoRosaOscuro'>
      <p>&copy; Todos los derechos reservados - Claudia Ximena Barrientos</p>
    </footer>
    </>
  )
}

export default App
