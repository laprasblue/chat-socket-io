module.exports = handleError = (err, req, res, next) => {
    let message = err.message || 'Internal Server Error';
    let status = err.status || 500;
    switch (err.name) {
        case 'JsonWebTokenError':
            status = 400;
            break;
        case 'TokenExpiredError':
            status = 401;
            break;
    }
    return res.status(status).json({ success: false, message });
};
