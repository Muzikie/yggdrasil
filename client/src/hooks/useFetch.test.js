import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

const mockData = { key: 'value' };
const mockEndpoint = '/test';

beforeEach(() => {
  // Mock the global fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
});

afterEach(() => {
  // Reset the mock fetch function
  global.fetch.mockClear();
});

afterAll(() => {
  // Remove the mock fetch function
  global.fetch.mockRestore();
});

test('useFetch hook fetches data successfully', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetch(mockEndpoint));

  expect(result.current.data).toBeUndefined();
  expect(result.current.isLoading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.data).toEqual(mockData);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.feedback.success).toBe(true);
});

test('useFetch hook handles fetch error', async () => {
  // Mock fetch to return an error response
  global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch error')));

  const { result, waitForNextUpdate } = renderHook(() => useFetch(mockEndpoint));

  expect(result.current.data).toBeUndefined();
  expect(result.current.isLoading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.data).toBeUndefined();
  expect(result.current.isLoading).toBe(false);
  expect(result.current.feedback.success).toBe(false);
  expect(result.current.feedback.message).toBe('Fetch error');
});
