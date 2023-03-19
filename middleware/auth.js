export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = false
    if(process.client) console.log({from});
    
    if(!authenticated) {
        if(from.name !== 'login') return navigateTo(from)
        else return abortNavigation('denied')
    }
})
