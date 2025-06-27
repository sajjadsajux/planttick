import { useEffect, useState } from "react";

const LocalNotes = () => {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  // Load note from localStorage on mount
  useEffect(() => {
    const storedNote = localStorage.getItem("plantNotes");
    if (storedNote) setSavedNote(storedNote);
  }, []);

  // Save note to localStorage
  const handleSave = () => {
    localStorage.setItem("plantNotes", note);
    setSavedNote(note);
    setNote("");
  };

  return (
    <div className="my-4 p-4 bg-base-200 dark:bg-base-300 rounded-lg shadow max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-primary text-center">📝 Plant Notes</h3>

      {savedNote && (
        <div className="bg-white dark:bg-base-100 p-2 rounded text-xs mb-3 border">
          <strong>Saved Note:</strong>
          <p className="mt-1 text-gray-700 dark:text-gray-300">{savedNote}</p>
        </div>
      )}

      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write a note..." className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-base-100 text-sm" rows="3"></textarea>

      <button onClick={handleSave} className="mt-2 px-4 py-1.5 bg-primary text-white text-sm rounded hover:bg-green-700 transition">
        Save
      </button>
    </div>
  );
};

export default LocalNotes;
