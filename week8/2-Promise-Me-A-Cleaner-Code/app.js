require.config({
    paths: {
        'Q': 'bower_components/q/q'
    }
});

require(['Q'], function(Q) {

    function first() {
        var deferred = Q.defer();
        setTimeout(function () {
            deferred.resolve();
        }, 1000);
        return deferred.promise;
    }

    function second() {
        var deferred = Q.defer();
        setTimeout(function () {
            deferred.resolve();
        }, 1000);
        return deferred.promise;
    }

    function third() {
        console.log('I should do the job after first and second');
    }

    Q.fcall(first)
        .then(function () {
            console.log('first is done');
            return second();
        })
        .then(function () {
            console.log('second is done');
            return third();
        })
        .done();

});
