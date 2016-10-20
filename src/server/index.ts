/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as multer from 'multer';
import * as compression from 'compression';
import * as request from 'request';
import * as nconf from 'nconf';
import * as fs from 'fs';

var _clientDir = '../';
var app = express();
nconf.argv().env().file({ file: path.join(__dirname, 'config.json') });
const HOST = nconf.get('API_HOST');
/**
 * Start express server to serve the app
 * @param {Number} port
 */

export function init(port: number) {

    app.use('/api', multer().any(), function (req, res) {
        let url: string = 'http://' + HOST + req.path;
        let serverRequest: any = null;
        if (req.method === 'POST') {
            serverRequest = request.post({ uri: url, json: req.body });
        } else if (req.method === 'PUT') {
            serverRequest = request.put({ uri: url, json: req.body });
        } else if (req.method === 'DELETE') {
            serverRequest = request.del({ uri: url, json: req.body });
        } else {
            serverRequest = request(url);
        }
        req.pipe(serverRequest).pipe(res);
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(compression());

    /**
     * Serve static files.
     */
    app.use('/js', express.static(path.resolve(__dirname, _clientDir + '/js')));
    app.use('/fonts', express.static(path.resolve(__dirname, _clientDir + '/fonts')));
    app.use('/css', express.static(path.resolve(__dirname, _clientDir + '/css')));
    app.use('/assets', express.static(path.resolve(__dirname, _clientDir + '/assets')));

    /**
     * Spa Res Sender.
     * @param req {any}
     * @param res {any}
     */
    var renderIndex = function (req: express.Request, res: express.Response) {
        res.sendFile(path.resolve(__dirname, _clientDir + '/index.html'));
    };

    /**
     * Prevent server routing and use @ng2-router.
     */
    app.get('/*', renderIndex);

    /**
     * Server with gzip compression.
     */
    return new Promise<http.Server>((resolve, reject) => {
        let server = app.listen(port, () => {
            var port = server.address().port;
            resolve(server);
        });
    });
};
