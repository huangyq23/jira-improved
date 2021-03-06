'use strict';

var url = require('url');

function faviconUrl (urlStr) {

    var urlObj = url.parse(urlStr);

    var hostname = url.format({
        protocol: urlObj.protocol,
        host: urlObj.host,
        port: urlObj.port
    });

    var backupFavIcon = url.format({
        protocol: urlObj.protocol,
        host: urlObj.host,
        port: urlObj.port,
        pathname: 'favicon.ico'
    });

    if (urlObj.host === 'src.va.opower.it') {
        backupFavIcon = 'https://src.va.opower.it/static/mx7kwf/images/favicon.ico';
    }

    var favIcon = url.format({
        protocol: 'https',
        host: 'getfavicon.appspot.com',
        pathname: hostname,
        search: 'defaulticon=' + backupFavIcon
    });

    return favIcon;
}

module.exports = faviconUrl;
