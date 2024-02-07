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
            if (!getApplicants || getApplicants.length <= 0) {
                return res.status(404).json({
                    meta: {
                        'error': true,
                        'status': 404
                    },
                    msg: 'No hay aspirantes registrados'
                });
            };
            const applicants = getApplicants.map(aplicant => {
                const { id, DNI, firstName, lastName, email, phone, linkedinURL, dateOfBirth, genre, image, experiencieLevel,'professions.id':professionId,'professions.name':professionName} = aplicant;
                return {
                    id,
                    DNI,
                    firstName,
                    lastName,
                    email,
                    phone: phone ? phone : null,
                    linkedinURL: linkedinURL ? linkedinURL : null,
                    dateOfBirth,
                    genre,
                    experiencieLevel,
                    image: image ? `${req.protocol}://${req.get('host')}/uploads/applicants/${image}` : null,
                    profession: [{
                        id: professionId,
                        name: professionName
                    }]
                }
            });
            return res.status(200).json({
                meta: {
                    length: applicants.length,
                    status: 200,
                    url: `${req.protocol}://${req.get('host')}/api/applicants`
                },
                data: {
                    applicants
                }
            })

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