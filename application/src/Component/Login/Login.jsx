import React from "react";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"
import Swal from 'sweetalert2'


class Login extends React.Component {
    state = {
        user: '',
    };

    componentDidMount() {
        const user = localStorage.getItem('user');
        this.setState({user});
    }

    handleChange = (event) => {
        const input = event.target;
        const value =  input.value;

        this.setState({[input.name]: value});
    };

    handleFormSubmit = () => {
        const {user} = this.state;
        if(user) {
            localStorage.setItem('user', user);
        }else {
            alert("Введите имя пользователя")
        }
    };


    render() {
        if (localStorage.getItem("user")) {
            return <Redirect to={"/movies"}/>
        }
        return (
            <div className={s.body}>
                <div className={s.body_item}>
                <form onSubmit={this.handleFormSubmit} className={s.body_form}>
                    <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Login
