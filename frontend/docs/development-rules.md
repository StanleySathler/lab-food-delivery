# Development rules

Use this document if:

- You want to understand what coding practices are allowed and forbidden in this project.

## General rules

When writing tests:

- Use Vitest, not Jest;
- Use `beforeEach(cleanup)` from React Testing Library for every test file;
- Import `describe`, `it`, `expect`, etc, from 'vitest' package;
- Don't use `.toBeInTheDocument`. Favor `expect(await screen.findAllBy*()).toBeTruthy()`;
- Prioritize `findBy*` queries over others when writing for React Testing Library, as any UI might be rendered asynchronously;

Rules specific for AI Coding assistants:

- Don't run 'start:local'. Assume devs will run it themselves;