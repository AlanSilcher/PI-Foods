import './App.css';
import Home from './View/Home/Home';
import Landing from './View/Landing/Landing';
import Form from './View/Form/Form';
import Detail from './View/Detail/Detail';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/detail/:id"><Detail/></Route>
      <Route path="/form"><Form/></Route>
    </div>
  );
}

export default App;
