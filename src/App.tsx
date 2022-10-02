
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/home"
import HeadTail from "./screens/headTail"
import About from "./screens/about"
import { Provider } from 'react-redux';
import {store} from './store/store';

const routes = [
  {
    id: 1,
    route: "/",
    component: Home
  },
  {
    id: 2,
    route: "/about",
    component: About
  },
  {
    id: 3,
    route: "/head-tail",
    component: HeadTail
  },
  {
    id: 4,
    route: "*",
    component: Home
  }
]

// when any route does't match go to home page, i have added this logic.
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((rout) => {
            return (
              <Route path={rout.route} key={rout.id} element={<rout.component />} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
