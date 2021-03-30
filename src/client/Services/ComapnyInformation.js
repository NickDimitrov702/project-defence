// const API = 'AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII'
// const url = `https://project-defense-90c21-default-rtdb.firebaseio.com/-MW_zNBHtntVipat1YJs${API}`

const url = 'http://localhost:5000/companies'
const APIkey = 'AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII'
const signeInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIkey}`

export const getAllInformation = () => {

    return fetch(url)
        .then(res => res.json())
        
}

export const getGames = () => {
    const urlGames = 'http://localhost:5000/companies/BlizardCompany'
    return fetch(urlGames)
        .then(res => res.json())
}


export const signeIn = () => {
    return fetch(signeInUrl, {method: 'POST'})
    .then(res => res.json())
    .catch(error => console.error(`${error}`))
}
