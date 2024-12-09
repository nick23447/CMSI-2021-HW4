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
                    let isApproved = false
                    // if the user signing up has a last and first name the approval will still work !! if there are more names the approval will not go through
                        console.log(loggedInUserId, item)
                        if (item.length == 4){
                            if (loggedInUserId() == item[2]){
                                if (item[3] == "True"){
                                    isApproved = true
                                }
                            userSignUps.push({name: `${item[0]} ${item[1]}`, id: item[2], isApproved: isApproved, position: position[1]})
                            }
                        } else{
                            if (loggedInUserId() == item[1]){
                                if (item[2] == "True"){
                                    isApproved = true
                                }
                            userSignUps.push({name: item[0], id: item[1], isApproved: isApproved, position: position[1]})
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
                {item.isApproved ? 
                (
                <div className="approved">
                    <h2> You have signed up {item.position}</h2>
                    <h3> You {" "} have been Approved  </h3>
                </div> 
                ) : 
                (<div className="not-approved">
                    <h2> You have signed up {item.position}</h2>
                    <h3> You {" "} have not been Approved  </h3>
                </div> 
                )
            }
            </li>
        ))}
        </ul>
        </div>

        </>
    )
}