
export async function getWordPromise(wordSearch) {
  const address = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + wordSearch;
  try{
      const response = await fetch(address);
      return await response.json();
  }catch(error) {
      return [];
  }
}