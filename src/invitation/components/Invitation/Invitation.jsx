import {UserList} from "../Users/UserList";
import React, {useState} from "react";
import {Success} from "../Success/Success";
import "./invitation.scss";

export function Invitation() {
    const [sent, setSent] = useState(false);
    const [invitationCounter, setInvitationCounter] = useState(0);

    return (
        <div className="App">
            {sent ? <Success count={invitationCounter}/> : <UserList setSent={setSent} setInvitationCounter={setInvitationCounter}/>}
        </div>
    )
}
