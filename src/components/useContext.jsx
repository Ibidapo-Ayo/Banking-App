import React, {useState, createContext} from 'react'

export const NavigationBarContext = createContext();

export const NavigationBarProvider = ({children}) =>{
    const [clicked, setClicked] = useState(false);

    return(
        <NavigationBarContext.Provider value={{clicked, setClicked}}>
            {children}
        </NavigationBarContext.Provider>
    )
} 

// const NavigationBarConsumer = NavigationBarContext.Consumer;

// export {NavigationBarProvider, NavigationBarConsumer }