import React from "react";
import EditorUi from "@/components/ToastUi/editor";
import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";

const PostCreate = () => {
  return (
    <div>
      <h1>글쓰기</h1>
      <EditorUi />
    </div>
  );
};

export default PostCreate;
