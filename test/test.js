"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));
var fs_1 = __importDefault(require("fs"));
// http.createServer((req, res) => {
//     req.on('data', c => {
//         console.log("=======================================================================================")
//         let bin = c.toString().split('\r\n')[4] + '\r\n' + c.toString().split('\r\n')[5];
//         console.log(bin);
//         fs.writeFileSync('./out.png', bin, 'binary');
//     });
//     res.on('finish', () => process.exit())
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World');
// }).listen(3001);
var A = '\x89PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x01\x00\x00\x00\x01\x00\b\x06\x00\x00\x00\\r¨f\x00\x00\x03!IDATx\x9CíÔ\x01\r\x00!\x10À°ãå \x05I\x98\x7F\x84¬µ°dëìû\x0F\x90ôÉ\x0E]\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00U3ó\x00\x97í\x03í°ãÌ\x1A\x00\x00\x00\x00IEND®B`\x82';
var b = '\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x01\x00\x00\x00\x01\x00\x08\x06\x00\x00\x00\\r\xa8f\x00\x00\x03!IDATx\x9c\xed\xd4\x01\r\x00!\x10\xc0\xb0\xe3\xe5 \x05I\x98\x7f\x84\xac\xb5\xb0d\xeb\xec\xfb\x0f\x90\xf4\xc9\x0e]\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00a\x06\x00U3\xf3\x00\x97\xed\x03\xed\xb0\xe3\xcc\x1a\x00\x00\x00\x00IEND\xaeB`\x82';
var options = {
    host: 'localhost',
    path: '/ocr',
    port: 3000,
    method: 'POST',
    image: '../ocr/testData/icon.png'
};
// console.log("B")
// process.stdout.write(Buffer.from("89504e47", 'hex').toString('binary'))
// fs.writeFileSync('./writetest', Buffer.from("89504e47", 'hex').toString('binary'), {encoding: 'binary'});
// console.log(Buffer.from("89504e47", 'hex'))
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var serverSocket;
    return __generator(this, function (_a) {
        serverSocket = net_1.default.connect(options.port, options.host, function () { return __awaiter(void 0, void 0, void 0, function () {
            var Image, Boundary, Body, Header, SendingData, BinHeader, BinBody, BinLine, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serverSocket.on("data", function (b) {
                            console.log(b.toString());
                        });
                        serverSocket.on('error', function (e) { console.log(e); });
                        return [4 /*yield*/, ReadImage(options.image)];
                    case 1:
                        Image = _a.sent();
                        Boundary = '------------------------d599bfa08c4b3286';
                        Body = [
                            "--" + Boundary,
                            "Content-Disposition: form-data; name=\"file\"; filename=\"" + options.image.split('/').pop() + "\"",
                            "Content-Type: image/" + Image.extension + "\r\n",
                            // '',
                            Image.data.toString('binary'),
                            "--" + Boundary + "--",
                            // ''
                        ];
                        Header = [
                            options.method + " " + options.path + " HTTP/1.1",
                            "Host: " + options.host + ((options.port != 80) ? ':' + options.port : ''),
                            "Content-Length: " + Buffer.from(Body.join('\r\n')).byteLength,
                            'User-Agent: curl/7.76',
                            'Accept: */*',
                            "Content-Type: multipart/form-data; boundary=" + Boundary,
                            '',
                        ];
                        SendingData = __spreadArray(__spreadArray([], Header), Body);
                        Buffer.from(SendingData.join('\r\n'), 'binary').forEach(function (v, idx) {
                            process.stdout.write(v.toString(16) + " ");
                            if (!((idx + 1) % 16))
                                console.log();
                        });
                        BinHeader = new Uint8Array(Buffer.from(Header.join('\r\n'), 'binary').byteLength);
                        BinBody = new Uint8Array(Buffer.from(Body.join('\r\n'), 'binary').byteLength);
                        BinLine = [];
                        c = 0;
                        // console.log(Buffer.from(SendingData.join('\r\n'), 'binary'));
                        Buffer.from(Header.join('\r\n'), 'binary').forEach(function (v, idx) {
                            BinLine.push(v);
                            if (BinLine.length == 8) {
                                BinHeader.set(BinLine, c);
                                BinLine = [];
                                c += 7;
                            }
                        });
                        BinLine = [];
                        c = 0;
                        Buffer.from(Body.join('\r\n'), 'binary').forEach(function (v, idx) {
                            BinLine.push(v);
                            if (BinLine.length == 8) {
                                BinBody.set(BinLine, c);
                                BinLine = [];
                                c += 7;
                            }
                        });
                        console.log(BinHeader);
                        console.log(BinBody);
                        fs_1.default.writeFileSync('./http', Header.join('\r\n') + Body.join('\r\n'), 'binary');
                        // serverSocket.write(Buffer.from(SendingData.join('\r\n'), 'binary'));
                        // serverSocket.write(Buffer.from(Header.join('\r\n'), 'binary'));
                        serverSocket.write(BinHeader);
                        serverSocket.end(BinBody);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); })();
function ReadImage(location) {
    return new Promise(function (resolve) {
        var data = Buffer.from(fs_1.default.readFileSync(location, 'binary'), 'binary');
        // const data = fs.readFileSync(location, 'utf8');
        console.log(data.slice(0, 8), data.length);
        var extension = location.split('.').pop();
        return resolve({ data: data, extension: extension });
    });
}
function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return view;
}
