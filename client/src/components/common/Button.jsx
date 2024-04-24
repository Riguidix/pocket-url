export default function Button({ label, style, action}) {
  return (
    <button
        type="submit"
        onClick={ action }
        className={ style }
    >
        { label }
    </button>
  )
}
