# lab-food-delivery

A demo app for food delivery, inspired by [iFood](https://www.ifood.com.br/) and [UberEats](https://www.ubereats.com/br/).

See it live at: [https://lab-food-delivery.vercel.app/](https://lab-food-delivery.vercel.app/)

## Stack

- Next.js 16;
- TypeScript;
- Tailwind CSS;

## Automations

- Automated tests run on every PR and every push to 'main';
- Every push to 'main' is automatically deployed to Vercel;

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