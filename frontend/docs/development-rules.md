# Development rules

Use this document if:

- You want to understand what coding practices are allowed and forbidden in this project.

## General rules

When writing tests:

- Prioritize 'findBy*' queries over others when writing for React Testing Library, as any UI might be rendered asynchronously;