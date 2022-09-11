import { Row, Tag, Checkbox, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

// import {toggleTodoStatus} from "../../redux/actions"

import todoSlice, { updateTodo } from "../TodoList/todosSlice";


const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, completed, id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const tongleCheckox = () => {
    setChecked(!checked);
    // dispatch(todoSlice.actions.toggleTodoStatus(id))
    dispatch(updateTodo(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={tongleCheckox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
