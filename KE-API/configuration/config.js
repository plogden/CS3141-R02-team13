module.exports = {
    app: process.env.APP,
    port: parseInt(process.env.PORT, 10),

    // DB
    db_dialect: process.env.DB_DIALECT,
    db_host: process.env.DB_HOST,
    db_port: parseInt(process.env.DB_PORT, 10),
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD.substring(1,17),
}
