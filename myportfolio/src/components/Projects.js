import {Card,Button} from "react-bootstrap"
import acoupleofcooks from "./images/acoupleofcooks.png"


function Projects() {

    const cardInfo = [
        {image:"", title:"The Ultimate Wedding Organizer", text:"For all things Weddings!!!", button: "The Ultimate Wedding Organizer"},
        {image:"", title:"FoodShipify", text:"This application allows you to browse groceries that you need and have them delivered straight to your door!",button: "Foodshipify"},
        {image:{acoupleofcooks}, title:"A Couple of Cooks", text:"This is an interactive website that allows you to browse recipes that other users have added and add ones yourself!",button: "A Couple of Cooks"},
        {image:"", title:"Ambient Art Gallery", text:"Art", button: "Ambient Art Gallery"},
    ]

    const renderCard = (card,index) => {
        return(
        <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src={card.image} />
        <Card.Body>
            <Card.Title >{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
            <Button variant="primary">{card.button}</Button> 
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