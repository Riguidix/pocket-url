export default function Input({ type, value, setValue, style, placeholder }) {
  return (
    <input
      autoComplete="false"
      autoFocus
      type={type}
      value={value}
      onChange={setValue}
      className={style}
      placeholder={placeholder}
      required
    />
  );
}
