import { __HOST } from './project_consts';
import { Board } from './board-types';

export function getBoardsDataFromApi(): Promise<Array<Board>> {
  const requestStr: string = __HOST + '/boards';

  return fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.boards;
    });
}

export function createBoardByApi(name: String, slug: String): Promise<any> {
  const requestStr: string = __HOST + '/boards';
  const data = { name: name, slug: slug };

  return fetch(requestStr, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

// TODO create with post: Object
export function createThreadByApi(slug: String, post: String): Promise<any> {
  const requestStr: string = __HOST + '/boards/' + slug + '/threads';
  const data = { post: { body: post } };

  return fetch(requestStr, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export function getThreadsByApi(slug: String): Promise<any> {
  const requestStr: string = __HOST + '/boards/' + slug + '/threads';

  return fetch(requestStr, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
