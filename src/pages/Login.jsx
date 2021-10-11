import React from 'react'
import logo from '../assets/images/bootstrap-logo.svg'

const Login = () => {
    return (
        <main className="form-signin mx-auto my-5 w-25">
            <form>
                <div className="row my-4 mx-auto w-25">
                    <img src={logo} alt="" width="72" height="57"/>
                </div>
                <h1 className="h3 my-3 fw-normal text-center">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox my-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
    )
}

export default Login


