import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import Movie from "./Component/Movies/Movie/Movie";
import MoviesPage from "./Component/Movies/MoviesPage";
import Header from "./Component/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Component/Login/Login";
import s from "./App.module.css"

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

class App extends Component {
    logOut = () => {
        localStorage.clear()
        this.setState({
            user: '',
            rememberMe: false
        });
        this.props.history.push('/login')
    }

    render() {
        return (<div>
                <div>
                    <Header logOut={this.logOut} {...this.props}/>
                </div >
                <Route path='/login' render={() =><Login/>}/>
                <Content/>
            </div>
        )
    }
}

let AppContainer = withRouter(App)

const TimurReufAPP = (props) => {
    return <BrowserRouter>
        <ApolloProvider client={client}>
            <AppContainer/>
        </ApolloProvider>
    </BrowserRouter>
}
export default TimurReufAPP


const Content = () => {
    if (localStorage.getItem("user")) {
        return (
            <div>
                <Route exact path='/' render={() => <Redirect to={'/movies'}/>}/>
                <Route path='/movies' render={() => <MoviesPage/>}/>
                <Route path={"/movie/:id?"} render={(props) => <Movie{...props}/>}/>
            </div>
        )
    }else return <div></div>
}
