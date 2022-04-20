type Props = {
  disabled?: boolean;
  loading?: boolean;
};

export function Button({ disabled, loading }: Props) {
  return (
    <button disabled={loading || disabled}>
      {loading ? "Loading..." : "Send"}
    </button>
  );
}
