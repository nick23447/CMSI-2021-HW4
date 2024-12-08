import { fetchSignUps } from "../services/positionService"
import { useState, useEffect } from "react"
import { loggedInUserId } from "../services/authService"
export default function SignUps(){
    const [signups, setSignups] = useState([])
    const userSignUps = []
    useEffect(() => {
        fetchSignUps().then(setSignups)
    },[])
    console.log(signups)
    signups.forEach((position) => {
        if (position[0] != undefined){
            position[0].forEach((signUp) => {
                if( signUp != ""){
                    const item = signUp.split(' ')
                    // if the user signing up has a last and first name the approval will still work !! if there are more names the approval will not go through
                    if (loggedInUserId() == item[2]){
                        if (item.length == 4){
                            userSignUps.push({name: `${item[0]} ${item[1]}`, id: item[2], isApproved: item[3], position: position[1]})
                        } else{
                            userSignUps.push({name: item[0], id: item[1], isApproved: item[2], position: position[1]})
                        }
                            
                    }
                }
            })

        }
    })
    console.log(userSignUps)

    return(
        <>
        <div className="sign-up-container">``
        <h1> My Sign Ups</h1>
        
        <ul>
        {userSignUps.map((item, index) => (
            <li key={index}>
                <div className="sign-up">
                    <h2> You have signed up {item.position}</h2>
                    <h3> You have been Approved {item.isApproved}</h3>
                </div>
            </li>
        ))}
        </ul>
        </div>

        </>
    )
}