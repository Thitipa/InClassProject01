import { Card, CardBody, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./AddTodo";

function Home() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Card
        style={{ backgroundColor: "#F7F7F7", margin: "5 auto" , width:"96%"}}
      >
        <CardBody className="row">
          <CardTitle className="d-flex align-items-center justify-content-center" style={{fontSize:"80px"}}>What you need to do?</CardTitle>
          <Todo/>
        </CardBody>
      </Card>
    </div>
  );
}
export default Home;
