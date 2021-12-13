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
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BoardDiv, BoxDiv, TitleDiv, UserDiv } from "./styles";

interface postsProps {
  id: string;
  createuser: string;
  title: string;
  content: string;
  createAt: number;
  updateAt?: number;
}

const BoardFree = () => {
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
          // console.log("change", change.doc.data());
          if (change.type === "added") {
            tasks.push({
              id: change.doc.id,
              title: change.doc.data().title,
              content: change.doc.data().content,
              createuser: change.doc.data().createUser,
              createAt: change.doc.data().createAt,
              updateAt: change.doc.data().updateAt,
            });
          }
        });
      setPosts(tasks);
    });
  }, []);

  console.log("post", posts);

  return (
    <BoxDiv>
      <h2>자유 게시판</h2>
      <div>
        {posts.map(({ id, createuser, title, content, createAt, updateAt }) => {
          return (
            <div key={id}>
              <BoardDiv>
                <Link to={`/free/${id}`}>
                  <TitleDiv>{title}</TitleDiv>
                </Link>
                <UserDiv>{createuser}</UserDiv>
              </BoardDiv>
            </div>
          );
        })}
      </div>
    </BoxDiv>
  );
};

export default BoardFree;
