(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.index = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class PraiseButton {
        constructor(num, element) {
            this.num = num;
            this.element = element;
        }
        clickAction() {
            this.element.click(() => {
                if (this.num % 2 == 0) {
                    this.element.css('font-size', '80px');
                    $('#animation').addClass('num');
                    // this.num = addnum(this.num);
                    this.num++;
                    setTimeout(() => {
                        $('#animation').removeClass('num');
                    }, 100);
                } else {
                    this.element.css('font-size', '100px');
                    this.num = 0;
                }
                console.log(this.num);
            });
        }
    }
    class Thumb extends PraiseButton {
        constructor(num, element) {
            super(num, element);
        }
    }
    exports.default = Thumb;
});
