const { Profession } = require('../database/models/index');

const professionController = {
    list: async (req,res) => {
        try {
            const professions = await Profession.findAll({
                raw:true
            });
            if (professions) {
                return res.status(200).json({
                    meta: {
                        'error': false,
                        'status': res.status,
                    },
                    data: {
                        professions
                    }
                })
            } else {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': res.status
                    },
                    msg: 'No hay profesiones registradas en la base de datos.'
                });
            }
        } catch (error) {
            return res.status(500).json({
                meta: {
                    'error': true,
                    'status': res.status
                },
                error: {
                    msg: 'Error en la consulta',
                    error
                }
            })
        }
    }
};

module.exports = professionController