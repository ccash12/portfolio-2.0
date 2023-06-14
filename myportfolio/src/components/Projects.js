import {Card,Button} from "react-bootstrap"
import acoupleofcooks from "./images/acoupleofcooks.png"
import ambientartgallery from "./images/ambientartgallery.png"
import foodshipify from "./images/foodshipify.png"
import construction from "./images/construction.png"


function Projects() {

    const cardInfo = [
        {image:`${construction}`, title:"The Ultimate Wedding Organizer", text:"Planning a wedding can be stressful, but it does not have to be. With the Ultimate Wedding Organizer you will have everthing in one place.  ", button: "The Ultimate Wedding Organizer", click:""},
        {image:`${foodshipify}`, title:"FoodShipify", text:"Foodshipify is an application that allows you to have food delivered straight to your door. At Foodshipify we have a variety of all foods and want to make the stress of grocery shopping easy on you. Let us do the work for you, so all you have to think about is putting ingredient together for a delicious meal.",button: "Foodshipify", click:"http://foodshipify-frontend.s3-website.us-east-2.amazonaws.com"},
        {image:`${acoupleofcooks}`, title:"A Couple of Cooks", text:"Are you tired of trying to figure out every night what you want to eat for dinner? A Couple of Cooks is a place where you can browse new recipes, save them to view later, and add new recipes. People from around the world can add and share recipes that you can cook in your own kitchen",button: "A Couple of Cooks",click:"http://acoupleofcooks-frontend.s3-website.us-east-2.amazonaws.com"},
        {image:`${ambientartgallery}`, title:"Ambient Art Gallery", text:"Amibient Art Gallery is an appointment only Art Gallery in Las Vegas, Nevada. By ehibiting art work ranging from paintings, drawings, photography, sculpture, and video, Ambient Art Gallery strives to explore and promote all forms of visual expression.", button: "Ambient Art Gallery", click:"https://ambient-art.web.app/"},
    ]

    
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