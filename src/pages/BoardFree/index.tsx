import { db } from "@/utils/Firebase/firebaseConfig";
import {
  collection,
  DocumentChange,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BoardDiv,
  BoxDiv,
  CenterDiv,
  CreateButton,
  DateDiv,
  DviedDiv,
  Links,
  TitleDiv,
  TopDiv,
  UserDiv,
} from "./styles";
import { useNavigate } from "react-router";

interface postsProps {
  id: string;
  createuser: string;
  title: string;
  createAt: string;
}

const BoardFree = () => {
  const navigate = useNavigate();
  const initialValue: postsProps[] = [];
  const [posts, setPosts] = useState(initialValue);
  const BoardFreeRef = collection(db, "posts_free");
  const BoardFree = query(BoardFreeRef, orderBy("createdAt"));

  useEffect(() => {
    let tasks: postsProps[] = [];
    onSnapshot(BoardFree, (querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot
        .docChanges()
        .forEach((change: DocumentChange<DocumentData>) => {
          console.log("change", change.doc.data());
          if (change.type === "added") {
            tasks.push({
              id: change.doc.id,
              title: change.doc.data().title,
              createuser: change.doc.data().createUser,
              createAt: change.doc.data().createdAt,
            });
          }
        });
      setPosts(tasks);
    });
  }, []);

  // console.log("post", posts);

  return (
    <CenterDiv>
      <TopDiv>
        <h2>자유 게시판</h2>
        <CreateButton onClick={() => navigate("/free/create")}>
          글쓰기
        </CreateButton>
      </TopDiv>
      <BoxDiv>
        <div>
          {posts.map(({ id, createuser, title, createAt }) => {
            return (
              <div key={id}>
                <Links to={`/free/${id}`}>
                  <BoardDiv>
                    <TitleDiv>{title}</TitleDiv>
                    <DviedDiv>
                      <UserDiv>{createuser}</UserDiv>
                      <DateDiv>{createAt}</DateDiv>
                    </DviedDiv>
                  </BoardDiv>
                </Links>
              </div>
            );
          })}
        </div>
      </BoxDiv>
    </CenterDiv>
  );
};

export default BoardFree;
