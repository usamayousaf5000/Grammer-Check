import { useState } from 'react';
import axios from 'axios';

function GrammarChecker() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkGrammar = async () => {
    if (!text) {
      setError('Please write something!');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await axios.post(
        'https://api.languagetool.org/v2/check',
        new URLSearchParams({
          text: text,
          language: 'en-US'
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      const mistakes = response.data.matches;
      let newText = text;

      // Sort mistakes by offset in descending order to avoid position shifts
      mistakes.sort((a, b) => b.offset - a.offset);

      mistakes.forEach(mistake => {
        const wrong = newText.slice(mistake.offset, mistake.offset + mistake.length);
        // Highlight only the original mistake
        newText = 
          newText.slice(0, mistake.offset) +
          `<span class="bg-yellow-200 text-red-600">${wrong}</span>` +
          newText.slice(mistake.offset + mistake.length);
      });

      setResult(newText);
    } catch (err) {
      setError('Oops! Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-rounded">
      <h2 className="text-2xl font-bold mb-4">Grammar Checker</h2>

      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full p-2 border rounded resize-y"
          rows="5"
          disabled={loading}
        />
        <button
          onClick={checkGrammar}
          className={`mt-2 px-4 py-2 text-white rounded ${
            loading ? "bg-gray-400" : "bg-blue-500"
          }`}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check My Grammar"}
        </button>
      </div>

      {result && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold mb-2">Text Mistakes:</h3>
          <div dangerouslySetInnerHTML={{ __html: result }} />
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default GrammarChecker;