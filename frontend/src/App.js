import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Body from './components/Body/body';
import Login from './components/Login/login';
import Calculator from './components/Body/ReactProjects/calculator';
import CountDown from './components/Body/ReactProjects/count-down-timer';
import ToDoList from './components/Body/ReactProjects/toDoList';
import Currency from './components/Body/ReactProjects/currency_converter/App';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
   <Router>

   
    <div className="app">
    <div className='navbar'>
        <Header />
      </div>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={
             <Body />
          }>
           
          </Route>
          <Route exact path='/Calculator' element={
              <Calculator />
          }> 
          </Route>
          <Route exact path='/CountDown' element={
            <CountDown />
          }>
          </Route>
          <Route exact path='/ToDoList' element={
            <ToDoList />
          }>

          </Route>

          <Route exact path='/Currency' element={
            <Currency />
          }>

          </Route>
          
        </Routes>
        <div className='footer'>
        <Footer />
      </div>
      </div>
      
    </div>
    </Router>
    </>
  );
}

export default App;
