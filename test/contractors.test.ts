import axios from 'axios';
import { expect, describe, test } from '@jest/globals';

const url = 'http://127.0.0.1:3001';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5MzkyN2U5LTQ3MDMtNDZjNy05NjM0LTRiNGM2OTYzZmM5ZiIsInVzZXJuYW1lIjoibXlrZWZyIiwiaWF0IjoxNjg3OTY0MzgwfQ.H4FAVCUybwmxYeJXsymx-nD_jRja_T6tMzUnIqYTXe0';

describe('Compañías', () => {
  test('Crear compañía', async () => {
    try {
      const { data, status } = await axios.post(
        `${url}/api/companies`,
        {
          name: 'PruebaaCompa',
          sector: 'TestComp',
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

  test('Obtener compañías', async () => {
    try {
      const { data, status } = await axios.get(`${url}/api/companies`, {
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

  test('Obtener compañía', async () => {
    try {
      const { data, status } = await axios.get(
        `${url}/api/companies/7444b6a8-c76f-4b5b-806f-830759bfd819`,
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

  test('Borrar compañía', async () => {
    try {
      const { data, status } = await axios.delete(
        `${url}/api/companies/7444b6a8-c76f-4b5b-806f-830759bfd819`,
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
