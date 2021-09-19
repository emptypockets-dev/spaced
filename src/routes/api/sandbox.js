import { getParameters } from 'codesandbox/lib/api/define';
import { get } from 'svelte/store';
import { projects } from '../../stores/data';

const addCodeToParams = (code) => {
  const parameters = getParameters({
    files: {
      'index.html': {
        content: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Parcel Sandbox</title>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="/styles.css" />
          </head>
        
          <body>
            <div id="app"></div>
        
            <script src="/index.js"></script>
          </body>
        </html>
        `
      },
      'index.js': {
        content: code
      },
      'package.json': {
        content: `
        {
          "name": "object-destructuring",
          "version": "1.0.0",
          "description": "",
          "main": "index.html",
          "scripts": {
            "start": "parcel index.html --open",
            "build": "parcel build index.html"
          },
          "dependencies": {
            "parcel-bundler": "^1.6.1"
          },
          "devDependencies": {
            "@babel/core": "7.2.0"
          },
          "resolutions": {
            "@babel/preset-env": "7.13.8"
          },
          "keywords": []
        }
        `
      },
      'styles.css': {
        content: 'body { background-color: #000 };'
      }
    }
  });
  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&json=1&`;
  return url;
};

const createSandboxId = async (code) => {
  const urlWithCode = addCodeToParams(code);
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

const createNewCard = (question, answer, sandboxId) => {
  let embed = sandboxId.sandbox_id;
  console.log(embed);
  const card = {
    title: question,
    embed_slug: embed,
    answer: answer,
    level: 1,
    level_name: 'level one',
    question: question,
    lastReview: null
  };
  let data = get(projects);
  data.projects[0].cards.unshift(card);
  console.log('data', data.projects[0].cards);
  projects.set(data);
  // return projects;
  // let newData = get(projects);
  // console.log(newData.projects[0].cards);
  // console.log(newData);
};

export const post = async (request) => {
  const formBody = JSON.parse(request.body);
  // get parts of the card from the form
  const question = formBody.question;
  const answer = formBody.answer;
  const code = formBody.code;
  // make a post request to the sandbox api
  const sandboxId = await createSandboxId(code);
  // add that card to svelte store
  // createNewCard(question, answer, sandboxId);
  // return a successfully created message
  return {
    body: {
      question,
      answer,
      sandboxId,
      code
    }
  };
};
