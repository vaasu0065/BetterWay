const Filters = ({ search, setSearch, category, setCategory, sort, setSort, clear }) => {
  return (
    <div className="filters">
      <input
        placeholder="Search product..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
        <option value="Stationery">Stationery</option>
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Filters;
