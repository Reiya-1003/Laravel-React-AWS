import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
  } from 'react-router-dom';
import {Example} from './pages/Example';

  function App() {
    return (
        <BrowserRouter>

            <Routes>
             {/* ここに、pathと対応するコンポーネントを書いていく */}
              <Route path='/' exact element={<Example />}/>
            </Routes>

        </BrowserRouter>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
