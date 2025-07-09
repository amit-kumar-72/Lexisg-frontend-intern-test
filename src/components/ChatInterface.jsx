import React, { useState } from 'react';
import ChatBubble from './ChatBubble';

const ChatInterface = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const pdfLink =
    'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz';

  const handleSubmit = () => {
    if (!query.trim()) return;

    setChat((prev) => [...prev, { text: query, sender: 'user' }]);
    setQuery('');
    setLoading(true);

    setTimeout(() => {
      const response = {
        answer:
          'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
        citations: [
          {
            text:
              'As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.',
            source: 'Dani_Devi_v_Pritam_Singh.pdf',
            link: pdfLink,
          },
        ],
      };

      setChat((prev) => [
        ...prev,
        {
          text: `${response.answer}\n\nCitation:\n${response.citations[0].text}`,
          sender: 'assistant',
          citationLink: response.citations[0].link,
        },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-8">How can I help you?</h1>

      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {chat.map((msg, idx) => (
            <ChatBubble key={idx} text={msg.text} sender={msg.sender}>
              {msg.citationLink && (
             <a
  href={pdfLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out inline-block"
>
  View Source PDF
</a>
              )}
            </ChatBubble>
          ))}
        </div>

        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything"
          className="w-full min-h-[100px] border rounded-lg p-3"
        />
       <button
  onClick={handleSubmit}
  disabled={loading}
  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg disabled:opacity-50"
>
  {loading ? 'Loading...' : 'Submit'}
</button>
      </div>
    </div>
  );
};

export default ChatInterface;
