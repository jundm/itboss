//editor
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor, Viewer } from "@toast-ui/react-editor";
//plugin-colorSyntax
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
//plugin-codeSyntaxHighlight
import Prism from "prismjs";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/i18n/ko-kr.js";
//react
import React, { useCallback, useRef, useState } from "react";
import { CenterDiv, CreateForm, SubmitInput, TitleInput } from "./editorStyle";
import {
  addDoc,
  collection,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/utils/Firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { loginUid, loginUser } from "@/utils/Toolkit/Slice/userSlice";
import { useLocation } from "react-router";
import { getDoc } from "firebase/firestore";

interface EditorUiProps {}

const EditorUi = ({}: EditorUiProps) => {
  const Uid = useSelector(loginUid);
  const User = useSelector(loginUser);
  const NickName = User.payload.userReducer.user;
  const slug = Uid.payload.userReducer.uid;
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
  let location = useLocation();
  let pathname = location.pathname.split("/");

  // (async () => {
  //   const getDocRef = await getDoc(docRef);
  //   console.log("docRef", getDocRef.data());
  // })();

  // console.log(collection(db, "posts_free"));
  // const docRef = doc(db, "posts_free");
  // console.log("doc", doc);

  const editorRef = useRef<Editor | null>(null);

  const handleClickButton = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (editorRef.current) {
      const docRef = doc(db, `posts_${pathname[1]}`, `post`);
      await updateDoc(docRef, { number: increment(1) });
      const getDocRef = await getDoc(docRef);
      const getDocRefData = getDocRef.data();
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      const editor = editorRef.current.getInstance();
      const content = editor.getMarkdown();
      await addDoc(collection(db, "posts_free"), {
        title,
        content,
        createdAt: Date.now(),
        updateAt: null,
        creatorId: slug,
        createUser: NickName,
        postNumber: getDocRefData?.number,
      });
    }
    console.log("요청이 완료");
  };
  return (
    <CreateForm onSubmit={handleClickButton}>
      <TitleInput
        type="text"
        name="title"
        onChange={onChange}
        value={title}
        placeholder="제목을 입력해 주세요"
      />
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        language="ko"
        useCommandShortcut={true}
        ref={editorRef}
        placeholder="내용을 입력해 주세요"
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

interface viewerProps {
  stringProps: string;
}

export const ViewerUi = ({ stringProps }: viewerProps) => {
  return (
    <>
      <Viewer
        initialValue={`${stringProps}`}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
};
