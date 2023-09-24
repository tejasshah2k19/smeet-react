import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import { C1,C2 } from './Multi';
import Outer from './InnerComponent';
function App() {
  return (
    <div> 
    <Signup/>
    <Login/>
    <C1/>
    <C2/>
    <Outer></Outer>
    </div>
  );
}

export default App;
