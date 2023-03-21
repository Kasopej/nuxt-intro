export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        authenticated: false
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
    },
    persist: true,
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
  }