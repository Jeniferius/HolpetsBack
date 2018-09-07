const db = require('../db');

exports.getAll = (done) => {

	db.get().query('SELECT * FROM alumno', (err, rows) => {
		if (err) return done(err)
		done(null, rows)
	})
}


exports.insert = ({user, password, nombre, apellidos, fecha_nac, email, direccion, ser_cuidador, cuidar_disponibilidad, cuidar_tipo_mascota, nombre_mascota, raza, fecha_nac_mascota, peso, fotos}, done)=>{
	
	db.get().query('INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?)', [null, user, password, nombre, apellidos, fecha_nac, email, direccion, ser_cuidador, cuidar_disponibilidad, cuidar_tipo_mascota], (err, result) => {
		if (err) return done(err.message);

		db.get().query('INSERT INTO mascotas VALUES (?,?,?,?,?,?,?)', [null, nombre_mascota, raza, fecha_nac_mascota, peso, fotos, result.insertId], (err, result) => {
			if (err) return done(err.message);
			done(null, result);
		});
	});
}

exports.login = ({ user, password }, done) => {
	db.get().query(`SELECT user, password FROM users WHERE user='${user}' AND password='${password}'`, (err, result) => {
		if (err) return done(err.message);
		done(null, result);
	});
}