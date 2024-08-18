"use client";
// import { Create } from "@/components/Create";
// import { Wait } from "@/components/Wait";
// import { Login } from "@/components/login";
import { useEffect, useState } from "react";

function createNew() {
  const name = prompt("Name...");
  fetch("");
}

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <main>
      {/* <Login /> */}
      {/* <Create /> */}
      {/* <Wait/> */}

      {articles.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </main>
  );
}
