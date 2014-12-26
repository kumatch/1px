var assert = require('power-assert');
var px = require("../");
var format = require("util").format;

describe("1px", function () {

    it("gif", function () {
        assert( px.gif.match(/data:image\/gif;base64,R0lGODlhAQABAIAAA/) );
    });

    it("png", function () {
        assert( px.png.match(/data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB/) );
    });

    it("gif !== png", function () {
        assert(px.gif !== px.png );
    });

    it("call() === gif", function () {
        assert(px.gif === px() );
    });

    it("toString() === gif", function () {
        assert(px.gif === format("%s", px) );
    });
});
