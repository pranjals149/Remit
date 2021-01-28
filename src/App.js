import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mail from './Components/Mail/Mail';
import EmailList from './Components/EmailList/EmailList';
import SendMail from './Components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
          <div className="App">
            <Header />

            <div className='app__body'>
              <Sidebar />

              <Switch>
                <Route path='/mail'>
                  <Mail />
                </Route>

                <Route path='/'>
                  <EmailList />
                </Route>

              </Switch>

            </div>

            {sendMessageIsOpen && <SendMail />}

          </div>
        )}

    </Router>
  );
}

export default App;
