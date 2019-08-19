## My Portfolio


### Documentation
---
#### Requirements
- Node
- npm

#### Stack
- Node
- Webpack
- ES6 (Babel)
- React
- React Router
- Redux / Redux Form
- PostCSS / SASS
- Material UI

#### Initialization
```bash
npm i && npm run dev
```

#### Build to production|stage
```bash
NODE_ENV=production ENV=production|stage npm run build
```

#### Testing
##### Using jest with enzyme and chai (see examples on `./src/client/**/*.spec.js`)
```bash
npm test
npm run test:coverage
```

#### Deploy to AWS production|stage (with Serverless)
```bash
NODE_ENV=production ENV=production|stage npm run serverless:deploy
```
