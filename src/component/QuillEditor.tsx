import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillEditorProperty } from '../type/QuillEditor';
import { Preview } from './Preview';

export const QuillEditor = (prop: { value: QuillEditorProperty }) => {
    const quillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState('');

    // https://quilljs.com/docs/modules/toolbar/
    console.log(prop.value);

    const modules = { toolbar: prop.value.toolbar };

    return (
        <>
            <ReactQuill
                style={{ width: prop.value.width, minWidth: prop.value.minWidth }}
                value={contents}
                theme={prop.value.theme}
                modules={modules}
                onChange={setContents}
                placeholder={prop.value.placeholderText}
                ref={(element) => {
                    if (element !== null) {
                        quillRef.current = element;
                    }
                }}
            />
            {prop.value.preview === true ? <Preview html={contents} /> : null}
        </>
    );
}