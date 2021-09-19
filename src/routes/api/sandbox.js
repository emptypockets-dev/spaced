import { getParameters } from 'codesandbox/lib/api/define';
import { get } from 'svelte/store';
import { projects } from '../../stores/data';

const addCodeToParams = (codeQuestion, codeAnswer) => {
  const parameters = getParameters({
    files: {
      'index.html': {
        content: `
        <!DOCTYPE html>
        <html>

        <head>
          <title>Sandbox</title>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="src/styles.css">
        </head>

        <body>
          <div id="app"></div>

          <script src="src/index.js"></script>
          <script src="src/solution.js"></script>
        </body>

        </html>
        `
      },
      '/src/index.js': {
        content: codeQuestion
      },
      '/src/solution.js': {
        content: codeAnswer
      },
      'package.json': {
        content: `
        {
          "name": "vanilla",
          "version": "1.0.0",
          "description": "JavaScript example starter project",
          "main": "index.html",
          "scripts": {
            "start": "parcel index.html --open",
            "build": "parcel build index.html"
          },
          "dependencies": { "parcel-bundler": "^1.6.1" },
          "devDependencies": {
            "@babel/core": "7.2.0"
          },
          "resolutions": {
            "@babel/preset-env": "7.13.8"
          },
          "keywords": ["javascript", "starter"]
        }        
        `
      },
      '/src/styles.css': {
        content: 'body { background-color: #000; color: #fff; }'
      }
    }
  });
  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&json=1`;
  return url;
};

const createSandboxId = async (codeQuestion, codeAnswer) => {
  const urlWithCode = addCodeToParams(codeQuestion, codeAnswer);

  try {
    const submit = await fetch(urlWithCode, {
      method: 'POST'
    });
    const data = await submit.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const post = async (request) => {
  const formBody = JSON.parse(request.body);
  // get parts of the card from the form
  const question = formBody.question;
  const answer = formBody.answer;
  const codeQuestion = formBody.codeQuestion;
  const codeAnswer = formBody.codeAnswer;
  // make a post request to the sandbox api
  const sandboxId = await createSandboxId(codeQuestion, codeAnswer);
  // add that card to svelte store
  // createNewCard(question, answer, sandboxId);
  // return a successfully created message
  return {
    body: {
      question,
      answer,
      sandboxId,
      codeQuestion,
      codeAnswer
    }
  };
};
