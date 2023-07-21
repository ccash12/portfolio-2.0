import {Card,Button} from "react-bootstrap"
import acoupleofcooks from "./images/acoupleofcooks.png"
import ambientartgallery from "./images/ambientartgallery.png"
import foodshipify from "./images/foodshipify.png"
import construction from "./images/construction.png"


function Projects() {

   
    
    const renderCard = (card,index) => {
        return(
        <Card style={{ width: '19rem'  }} key={index}>
            <Card.Img variant="top" src={card.image} />
        <Card.Body>
            <Card.Title >{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
                <a href={card.click} target="_blank" rel="noreferrer">
                <Button variant="primary" >{card.button}</Button> 
                </a>
            </Card.Body>
        </Card>
    
        )
    }

    return(
    <div className="grid" >
        {cardInfo.map(renderCard)}
    </div>
    )
}

export default Projects;