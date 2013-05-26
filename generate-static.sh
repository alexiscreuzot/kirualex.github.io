 #!/bin/bash
 phantomjs --disk-cache=no angular-seo-server.js 4000 http://flatangle.dev &
 sleep 3
 echo "Go snapshot"
 mkdir snapshot
 curl http://flatangle.dev:4000/?_escaped_fragment_=/ > snapshot/index.html
 curl http://flatangle.dev:4000/?_escaped_fragment_=/lab > snapshot/lab.html
 curl http://flatangle.dev:4000/?_escaped_fragment_=/scribbles > snapshot/scribbles.html
 curl http://flatangle.dev:4000/?_escaped_fragment_=/contact > snapshot/contact.html
 echo "OK"