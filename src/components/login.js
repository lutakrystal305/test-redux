import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [valueMail, setValueMail] = useState('');
  const [valuePass, setValuePass] = useState('');
  const isLogin = useSelector(state => state.login);
  const isLogged = useSelector(state => state.checkLogged);

  const dispatch = useDispatch();

  const handleChangeMail = (event) => {
    setValueMail(event.target.value);
  }
  const handleChangePass = (event) => {
    setValuePass(event.target.value);
  }
  const checkAuth = (token) => {
    axios
      .post('https://amber-api.herokuapp.com/user/checkToken', { token })
      .then((res) => {
        console.log(res.data)
        dispatch({type: 'LOGGED', dataUser: res.data})
      })
  }
  const handleLogin = () => {
    const user= {
      email: valueMail,
      password: valuePass
    }
    axios
      .post('https://amber-api.herokuapp.com/user/login', user)
      .then((res) => {
        dispatch({type: 'ISLOGIN'});
        checkAuth(res.data.token);
        setValueMail('');
        setValuePass('');
      })
  }
  return(
    <div className='Login'>
      <input type='text' placeholder='Email' onChange={handleChangeMail} />
      <input type='password' placeholder='Password' onChange={handleChangePass} />
      <button onClick={handleLogin} > Login </button>
      <h5>{isLogin.isLogin ? 'login' : 'none'}</h5>
      <h6>{isLogged.isLogged ? isLogged.user.name : 'zz'}</h6>
    </div>
  )
}
export default Login;