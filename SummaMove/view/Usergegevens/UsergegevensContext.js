import React from "react";
const UserContest = React.createContext();


const UserProviders =({children})=>{

    const [user, setUser] = React.useState([]);
    return(
        <UserContest.Provider value={{user ,setUser}}>
            {children}
        </UserContest.Provider>
    )

}
export {UserProviders,UserContest};