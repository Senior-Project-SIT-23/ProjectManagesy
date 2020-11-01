import React ,{useState, useCallback,useEffect} from 'react'
import { storesContext ,useContext} from '../context'
import * as queryString from 'query-string'
import fetchUserDataByAuthCode from '../service/auth'
import Cookie from 'js-cookie'
import setCurrentUser from '../context/AuthenticationStore'

export default function CallBack(props) {
  //   const headers = {
  //   Authorization: `Bearer ${Cookie.get("jwt")}`,
  //   "Content-Type": "application/json",
  //   accept: "application/json",
  // }
    const [user, setUser] = useState({})

    
    const fecthUserData = useCallback(
        async () => {
           const queryParams = queryString.parse(props.location.search)
           console.log(queryParams) 
           try{
             if(queryParams.state === 'Managesy'){
               const response = await fetchUserDataByAuthCode(queryParams.code)
               if(response.status === 200){
                 alert(response.data)
                 Cookie.set('jwt',response.data.token)
                //  setCurrentUser(response.data)
                }
             }else{
               alert('123')
             }
           }catch(error){
               alert(error)
           }
        },
        [props.location.search]
    )

    useEffect(() => {
        fecthUserData()
    }, [fecthUserData])
    
    return (
        <div
          className={`flex content-center flex-wrap  min-h-screen `}
        >
          22222
        </div>
      )
}
