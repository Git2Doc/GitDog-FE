import { v4 as uuidv4 } from 'uuid';

export const prepareMessage = (inputMessage, messages, setMessages) => {
  if (inputMessage.trim() === '') {
    return;
  }

  const newMessageId = uuidv4();
  const newMessage = { id: newMessageId, isUser: true, text: inputMessage };
  setMessages((prevMessages) => [...prevMessages, newMessage]);

  const loadingMessageId = uuidv4();
  const loadingMessage = {
    id: loadingMessageId,
    isUser: false,
    text: '대답 생성 중...',
  };
  setMessages((prevMessages) => [...prevMessages, loadingMessage]);

  return loadingMessageId; // Return this for use in sendMessage
};

export const sendMessage = async (
  inputMessage,
  loadingMessageId,
  repositoryId,
  messages,
  setMessages,
) => {
  try {
    let response = await fetch(
      `https://api.gitdog.site/repository/${repositoryId}/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat: inputMessage,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonResponse = await response.json();

    const systemResponse = {
      id: loadingMessageId,
      isUser: false,
      text: jsonResponse.data.answer,
    };

    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === loadingMessageId ? systemResponse : message,
      ),
    );
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
