import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/products">
              <ExploreProducts />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
