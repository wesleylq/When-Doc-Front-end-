export default{ Auth: {
    isAuthenticated: false,
    authenticate() {
      this.isAuthenticated = true;      
    },
    signout() {
      this.isAuthenticated = false;      
    }
    }
  };