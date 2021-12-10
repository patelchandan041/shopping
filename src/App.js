import './App.css';
import Header1 from './Header1';
import { Provider } from 'react-redux'
import Bg from './Bg';
import Home from './Home'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import store from './redux/store'
import Cart from './Cart';



function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <Router>
        <Switch>
        
          <Route exact path='/'>
          <Header1 />
            <Bg />
            <Home />
          </Route> 

          <Route exact path='/product'>
         
            <Home />
          </Route> 

            <Route exact path='/cart'>
          <Cart />
          </Route> 
           

        </Switch>
      </Router>
  
    </div>
    </Provider>
  );
}

export default App;
