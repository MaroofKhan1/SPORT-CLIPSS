module.exports = {
    index
};

function index(req, res) {
    res.render('clips/index', {title: 'Clips'} )
}