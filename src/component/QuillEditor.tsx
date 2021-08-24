import { useState, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillEditorProperty } from '../type/QuillEditor';

export const QuillEditor = (prop: { value: QuillEditorProperty }) => {
    const quillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState('');

    console.log(prop.value.toolbar);

    // https://velog.io/@sklsh917/React-Quill%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0with-TypeScript
    // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀림
    const modules = useMemo(() => ({
        toolbar: prop.value.toolbar
    }), []);

    return (
        <>
            <div>
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                            quillRef.current = element;
                        }
                    }}
                    value={contents}
                    theme={prop.value.theme}
                    modules={modules}
                    onChange={setContents}
                    placeholder={prop.value.placeholderText}></ReactQuill>
            </div>
        </>
    );
}