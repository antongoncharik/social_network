import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebar={props.store.getState().sidebarPage}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <ProfileContainer store={props.store}/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/find_users' render={() => <UsersContainer store={props.store}/>}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>)
}

export default App;
