## Nodejs Stripe Checkout

Nodejs project for accept pays from stripe

- Note: Needs refactor to get data from request

## Setup

```bash
yarn init -y
```

```bash
yarn add express stripe dotenv
```

```bash
yarn add -D @types/express typescript ts-node-dev
```

### add in package.json

```json
"scripts": {
  "dev": "nodemon src/index.ts"
},
```

### first tsconfig

```bash
npx tsc --init
```

![alt text for screen readers](/resources/Screenshot_2023-06-28_1.png "Static interface")

![alt text for screen readers](/resources/Screenshot_2023-06-28_2.png "Stripe checkout")