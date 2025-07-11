import React from 'react';

const ChatBubble = ({ text, sender, children }) => {
  const bubbleClasses =
    sender === 'user'
      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white self-end'
      : 'bg-gray-100 text-gray-900 border-l-4 border-blue-400 self-start';

  return (
    <div
      className={`p-4 rounded-xl max-w-[80%] shadow-md transition-all duration-300 ${bubbleClasses}`}
    >
      <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
      {children}
    </div>
  );
};

export default ChatBubble;
