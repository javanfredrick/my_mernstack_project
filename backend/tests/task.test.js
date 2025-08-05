const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');
const Task = require('../models/Task');

let token;

beforeAll(async () => {
  // Connect to test DB
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // Create a user and get token
  await User.deleteMany();
  await Task.deleteMany();
  await request(app).post('/api/auth/register').send({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    password: 'password123',
  });
  const res = await request(app).post('/api/auth/login').send({
    email: 'test@example.com',
    password: 'password123',
  });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Task API', () => {
  let taskId;
  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Task', description: 'Test Desc' });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.title).toBe('Test Task');
    taskId = res.body.data._id;
  });

  it('should get all tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'completed' });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.status).toBe('completed');
  });

  it('should delete a task', async () => {
    const res = await request(app)
      .delete(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
});
