import React from 'react';

function CharacterCard(props) {
console.log(props)

    return (
        <div>
             <h2>{props.name}</h2>
                 <h3>{props.gender}</h3>
                    <img src="http://placekitten.com/200/300" alt="random kitties" />
                   

        
        </div>
       
    )
}

export default CharacterCard;