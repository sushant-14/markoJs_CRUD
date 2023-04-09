class UserDao {

    constructor(db) {
        this._db = db;
    }

    findByEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM users
                    WHERE email = ?
                `,
                [email],
                (error, user) => {
                    if (error) {
                        return reject('It was not possible to find a user');
                    }

                    return resolve(user);
                }
            )
        });
    }
}

module.exports = UserDao;