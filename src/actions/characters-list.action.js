export function fetchCharacters() {

  const url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=6c7862d1eb711ccc0dae89548889af93&hash=c5b7bb935f9d2919945fd77cc01d4fb3';
  let id = 0;

  return dispatch => {
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then((characters) => {
        const character = characters['data']['results'].map(el => ({name: el.name, series: el.series.items, photo: el.thumbnail.path, key: id++}));
        dispatch(fetchSuccess(character));
        return character;
      })
      .catch(error => console.log(error));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchSuccess(characters) {
  return { type: 'FETCH_CHARACTERS_SUCCESS', payload: characters }
}