import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
  } from 'react-router-dom';
import Example from './pages/Example';

  function App() {
    return (

        <div>

             {/* ここに、pathと対応するコンポーネントを書いていく */}
             <Switch>
                <Route path='/example' exact component={Example} />
            </Switch>
        </div>

    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
