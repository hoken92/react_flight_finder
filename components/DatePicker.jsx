function DatePicker({ title, name }) {
  return (
    <div>
      <h1>{title}</h1>
      <input type="date" name={name} id="" />
    </div>
  );
}

export default DatePicker;
