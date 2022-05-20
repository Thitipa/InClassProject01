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
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "white", margin: "5 auto" , width:"96%"}}
      >
        <CardBody className="d-flex justify-content-center align-items-center">
          <CardTitle style={{fontSize:"40px"}}>What you need to do?</CardTitle>
          <Todo/>
        </CardBody>
      </Card>
    </div>
  );
}
export default Home;
