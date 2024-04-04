// import React from 'react'
import Team from "../assets/team.jpg";

const TeamComp = () => {
    return (
        <div>
            <div className="ml-6">
                <img src={Team} className="rounded-3xl" />
                <h2 className="font-medium py-4 pb-1">Adeline Tay</h2>
                <p className="text-xs font-light">Web Designer</p>
            </div>
        </div>
    )
}

export default TeamComp