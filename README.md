# Vue-learning
This project is a Vue.js application designed to manage tasks using an "In Progress" list and a "Completed" list. Tasks are initialized with a fake API defined in a db.json file. The application allows users to check completed tasks, which automatically move to the "Completed" list, add new tasks, and filter tasks by tags (e.g., all, math, info).
## Project Setup

To install node_modules
```sh
npm install
```

Run project in local
```sh
npx serve
```
Then

### Run a fake api to interact with the backend

```sh
npx json-server db.json -p 3001
```

### Or run the script defined in packege.json

```sh
npm run start
```
