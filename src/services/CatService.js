export async function getCatPromise() {
    try{
        const response = await fetch('http://placekitten.com/500/580');
        return await response;
    }catch(error) {
        return [];
    }
}
