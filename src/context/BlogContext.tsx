import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect, createContext } from "react";

import { db, storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

import { IBlogs } from "../types";

const BlogContext = createContext<IBlogs | null>(null);

function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<string[]>([]);
  const [blogAuthor, setBlogAuthor] = useState<string>("");
  const [blogImage, setBlogImage] = useState<null>(null);
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogDescription, setBlogDescription] = useState<string>("");

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        await onSnapshot(blogsCollectionRef, (snapshot) => {
          const dbBlogs = [];
          snapshot.forEach((doc) => {
            dbBlogs.push({ ...doc.data(), id: doc.id });
          });
          setBlogs(dbBlogs);
        });
      } catch (error) {
        throw new Error(error);
      }
    };
    getBlogs();
  });

  const addBlog = async () => {
    try {
      await addDoc(blogsCollectionRef, {
        author: blogAuthor,
        image: blogImage,
        title: blogTitle,
        description: blogDescription,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteBlog = async (title: string) => {
    const blogDoc = doc(db, "blogs", title);
    await deleteDoc(blogDoc);
  };

  const uploadImage = async () => {
    if (!blogImage) return;

    try {
      const filesFolderRef = ref(storage, `projectImages/${blogImage}`);
      await uploadBytes(filesFolderRef, blogImage);
    } catch (error) {
      throw new Error(error);
    }
  };

  const valueToShare = {
    addBlog,
    deleteBlog,
    uploadImage,
  };

  return (
    <BlogContext.Provider value={valueToShare}>{children}</BlogContext.Provider>
  );
}

export { BlogProvider };
export default BlogContext;
