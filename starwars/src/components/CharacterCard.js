import React from 'react';
import { Card } from 'semantic-ui-react';
function CharacterCard(props) {
console.log(props)

    return (
        <Card>
             <h2>{props.name}</h2>
                 <h3>{props.gender}</h3>
                    <img src="http://placekitten.com/200/300" alt="random kitties" />
                   

        
        <Card>
       
    )
}

export default CharacterCard;