import { ChangeEvent } from "react";

type Props = {
  error?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
};

export function Input({ disabled, error, value, onChange }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return onChange(e.target.value);
  }
  return (
    <input
      disabled={disabled}
      type="text"
      style={{
        border: error ? "1px solid red" : "1px solid gray",
      }}
      value={value}
      onChange={handleChange}
    />
  );
}
