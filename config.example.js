const config = {
    dbURL       = process.env.DB_URL || 'db',
    serverHost  = process.env.SERVER_HOST  || 'http://localhost',
    serverPort  = process.env.SERVER_PORT || '3000',
    publicRoute = process.env.PUBLIC_ROUTE  || 'app'

}

module.exports = config;