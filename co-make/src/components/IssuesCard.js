import React from 'react'

const IssuesCard = props => {
    return(
        <div className="issuescard-container">
            {props.userData.map(item => {
                return (
                    <div key={item.id} className="issuescard">
                        <h1>{item.title}</h1>
                        <p>{item.post}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default IssuesCard