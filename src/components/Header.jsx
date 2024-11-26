import { SignIn, SignOut } from "./Auth"
import "./Header.css"
export default function Header({ user }){
    return(
        <>
        <header>
        <h1> Sacred Heart Chapel </h1>
        {user ? <SignOut /> : <SignIn />}

        </header>
        </>
    )
}