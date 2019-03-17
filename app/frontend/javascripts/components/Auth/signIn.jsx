import React from "react"
import { Field, reduxForm } from "redux-form"

const Form = ({ handleSignInSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSignInSubmit}>
        <div className="row">
          <div className="col-lg-4 offset-lg-4 mt-5 pt-5 mb-4 text-center">
            <h1 className="display-4">
              ACCOUNT
              <br />
              BUNDLER
            </h1>
          </div>
          <div className="col-lg-4 offset-lg-4 mt-3 mb-2">
            <Field name="email" component="input" type="text" placeholder="メールアドレス" className="form-control" />
          </div>
          <div className="col-lg-4 offset-lg-4 mb-4">
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="パスワード"
              className="form-control"
            />
          </div>
          <div className="col-lg-2 offset-lg-5 text-center">
            <button type="submit" className="btn btn-dark btn-block">
              ログイン
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: "signIn"
})(Form)
