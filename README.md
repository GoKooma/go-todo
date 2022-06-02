# go-todo
A To Do app powered by go with fiber and React. Added authentication feature to privately view the to do list.

## Starting App

### Backend
Make sure you are inside the **backend** directory. Then, run:
```
go run .
```

App will run on `localhost:3000`.
*There will be nothing much to see unless you bundle frontend code.*

### Frontend
Make sure you are inside the **frontend** directory. If this is your first time running the app, make sure you `yarn add package.json`.

Then, run:
```
npm run compile
```

The webpack will bundle frontend source code into `/frontend/build` directory, and watch any changes to the files.

Enjoy!