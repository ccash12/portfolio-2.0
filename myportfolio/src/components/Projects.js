import {Card,Button} from "react-bootstrap"

function Projects() {

    const cardInfo = [
        {image:"", title:"FoodShipify", text:"This application allows you to browse groceries that you need and have them delivered straight to your door!"},
        {image:"", title:"A Couple of Cooks", text:"This is an interactive website that allows you to browse recipes that other users have added and add ones yourself!"},
        {image:"", title:"Ambient Art Gallery", text:"Art"},
    ]

    const renderCard = (card,index) => {
        return(
        <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
            <Card.Title >{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
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