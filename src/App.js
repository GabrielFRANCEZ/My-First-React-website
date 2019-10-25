import React, {Component} from 'react';
import PageWrapper from './Components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


//Pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

class App extends Component {
  render()
  {
    return(
      <Router>
        <PageWrapper >
          <Route 
            exact={true}
            path="/"
            component={Home}  
          />

          <Route 
            //exact={true}
            path="/about"
            component={About}  
          />

        </PageWrapper>  
      </Router>
    
    );
  }
}

export default App;
