import { useState } from "react";
import { CardInicial } from "./components/CardInicial";
import { CardFinal } from "./components/CardFinal";

export function App() {
   const [nota, SetNota] = useState(0);
   const [submited, setSubmited] = useState(false)
   

return (
    submited === false? (
    <CardInicial nota={nota} SetNota={SetNota} setSubmited={setSubmited}/>
) : (
  <CardFinal nota={nota}/>
)
   )
}