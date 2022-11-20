export async function getJokePromise() {
    try{
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        return await response.json();
    }catch(error) {
        return [];
    }
}
