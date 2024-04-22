const Hash = require('../models/hash');

/**
 * Creates a Hash
 */
exports.createHash = (hash) => {
    try {
        let newHash = new Hash({
            hash
        });

        newHash.save();
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Read a Hash by Hash
 */
exports.readHashByHash = (hash) => {
    try {
        Hash.find({ hash: hash })
            .then(hash => {
                if (hash === null) {
                    console.log('No existen hashes para listar');
                    return true;
                }

                console.log('El hash se listo correctamente', hash);
                return false;
            })
    } catch (error) {
        console.error(error);
        return false;
    }
}