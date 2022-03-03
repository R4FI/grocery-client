import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Shared/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Shared/Dashboard/Dashboard';
import SignIn from './pages/User/SignIn/SignIn';
import SignUp from './pages/User/SignUp/SignUp';
import Spices from './pages/Products/Spices/Spices';
import Cosmetics from './pages/Products/Cosmetics/Cosmetics';
import KitchenMaterial from './pages/Products/KitchenMaterial/KitchenMaterial';
import Fruits from './pages/Products/Fruits&veg/Fruits';
import Bakery from './pages/Products/Bakery/Bakery';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PlaceOrder from './pages/Order/PlaceOrder';
import PrivateRoute from './pages/User/Firebase/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
      <Switch>
       <Route path="/home">
      <Home></Home>
      </Route> 
       <Route exact path="/">
      <Home></Home>
      </Route> 
       <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute> 

        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
         <SignUp></SignUp>
        </Route>

        {/* products route */}
        <Route path="/fruits&veg">
       <Fruits></Fruits>
        </Route>
        <Route path="/bakery">
        <Bakery></Bakery>
        </Route>
        <Route path="/cosmetics">
        <Cosmetics></Cosmetics>
        </Route>
        <Route path="/spices">
        <Spices></Spices>
        </Route>
        <Route path="/kithcen">
         <KitchenMaterial></KitchenMaterial>
        </Route>
        <PrivateRoute path="/placeorder/:bookingId">
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>
      {/* products part end */}
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
