import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setSearchItem(location.state.searchItem);
  }, []);

  return (
    <section>
      <h1>Você pesquisou por:</h1>
      <h1>{"\n" + searchItem}</h1>
    </section>
  );
}
