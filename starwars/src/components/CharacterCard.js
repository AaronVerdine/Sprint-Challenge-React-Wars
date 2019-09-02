import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.scss';

function CharacterCard(props) {
console.log(props)

    return (
        <Card className="card-stylz">
        <Image src="http://placekitten.com/200/300" alt="random kitties" />
             <Card.Header className="content-stylz">{props.name}</Card.Header>
                 <h3>{props.gender}</h3>
                    
        </Card>
       
    )
}

export default CharacterCard;