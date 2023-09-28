import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext, { LoginDispatchContext } from "../../store/login-context"

const Logout = () => {
    const navigate = useNavigate()
    const loginDispatch = useContext(LoginDispatchContext)
    loginDispatch({type: "logout"})
    navigate("/")
    console.log("logout")
}

export default Logout