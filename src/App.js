import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";
import wrapRange from 'wrap-range-text';

const onModifySelectedWord = ({ tag, selected, value }) => {
    let updatedHTML = value;
    const selectedWihTag = `<${tag}>${selected}</${tag}>`;

    if (value.indexOf(selectedWihTag) !== -1) {
        updatedHTML = value.replace(selectedWihTag, selected);
    } else {
        updatedHTML = value.replace(selected, selectedWihTag);
    }

    return updatedHTML;
}

class App extends Component {
    state = {
        value: "",
        selected: null
    };

    getText = async () => {
        const result = await getMockText();

        this.setState({
            value: result
        });
    };

    handleChangeEditor = value => {
        this.setState({
            value
        });
    };

    handleSelect = selected => {
        this.setState({
            selected
        });
    };

    handleModifySelected = tag => {
        const { selected, value } = this.state;

        if (selected) {
            const updatedHTML = onModifySelectedWord({
                tag,
                selected,
                value
            })

            this.setState({
                value: updatedHTML,
            })
        }
    };

    componentDidMount() {
        this.getText();
    }

    render() {
        const { value, selected } = this.state;

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel onModify={this.handleModifySelected} />
                    <FileZone
                        value={value}
                        onChange={this.handleChangeEditor}
                        handleSelect={this.handleSelect}
                    />
                </main>
            </div>
        );
    }
}

export default App;
