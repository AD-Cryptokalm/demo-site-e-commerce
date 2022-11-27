import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_EMAIL = "UPDATE_EMAIL"
export const UPDATE_ADRESS = "UPDATE_ADRESS"
export const UPDATE_TEL = "UPDATE_TEL"

export const getUser = (uid) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    try {
          const res = await axios({
              method: "GET",
              url: `http://localhost:3000/api/user/${uid}`,
              headers: {
                  Authorization: "Bearer " + token,
              },
          });
          dispatch({ type: GET_USER, payload: res.data });
      } catch (err) {
          return console.log(err);
      }
  };
};

export const updateEmail = (uid, email) => {
    const token = localStorage.getItem("token");
    
    return async (dispatch) => {
      return axios({
        method: "PUT",
        url: `http://localhost:3000/api/user/${uid}`,
        headers: {
            Authorization: "Bearer " + token,
        },
        data: {email}
      })
      .then((res) => {
        dispatch({type: UPDATE_EMAIL, payload:email})
      })
      .catch ((err) => console.log(err))
    };
  };

  export const updateAdress = (uid, adress) => {
    const token = localStorage.getItem("token");
    
    return async (dispatch) => {
      return axios({
        method: "PUT",
        url: `http://localhost:3000/api/user/${uid}`,
        headers: {
            Authorization: "Bearer " + token,
        },
        data: {adress}
      })
      .then((res) => {
        dispatch({type: UPDATE_ADRESS, payload:adress})
      })
      .catch ((err) => console.log(err))
    };
  };

  export const updateTel = (uid, tel) => {
    const token = localStorage.getItem("token");
    
    return async (dispatch) => {
      return axios({
        method: "PUT",
        url: `http://localhost:3000/api/user/${uid}`,
        headers: {
            Authorization: "Bearer " + token,
        },
        data: {tel}
      })
      .then((res) => {
        dispatch({type: UPDATE_TEL, payload:tel})
      })
      .catch ((err) => console.log(err))
    };
  };


