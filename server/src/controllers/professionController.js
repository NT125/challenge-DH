const { Profession } = require('../database/models/index');

const professionController = {
    list: async (req,res) => {
        try {
            const professions = await Profession.findAll({
                raw:true,
                attributes: ['id','name']
            });
            if (professions) {
                return res.status(200).json({
                    meta: {
                        'error': false,
                        'count': professions.length,
                        'status': 200,
                        'url': req.protocol + '://' + req.get('host') + '/professions'
                    },
                    data: {
                        professions
                    }
                })
            } else {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': 400
                    },
                    msg: 'No hay profesiones registradas en la base de datos.'
                });
            }
        } catch (error) {
            return res.status(500).json({
                meta: {
                    'error': true,
                    'status': 500
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