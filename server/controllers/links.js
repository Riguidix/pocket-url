const Link = require('../models/links');
const Hash = require('../models/hash');
const { generateHash } = require('../services/keyGenerator');

/**
 * Creates a new Link
 */
exports.createLink = async (req, res) => {
    try {
        let validate = false;
        let hash;

        do {
            hash = generateHash(5);
            let hashFind = await Hash.findOne({ hash: hash });
    
            if (hashFind === null) {
                validate = true;
            }
          } while (!validate);

        let newLink = new Link({
            hash: hash,
            user: req.body.user,
            originalURL: req.body.originalURL            
        });

        let newHash = new Hash({
            hash: hash
        });

        newHash.save();
        newLink.save()
            .then(link => {
                res.status(201).json({
                    success: true,
                    message: "El link se ha creado exitosamente.",
                    data: link
                });
            })
            .catch(error => {
                if (error.code === 11000) {
                    res.status(200).json({
                        success: true,
                        message: "El hash ya existe."
                    });
                    return;                    
                }

                res.status(200).json({
                    success: true,
                    message: "Hubo un error al crear el link."
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Hubo un error en el servidor."
        });
    }
}

/**
 * Read all Links
 */
exports.readLinks = (req, res) => {
    try {
        Link.find({})
            .then(links => {
                if (links.length === 0 || links === null) {
                    res.status(200).json({
                        sucecss: true,
                        message: "No se encontraron links para listar.",
                        data: links
                    });
                    return;
                }

                res.status(200).json({
                    success: true,
                    message: "Los links se listaron correctamente.",
                    data: links
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    message: "Hubo un error al listar los links."
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Hubo un error en el servidor."
        });
    }
}

/**
 * Read a Link by Hash
 */
exports.readLinkByHash = (req, res) => {
    try {
        Link.find({ hash: req.params.hash })
            .then(link => {
                if (link.length === 0 || link === null) {
                    res.status(200).json({
                        sucecss: true,
                        message: "No se encontro el link para listar con ese identificador.",
                        data: link
                    });
                    return;
                }

                res.status(200).json({
                    success: true,
                    message: "El link se listo correctamente.",
                    data: link
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    message: "Hubo un error al listar el link con ese identificador."
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Hubo un error en el servidor."
        });
    }
}

/**
 * Update a Link by ID
 */
exports.updateLink = (req, res) => {
    try {
        let updatedLink = {
            hash: req.body.hash,
            user: req.body.user,
            originalURL: req.body.originalURL,
            expiredAt: Date.now()
        }

        Link.findByIdAndUpdate(req.params.id, updatedLink, { runValidators: true, new: true })
            .then(link => {
                if (link === null) {
                    res.status(200).json({
                        success: true,
                        message: "No se encontraron links con ese identificador para actualizar.",
                        data: []
                    });
                    return;
                }

                res.status(200).json({
                    success: true,
                    message: "El link se ha actualizado correctamente.",
                    data: link
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    message: "Hubo un error al actualizar el link."
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Hubo un error en el servidor."
        });
    }
}

/**
 * Delete a Link by ID
 */
exports.deleteLink = (req, res) => {
    try {
        Link.findByIdAndDelete(req.params.id)
            .then(link => {
                if (link === null) {
                    res.status(200).json({
                        success: true,
                        message: "No se encontraron links con ese identificador para eliminar.",
                    });
                    return;
                }

                res.status(200).json({
                    success: true,
                    message: "El link se ha eliminado correctamente."
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    message: "Hubo un error al eliminar el link."
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Hubo un error en el servidor."
        });
    }
}