import React from 'react'

import ContentWrapper from '../ContentWrapper/ContentWrapper'
import StoreProvider from '../StoreProvider/StoreProvider'
import ThemeProvider from '../ThemeProvider/ThemeProvider'

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <ContentWrapper />
    </ThemeProvider>
  </StoreProvider>
)

export default App
