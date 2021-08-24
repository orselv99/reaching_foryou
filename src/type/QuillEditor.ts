import { StringMap } from "quill";

export type QuillEditorProperty = {
    placeholderText: string;
    toolbar: StringMap;
    /*
    toolbar
    'bold'        // 굵게
    'italic'      // 이탤릭
    'underline'   // 밑줄
    'blockquote'  // 콜아웃
    'strike'      // 취소선
    'code-block'  // 코드블럭
    */
    theme: string;
    width: string;
    minWidth: string;
    preview: boolean;
}