import { createContext, useContext, useReducer } from "react";


const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token:null
};


function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { ...state, isAuthenticated: true, user: action.payload.username,token: action.payload.token };
      case "logout":
        return { ...state, isAuthenticated: false, user: null,token: null };
      default:
        throw new Error("Action type is not supported");
    }
  }


function AuthProvider({ children }) {

  function login(user,pass) {
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: user,
    password: pass,
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then((data)=> {
    console.log(data)
    dispatch({ type: "login", payload: data });
}).catch((err)=> {
    alert(err.message)
})
}

  function logout() {
    dispatch({ type: "logout" });
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = state;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthenticate() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuthenticate };
