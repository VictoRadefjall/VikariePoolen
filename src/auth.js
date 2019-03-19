module.exports.isAuthenticated = () => {
    
    if(sessionStorage.getItem(['authAdmin'])){
        // Inloggad
        return true;
    } else {
        // Ej inloggad
        return false;
    }
}