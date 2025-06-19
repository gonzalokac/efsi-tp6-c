import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Post from "./components/Post";

export default function App() {
  return (
    <div className="main-container">
      <Post />
    </div>
  );
}