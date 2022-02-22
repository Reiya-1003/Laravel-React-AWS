import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
  } from 'react-router-dom';
import Example from './pages/Example.js';

  function App() {
    return (


            <Routes>
             {/* ここに、pathと対応するコンポーネントを書いていく */}
              <Route path='/' exact element={<Example/>}/>
            </Routes>


    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
