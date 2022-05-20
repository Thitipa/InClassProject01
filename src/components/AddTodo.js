  import { Card,Container } from "reactstrap"
  import React, { useState } from "react";
  // import moment from "moment";
  import TodoItem from "./TodoItem";
  import NewTodo from "./NewTodo";
const Todo = () => {
    {
      /* TODO: Use empty array as default todo */
    }
    const [todos, setTodos] = useState([]); // empty array
  
    const deleteTodo = () => {
      setTodos(
        todos.filter((el) => {
          return el.id != 4;
        })
      );
    };
  
    const addTodos = (title, desc, date) => {
      setTodos([{ title, desc, id: new Date(), date }, ...todos]);
    };
  
    return (
      <Container>
        <div minHeight="calc(100vh - 620px)" paddingY={4}>
          <NewTodo addTodo={addTodos} />
          <div/>
          {/* Use grid (see https://mui.com/material-ui/react-grid/) to map elements */}
          <div container spacing={2}>
            {todos.map((el, index) => (
              <div item xs={4}>
                <TodoItem
                  key={index}
                  title={el.title}
                  desc={el.desc}
                  date={el.date}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <Button onClick={deleteTodo}>Hello</Button> */}
      </Container>
    );
  };
export default Todo;