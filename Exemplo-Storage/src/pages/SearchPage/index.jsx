import { useEffect, useState } from "react";

export default function SearchPage() {
  const [searchItemLocal, setSearchItemLocal] = useState("");
  const [searchItemSession, setSearchItemSession] = useState("");

  useEffect(() => {
    setSearchItemLocal(localStorage.getItem("searchItem"));
    setSearchItemSession(sessionStorage.getItem("searchItem"));
  }, []);

  return (
    <section>
      <h1>{"LocalStorage: " + searchItemLocal}</h1>
      <h1>{"\nSessionStorage: " + searchItemSession}</h1>
    </section>
  );
}
