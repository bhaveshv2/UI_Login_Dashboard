import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Login from './Component/Login';
import MainPage from './Component/Mainpage';
import View1 from './Component/View1';
import View2 from './Component/View2';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main-page" component={MainPage} />
            <Route path="/view1" component={View1}/>
            <Route path="/view2" component={View2}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
