export async function getTaylorPromise() {
    try{
        const response = await fetch('https://taylorswiftapi.herokuapp.com/get');
        return await response.json();
    }catch(error) {
        return [];
    }
}
