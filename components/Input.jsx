export default function Input({ title, name, handleChange }) {
  return (
    <>
      <h1>{title}</h1>
      <input
        type="number"
        name={name}
        onChange={handleChange}
        required
        min="1"
        max="6"
      />
    </>
  );
}
