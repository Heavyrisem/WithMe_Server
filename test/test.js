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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));
var fs_1 = __importDefault(require("fs"));
var options = {
    host: '52.231.160.102',
    path: '/ocr',
    port: 80,
    method: 'POST',
    image: '../ocr/testData/cap2.png'
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var serverSocket;
    return __generator(this, function (_a) {
        serverSocket = net_1.default.connect(options.port, options.host, function () { return __awaiter(void 0, void 0, void 0, function () {
            var Image, Boundary, Body, Header, BinHeader, BinBody;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serverSocket.on("data", function (b) {
                            var Str = b.toString();
                            console.log(Str);
                            if (Str.split("").reverse()[0] == "\n" || "\r")
                                process.exit();
                        });
                        serverSocket.on('error', function (e) { console.log(e); });
                        return [4 /*yield*/, ReadImage(options.image)];
                    case 1:
                        Image = _a.sent();
                        Boundary = '------------------------d599bfa08c4b3286';
                        Body = [
                            "--" + Boundary,
                            "Content-Disposition: form-data; name=\"file\"; filename=\"" + options.image.split('/').pop() + "\"",
                            "Content-Type: image/" + Image.extension,
                            '',
                            Image.data.toString('binary'),
                            "--" + Boundary + "--",
                            ''
                        ];
                        Header = [
                            options.method + " " + options.path + " HTTP/1.1",
                            "Host: " + options.host + ((options.port != 80) ? ':' + options.port : ''),
                            'User-Agent: WithMe_TCP/1.0',
                            'Accept: */*',
                            "Content-Length: " + Buffer.from(Body.join('\r\n'), 'binary').byteLength,
                            "Content-Type: multipart/form-data; boundary=" + Boundary,
                            '',
                            ''
                        ];
                        BinHeader = new Uint8Array(Buffer.from(Header.join('\r\n'), 'binary').byteLength);
                        BinBody = new Uint8Array(Buffer.from(Body.join('\r\n'), 'binary').byteLength);
                        Buffer.from(Header.join('\r\n'), 'binary').forEach(function (v, idx) {
                            BinHeader.set([v], idx);
                        });
                        Buffer.from(Body.join('\r\n'), 'binary').forEach(function (v, idx) {
                            BinBody.set([v], idx);
                        });
                        console.log(BinHeader);
                        console.log(BinBody);
                        fs_1.default.writeFileSync('./http', Header.join('\r\n') + Body.join('\r\n'), 'binary');
                        serverSocket.write(BinHeader);
                        serverSocket.write(BinBody);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); })();
function ReadImage(location) {
    return new Promise(function (resolve) {
        var data = fs_1.default.readFileSync(location);
        console.log(data.slice(0, 8), data.length);
        var extension = location.split('.').pop();
        return resolve({ data: data, extension: extension });
    });
}
