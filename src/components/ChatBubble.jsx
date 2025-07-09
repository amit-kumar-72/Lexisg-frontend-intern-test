import React from 'react';

const ChatBubble = ({ text, sender, children }) => {
  const bubbleClasses =
    sender === 'user'
      ? 'bg-gray-500 text-white self-end'
      : 'bg-gray-200 text-gray-900 self-start';

  return (
    <div className={`p-4 rounded-xl max-w-[80%] ${bubbleClasses}`}>
      <p className="whitespace-pre-wrap">{text}</p>
      {children}
    </div>
  );
};

export default ChatBubble;
