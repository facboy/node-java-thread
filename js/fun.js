'use strict';

var java = require('java');

//java.options.push('-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005');
java.classpath.push('../target/classes');

var fun = java.newInstanceSync('org.facboy.nodejava.Fun'),
    doer = java.newProxy('org.facboy.nodejava.Doer', {
        doIt: function() {
            console.log('it');
        }
    });
fun.doSomethingSync(doer);

(function wait () {
    if (true) setTimeout(wait, 1000);
})();
