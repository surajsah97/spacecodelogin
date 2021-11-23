import axios from "axios"
import CONSTANTS from "../../common/constant"
const config = {
    headers: {
        'Content-Type': 'application/json',
        type: 'Web'
    }
};
const Sendlogin = (dost) => async (dispatch) => {
    dispatch({ type: CONSTANTS.USER_LOGIN_REQUEST });
    
    try{const loginRes = await axios.post("login",dost,config)
    if(loginRes.data.status===true){
        dispatch({
            type: CONSTANTS.USER_LOGIN_SUCCESS,
            payload: loginRes
        });
        localStorage.setItem('userInfo', JSON.stringify(loginRes));
        // localStorage.setItem('isLoggedIn', true);
    }
    else{
        dispatch({
            type: CONSTANTS.USER_LOGIN_FAIL,
            payload: loginRes
        });
    }

}
catch (error) {
    dispatch({
        type: CONSTANTS.USER_LOGIN_FAIL,
        payload: error?.response?.statusText
    });
}
};

export default Sendlogin;
