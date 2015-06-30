require('streamline').register({
    fibers: true,
    cache: true,
    cacheDir:__dirname + '/cache'
});

require('./service._js');