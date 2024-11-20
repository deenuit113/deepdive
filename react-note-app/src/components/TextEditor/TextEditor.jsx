import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "color",
    "background",
    "image",
    "blockquote",
    "code-block",
]

const modules = {
    toolbar: [
        [{ list: "ordered" }, { list: "bullet" }],
        [],
        ["bold","italic", "underline", "strike"],
        [],
        [{ color: [] }, { background: [] }],
        [],
        ["image", "blockquote"],
    ]
}

const TextEditor = ({ value, setValue, color }) => {
    return (
        <Container noteColor={color}>
            <ReactQuill
                value={value}
                onChange={setValue}
                formats={formats}
                modules={modules}
            />
        </Container>
    )
}

const Container = styled.div`
    .ql-editor {
        height: 200px;
        background-color: ${({ noteColor }) => noteColor };
    }
`

export default TextEditor