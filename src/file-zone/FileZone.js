import React, { Component } from "react";
import "./FileZone.css";

class FileZone extends Component {
    fileZoneAnchor = null;

    handleInputFileZone = () => {
        const { onChange } = this.props;

        onChange(this.fileZoneAnchor.innerHTML);
    };

    handleSelect = () => {
        const { handleSelect } = this.props;

        const selected = window.getSelection().toString();
        if (!!selected) {
            handleSelect(selected);
        }
    };

    render() {
        const { value } = this.props;

        return (
            <div id="file-zone">
                <div
                    ref={node => (this.fileZoneAnchor = node)}
                    contentEditable
                    id="file"
                    dangerouslySetInnerHTML={{ __html: value }}
                    onInput={this.handleInputFileZone}
                    onClick={this.handleSelect}
                ></div>
            </div>
        );
    }
}

export default FileZone;
