const proxy = [
    {
        context: '/api',
        target: 'http://localhost:44345',
        pathRewrite: { '^/api': '' }
    }
];
module.exports = proxy;