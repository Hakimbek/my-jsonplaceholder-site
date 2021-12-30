import './App.css';
import {Nav, NavItem, NavLink} from "reactstrap";
import {Route, Link, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import './index.css'

function App() {

    return (
        <div className="container">

            <div className="row my-3">
                <div className="col-md-12">
                    <Nav tabs>
                        <NavItem>
                            <NavLink>
                                <Link to="/" className="link">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/posts" className="link">Posts</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/comments" className="link">Comments</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/todos" className="link">Todos</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>

            <div className="row">
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"posts"} element={<Posts/>}/>
                        <Route path={"comments"} element={<Comments/>}/>
                        <Route path={"todos"} element={<Todos/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
