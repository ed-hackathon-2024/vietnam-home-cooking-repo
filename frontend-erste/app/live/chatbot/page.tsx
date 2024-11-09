'use client';

import React, { useState } from 'react';
import { Box, Avatar, Button, TextField, Typography, Paper, Stack, Grid2 } from '@mui/material';
import { PaperPlaneRight, Question } from '@phosphor-icons/react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, I’m your Finance Helper Bot! How can I assist you today?' },
    { type: 'bot', text: 'You can ask about saving tips, investments, or financial goals.' },
  ]);

  const suggestedQuestions = [
    'How can I save more?',
    'How are my friends doing?',
    'Can I spend 50€ this month?',
  ];

  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: userInput.trim() },
      { type: 'bot', text: `You asked: "${userInput.trim()}". Here's how I can help!` },
    ]);
    setUserInput('');
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
          src='/chatbot-avatar.jpg'
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
            {message.text}
          </Box>
        ))}
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
