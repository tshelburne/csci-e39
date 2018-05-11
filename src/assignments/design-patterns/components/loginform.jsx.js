import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({formName, loginUrl, methodType}) => (
	<form name={formName} action={loginUrl} method={methodType}>
      <label htmlFor='username'>username:</label> 
      <input id='username' type='text'/>
      <label htmlFor='password'>password:</label> 
      <input id='password' type='password'/>
      <input type="submit"/>
    </form>
)

LoginForm.propTypes = {
    formName: PropTypes.string,
    loginUrl: PropTypes.string,
	methodType: PropTypes.string,
}

export default LoginForm