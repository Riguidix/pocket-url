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