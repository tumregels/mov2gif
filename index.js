const child_process = require('child_process');
const gifsicle = require('gifsicle');
const ffmpeg = require('ffmpeg-binaries').ffmpegPath();


child_process.exec(`${ffmpeg} -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | ${gifsicle} --optimize=3 --delay=3 > out.gif`, function (error, stdout, stderr) {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(stdout || stderr);
});
