import { useContext } from "react";
import { NameContext } from "../../contexts/name";

export default function SearchPage() {
  const { name } = useContext(NameContext);

  return (
    <section>
      <h1>Você pesquisou por:</h1>
      <h1>{"\n" + name}</h1>
    </section>
  );
}
