import { renderHook } from '@testing-library/react-hooks';
import { useFetchHelloFreshBox } from './useFetchHelloFreshBox';
import { useFetch } from './useFetch';

jest.mock('./useFetch');

afterEach(() => {
  jest.clearAllMocks();
});

// Mock the useFetch hook
test('useFetchHelloFreshBox hook fetches data successfully', async () => {
  useFetch.mockImplementation((endpoint) => {
    if (endpoint === '/recipes') {
      return {
        data: ['Recipe 1', 'Recipe 2'],
        isLoading: false,
        feedback: {
          success: true,
          message: 'Success',
        },
      };
    } else if (endpoint === '/products') {
      return {
        data: [{ name: 'Product 1' }],
        isLoading: false,
        feedback: {
          success: true,
          message: 'Success',
        },
      };
    }
  });

  const { result } = renderHook(() => useFetchHelloFreshBox());
  expect(result.current.loading).toBe(false);
  expect(result.current.data.name).toBe('Product 1');
  expect(result.current.data.recipes).toEqual(['Recipe 1', 'Recipe 2']);
});

test('useFetchHelloFreshBox hook handles failure scenarios', async () => {
  useFetch.mockImplementation((endpoint) => {
    if (endpoint === '/recipes') {
      return {
        data: undefined,
        isLoading: false,
        feedback: {
          success: false,
          message: 'Error',
        },
      };
    } else if (endpoint === '/products') {
      return {
        data: [{ name: 'Product 1' }],
        isLoading: false,
        feedback: {
          success: true,
          message: 'Success',
        },
      };
    }
  });

  const { result } = renderHook(() => useFetchHelloFreshBox());
  expect(result.current.loading).toBe(false);
  expect(result.current.data.name).toBe('Product 1');
  expect(result.current.data.recipes).toBeUndefined();
});

test('useFetchHelloFreshBox hook handles both failures', () => {
  useFetch.mockImplementation(() => {
    return {
      data: undefined,
      isLoading: false,
        feedback: {
          success: false,
          message: 'Error',
        },
    };
  });

  const { result } = renderHook(() => useFetchHelloFreshBox());
  expect(result.current.loading).toBe(false);
  expect(result.current.data.product).toBeUndefined();
  expect(result.current.data.recipes).toBeUndefined();
});
