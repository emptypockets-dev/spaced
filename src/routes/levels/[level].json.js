// import json from '/data.json';
// import { promises as fs } from 'fs';

// export async function get({ params }) {
//   return {
//     status: 200,
//     body: {
//       project: json.projects[0],
//       cards: json.projects[0].cards
//     }
//   };
// }

// export async function post(request) {
//   json.projects[0].cards = JSON.parse(request.body);
//   try {
//     await fs.writeFile('/data.json', JSON.stringify(json, null, '\t'));
//   } catch (error) {
//     console.log(error);
//   }
//   return false;
// }
