import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
  } from 'react-router-dom';
import Example from './pages/Example.js';
import Home from './pages/Home.js'
import PostEdit from './pages/PostEdit'

  function App() {
    return (


            <Routes>
             {/* ここに、pathと対応するコンポーネントを書いていく */}
              <Route path='/example' exact element={<Example/>}/>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/post/edit/:id' exact element={<PostEdit/>}/>
              <Route path='/post/edit'  exact element={<PostEdit/>}/>
            </Routes>


    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
