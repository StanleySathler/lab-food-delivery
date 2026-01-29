# lab-food-delivery

A demo app for food delivery, inspired by [iFood](https://www.ifood.com.br/) and [UberEats](https://www.ubereats.com/br/).

See it live at: [https://lab-food-delivery.vercel.app/](https://lab-food-delivery.vercel.app/)

## Frontend

Built with:

- Next.js;
- TypeScript;
- Tailwind CSS;

Tests:

- Run on every PR, and every push to 'main';
- No mocks, to provide maximum confidence and mimic real user behavior;
- Only API calls are mocked, with MSW;

Deployment:

- Deployed automatically on every push to 'main';

## Developing locally

Running app:

```bash
$ cd lab-food-delivery/frontend
$ npm ci
$ npm run start:local
```

Running tests:

```bash
$ cd lab-food-delivery/frontend
$ npm ci
$ npm run test
```