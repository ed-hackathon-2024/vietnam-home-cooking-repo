'use client';

import React, { useState, useRef } from 'react';
import { Box, Avatar, Button, TextField, Typography, Paper, Stack, Grid2 } from '@mui/material';
import { PaperPlaneRight, Question } from '@phosphor-icons/react';
import ReactMarkdown from 'react-markdown';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, I’m your **Finance Helper Bot**! How can I assist you today?' },
    {
      type: 'bot',
      text: 'You can ask about **saving tips**, **investments**, or **financial goals**.',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Define suggested questions
  const suggestedQuestions = [
    'How can I save more?',
    'How are my friends doing?',
    'Can I spend 50€ this month?',
  ];

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const prompt = userInput.trim();

    // Add user's message to the chat
    setMessages((prevMessages) => [...prevMessages, { type: 'user', text: prompt }]);

    setUserInput(''); // Clear the input field

    setLoading(true);

    try {
      // Make the POST request to the backend
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from AI');
      }

      const data = await response.json();
      const botResponse = data.response;

      // Add the bot's response to the chat
      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
    } catch (error) {
      console.error(error);

      // Add an error message from the bot
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
      ]);
    } finally {
      setLoading(false); // Stop the loading animation
    }
  };

  const animateBotMessage = (text: string) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        const partialText = text.substring(0, index + 1);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove the "Typing..." message
          { type: 'bot', text: partialText },
        ]);
        index++;
        scrollToBottom();
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  return (
    <Stack
      sx={{
        p: 4,
        bgcolor: 'background.default',
        minHeight: '90vh',
        borderRadius: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
      }}
    >
      {/* Header Section */}
      <Paper
        elevation={4}
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: '2rem',
          bgcolor: 'ersteBrand.main',
          color: 'neutral.light',
        }}
      >
        <Avatar
          src='/chat.png'
          alt='Chatbot Avatar'
          sx={{
            width: 80,
            height: 80,
            border: '4px solid',
            borderColor: 'neutral.light',
          }}
        />
        <Box>
          <Typography variant='h5' fontWeight='bold'>
            Finance Helper Bot
          </Typography>
          <Typography variant='body2'>
            Your personal assistant for all financial queries.
          </Typography>
        </Box>
      </Paper>

      {/* Chat Window */}
      <Box
        ref={chatWindowRef}
        sx={{
          flex: 1,
          overflowY: 'auto',
          maxHeight: '40vh', // Limit the height to ensure scrollability
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          px: 2,
          py: 3,
          borderRadius: '1.5rem',
          bgcolor: 'neutral.light',
          boxShadow: 2,
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '70%',
              bgcolor: message.type === 'user' ? 'ersteBrand.main' : 'neutral.light',
              color: message.type === 'user' ? '#157FF7' : 'neutral.dark',
              p: 2,
              borderRadius: '1.5rem',
              boxShadow: 1,
            }}
          >
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </Box>
        ))}
        {loading && (
          <Box
            sx={{
              alignSelf: 'flex-start',
              maxWidth: '70%',
              bgcolor: 'neutral.light',
              color: 'neutral.dark',
              p: 2,
              borderRadius: '1.5rem',
              boxShadow: 1,
            }}
          >
            Typing...
          </Box>
        )}
      </Box>

      {/* Suggestions Section */}
      <Grid2 container spacing={2} justifyContent='center'>
        {suggestedQuestions.map((question, index) => (
          <Grid2 xs={12} sm={4} key={index}>
            <Button
              variant='outlined'
              color='primary'
              fullWidth
              startIcon={<Question size={20} />}
              sx={{
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '2rem',
                textTransform: 'none',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  bgcolor: 'neutral.light',
                },
              }}
              onClick={() => setUserInput(question)}
            >
              {question}
            </Button>
          </Grid2>
        ))}
      </Grid2>

      {/* User Input Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: 'neutral.light',
          p: 2,
          borderRadius: '2rem',
        }}
      >
        <TextField
          fullWidth
          placeholder='Type your question here...'
          variant='outlined'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{
            bgcolor: 'white',
            borderRadius: '1.5rem',
          }}
        />
        <Button
          variant='contained'
          color='primary'
          startIcon={<PaperPlaneRight size={20} />}
          onClick={handleSendMessage}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: '1.5rem',
            boxShadow: 2,
          }}
        >
          Send
        </Button>
      </Box>
    </Stack>
  );
};

export default ChatbotPage;
