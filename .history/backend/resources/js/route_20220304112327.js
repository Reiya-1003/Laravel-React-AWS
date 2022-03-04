import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
  } from 'react-router-dom';

import Home from './pages/Home.js'
import PostEdit from './pages/PostEdit'

  function App() {
    return (


            <Routes>
             {/* ここに、pathと対応するコンポーネントを書いていく */}
             
              <Route path='/' exact element={<Home/>}/>
              <Route path='/post/edit/:id' exact element={<PostEdit/>}/>

            </Routes>


    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
