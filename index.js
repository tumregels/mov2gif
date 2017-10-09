const child_process = require('child_process');
const gifsicle = require('gifsicle');
const ffmpeg = require('ffmpeg-binaries').ffmpegPath();

let command = `${ffmpeg} -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | ${gifsicle} --optimize=3 --delay=10 > out.gif`;

child_process.exec(command, function (error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout || stderr);
});
