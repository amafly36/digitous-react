import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      isValidEmail: null,
      isValidPassword: null,
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value })
    const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email_validator_regex.test(e.target.value)) {
      this.setState({ isValidEmail: true })
    } else {
      this.setState({ isValidEmail: null })
    }
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
    if (e.target.value.length >= 6) {
      this.setState({ isValidPassword: true })
    } else {
      this.setState({ isValidPassword: null })
    }
  }
  render() {
    return (
      <form>
        <div className="form-group row">
          <div className="col">
            <label for="inputEmail" className="col-form-label">Email</label>
            <input type="text" className={this.state.isValidEmail ? "is-valid form-control" : "is-invalid form-control"} id="inputEmail" placeholder="amadoudjouldebarry01@gmail.com" value={this.state.email} onChange={this.onEmailChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col">
            <label for="inputPassword" className="col-form-label">Password</label>
            <input type="password" className={this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
            <input type="checkbox" name="conditions" value="ok" />
            Remember me !
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    );
  }
}

export default App;