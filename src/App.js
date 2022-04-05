import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import RecordsList from './components/RecordsList'
import AddRecord from './components/AddRecord'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<RecordsList/>}></Route>
        <Route path= '/addRecord' element={<AddRecord/>}></Route>
              </Routes>
    </Router>
  )
}

export default App
