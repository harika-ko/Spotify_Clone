import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux'

let DisplaySelected = () => {

    const song = useSelector((state) => state.selected.song);

    return (
        <div>
            <Container style={{ color: 'white' }}>
                <Row>
                    <Col>
                        <p>&nbsp; You are now listening to <span style={{ fontStyle: "italic" }}>"{song.title}"</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default DisplaySelected;

