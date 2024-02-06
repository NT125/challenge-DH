const { Applicant } = require('../database/models/index');

const applicantsController = {
    list: async (req,res) => {
        try {
            const applicants = await Applicant.findAll({
                raw:true
            });
            if (applicants) {
                return res.status(200).json({
                    meta: {
                        'error': false,
                        'count': applicants.length,
                        'status': res.status,
                        'url': req.protocol
                    },
                    data: {
                        applicants
                    }
                });
            } else {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': req.status
                    },
                    msg: 'No hay aspirantes'
                })
            }

        } catch(err) {
            return res.status(500).json({
                meta: {
                    'error': true,
                    'status': req.status
                },
                error: {
                    msg: 'Error en la consulta',
                    err
                }
            })
        }
    }
}


module.exports = applicantsController;