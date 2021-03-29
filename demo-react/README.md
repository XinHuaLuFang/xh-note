npm init -y
npm install babel-cli@6 babel-preset-react-app@3

npx babel --watch demo-react/js --out-dir demo-react/dist --presets react-app/prod
