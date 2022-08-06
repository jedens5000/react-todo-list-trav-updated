import React, { useState, useEffect } from "react";

const Fetch = () => {
  //   const [inputText, setInputText] = useState('');
  // const [todos, setTodos] = useState();
  // //////////////API FETCH//////////////////////////
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos?start=1&_limit=8")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, []);
  //   /////////////END FETCH/////////////////////////

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos &&
          todos.map((post) => {
            return (
              <p key={post.id}>
                {post.complete} {post.id}. {post.title}{" "}
              </p>
            );
          })}
      </ul>
    </div>
  );
};

export default Fetch;
