const http = require('./src/app');

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
