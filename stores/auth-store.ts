export const AuthStore = defineStore('AuthStore', {
    state: () => ({
        authenticated: false,
    }),
    getters: {
        isLoggedIn(state){
            return state.authenticated
        }
    },
    actions: {
        LOGIN(){
            this.authenticated = true
        },
        LOGOUT(){
            this.authenticated = false
        }
    }
})