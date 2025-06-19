import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Post() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Hubo un problema al obtener el post:", error);
      });
  }, []);

  return (
    <div 
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }} // fondo general gris clarito
    >
      <div 
        className="card shadow"
        style={{ 
          width: "80%", 
          maxWidth: "1000px", 
          backgroundColor: "#e9ecef", // gris claro de Bootstrap (no blanco)
          borderRadius: "10px",
          padding: "1.5rem"
        }}
      >
        <div className="card-body">
          {post ? (
            <>
              <h2 className="card-title text-center">{post.title}</h2>
              <p className="card-text fs-5">{post.body}</p>
            </>
          ) : (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
