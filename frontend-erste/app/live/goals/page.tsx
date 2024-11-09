'use client';

import React from 'react';
import {
  Box,
  Card,
  Typography,
  CircularProgress,
  Grid,
  Divider,
  CardMedia,
  Stack,
} from '@mui/material';
import Image from 'next/image';

const GoalsPage = () => {
  const tips =
    '1. Consider meal planning and creating a grocery list to avoid impulse purchases and reduce food waste.\n' +
    '2. Explore free or low-cost entertainment options to reduce dining and entertainment expenses.\n' +
    '3. If you have a car, consider carpooling, using public transportation, or biking for shorter trips to reduce fuel costs.\n' +
    '4. Review your subscriptions and identify any that you can cancel or downgrade to save money.\n';
  const goals = [
    {
      label: 'You’re 100 € short of your goal.',
      value: 75,
      color: 'success.main',
    },
    {
      label: 'You’re 300 € short of your goal.',
      value: 25,
      color: 'error.main',
    },
  ];
  const rewards = [
    {
      image: '/level1.png',
      description: 'Unlock with level 40 and 1000 invested',
      locked: false,
    },
    {
      image: '/level2.png',
      description: 'Unlock with level 75 and 10 000 invested',
      locked: true,
    },
    {
      image: '/level3.png',
      description: 'Unlock with level 100 and 50 000 invested',
      locked: true,
    },
  ];

  return (
    <Stack
      sx={{
        p: 4,
        bgcolor: 'background.default',
        borderRadius: '2rem',

        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {/* TIPS and Goals */}
      <Grid container spacing={4}>
        {/* TIPS Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              bgcolor: 'primary.light',
              borderRadius: '1.5rem',
              boxShadow: 3,
            }}
          >
            <Typography variant='h5' fontWeight='bold' color='text.primary' gutterBottom>
              Tips
            </Typography>
            <Typography variant='body1' color='text.secondary' textAlign='center'>
              {tips}
            </Typography>
          </Card>
        </Grid>

        {/* Goals Section */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            {goals.map((goal, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: '1.5rem',
                  boxShadow: 2,
                  bgcolor: 'background.paper',
                }}
              >
                <Box position='relative' display='inline-flex' mr={2}>
                  <CircularProgress
                    variant='determinate'
                    value={goal.value}
                    size={80}
                    thickness={4}
                    sx={{ color: goal.color }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant='h6' fontWeight='bold' color={goal.color}>
                      {goal.value}%
                    </Typography>
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  {goal.label}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: 'primary.main' }} />

      {/* Rewards Section */}
      <Box>
        <Typography
          variant='h5'
          fontWeight='bold'
          color='text.primary'
          gutterBottom
          textAlign='center'
        >
          Rewards
        </Typography>
        <Grid container spacing={4}>
          {rewards.map((reward, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <div>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: '1.5rem',
                    boxShadow: 4,
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    opacity: reward.locked ? 0.5 : 1,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardMedia>
                    <Image
                      src={reward.image}
                      alt={`Reward ${index + 1}`}
                      width={200}
                      height={200}
                      style={{ borderRadius: '1rem' }}
                    />
                  </CardMedia>
                  {reward.locked && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '1.5rem',
                      }}
                    >
                      <Typography variant='h6' color='error' fontWeight='bold'>
                        Locked
                      </Typography>
                    </Box>
                  )}
                </Card>
                <Typography variant='body2' color='text.secondary' mt={2}>
                  {reward.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default GoalsPage;
