
// 1. create a context and set provider. example;
// const AuthContext = createContext(null)

// 2. set the children props and [context value] example:
// [const authInfo = {};]
// return (
//     <AuthContext.Provider [value={authInfo}]>
//         {children}
//     </AuthContext.Provider>
// );

// 3.to set a provider go to main.jsx and remove route provider to AuthProvider