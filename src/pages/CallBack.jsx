import React ,{useState, useCallback,useEffect} from 'react'
import { storesContext ,useContext} from '../context'
import * as queryString from 'query-string'
import fetchUserDataByAuthCode from '../service/auth'

export default function CallBack(props) {
    const [user, setUser] = useState({})

    
    const fecthUserData = useCallback(
        async (data) => {
           const queryParams = queryString.parse(props.location.search)
           console.log(queryParams) 
           try{
               const response = await fetchUserDataByAuthCode(queryParams.code)
               setUser(response.data)
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
