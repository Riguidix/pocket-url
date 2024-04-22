const Link = require('../models/links');

/**
 * Creates a new Link
 */
exports.createLink = (req, res) => {
    try {
        let newLink = new Link({
            hash: req.body.hash,
            user: req.body.user,
            originalURL: req.body.originalURL            
        });

        newLink.save()
            .then(link => {
                res.status(201).json({
                    success: true,
                    message: "El link se ha creado exitosamente."
                });
            })
            .catch(error => {
                console.log(error);
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