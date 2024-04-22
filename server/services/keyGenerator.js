exports.generateHash = (length) => {
    let hash = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    while(hash.length < length) {
        hash += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return hash;
}