

export const getProducts = async () =>{
    const response = await fetch (`https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app.json`)
    return response.json()
}