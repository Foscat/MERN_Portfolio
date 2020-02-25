import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./components/pages/Home"
import ReachOut from "./components/pages/ReachOut";
import NoMatch from './components/pages/NoMatch';
import NavBar from "./components/parts/NavBar";
import Hackathon from './components/pages/Hackathon';
import ClientBlog from './components/pages/ClientBlog';
import PostPortal from './components/pages/PostPortal';
import {colors} from "./utils/CSS";
// This is the router for react page components
class App extends Component {
    render() {
        return (
            <div style={{backgroundColor: colors.lightGrey, minHeight: "100vh", height: "100%"}} >
                {/* Allows navbar to stay on all pages */}
                <NavBar />
                <Router>
                    <div className="m-1 pt-2">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/reachOut" component={ReachOut} />
                            <Route exact path="/blog" component={ClientBlog} />
                            <Route exact path="/hackathon" component={Hackathon} />
                            <Route exact path="/blog/writersRoom" component={PostPortal} />
                            {/* If no url routes match show error page */}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;