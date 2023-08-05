import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary.tsx";

import { AuthProvider } from "./context/AuthContext.tsx";
import { BlogProvider } from "./context/BlogContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BlogProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BlogProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
