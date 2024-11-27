import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useLogin } from "../../hooks/useLogin"
import { Link } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [eyeOpen, setEyeOpen] = useState(false);

  const { login, error } = useLogin()
  const { isLoading, setIsLoading } = useContext(AuthContext)



  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await login(username, password)
    setIsLoading(false)
  }
  return (
    <div className="login">
      <h1>Tizimga kirish uchun login <br /> parolingizni kiriting!</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="login__input">
          <div className="iconreg">
            <BsPerson />
          </div>
          <input
            type="text"
            placeholder="Foydalanuvchi ismingiz"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login__input">
          <div className="iconreg">
            <RiLockPasswordLine />
          </div>
          <input
            type={eyeOpen ? "password" : "text"}
            placeholder="Foydalanuvchi parolingiz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setEyeOpen(!eyeOpen)} className="eye">{eyeOpen ? <BsEyeSlashFill /> : <BsEyeFill />}</span>
        </div>

        <button disabled={isLoading} className="logbtn" type="submit">Tizimga kiring</button>
        <Link to="/">
          <button disabled={isLoading} className="btnOutLog" type="submit">Asosiy sahifa</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;


