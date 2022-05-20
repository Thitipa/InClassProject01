import { Input } from "reactstrap";
import React, { useState } from "react";
import moment from "moment";
import Conclude from "./Conclusion";

const NewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
        <Input
          // className=""
          style={{ width: "500px" }}
          // id="outlined-basic"
          label="To do"
          // variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          aria-label="edit"
          style={{ border: "none" }}
          onClick={() => addTodo(title, desc, moment().format("MMM Do YY"))}
        >
          add!
        </button>
      </div>
      <Conclude />
    </div>
  );
};

export default NewTodo;
