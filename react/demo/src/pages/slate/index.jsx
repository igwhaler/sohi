import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// 构建初始状态…
const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text: 'A line of text in a paragraph.',
                    },
                ],
            },
        ],
    },
});

class SlateEditor extends Component {
    state = {
        value: initialValue
    }

    onChange = ({ value }) => {
        // console.log(value);

        this.setState({ value });
    }

    onKeyDown = (event, data, change) => {
        console.log(event.which)

        if (event.which === 55) {
            change.insertText('and');
            return true;
        }
    }

    render() {
        return (
            <Editor
                value={this.state.value}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        );
    }
}

export default SlateEditor;
