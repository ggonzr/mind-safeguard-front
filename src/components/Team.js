/**
 * Team cards
 */

import { Card, Row } from "react-bootstrap";
import "../css/Team.css";

const Team = () => {
    return (
        <Row className="row-cols-2 content">
            <Card>
                <Card.Img
                    className="card-img-top"
                    src="https://avatars.githubusercontent.com/u/37672135?v=4"
                />
                <Card.Body>
                    <Card.Title>
                        <a
                            href="https://github.com/ggonzr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Geovanny González-Rodríguez
                        </a>
                    </Card.Title>
                    <Card.Text>
                        Master of Information Engineer Student & Computer Scientist at Universidad de Los Andes
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img
                    className="card-img-top"
                    src="https://avatars.githubusercontent.com/u/25349186?v=4"
                />
                <Card.Body>
                    <Card.Title>
                        <a
                            href="https://github.com/iaSalazar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Iván Salazar Ortiz
                        </a>
                    </Card.Title>
                    <Card.Text>
                        Master of Information Engineer Student & Computer Scientist at Universidad de Los Andes
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
};

// Export component
export default Team;