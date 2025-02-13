export const MockedKV = () => ({
  put: jest.fn(async () => {}),
  get: jest.fn(async () => {}),
  list: jest.fn(async () => {}),
  getWithMetadata: jest.fn(async () => {}),
});

export const MockedSentry = () => ({
  addBreadcrumb: jest.fn(),
  setUser: jest.fn(),
  setTag: jest.fn(),
  setExtra: jest.fn(),
  setExtras: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
});

export const MockedScheduledEvent = (options: any): ScheduledEvent => ({
  type: "cron",
  eventPhase: 0,
  composed: true,
  bubbles: true,
  cancelable: true,
  defaultPrevented: false,
  returnValue: false,
  timeStamp: 0,
  isTrusted: true,
  cancelBubble: false,
  stopImmediatePropagation: () => ({}),
  preventDefault: () => ({}),
  stopPropagation: () => ({}),
  composedPath: () => [],
  NONE: 0,
  CAPTURING_PHASE: 0,
  AT_TARGET: 0,
  BUBBLING_PHASE: 0,
  cron: "",
  scheduledTime: 0,
  noRetry: () => ({}),
  waitUntil: async (promise: Promise<any>) => ({}),
  ...options,
});
