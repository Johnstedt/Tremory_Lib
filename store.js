import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import main from './reducers/mainReducer'
import profile from './reducers/profileReducer'
import image from './reducers/imageReducer'
import key from './reducers/keyReducer'
import album from './reducers/albumReducer'
import current from './reducers/currentReducer'
import notification from './reducers/notificationReducer'
import search from './reducers/searchReducer'
import edit from './reducers/editReducer'
import explore from './reducers/exploreReducer'
import share from './reducers/shareReducer'

import { isProduction } from './Config'

export const root = {main, profile, image, key, album, current, notification, search, edit, explore, share}

export const store = createStore(
    combineReducers(root),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    isProduction() ? applyMiddleware( thunk, promise()) : applyMiddleware(createLogger(), thunk, promise()),
  
);