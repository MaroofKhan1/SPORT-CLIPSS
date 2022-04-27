const Clip = require('../models/clip');

module.exports = {
    index,
    show,
    new: newClip,
    create
};

function index(req, res) {
  Clip.find({}, (err, clips) => {
    clips.reverse();
    res.render('clips/index', {clips});
  });
}

function show(req, res) {
  Clip.findOne({ _id: req.params.id },(err, clip) => {
    res.render('clips/show', {clip});
  });
}

function newClip(req, res) {
  res.render('clips/new');
}

function create(req, res) {
  var clipUrl = req.body.clipUrl;
  let result = clipUrl.split('/').pop().split('?').shift()
  if (result.groups) {
    var embeddedUrl = `https://www.youtube.com/embed/${result}`;
    req.body.user = req.user._id;
    var newClip = new Clip({Url:embeddedUrl});
    newClip.save(() => {
      res.redirect('/clips');
    });   
  } else {
    res.redirect('/clips');
  }
}
