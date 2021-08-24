import React from 'react';
import { QuillEditor } from '../component';
import { QuillEditorProperty } from '../type/QuillEditor';

export const Write = () => {
    const property: QuillEditorProperty = {
        placeholderText: '입력해주세요.',
        toolbar: {
            container: [
                ['italic', 'underline', 'bold', 'blockquote', 'strike', 'code-block'],
                [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                    { align: [] },
                ],
                ['image', 'video'],
            ],
            handlers: {}
        },
        theme: 'snow',
        width: '800px',
        minWidth: '600px',
        preview: true,
    };

    return <div>
        <QuillEditor value={property} />
    </div>;
}