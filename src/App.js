import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import RecordsList from './components/RecordsList'
import AddRecord from './components/AddRecord'
import ViewOneRecord from './components/ViewOneRecord'
import EditOneRecord from './components/EditOneRecord'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<RecordsList/>}></Route>
        <Route path='/:id' element={<ViewOneRecord/>}></Route>
        <Route path= '/addRecord' element={<AddRecord/>}></Route>
        <Route path= '/:id/editRecord' element={<EditOneRecord/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
