import axios from 'axios';
import { expect, describe, test } from '@jest/globals';
import { hashPassword } from '../src/modules/auth';

// Login
const url = 'http://127.0.0.1:3001';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5MzkyN2U5LTQ3MDMtNDZjNy05NjM0LTRiNGM2OTYzZmM5ZiIsInVzZXJuYW1lIjoibXlrZWZyIiwiaWF0IjoxNjg3OTY0MzgwfQ.H4FAVCUybwmxYeJXsymx-nD_jRja_T6tMzUnIqYTXe0';

describe('Usuario', () => {
  test('Login', async () => {
    try {
      const res = await axios.post(`${url}/login`, {
        username: 'mykefr',
        password: 'myke',
      });
      const expectAuth = {
        token: expect.any(String),
        user: expect.any(Object),
      };
      expect(res.status).toBe(200);
      expect(res.data).toEqual(expectAuth);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Crear usuario', async () => {
    try {
      const { data, status } = await axios.post(
        `${url}/api/users`,
        {
          name: 'Usuario',
          lastname: 'De Prubea',
          username: 'testuser',
          password: await hashPassword('testpass'),
          role: 'Admin',
          state: true,
          typeDependency: 'public',
          dependencyId: null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(201);
      expect(data).toEqual({
        token: expect.any(String),
        user: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Obtener usuarios', async () => {
    try {
      const { data, status } = await axios.get(`${url}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      expect(status).toBe(200);
      expect(data).toEqual({
        users: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Borrar usuario', async () => {
    try {
      const { data, status } = await axios.delete(
        `${url}/api/users/4f3a9ad5-b308-4a8c-b552-9472a6739d81`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(202);
      expect(data).toEqual({
        result: expect.any(Boolean),
        user: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Actualizar usuario', async() => {
    try {
      const { data, status } = await axios.patch(
        `${url}/api/users/a93927e9-4703-46c7-9634-4b4c6963fc9f`,
        { dependency: "SuperAdmin" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(202);
      expect(data).toEqual({
        result: expect.any(Boolean),
        user: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });
});
