import {Card,Button} from "react-bootstrap"

function WorkInProgress() {
        const cardInfo = [
            {image:"", title:"Wedding Planner", text:"For all things weddings!"},
            
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

export default WorkInProgress;