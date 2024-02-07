const { Profession } = require('../database/models/index');

const professionController = {
    list: async (req,res) => {
        try {
            const professions = await Profession.findAll({
                raw:true,
                attributes: ['id','name']
            });
            if (!professions || professions.length <= 0) {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': 400
                    },
                    msg: 'No hay profesiones registradas'
                });
            };
            return res.status(200).json({
                meta: {
                    'error': false,
                    'count': professions.length,
                    'status': 200,
                    url: `${req.protocol}://${req.get('host')}/api/professions`
                },
                data: {
                    professions
                }
            })
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