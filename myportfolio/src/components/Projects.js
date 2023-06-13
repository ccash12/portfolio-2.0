import {Card,Button} from "react-bootstrap"
import acoupleofcooks from "./images/acoupleofcooks.png"
import ambientartgallery from "./images/ambientartgallery.png"
import foodshipify from "./images/foodshipify.png"
import construction from "./images/construction.jpg"


function Projects() {

    const cardInfo = [
        {image:`${construction}`, title:"The Ultimate Wedding Organizer", text:"For all things Weddings!!!", button: "The Ultimate Wedding Organizer", click:""},
        {image:`${foodshipify}`, title:"FoodShipify", text:"This application allows you to browse groceries that you need and have them delivered straight to your door!",button: "Foodshipify", click:"http://foodshipify-frontend.s3-website.us-east-2.amazonaws.com"},
        {image:`${acoupleofcooks}`, title:"A Couple of Cooks", text:"This is an interactive website that allows you to browse recipes that other users have added and add ones yourself!",button: "A Couple of Cooks",click:"http://acoupleofcooks-frontend.s3-website.us-east-2.amazonaws.com"},
        {image:`${ambientartgallery}`, title:"Ambient Art Gallery", text:"Art", button: "Ambient Art Gallery", click:"https://ambient-art.web.app/"},
    ]

    
    const renderCard = (card,index) => {
        return(
        <Card style={{ width: '19rem'  }} key={index} className="box">
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