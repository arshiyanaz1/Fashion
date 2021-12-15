import axios from 'axios'

export const loadCountries = () =>{

    return (dispatch,getState)=>{
        axios.get('https://bluebridge.webdroidstudios.com/api/countries').then((response)=>{
            console.log('countries',response)
            dispatch({type:'LOAD_COUNTRIES',payload:response}) 
         })
    }
    
}
export const clearCart = ()=>{
    return (dispatch)=>{
        console.log('cleared')
        dispatch({type:'CLEART_CART'})
    }
}

export const mainApi = () =>{
    return (dispatch,getState)=>{
        
    }
}

/* export const loadCountries = () => async (dispatch) => {
    const response = await  axios.get('https://bluebridge.webdroidstudios.com/api/countries')
    dispatch({type:'LOAD_COUNTRIES',payload:response}) 
  } */