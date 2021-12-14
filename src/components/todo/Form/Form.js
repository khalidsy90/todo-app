import React from "react";
import "./form.scss";

import { FormGroup, Card, Elevation, Button } from "@blueprintjs/core";
export default function Form(props) {
  return (
    <>
      <div className="div-flex">
        <div className="toDo">
          <Card
            interactive={true}
            elevation={Elevation.TWO}
            className="formCard"
          >
            <form onSubmit={props.handleSubmit}>
              <h2>Add To Do Item</h2>
              <FormGroup label="To Do Item" labelFor="text-input">
                <input
                  class="bp3-input .modifier"
                  onChange={props.handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                  dir="auto"
                />
              </FormGroup>

              <FormGroup label="Assigned To" labelFor="assignee">
                <input
                  class="bp3-input .modifier"
                  onChange={props.handleChange}
                  name="assignee"
                  type="text"
                  placeholder="Assignee Name"
                  dir="auto"
                />
              </FormGroup>
              <br />
              <FormGroup label="Difficulty" labelFor="assignee">
                <input
                  onChange={props.handleChange}
                  defaultValue={3}
                  type="range"
                  min={1}
                  max={5}
                  name="difficulty"
                  dir="auto"
                />
              </FormGroup>

              <br />
              <label>
                <Button type="submit" id="buttID" >Add Item</Button>
              </label>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}