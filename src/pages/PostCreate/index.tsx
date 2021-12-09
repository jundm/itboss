import React from "react";
import EditorUi from "@/elements/toastui/editor";
import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";

const PostCreate = () => {
  return (
    <div>
      <h1>글쓰기</h1>
      <EditorUi placeholder="내용을 작성해 주세요" />

    </div>
  );
};

export default PostCreate;
