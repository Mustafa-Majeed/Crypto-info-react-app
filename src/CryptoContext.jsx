import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const Crypto = createContext();

function CryptoContext({children}) {

    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("$");

    useEffect(() => {
        if (currency === "USD") setSymbol("$");
        else if (currency === "PKR") setSymbol("Rs");
    }, [currency]);
    
    return( <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>)
};
export default CryptoContext;

  export function CryptoState() {
    return useContext(Crypto);
};