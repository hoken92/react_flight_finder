function FlightSearchDropdown({ title, cities, name, handleChange }) {
  return (
    <div>
      <h1>{title}</h1>
      <select name={name} onChange={handleChange} required>
        <option value="">Select One</option>
        {cities.map((city, i) => {
          return (
            <option key={i} value={city.value}>
              {city.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FlightSearchDropdown;
