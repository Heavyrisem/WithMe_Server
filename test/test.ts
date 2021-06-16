import net from 'net';
import fs from 'fs';

const options = {
    host: '52.231.160.102',
    path: '/ocr',
    port: 80,
    method: 'POST',
    image: '../ocr/testData/R720x0.jpeg'
};

(async() => {
    const serverSocket = net.connect(options.port, options.host, async () => {
        serverSocket.on("data", (b) => {
            let Str = b.toString();

            console.log(Str);
            if (Str.split("").reverse()[0] == "\n" || "\r") process.exit()
        });
        serverSocket.on('error', (e) => {console.log(e)})

        const Image = await ReadImage(options.image);
        const Boundary = '------------------------d599bfa08c4b3286';
        const Body = [
            `--${Boundary}`,
            `Content-Disposition: form-data; name="file"; filename="${options.image.split('/').pop()}"`,
            `Content-Type: image/${Image.extension}`,
            '',
            Image.data.toString('binary'),
            `--${Boundary}--`,
            ''
        ]
        const Header = [
            `${options.method} ${options.path} HTTP/1.1`,
            `Host: ${options.host}${(options.port!=80)?':'+options.port:''}`,
            'User-Agent: WithMe_TCP/1.0',
            'Accept: */*',
            `Content-Length: ${Buffer.from(Body.join('\r\n'), 'binary').byteLength}`,
            `Content-Type: multipart/form-data; boundary=${Boundary}`,
            '',
            ''
        ]

        let BinHeader = new Uint8Array(Buffer.from(Header.join('\r\n'), 'binary').byteLength);
        let BinBody = new Uint8Array(Buffer.from(Body.join('\r\n'), 'binary').byteLength);
        
        Buffer.from(Header.join('\r\n'), 'binary').forEach((v, idx) => {
            BinHeader.set([v], idx)
        })

        Buffer.from(Body.join('\r\n'), 'binary').forEach((v, idx) => {
            BinBody.set([v], idx);
        })


        console.log(BinHeader);
        console.log(BinBody);

        fs.writeFileSync('./http', Header.join('\r\n') + Body.join('\r\n'), 'binary');

        serverSocket.write(BinHeader);
        serverSocket.write(BinBody);
    });
})();

function ReadImage(location: string): Promise<{data: Buffer, extension: undefined | string}> {
    return new Promise(resolve => {
        const data = fs.readFileSync(location);
        console.log(data.slice(0, 8),data.length);

        const extension = location.split('.').pop();

        return resolve({data: data, extension: extension})
    })
}