  import { Box, Fab, Stack, TextField, Typography } from "@mui/material";
  import React, { useState } from "react";
  import moment from "moment";
  
  const NewTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
      <div>
        
        <div display="flex" gap={2}>
          <Stack gap={2} flex={1}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button
              aria-label="edit"
              style={{}}
              onClick={() => addTodo(title, desc, moment().format("MMM Do YY"))}>add!</button>
          </Stack>
          <Stack justifyContent="flex-end">
            {/* <Fab
              color="secondary"
              aria-label="edit"
              onClick={() => addTodo(title, desc, moment().format("MMM Do YY"))}
            > */}
              {/* <ChevronRight 
              aria-label="edit"
              onClick={() => addTodo(title, desc, moment().format("MMM Do YY"))} /> */}
            {/* </Fab> */}
          </Stack>
        </div>
      </div>
    );
  };
  
  export default NewTodo;
  