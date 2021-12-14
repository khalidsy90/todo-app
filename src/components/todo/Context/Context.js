import React from 'react'


export const SettingsContext=React.createContext()
function Settings(props) {
   const state ={
    display :false,
    numOfItems:3,
    defaultSort:'item'
   }
    return (
        <>
           < SettingsContext.Provider value={state}>
                {props.children}
            </SettingsContext.Provider>
        </>
    )
}

export default Settings