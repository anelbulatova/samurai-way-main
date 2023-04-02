import React from 'react';
import './Components/App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    // @ts-ignore
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navigation/>
            <div className='App-maincontent'>
                <Route exact path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/music" component={Profile}/>
                <Route path="/news" component={Profile}/>
                <Route path="/settings" component={Profile}/>
            <Dialogs />
            </div>
            {/*  <Profile/>*/}
        </div>
        </BrowserRouter>


    );
}

export default App;
