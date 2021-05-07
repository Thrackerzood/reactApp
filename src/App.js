import React from 'react';
import Home from './home.js';
import Setting from './setting.js';
import Random from './random.js';
import News from './news.js'
import {Header} from './header.js'
import Footer from './footer.js'
import Cat from './search.js'
import CatId from './catId.js'
import './index.css'
import { HashRouter as Router,Link, Switch, Route,BrowserRouter } from 'react-router-dom';
import NotFound from './notFound.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header state={state}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/random" component={Random}/>
          <Route exact path="/setting" component={Setting}/>
          <Route path ="/news" component={News}/>
          <Route exact path ="/search" component={Cat}/>
          <Route path ="/search/:id" component={CatId}/>
          <Route path="" component={NotFound} />
        </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

const  state = [
  {id: 1,title: 'Home',path: '/'},
  {id: 2,title: 'random Cat!',path: '/random'},
  {id: 3,title: 'search',path: '/search'},
  {id: 4,title: 'setting',path: '/setting'},
]