// import db from db

import json from '$lib/data.json';

export async function get({ params }) {
  // db.collection.find()
  // data

  console.log(params);

  let index;

  if (params > 0) {
    index = params.level - 1;
  } else {
    index = 0;
  }

  return {
    status: 200,
    body: {
      project: json.projects[index],
      cards: json.projects[index].levels[0].cards
    }
  };
}
