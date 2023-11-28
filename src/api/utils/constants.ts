export const API_PREFIX = '/api';
export const API_VERSION = 'v1';
export const ASSETS_DIR = './assets';
export const RPC_WS_URL = 'ws://127.0.0.1:7887/rpc-ws';
export const DEFAULT_LIMIT = 10;
export const RESPONSE_STATUSES = {
  SUCCESS: 'success',
  ERROR: 'error',
};
export const HTTP_CODES = {
  OK: 200,
  UNCHANGED: 304,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  INTERNAL: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CONFLICT: 409,
};
export const ERROR_MESSAGES = {
  [HTTP_CODES.NOT_FOUND]: 'Not found.',
  [HTTP_CODES.BAD_REQUEST]: 'Bad request.',
  [HTTP_CODES.INTERNAL]: 'Internal server error.',
  [HTTP_CODES.UNAUTHORIZED]: 'Unauthorized.',
  [HTTP_CODES.FORBIDDEN]: 'Forbidden.',
  [HTTP_CODES.CONFLICT]: 'Conflict.',
};
export const CORS_WHITE_LIST = ['http://localhost:3000'];
