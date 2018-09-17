const db = require('../db');

exports.getPorId = ({id},done) => {

	db.get().query(`SELECT *, user, nombre FROM chatinformacion, users WHERE (idUserEmisor=${id} OR idUserReceptor=${id}) AND users.id=chatinformacion.idUserEmisor ORDER BY fecha DESC`, (err, result) => {
        if (err) return done(err.message)
        done(null, result)
	})
}