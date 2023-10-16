export const setItem = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value))
    }
    catch(error)
    {
        console.error("Error occured while storing item in localstorage")
    }
}

export const getItem = (key) => {
    try{
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    }
    catch(error)
    {
        console.error("Error getting item from localstorage", error)
        return null
    }
}

export const removeItem = (key) => {
    try{
        localStorage.removeItem(key)
    }
    catch(error)
    {
        console.error("Error removing item from localstorage", error)
    }
}

export function getPatientData()
{
    const patientData = localStorage.getItem('patientData')
    return patientData ? JSON.parse(patientData) : []
}

export function setPatientData(data)
{
    localStorage.setItem('patientData', JSON.stringify(data))
}

export function setEmail(email){
    localStorage.setItem('email',email)
  }
  export function setToken(token) {
    localStorage.setItem('jwtToken', token);
  }
  export function setRole(role) {
    localStorage.setItem('role', role);
  }
  
  export function getRole() {
    return localStorage.getItem('role');
  }
  
  export function getToken() {
    return localStorage.getItem('jwtToken');
  }
  export function getEmail() {
    return localStorage.getItem('email');
  }
  
  export function removeToken() {
    localStorage.removeItem('jwtToken');
  }
  export function removeEmail() {
    localStorage.removeItem('email');
  }
  export function removeRole() {
    localStorage.removeItem('role');
  }