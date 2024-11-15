function DatePicker({ title, name, handleChange }) {
  return (
    <div>
      <h1>{title}</h1>
      <input type="date" name={name} onChange={handleChange} id="" required />
    </div>
  );
}

export default DatePicker;
