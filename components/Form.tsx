import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Form() {
  const [inputText, setInputText] = useState("");
  return (
    <form>
      <Input value={inputText} onChange={(value) => setInputText(value)} />
      <Button />
    </form>
  );
}
