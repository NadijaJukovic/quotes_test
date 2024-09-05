function ProtectedRoute({children}){
    const localLoggedInUser = localStorage.getItem("loggedInUser");
    if (localLoggedInUser) {
         return children;
    } 
          return 
    }
       

export default ProtectedRoute;