import { db } from "@/utils/Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { ViewerUi } from "@/components/ToastUi/editor";

interface postsProps {
  content: string;
  createUser: string;
  createdAt: number;
  creatorId: string;
  title: string;
  updateAt?: number;
}

const BoardForm = ({}) => {
  const navigate = useNavigate();
  let location = useLocation();
  let pathname = location.pathname.split("/");
  let initialState: postsProps = {
    title: "",
    content: "",
    createUser: "",
    createdAt: 0,
    creatorId: "",
    updateAt: undefined,
  };

  const [content, setContent] = useState(initialState);
  console.log("content", content);

  const docRef = doc(db, `posts_${pathname[1]}`, `${pathname[2]}`);
  let tasks: postsProps[] = [];
  useEffect(() => {
    (async () => {
      const getDocRef = await getDoc(docRef);
      if (getDocRef.exists()) {
        const getDocRefData = getDocRef.data();
        console.log("getDocRef", getDocRefData.content);
        setContent({
          title: getDocRefData.title,
          content: getDocRefData.content,
          createUser: getDocRefData.createUser,
          createdAt: getDocRefData.createdAt,
          creatorId: getDocRefData.creatorId,
          updateAt: getDocRefData.updateAt,
        });
      } else {
        navigate("/404");
      }
    })();
  }, [location]);
  console.log("content", content.content);

  return (
    <div>
      <h1>{content.title} </h1>
      {content.content ? (
        <div>
          <ViewerUi stringProps={content.content} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BoardForm;
