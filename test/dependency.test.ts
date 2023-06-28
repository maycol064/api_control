import axios from 'axios';
import { expect, describe, test } from '@jest/globals';

const url = 'http://127.0.0.1:3001';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5MzkyN2U5LTQ3MDMtNDZjNy05NjM0LTRiNGM2OTYzZmM5ZiIsInVzZXJuYW1lIjoibXlrZWZyIiwiaWF0IjoxNjg3OTY0MzgwfQ.H4FAVCUybwmxYeJXsymx-nD_jRja_T6tMzUnIqYTXe0';

describe('Dependencias', () => {
  test('Crear dependencia', async () => {
    try {
      const { data, status } = await axios.post(
        `${url}/api/dependencies`,
        {
          name: 'Pruebaa',
          sector: 'Test',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(201);
      expect(data).toEqual({
        data: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Obtener dependencias', async () => {
    try {
      const { data, status } = await axios.get(`${url}/api/dependencies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      expect(status).toBe(200);
      expect(data).toEqual({
        data: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Obtener dependencia', async () => {
    try {
      const { data, status } = await axios.get(
        `${url}/api/dependencies/7444b6a8-c76f-4b5b-806f-830759bfd819`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(200);
      expect(data).toEqual({
        data: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Borrar dependencia', async () => {
    try {
      const { data, status } = await axios.delete(
        `${url}/api/dependencies/7444b6a8-c76f-4b5b-806f-830759bfd819`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(202);
      expect(data).toEqual({
        data: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });

  test('Actualizar dependencia', async () => {
    try {
      const { data, status } = await axios.patch(
        `${url}/api/dependencies/a93927e9-4703-46c7-9634-4b4c6963fc9f`,
        { sector: '0_o' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(status).toBe(202);
      expect(data).toEqual({
        data: expect.any(Object),
      });
    } catch (error) {
      expect(error.response.status).toBe(500);
      expect(error.message).toEqual(expect.any(String));
    }
  });
});
