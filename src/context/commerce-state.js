import React from "react";
import { ADD_T0_CART, REMOVE_FROM_CART, INC_QTY, DEC_QTY, EMPTY_CART, } from "./commerce-action";
import { useReducer, useEffect,useState} from "react";
import CommerceContext from "./commerce-context";
import {commerceReducer} from './commerce-reducer'
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import {auth,provider} from '../firebaseConfig'
const storageKey = "localCart";

const InitialState = {
    basket: [], //id, title,price,image
}


// add to cart



export default function CommerceState(props) {
    const [state, dispatch] = useReducer(commerceReducer, InitialState, (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial)
    const [currUser, setCurrUser] = useState({})
    const [userInfo, setUserInfo] = useState("")
    

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
   
                setCurrUser(currentuser)   
        })
              
         return () => unsubscribe()     
    },[currUser]) 
    
const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem('USER_INFORMATION', JSON.stringify(result.user.displayName));
                window.location.reload(true)
                   
                })
              
            .catch((error) => {
                alert(error)
            })
    }  

    /*useEffect(() => {
        localStorage.setItem('USER_INFORMATION', JSON.stringify(userInfo));
        console.log(userInfo)

    }, [userInfo]);
*/
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('USER_INFORMATION'));
        if (data !== null) setUserInfo(data);
        setUserInfo(data)
        

    }, [userInfo]);
    


    const userLogout = () => {
        return signOut(auth)
    }
    const incQty = (itemID) => {
        dispatch({
            type: INC_QTY,
            payload: itemID
        })
    }

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state));
        
    }, [state]);

    const totalQty = state.basket.reduce((totalQty, item) => {
        return totalQty + (item.qty)
    }, 0)



    const decQty = (itemID) => {
        dispatch({
            type: DEC_QTY,
            payload:itemID
            
        })
    }
    const addToCart = (item) => {
        dispatch({
            type: ADD_T0_CART,
            payload: item

        })
    }

    const removeFromCart = (itemId) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: itemId
        })
    }

    const emptyCart = () => {
        dispatch({
            type:EMPTY_CART
        })
    }

  return (
   
      <CommerceContext.Provider value={{
          basket: state.basket,
          addToCart,
          removeFromCart,
          incQty,
          decQty,
          emptyCart,
          totalQty,
          currUser,
          signInWithGoogle,
          userLogout,
          userInfo

      }}>
          {props.children}
      </CommerceContext.Provider>
      
      
      
  )
}
