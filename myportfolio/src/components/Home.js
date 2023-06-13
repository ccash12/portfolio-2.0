import C from './images/C.png'

function Home() {
    return(
        <div className="HomeContainer">
            <div className="HomeText">
                <h1>Hello! I am Courtney Cash</h1>
                <h4> I am full stack developer and software engineer based in Seattle, Washington</h4>
                <h6>Javascript, React.js, Node,js Ruby, Ruby on Rails, Java, PL/SQL, MySQL, SQL, Oracle  </h6>
            </div>
            <div className="circleCourtney">
                <img src={C} alt= "C"/>
            </div>
        </div>
    )
}

export default Home;