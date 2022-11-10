const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'release',
  repo: 'https://github.com/super-resource/super-resource.github.io.git'
}, function(err) {
  console.log(err)
});