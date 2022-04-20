import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Form() {
  const [inputText, setInputText] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // @ts-ignore: fix later.
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/signup");

      setIsSuccessful(data.success);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSuccessful ? <div>Yay!</div> : null}
      {isError ? (
        <div style={{ color: "red" }}>Oops, something went wrong!</div>
      ) : null}
      <Input value={inputText} onChange={(value) => setInputText(value)} />
      <Button loading={isLoading} disabled={inputText === ""} />
    </form>
  );
}
