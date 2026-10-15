
// use **double asterisks** to make text bold (in const files)

export function Boldtext(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <span key={i} className="text-white font-semibold">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    )
  );
}