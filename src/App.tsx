import './app.scss'
import Router from './router/router'

function App() {
  return (
    <div className="app">
        <div className="header">
            <ul>
                <li><a href="#/login">login</a></li>
                <li><a href="#/home">home</a></li>
                <li><a href="#/about">about</a></li>
                <li><a href="#/product">product</a></li>
            </ul>
        </div>
        <div className="router">
          <Router />
        </div>
    </div>
  );
}

export default App;
