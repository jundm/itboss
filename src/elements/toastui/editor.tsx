//editor
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";
//plugin-colorSyntax
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
//plugin-codeSyntaxHighlight
import Prism from "prismjs";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { CenterDiv, CreateForm, SubmitInput, TitleInput } from "./editorStyle";
//react
import React, { useCallback, useRef, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/utils/Firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";

interface EditorUiProps {
  placeholder: string;
}

const EditorUi = ({ placeholder }: EditorUiProps) => {
  const uid = useSelector(loginUid);
  const colorSyntaxOptions = {
    preset: ["#b02f2f", "#4a22da", "#4cfc00"],
  };
  const [inputs, setInputs] = useState({
    title: "",
  });
  const { title } = inputs;
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const editorRef = useRef<Editor | null>(null);
  console.log("editorRef", editorRef);

  const handleClickButton = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      const editor = editorRef.current.getInstance();
      const content = editor.getHTML();
      await addDoc(collection(db, "posts_free"), {
        title,
        content,
        createdAt: Date.now(),
        updateAt: null,
        creatorId: uid.payload.user.uid,
        createUser: uid.payload.user.user,
      });
    }
    console.log("요청이 완료");
  };

  return (
    <CreateForm onSubmit={handleClickButton}>
      <TitleInput type="text" name="title" onChange={onChange} value={title} />
      <Editor
        placeholder={placeholder}
        initialValue=""
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        language="ko-kr"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[
          [colorSyntax, colorSyntaxOptions],
          [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
      />
      <CenterDiv>
        <SubmitInput type="submit" value="글쓰기" onClick={handleClickButton} />
      </CenterDiv>
    </CreateForm>
  );
};

export default EditorUi;
