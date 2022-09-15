const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.get('/chat', function (req, res) {
    const userInputText = req.query.text;

    const response = {
        output: []
    };

    const msg = response.output;
    if (userInputText.indexOf('ラーメン') > -1) {
        msg.push({
            type: 'text',
            value: `ラーメンなら魔王軒\n https://maouken.netlify.app/html/`
        });
    } else if (userInputText.indexOf('💩') > -1) {
        msg.push({
            type: 'text',
            value: `うんちを流すな！！！！`
        });
    } else if (userInputText.indexOf('NTR') > -1) {
        msg.push({
            type: 'text',
            value: `nightmare tulsi ramen`
        });
    } else if (userInputText.indexOf('小さい') > -1) {
        msg.push({
            type: 'text',
            value: `哀カップ`
        });
    } else if (userInputText.indexOf('SCC') > -1) {
        msg.push({
            type: 'text',
            value: `Super Cute Cute!!!!!!!!!!`
        });
    } else if (userInputText.indexOf('年齢') > -1) {
        msg.push({
            type: 'text',
            value: `"10万"17歳`
        });
    } else if (userInputText.indexOf('名前') > -1) {
        msg.push({
            type: 'text',
            value: `愚地独歩`
        });
    } else if (userInputText.indexOf('最新動画') > -1) {
        msg.push({
            type: 'text',
            value: `https://www.youtube.com/embed/?list=UUUdlDvZJGGP78zvta3swIhw`
        });
    } else {
        msg.push({
            type: 'text',
            value: `${userInputText}`
        });
    }

    res.json(response);
});

app.listen(port, () => {
    console.log(`${port}番で💩`);
});