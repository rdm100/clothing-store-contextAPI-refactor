import React from 'react';
import CurrentUserContext from './contexts/current-user/current-user-context';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.jsx';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import CheckOut from './pages/checkout/checkout.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
//async here as making request to firestore database
  componentDidMount() {
// unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged()
// this method returns another method: firebase.unsubscribe().
// so when unsubscribeFromAuth() is called inside the componentWillUnmount, 
// it now has the value of firebase.unsubscribe(), which executes, closing the session.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
           this.setState({ currentUser: {
               id: snapshot.id,
               ...snapshot.data()
            }
           })
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={Homepage} />    
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/signin' render={() =>
             this.state.currentUser ? 
             (<Redirect to='/' />) : 
             (<SignInAndSignUp />)
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;