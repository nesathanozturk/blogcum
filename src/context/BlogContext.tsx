import { getDocs, collection, addDoc } from "firebase/firestore";
import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import { db } from "../config/firebase";

import { IBlog, IBlogs } from "../types";

const BlogContext = createContext<IBlogs | null>(null);

function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [blogAuthor, setBlogAuthor] = useState<string>("");
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogImage, setBlogImage] = useState<string>("");
  const [blogDescription, setBlogDescription] = useState<string>("");

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          author: doc.data().author,
          title: doc.data().title,
          image: doc.data().image,
          description: doc.data().description,
        }));
        setBlogs(filteredData);
      } catch (err) {
        console.log("Bir hata var!", err);
      }
    };
    getBlogs();
  }, []);

  const notify = () =>
    toast.success("Yazı başarıyla oluşturuldu!", {
      position: "top-right",
    });

  const addBlog = async () => {
    if (!blogAuthor || !blogTitle || !blogImage || !blogDescription) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    try {
      await addDoc(blogsCollectionRef, {
        id: uuidv4().toString(),
        author: blogAuthor,
        title: blogTitle,
        image: blogImage,
        description: blogDescription,
      });
      notify();
    } catch (error) {
      console.log("Bir hata var!", error);
    }
  };

  const valueToShare: IBlogs = {
    blogs,
    setBlogAuthor,
    setBlogImage,
    setBlogTitle,
    setBlogDescription,
    addBlog,
  };

  return (
    <BlogContext.Provider value={valueToShare}>{children}</BlogContext.Provider>
  );
}

export { BlogProvider };
export default BlogContext;
