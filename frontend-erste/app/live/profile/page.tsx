'use client';

import React from 'react';
import { Box, Avatar, Typography, LinearProgress, Grid, Stack, Tooltip } from '@mui/material';
import { Trophy, ChartPie, Coins } from '@phosphor-icons/react';

const ProfilePage = () => {
  const user = {
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    monthlyGoal: 75,
    yearlyGoal: 25,
    badges: [
      { id: 1, icon: <Trophy size={32} />, description: 'Completed Savings Goal' },
      { id: 2, icon: <Coins size={32} />, description: 'Achieved Investment Milestone' },
      { id: 3, icon: <ChartPie size={32} />, description: 'Budget Efficiency Expert' },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        overflow: 'hidden',
        pb: 6,
      }}
    >
      {/* Curved Header */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'primary.light',
          py: 6,
          px: 4,
          borderBottomLeftRadius: '50% 20%',
          borderBottomRightRadius: '50% 20%',
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{
            width: 120,
            height: 120,
            border: '4px solid white',
            mx: 'auto',
          }}
        />
        <Typography variant='h3' fontWeight='bold' mt={2}>
          {user.name}
        </Typography>
        <Typography variant='body1' sx={{ fontStyle: 'italic' }}>
          Financial Rockstar
        </Typography>
      </Box>

      {/* Goals */}
      <Grid container spacing={4} sx={{ px: 4 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              py: 4,
              px: 3,
              borderRadius: '50px',
              bgcolor: '#028661',
              color: 'white',
              textAlign: 'left',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Monthly Goal
            </Typography>
            <LinearProgress
              variant='determinate'
              value={user.monthlyGoal}
              sx={{
                height: 12,
                borderRadius: 10,
                bgcolor: '#EB4C79',
                mt: 2,
                '& .MuiLinearProgress-bar': {
                  bgcolor: 'white',
                },
              }}
            />
            <Typography mt={2}>
              <strong>{user.monthlyGoal}%</strong> completed — <strong>100 €</strong> short of goal.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              py: 4,
              px: 3,
              borderRadius: '50px',
              bgcolor: '#EB4C79',
              color: 'white',
              textAlign: 'left',
            }}
          >
            <Typography variant='h6' fontWeight='bold'>
              Yearly Goal
            </Typography>
            <LinearProgress
              variant='determinate'
              value={user.yearlyGoal}
              sx={{
                height: 12,
                borderRadius: 10,
                bgcolor: '#028661',
                mt: 2,
                '& .MuiLinearProgress-bar': {
                  bgcolor: 'white',
                },
              }}
            />
            <Typography mt={2}>
              <strong>{user.yearlyGoal}%</strong> completed — <strong>300 €</strong> short of goal.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
