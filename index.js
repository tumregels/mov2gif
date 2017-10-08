const child_process = require('child_process');
const gifsicle = require('gifsicle');
const ffmpeg = require('ffmpeg-binaries');

child_process.exec(ffmpeg.ffmpegPath() + ' -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | ' + gifsicle + ' --optimize=3 --delay=3 > out.gif', function (error, stdout, stderr) {
    console.log(error || stdout || stderr);
});
