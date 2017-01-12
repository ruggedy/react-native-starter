import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import devtools from 'remote-redux-devtools';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import rootEffects from '../effects/index';
import rootReducers from '../reducers/index';

const effectMiddleware = createEpicMiddleware(rootEffects);

export default function configureStore(onCompletion?:()=>void){
    const enhancer = compose(
        autoRehydrate(),
        applyMiddleware(
            effectMiddleware,
        ),
        devtools({
            name: 'eatsafe',
            realtime: true
        })
    );

    const store = createStore(rootReducers, enhancer);
    const config = {
        storage: AsyncStorage
    }
    persistStore(store, config, onCompletion);
    return store;
}



