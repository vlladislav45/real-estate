import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import MainPage from './pages/main';
import NotFoundPage from "./pages/notFound";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";

class App extends React.Component{

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={MainPage}/>

                        <Route path='/about-us' component={AboutUs}/>

                        <Route path='/contact' component={Contact}/>

                        <Route component={NotFoundPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
