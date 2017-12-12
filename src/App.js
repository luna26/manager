import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCMkG6bbPqR4YRI1vRK8Qa06Dk42fXU3Bk',
            authDomain: 'manager-aef28.firebaseapp.com',
            databaseURL: 'https://manager-aef28.firebaseio.com',
            projectId: 'manager-aef28',
            storageBucket: 'manager-aef28.appspot.com',
            messagingSenderId: '452745593905'
          };

          firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm /> 
            </Provider>    
        );
    }
}

export default App;