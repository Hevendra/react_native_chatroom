import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm'


export default class App extends Component{

    initializeFirebase() {
        const firebase = require("firebase");
       // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyDq1HGwm7iGnfLK3u4XymygS6RmFVt1frg',
            authDomain: 'auth-11911.firebaseapp.com',
            databaseURL: 'https://auth-11911.firebaseio.com',
            projectId: 'auth-11911',
            storageBucket: 'auth-11911.appspot.com',
            messagingSenderId: '205658073995'
          };
          firebase.initializeApp(config);
       }

       componentWillMount()
       {
           this.initializeFirebase();
       }

    render(){
        return(
            <View>
            <Header headerText="Auth">
            </Header>
            <LoginForm/>
                
               
            </View>
        );
    }
}