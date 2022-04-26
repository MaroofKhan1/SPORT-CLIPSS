const clip = require('../models/clip');
const Clip = require('../models/clip');

module.exports = {
    index,
    show,
    new: newClip,
    create
};

// function index(req, res) {
//     res.render('clips/index', {title: 'Clips'} )
// }

function index(req, res) {
  Clip.find({}, (err, clips) => {
    res.render('clips/index', {clips});
  });
}

function show(req, res) {

}

function newClip(req, res) {
  res.render('clips/new');
}

function create(req, res) {
  var clipUrl = req.body.clipUrl;
  let result = clipUrl.split('/').pop().split('?').shift()
  var embeddedUrl = `https://www.youtube.com/embed/${result}`;
  var newClip = new Clip({Url:embeddedUrl});
  newClip.save(() => {
    res.redirect('/clips');
  });   
}



  // var match = clipUrl.match(/(http:|https:)?(\/\/)?(youtube.com|youtu.be)\/?(\?v=|\/);
  // console.log('clipUrl',clipUrl);
  // console.log('match', match);
  // if (match.groups) {
    // var embeddedUrl = `https://www.youtube.com/embed/${match.groups.uid}`;
    // var newClip = new Clip({Url:embeddedUrl});
    // newClip.save(() => {
    //   res.redirect('/clips');
    // });    
// }