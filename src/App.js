import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux/es/redux";
import Preloader from "./components/Preloader/Preloader";
import {Route, withRouter} from "react-router-dom";
import {initializedApp} from "./redux/app_reducer";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar sidebar={this.props.store.getState().sidebarPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/find_users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);