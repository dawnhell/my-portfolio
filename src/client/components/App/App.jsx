import React from 'react'

import Wrapper from '../Wrapper/Wrapper'

import StoreProvider from '../StoreProvider/StoreProvider'

const App = () => (
  <StoreProvider>
    <Wrapper />
  </StoreProvider>
)

export default App
