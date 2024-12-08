import { approvePositionSignUp } from "../services/positionService"
export default function ApprovePosition({ title, slots, user, massInfo}){
    function approve(index, slots, massInfo, title){
        const currUser = userSignUps[index]
        currUser.isApproved = 'True'
        const data = `${currUser.name} ${currUser.id} ${currUser.isApproved}`
        slots[index] = data
        approvePositionSignUp(slots, massInfo, title)
    }
    const maxSpots = {"Acolytes": 4, "Eucharistic Ministers": 3, "Lectors": 3}
    const userSignUps = []
    for (let i = 0; i < slots.length; i++){
        const item = slots[i].split(' ')
        // if the user signing up has a last and first name the approval will still work !! if there are more names the approval will not go through
        if (item.length == 4){
            userSignUps.push({name: `${item[0]} ${item[1]}`, id: item[2], isApproved: item[3]})
        } else{
            userSignUps.push({name: item[0], id: item[1], isApproved: item[2]})
        }

    }
    console.log(userSignUps)
    return(
    
        <>
        <div className="approve-position">
            <h3> {title} </h3>
            <h4> There are currently {slots.length}/{maxSpots[title]} Positions Filed</h4>
            <ul className="approve">
            {userSignUps.map((signUp, index) => {
                return (
                    <li key={index}>
                        <p className="name"> {signUp.name} </p>
                        <button onClick={() => approve(index, slots, massInfo, title)}> Approve this Person</button>
                    </li>
                )
            })}
            </ul>
        </div>
        
        </>
    )
}