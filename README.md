# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

Clone this project
`git clone https://github.com/theory-of-comedy/spelling-dee-frontend.git`

Install dependencies
`yarn install`

Enable husky
`yarn prepare`

Deploy on your local development 
`docker compose -f docker-compose.dev.yml up -d --build`

## Available Scripts

In the project directory, you can run:

Runs the app in the development mode.
`yarn start`

Launches the test runner in the interactive watch mode.
`yarn test`

Run Lint testing.
`yarn lint`

Formating code.
`yarn format`

Builds the app for production to the `build` folder.
`yarn build`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
`yarn eject`

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.