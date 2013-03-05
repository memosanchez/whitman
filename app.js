var express = require('express')
  , http = require('http')
  , path = require('path')
  , os = require('os');

var app = express();
var public_dir = path.join(__dirname, 'public');
var tmp_dir = path.join(os.tmpDir(), 'whitman');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('poopsmith'));
  app.use(express.session({
    secret: 'zdrajczyni',
    cookie: { maxAge: 2592000000 }
  }));
  app.use(app.router);
  app.use(require('less-middleware')({ 
    src: public_dir,
    dest: tmp_dir
  }));
  app.use(express.static(public_dir));
  app.use(express.static(tmp_dir));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.use(express.logger());
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Whitman' });
});

var default_body = [
  '### A Clear Midnight.',
  '',
  '*This* is thy hour O Soul, thy free flight into the wordless,',
  'Away from books, away from art, the day erased, the lesson done,',
  'Thee fully forth emerging, silent, gazing, pondering the themes ',
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; thou lovest best,',
  'Night, sleep, death, and the stars.',
  '',
  '[![Walt Whitman](http://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Walt_Whitman_signature.svg/160px-Walt_Whitman_signature.svg.png)](//wikipedia.org/wiki/Walt_Whitman)'
].join('\n');

app.get('/document', function(req, res) {
  if (req.session.document === undefined)
    req.session.document = { title: 'A Clear Midnight', body: default_body }

  res.send(req.session.document);
});

app.post('/document', function(req, res) {
  req.session.document = req.body;
  req.session.cookie.expires = new Date(Date.now() + 2592000000);
  res.send(200);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Whitman server listening on port " + app.get('port'));
});
