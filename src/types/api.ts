import { __HOST } from './project_consts';
import { TBoard, TThread } from './board-types';

export function getBoardsDataFromApi(): Promise<any> {
  const requestStr: string = __HOST + '/boards';

  return fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log('data getBoardsDataFromApi: ', data);

      return data.boards;
    });
}

export function getThreadsByApi(slug: string): Promise<any> {
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

export function createBoardByApi(name: string, slug: string): Promise<any> {
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
export function createThreadByApi(slug: string, post: string): Promise<any> {
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

export function createPostByApi(threadId: string, post: string): Promise<any> {
  const requestStr: string = __HOST + '/threads/' + threadId + '/posts';
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

export function getThreadAndRepliesByApi(threadId: string): Promise<TThread> {
  const requestStr: string = __HOST + '/threads/' + threadId;

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
