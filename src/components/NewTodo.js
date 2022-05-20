import {
    ArrowRight,
    ArrowRightAlt,
    ArrowRightRounded,
    ChevronRight,
  } from "@mui/icons-material";
  import { Box, Fab, Stack, TextField, Typography } from "@mui/material";
  import React, { useState } from "react";
  import moment from "moment";
  
  const NewTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Add new To-do
          <ChevronRight 
              aria-label="edit"
              onClick={() => addTodo(title, desc, moment().format("MMM Do YY"))} />
        </Typography>
        <div display="flex" gap={2}>
          <Stack gap={2} flex={1}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              minRows={3}
              multiline
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
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
  