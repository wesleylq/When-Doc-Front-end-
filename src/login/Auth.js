const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      localStorage.setItem('cb', JSON.stringify(cb.cpf));
        
    },
    signout() {
      this.isAuthenticated = false;
      localStorage.removeItem('cb');
    },
    getAuthenticate(){
        let user = localStorage.getItem('cb');
        if(user){
          return true;
        }else{
          return false
        }
         
         
     }

  };

  export default Auth;
  


