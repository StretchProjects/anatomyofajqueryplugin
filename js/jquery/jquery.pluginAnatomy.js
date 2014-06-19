/*
 * Names are decided on a first come, first served basis
 *
 * Filename must match the pattern "jquery.-pluginname-.js"
 *
 * More information at http://plugins.jquery.com/docs/names/
 */

$(function () {

    //if the plugin is already loaded, don't load it again
    if ($.pluginAnatomy) return;

    //add the plugin to the existing jquery instance
    $.fn.pluginAnatomy = function (action, value, options) {
//    $.fn.pluginAnatomy = function (options) {

        //enforce compliance to ECMA standards
        'use strict';

        //initialise any variables which are global to the plugin, but private outside of it
        var array = ['data', 'here'];

        //plugin-wide settings go here
        var settings = $.extend({
            debug: true
        }, options);

        //functional style functions are fine here
        function onLoadActions() {
            if (settings.debug) console.log('Onload actions completed');
        }

        //anonymous functions works fine too
        var anotherFunction = function (var1, var2) {
                console.log(var1 + ' + ' + var2 + ' = ' + (var1 + var2));
            };

        //add methods within this "class"
        this.method1 = function (var1, var2) {
            console.log('method1 with vars ' + var1 + ' and ' + var2);
            console.log('accessing "private" variable: ' + array[0]);
            return this;
        };

        //functional style functions doesn't work however
//        function this.method2(var1, var2) {
//            console.log('method2 with vars ' + var1 + ' and ' + var2);
//            return this;
//        }

        //attaching existing functions to methods after they have been created is fine too
        //just remember not to put brackets after the function names!
        this.anotherMethod1 = anotherFunction;

        //functions can be called on plugin load
        if (settings.debug) console.log('Loaded anatomy overview plugin');
        onLoadActions();
        anotherFunction(5, 3);

        //call specific functions if not using seperate methods to handle different actions
        switch (action) {
            case 'function1':
                anotherFunction(value.var1, value.var2);
                break;
        }

        //allow users to chain commands
        return this;

    };

}(jQuery));