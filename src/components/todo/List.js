import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

const List = ({list,toggleComplete,data}) => {
  return (
      <Card interactive={true} elevation={Elevation.TWO} key={list.id}>
        <p>{data}</p>
        <p>{list.text}</p>
        <p><small>Assigned to: {list.assignee}</small></p>
        <p><small>Difficulty: {list.difficulty}</small></p>
        <Button onClick={() => toggleComplete(list.id)}> Complete: {list.complete.toString()}</Button>
      </Card>
  );
};

export default List;
