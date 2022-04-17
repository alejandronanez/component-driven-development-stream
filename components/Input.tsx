type Props = {
  error?: boolean;
  disabled?: boolean;
};

export function Input({ disabled, error }: Props) {
  return (
    <input
      disabled={disabled}
      type="text"
      style={{
        border: error ? "1px solid red" : "1px solid gray",
      }}
    />
  );
}
