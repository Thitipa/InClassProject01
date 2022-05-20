import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const TodoItem = ({ title, desc, date }) => {
  return (
    <div sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {/* Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator. */}
          {desc}
        </Typography>
        <Box display="flex" alignItems="center">
          <AccessTime />
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginLeft: 1 }}
          >
            {date}
            {/* TODO: Use moment (see https://momentjs.com/) to format time */}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">Mark as complete</Button>
      </CardActions>
    </div>
  );
};

export default TodoItem;