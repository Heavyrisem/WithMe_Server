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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));
var fs_1 = __importDefault(require("fs"));
var options = {
    host: 'localhost',
    path: '/ocr',
    port: 3000,
    method: 'POST',
    image: '../ocr/testData/icon.png'
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var serverSocket;
    return __generator(this, function (_a) {
        serverSocket = net_1.default.connect(options.port, options.host, function () { return __awaiter(void 0, void 0, void 0, function () {
            var Image, Boundary, Body, SendingData, _i, SendingData_1, Data;
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
                        console.log(Buffer.from(Image.data).byteLength);
                        Boundary = '------------------------baef9fd53a1d34cd';
                        Body = [
                            // '',
                            "--" + Boundary,
                            "Content-Disposition: form-data; name=\"file\"; filename=\"" + options.image.split('/').pop() + "\"",
                            "Content-Type: image/" + Image.extension,
                            '',
                            Image.data,
                            // '',
                            // 'data',
                            "--" + Boundary + "--",
                        ];
                        console.log(Image.data);
                        SendingData = __spreadArrays([
                            options.method + " " + options.path + " HTTP/1.1",
                            "Content-Length: " + Buffer.from(Body.join('\r\n') + '\r\n').byteLength,
                            'Accept: */*',
                            // 'Expect: 100-continue',
                            // 'Accept-Encoding: gzip, deflate',
                            "Host: " + options.host + ((options.port != 80) ? ':' + options.port : ''),
                            "Content-Type: multipart/form-data; boundary=" + Boundary + "\r\n"
                        ], Body);
                        // console.log(SendingData.join('\r\n'));
                        // return
                        console.log(Buffer.from(SendingData.join('\r\n')).byteLength);
                        fs_1.default.writeFileSync('./http', SendingData.join('\r\n'));
                        for (_i = 0, SendingData_1 = SendingData; _i < SendingData_1.length; _i++) {
                            Data = SendingData_1[_i];
                            serverSocket.write(Buffer.from(Data + "\r\n"));
                        }
                        serverSocket.end();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); })();
// ReadImage(options.image).then(v => {
//     console.log(v.data);
// })
function ReadImage(location) {
    return new Promise(function (resolve) {
        var data = fs_1.default.readFileSync(location, { encoding: 'binary' });
        console.log("l", data.length);
        var extension = location.split('.').pop();
        return resolve({ data: data, extension: extension });
    });
}
