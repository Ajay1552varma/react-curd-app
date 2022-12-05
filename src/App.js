import Create from './Component/Create';
import Read from './Component/Read'
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Update from './Component/Update';

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
     
      <Route exact path='/' element={<Create/>}>Create</Route>
      <Route exact path='/read' element={<Read/>}>Read</Route>
      <Route exact path='/update' element={<Update/>}>Update</Route>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
