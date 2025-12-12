# Development rules

Use this document if:

- You want to understand what coding practices are allowed and forbidden in this project.

## General rules

When writing Next.js code:

- Pages go to `src/pages`, not `/pages`. Same for components, hooks, etc;

When writing tests:

- Tests go to `tests/**`;
- Use Vitest, not Jest;
- Use `beforeEach(cleanup)` from React Testing Library for every test file;
- Import `describe`, `it`, `expect`, etc, from 'vitest' package;
- Don't use `.toBeInTheDocument`. Favor `expect(await screen.findAllBy*()).toBeTruthy()`;
- Prioritize `findBy*` queries over others when writing for React Testing Library, as any UI might be rendered asynchronously;
- Don't mock hooks or 'useQuery' to mock network requests. Use MSW (Mock Service Worker) and the handlers.

Tooling:

- Don't run 'start:local'. Assume devs will run it themselves;