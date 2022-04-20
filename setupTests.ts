// src/setupTests.js
import { server } from "./mocks/handler";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
