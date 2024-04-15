exports.getmainpage=((req, res) => {
    res.sendFile('img.html', { root: 'views' });
});