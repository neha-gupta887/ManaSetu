const STORAGE_KEY = "manasetu_memory";

export function saveWellnessRecord(record) {
  const history = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );

  history.unshift({
    ...record,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history.slice(0, 20))
  );
}

export function getWellnessHistory() {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );
}

export function clearWellnessHistory() {
  localStorage.removeItem(STORAGE_KEY);
}