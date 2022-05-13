import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './App'
import { setupStore } from './store/store'

const store = setupStore()
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
