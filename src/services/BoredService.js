export async function getActvityPromise() {
    try{
        const response = await fetch('https://www.boredapi.com/api/activity/');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getActvity() {

    fetch("https://www.boredapi.com/api/activity/") //1
    .then((response) => response.json()) //2
    .then((bored) => {
      return(bored.activity)
    });
}

// export async function createUser(data) {
//     const response = await fetch(`/api/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }