import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"
// import Input from "./Input.jsx"
import { Input } from "./Input"
import { useInput } from "../hooks/useInput.js"
export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // })

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // })

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value)
  })

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    return hasMinLength(value, 6)
  })

  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email)

  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValues.password, 6)

  function handleSubmit(event) {
    event.preventDefault()

    if (emailHasError || passwordHasError) {
      return
    }

    console.log(emailValue, passwordValue)
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }))
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }))
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }))
  // }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          // onBlur={() => handleInputBlur("email")}
          onBlur={handleEmailBlur}
          // onChange={(event) => handleInputChange("email", event.target.value)}
          onChange={handleEmailChange}
          // value={enteredValues.email}
          value={emailValue}
          // error={emailIsInvalid && "Please enter a valid email!"}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          // onChange={(event) =>
          //   handleInputChange("password", event.target.value)
          // }
          // onBlur={() => handleInputBlur("password")}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          // value={enteredValues.password}
          value={passwordValue}
          // error={passwordIsInvalid && "Please enter a valid password!"}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  )
}
