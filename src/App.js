import React, {Suspense} from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {initializedApp} from "./redux/app_reducer";
import Footer from "./components/Footer/Footer";
import NavbarPanel from "./components/Navbar/Navbar";
import {compose} from "redux";
import {store} from "./redux/redux_store";
import {withSuspense} from "./common/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarPanel sidebar={this.props.sidebarPage}/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={withSuspense(Music)}/>
                        <Route path='/find_users' render={() => <UsersContainer/>}/>
                        <Route path='/settings' render={withSuspense(Settings)}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        sidebarPage: state.sidebarPage
    }
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp;