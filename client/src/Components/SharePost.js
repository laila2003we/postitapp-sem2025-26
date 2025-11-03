import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";

const SharePosts = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Input
              id="share"
              name="share"
              placeholder="Share your thoughts..."
              type="textarea"
            />

            <Button>PostIT</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SharePosts;
