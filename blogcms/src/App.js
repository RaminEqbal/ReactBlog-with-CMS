import "bootstrap/dist/css/bootstrap.min.css";
import './css/main.css'
import './css/posts.css'
import './css/base.css'

import { Switch, Route } from 'react-router-dom';

import BlogPage from './pages/BlogPage.component';
import AdminPage from './pages/AdminPage.component';




//import { BrowserRouter as Router, Route } from "react-router-dom"



function App() {
  return (
    <div>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={BlogPage}></Route>
      <Route exact path='/admin' component={AdminPage}></Route>
    </Switch>
    
    </div>
  );
}

export default App;
