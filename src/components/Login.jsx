import { useRef, useState } from "react"

export default function Login() {
  // const [formIsInvalid, setFormIsInvalid] = useState()
  const [emailIsInvalid, setEmailIsInvalid] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted")

    const enteredEmail = email.current.value
    const enteredPassowrd = password.current.value

    const emailIsValid = enteredEmail.includes("@")

    if (!emailIsValid) {
      setEmailIsInvalid(true)
      console.log("email invalid")
      return
    }

    console.log("entered ref valus: ", enteredEmail, enteredPassowrd)
  }

  const email = useRef()
  const password = useRef()

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            name="email"
            ref={email}
            // onChange={}
            // value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a vlid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="passwor d">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  )
}
