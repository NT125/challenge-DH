const { Applicant, Profession } = require('../database/models/index');

const applicantsController = {
    list: async (req, res) => {
        try {
            const getApplicants = await Applicant.findAll({
                raw: true,
                attributes: ['id', 'DNI', 'firstName', 'email', 'phone', 'linkedinURL', 'dateOfBirth', 'genre', 'image', 'professionId', 'experiencieLevel'],
                include: [{
                    model: Profession,
                    as: 'professions',
                    attributes: ['id', 'name']
                }]
            });
            if (getApplicants) {
                const applicants = getApplicants.map(applicant => ({
                    id: applicant.id,
                    DNI: applicant.DNI,
                    firstName: applicant.firstName,
                    email: applicant.email,
                    phone: applicant.phone,
                    linkedinURL: applicant.linkedinURL,
                    dateOfBirth: applicant.dateOfBirth,
                    genre: applicant.genre,
                    image: applicant.image ? req.protocol + '://' + req.get('host') + '/uploads/applicants/' + applicant.image : null,
                    profession: [
                        {
                            id: applicant['professions.id'],
                            name: applicant['professions.name']
                        }
                    ]
                }));
                return res.status(200).json({
                    meta: {
                        'error': false,
                        'count': applicants.length,
                        'status': 200,
                        'url': req.protocol + '://' + req.get('host') + '/applicants'
                    },
                    data: {
                        applicants
                    }
                });
            } else {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': 404
                    },
                    msg: 'No hay aspirantes'
                })
            }

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                meta: {
                    'error': true,
                    'status': 500
                },
                error: {
                    msg: 'Error en la consulta',
                    err
                }
            })
        }
    }
};

module.exports = applicantsController;