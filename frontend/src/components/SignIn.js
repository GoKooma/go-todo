import React from 'react';

const SignIn = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <h1>Sign in to your account</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="email" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default SignIn;