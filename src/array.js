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

    function singleize(array, key) {
    }

    ArrayCollection.singleize = function(array) {
        return singleize(array);
    };

    return ArrayCollection
}));