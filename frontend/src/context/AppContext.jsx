import { createContext, useState } from "react";

export const  AppContext = createContext()

const AppContextProvider=(props)=>{
          const [user, setUser]= useState(true)

          const value={
                    user,setUser
          }

          return (
                    <AppContext.Provider value={value}>
                              {props.Children}
                    </AppContext.Provider>
          )
}
export default AppContextProvider