import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './Results/SearchResults';
import Layout from './Layout/Layout';

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <SearchForm />
            </Route>
            <Route path='/results'>
              <SearchResults />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
