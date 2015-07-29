module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var config = {
        temp: './.tmp/',
        // All js to vet
        alljs: ['./src/**/*.js',
              './*js'
               ],
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
            ],
        client: client,
        less: client + 'styles/styles.less',
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        getWiredepDefaultOptions: function () {
            var options = {
                bowerjson: config.bower.json,
                directory: config.bower.directory,
                ignorePath: config.bower.ignorePath
            };
            console.log(options);
            return options;
        }

    };
    return config;
};
