import { useContext } from "react";

import BlogContext from "../context/BlogContext";

function useBlogContext() {
  return useContext(BlogContext);
}

export default useBlogContext;
