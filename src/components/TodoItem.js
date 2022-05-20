// import { AccessTime } from "@mui/icons-material";
import {
  Button,
  CardText,
  
} from "reactstrap";
import React from "react";

const TodoItem = ({ title, desc, date }) => {
  return (
    <div style={{ maxWidth: 345 }} className="row">
      <div>
        <div gutterBottom variant="h5" component="div">
          {title}
        </div>
        <div display="d-flex " alignItems="center">
          {/* <AccessTime /> */}
          <div
            variant="body2"
            color="text.primary"
            style={{ marginLeft: 1 }}
          >
            {date}
            {/* TODO: Use moment (see https://momentjs.com/) to format time */}
          </div>
        </div>
      </div>
      {/* <Divider /> */}
      <div>
        <Button size="small">Mark as complete</Button>
      </div>
    </div>
  );
};

export default TodoItem;