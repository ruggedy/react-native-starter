declare module 'react-native-navigation-redux-helpers'{
    
    export module actions {
        function pushRoute(route, key):any;
        function popRoute(key):any;
        function jumpTo(keyOrIndex, key):any;
        function reset(routes, key, index):any;
        function replaceAt(routeKey, route, key):any;
        function replaceAtIndex(index, route, key):any;
        function jumpToIndex(routeIndex, key):any;
        function back(key):any;
        function forward(key):any;
    }

    export function cardStackReducer(initialState):any;
    export function tabReducer(initialState):any;
    
}