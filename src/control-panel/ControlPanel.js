import React, { Component } from "react";
import "./ControlPanel.css";

class ControlPanel extends Component {
  render() {
    const { onModify } = this.props;
    
    return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            onClick={() => {
              onModify("b");
            }}
            className="format-action"
            type="button"
          >
            <b>B</b>
          </button>
          <button
            onClick={() => {
              onModify("i");
            }}
            className="format-action"
            type="button"
          >
            <i>I</i>
          </button>
          <button
            onClick={() => {
              onModify("u");
            }}
            className="format-action"
            type="button"
          >
            <u>U</u>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
