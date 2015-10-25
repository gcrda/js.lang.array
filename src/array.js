/**
 * Array module.
 *
 * @module js/lang/Array
 *
 * @version 1.0.0
 * @author Richard King <richrdkng@gmail.com>
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Array = factory();
  }
}(this, function () {

    var original = Array;

    function ArrayCollection() {

    }

    ArrayCollection.prototype = {
        collection : ArrayCollection
    };

    function isArray(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    }

    ArrayCollection.singleize = function(array) {
        var a = [];

        for (var i = 0, len = array.length; i < len; ++i) {
            var entry = array[i];

            a[i] = entry;

            if (isArray(entry)) {
                if (entry.length === 0) {
                    a[i] = null;
                }
                if (entry.length === 1) {
                    a[i] = entry[0];
                }
            }
        }

        return a;
    };

    return ArrayCollection
}));