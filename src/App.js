import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import AddItem from './components/addItem';
import { Toaster } from 'react-hot-toast';
import Cart from './components/cart';
function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <AddItem />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
