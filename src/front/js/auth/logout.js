import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.js"

const logout = document.querySelector('#logout')

if (logout){
    logout.addEventListener("click", async () => {
        await signOut(auth)
        console.log('Usuario cerro sesion')
    })

}