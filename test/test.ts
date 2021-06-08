import net from 'net';
import fs from 'fs';

const options = {
    host: 'localhost',
    path: '/ocr',
    port: 3000,
    method: 'POST',
    image: '../ocr/testData/icon.png'
};

(async() => {
    const serverSocket = net.connect(options.port, options.host, async () => {
        serverSocket.on("data", (b) => {
            console.log(b.toString());
        });
        serverSocket.on('error', (e) => {console.log(e)})

        const Image = await ReadImage(options.image);
        console.log(Buffer.from(Image.data).byteLength);
        // const Boundary = Date.now().toString();
        const Boundary = '------------------------baef9fd53a1d34cd';
        const Header = [
            `${options.method} ${options.path} HTTP/1.1`,
            // `Content-Length: ${Buffer.from(Body.join('\r\n')+'\r\n').byteLength}`,
            'Accept: */*',
            `Host: ${options.host}${(options.port!=80)?':'+options.port:''}`,
            `Content-Type: multipart/form-data; boundary=${Boundary}`,
            ''
        ]



        const Body = [
            `--${Boundary}`,
            `Content-Disposition: form-data; name="file"; filename="${options.image.split('/').pop()}"`,
            `Content-Type: image/${Image.extension}`,
            '',
            Image.data,
            `--${Boundary}--`,
        ]
        console.log(Image.data)
        const SendingData = [
            `${options.method} ${options.path} HTTP/1.1`,
            `Content-Length: ${Buffer.from(Body.join('\r\n')+'\r\n').byteLength}`,
            'Accept: */*',
            // 'Expect: 100-continue',
            // 'Accept-Encoding: gzip, deflate',
            `Host: ${options.host}${(options.port!=80)?':'+options.port:''}`,
            `Content-Type: multipart/form-data; boundary=${Boundary}\r\n`,
            // 'Content-Disposition: form-data; name="description"',
            // 'User-Agent: WithMe_Tester/1.0',
            ...Body
        ]
        // console.log(SendingData.join('\r\n'));
        // return
        console.log(Buffer.from(SendingData.join('\r\n')).byteLength);
        fs.writeFileSync('./http', SendingData.join('\r\n'));

        for (const Data of SendingData) {
            serverSocket.write(Buffer.from(Data + "\r\n"));
        }

        serverSocket.end();
    });
})();
// ReadImage(options.image).then(v => {
//     console.log(v.data);
// })
function ReadImage(location: string): Promise<{data: string, extension: undefined | string}> {
    return new Promise(resolve => {
        const data = fs.readFileSync(location, {encoding: 'binary'});
        console.log("l",data.length)
        const extension = location.split('.').pop();

        return resolve({data: data, extension: extension})
    })
}
