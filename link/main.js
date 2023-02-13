import './style.css';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import NotFound from './src/pages/404';
import AddBlog from './src/pages/AddBlog';
import Details from './src/pages/Details';

const page = window.location.pathname;
const userData = localStorage.getItem('userData');

switch(page){
  case "/":
    Home()
    break

  case "/login":
    userData ? window.location.href="/" : Login()
    break

  case "/register":
    userData ? window.location.href="/" : Register()
    break

  case "/addBlog":
    userData ? AddBlog() : window.location.href = "/login"
    break

  case '/details':
    Details()
    break

  default:
    NotFound()
}
