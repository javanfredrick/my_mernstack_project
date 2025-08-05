import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, Card, Grid, Flex, Heading, Text } from '../styles/AppStyles';
import taskService from '../services/taskService';

const DashboardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const WelcomeCard = styled(Card)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.dark} 100%);
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatCard = styled(Card)`
  text-align: center;
  height: 100%;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;
`;

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Fetch tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create task
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await taskService.createTask(newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch {
      setError('Failed to create task');
    }
  };

  // Delete task
  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchTasks();
    } catch {
      setError('Failed to delete task');
    }
  };

  // Update task status
  const handleUpdateStatus = async (id, status) => {
    try {
      await taskService.updateTask(id, { status });
      fetchTasks();
    } catch {
      setError('Failed to update task');
    }
  };

  const stats = [
    { label: 'Total Projects', value: '12' },
    { label: 'Active Tasks', value: '8' },
    { label: 'Completed', value: '24' },
    { label: 'Team Members', value: '5' },
  ];

  return (
    <DashboardContainer>
      <Container>
        <WelcomeCard>
          <Heading size="2xl" style={{ color: 'white', marginBottom: '0.5rem' }}>
            Welcome back, {user?.firstName || 'User'}!
          </Heading>
          <Text style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
            Here's what's happening with your projects today.
          </Text>
        </WelcomeCard>

        <Grid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.value}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </Grid>

        <Grid style={{ marginTop: '2rem' }}>
          <Card>
            <Heading size="lg" style={{ marginBottom: '1rem' }}>
              Recent Activity
            </Heading>
            <div>
              <Flex style={{ padding: '0.75rem 0', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ flex: 1 }}>
                  <Text weight="500">Project Alpha updated</Text>
                  <Text size="sm" color="gray">2 hours ago</Text>
                </div>
              </Flex>
              <Flex style={{ padding: '0.75rem 0', borderBottom: '1px solid #e9ecef' }}>
                <div style={{ flex: 1 }}>
                  <Text weight="500">New team member added</Text>
                  <Text size="sm" color="gray">4 hours ago</Text>
                </div>
              </Flex>
              <Flex style={{ padding: '0.75rem 0' }}>
                <div style={{ flex: 1 }}>
                  <Text weight="500">Task completed</Text>
                  <Text size="sm" color="gray">1 day ago</Text>
                </div>
              </Flex>
            </div>
          </Card>

          <Card>
            <Heading size="lg" style={{ marginBottom: '1rem' }}>
              Quick Actions
            </Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button style={{
                padding: '0.75rem',
                border: '1px solid #e9ecef',
                borderRadius: '0.375rem',
                background: 'white',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}>
                <Text weight="500">Create New Project</Text>
                <Text size="sm" color="gray">Start a new project</Text>
              </button>
              <button style={{
                padding: '0.75rem',
                border: '1px solid #e9ecef',
                borderRadius: '0.375rem',
                background: 'white',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}>
                <Text weight="500">Invite Team Member</Text>
                <Text size="sm" color="gray">Add someone to your team</Text>
              </button>
              <button style={{
                padding: '0.75rem',
                border: '1px solid #e9ecef',
                borderRadius: '0.375rem',
                background: 'white',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}>
                <Text weight="500">View Reports</Text>
                <Text size="sm" color="gray">Check your progress</Text>
              </button>
            </div>
          </Card>
        </Grid>

        <Card style={{ marginTop: '2rem' }}>
          <Heading size="lg" style={{ marginBottom: '1rem' }}>
            My Tasks
          </Heading>
          {error && <Text color="red">{error}</Text>}
          {loading ? (
            <Text>Loading tasks...</Text>
          ) : (
            <div>
              <form onSubmit={handleCreateTask} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Task title"
                  value={newTask.title}
                  onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                  required
                  style={{ flex: 1, padding: '0.5rem' }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newTask.description}
                  onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                  style={{ flex: 2, padding: '0.5rem' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add</button>
              </form>
              {tasks.length === 0 ? (
                <Text>No tasks found.</Text>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {tasks.map(task => (
                    <li key={task._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <Flex style={{ alignItems: 'center', gap: '1rem' }}>
                        <div style={{ flex: 1 }}>
                          <Text weight="500">{task.title}</Text>
                          <Text size="sm" color="gray">{task.description}</Text>
                          <Text size="sm" color="gray">Status: {task.status}</Text>
                        </div>
                        <select value={task.status} onChange={e => handleUpdateStatus(task._id, e.target.value)}>
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button onClick={() => handleDeleteTask(task._id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
                      </Flex>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Card>
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard;