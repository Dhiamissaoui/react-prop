import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cr7 from '../images/cr7.jpg';
import neymar from '../images/neymar.jpg';
import sallah from '../images/sallah.jpg';
import messi from '../images/messi.JPG';

var PlayerCard = () => {
    return (
        <div>
            <h1 className="text-center mb-4">Player Cards</h1>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={cr7} />
                        <Card.Body>
                            <Card.Title>Cristiano Ronaldo</Card.Title>
                            <Card.Text>
                                Portuguese professional footballer who plays as a forward.
                            </Card.Text>
                            <Button variant="primary">View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={neymar} />
                        <Card.Body>
                            <Card.Title>Neymar Jr</Card.Title>
                            <Card.Text>
                                Brazilian professional footballer who plays as a forward.
                            </Card.Text>
                            <Button variant="primary">View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={sallah} />
                        <Card.Body>
                            <Card.Title>Mohamed Salah</Card.Title>
                            <Card.Text>
                                Egyptian professional footballer who plays as a forward.
                            </Card.Text>
                            <Button variant="primary">View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={messi} />
                        <Card.Body>
                            <Card.Title>Lionel Messi</Card.Title>
                            <Card.Text>
                                Argentine professional footballer who plays as a forward.
                            </Card.Text>
                            <Button variant="primary">View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default PlayerCard;