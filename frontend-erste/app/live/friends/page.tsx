'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  setRef,
  Paper,
  Avatar,
  TablePagination,
  Divider,
  Chip,
  Stack,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const FriendsPage = () => {
  const friends = [
    {
      name: 'Julie Santos',
      level: 25,
      achievements: ['Budget Buster', 'Investment Guru', 'Goal Achiever'],
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Thomas Edd',
      level: 36,
      achievements: ['Super Saver', 'Impulsive Spender', 'Mindful Shopper'],
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Sophia Grace',
      level: 42,
      achievements: ['Goal Achiever', 'Savings Wizard'],
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    {
      name: 'John Doe',
      level: 18,
      achievements: ['Thrifty Thinker'],
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
  ];

  const [page, setPage] = useState(0);
  const rowsPerPage = 2;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Graph Data
  const data = {
    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15'],
    datasets: [
      {
        label: 'Progress',
        data: [20, 30, 45, 60],
        borderColor: '#1976d2',
        tension: 0.4,
        pointBackgroundColor: ['#1976d2', '#ffa726', '#66bb6a', '#ef5350'],
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const friend = friends[tooltipItem.dataIndex];
            return `${friend.name}: Level ${friend.level}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e0e0e0',
        },
      },
    },
  };

  return (
    <Stack
      sx={{
        p: 4,
        bgcolor: 'background.default',
        borderRadius: 2,

        maxWidth: 1000,
        mx: 'auto',
      }}
    >
      {/* Graph Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
        <Typography
          variant='h5'
          fontWeight='bold'
          color='textPrimary'
          textAlign='center'
          gutterBottom
        >
          Progress Graph
        </Typography>
        <Box sx={{ height: 300 }}>
          <Line data={data} options={options} />
        </Box>
      </Paper>

      <Divider sx={{ my: 4 }} />

      {/* Friends Table Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography
          variant='h5'
          fontWeight='bold'
          color='textPrimary'
          textAlign='center'
          gutterBottom
        >
          Friends List
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Level</TableCell>
                <TableCell>Achievements</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {friends
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((friend, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Avatar
                        alt={friend.name}
                        src={friend.avatar}
                        sx={{ width: 56, height: 56 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant='body1' fontWeight='bold'>
                        {friend.name}
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='body1'>{friend.level}</Typography>
                    </TableCell>
                    <TableCell>
                      {friend.achievements.map((achievement, i) => (
                        <Chip
                          key={i}
                          label={achievement}
                          color={
                            achievement === 'Budget Buster' || achievement === 'Impulsive Spender'
                              ? 'error'
                              : 'success'
                          }
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component='div'
          count={friends.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
        />
      </Paper>
    </Stack>
  );
};

export default FriendsPage;
