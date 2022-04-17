import { useState } from "react";
import { Input } from "./Input";

export function Form() {
  const [inputText, setInputText] = useState("");
  return (
    <form>
      <Input value={inputText} onChange={(value) => setInputText(value)} />
      <button>Send</button>
    </form>
  );
}
