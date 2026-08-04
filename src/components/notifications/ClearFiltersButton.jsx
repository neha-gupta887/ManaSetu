function ClearFiltersButton({
  setSearchTerm,
  setSelectedFilter,
}) {
  const handleClear = () => {
    setSearchTerm("");
    setSelectedFilter("All");
  };

  return (
    <button
      onClick={handleClear}
      className="mt-4 rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
    >
      Clear Filters
    </button>
  );
}

export default ClearFiltersButton;