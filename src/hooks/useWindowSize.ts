import React, { useState } from 'react'
import { Dimensions } from 'react-native'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    })
    
    return windowSize 
}

export default useWindowSize