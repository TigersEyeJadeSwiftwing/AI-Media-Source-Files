/*:
 * @target MZ
 * @plugindesc Core, common functions.
 * @author DGN
 *
 * @help DGN_core.js
 *
 * Core Functions.
 *
 * ----- Plugin List:
 * DGN_globals.js
 * DGN_core.js
 * DGN_classes.js
 * DGN_functions.js
 */

/// Custom Functions

/** Performs waveshaping distortion on a floating point value, so that the input can be any real number, positive or negative, and the
 * output value is always within -1.0 and 1.0, but exclusive of exact -1.0 and exact 1.0, and instead never quite reaching either cap.
 * The input can also be a zero value, which outputs zero.
 * @return {number} The output value, which is either zero or a floating point value between -1.0 and 1.0.
 */
Object.defineProperty(Number.prototype, "Distortion", {
    value: function(multiplier=1.0) {return this * multiplier / (Math.abs(this * multiplier)+1.0);}, enumerable: false
});

/** Makes a base number vary by a random amount to become more or less than the number was to begin with.  The input
 * parameter determines how much the base object (number) can vary, which is half of the parameter below 1.0 to half of
 * the input parameter above 1.0.
 * @param (number) The amount for the base number to randomly vary from what it was to begin with.
 * @return {number} The output value, which is randomly varied if the input parameter is != zero.
 */
Object.defineProperty(Number.prototype, "Vary", {
    value: function(amount) {return this*(1.0+(amount*Math.random()*2.0)-amount);}, enumerable: false
});

Object.defineProperty(Number.prototype, "IsWithin", {
    value: function(a, b) {return ((this >= a) && (this <= b));}, enumerable: false
});

/** Capitalizes the first letter of each word in a string.  Has a couple of safety catches of sorts for contractions and apostrophes that precede letters, etc.
 * @return {string} The new text, with capitalized words.
 */
Object.defineProperty(String.prototype,"Capitalize", {
    value: function() {return this.replace(/\b\w/g, function(l){ return l.toUpperCase() }).replaceAll("'S", "'s").replaceAll("'T", "'t");}, enumerable: false
});

/** Reformats a string with auto-computed word-wrapping.  Note that this removes any existing carriage returns and line breaks in favor of the replacement computed ones.
 * @return {string} The re-formatted text.
 */
Object.defineProperty(String.prototype,"AutoFormat", {
    value: function(number_chars=-1) {
        if (number_chars == -1)
            return DGN.ReparseTextAuto(this);
        if (number_chars == 0)
            return "\n" + DGN.ReparseTextAuto(this,41) + "\n";

        return DGN.ReparseTextAuto(this,number_chars);
    }, enumerable:false
});

/** Makes a deep copy of any object.  Doesn't copy functions, just data.
 * @return {object} A deep copy of the input object.
 */
Object.defineProperty(Object.prototype,'Deep',{value:function(){return JSON.parse(JSON.stringify(this));},enumerable:false});

/** Takes a number and uses it as an interpolation value of the amount of a second paramater to make into a number.  0.0 for the starting
 * object returns the first parameter, and 1.0 returns the second parameter.
 * @param (number) a - The first number to blend with the second.
 * @param (number) b - The second number to blend with the first.
 * @return {number} A blend of the two parameters, using the starting object as an interpolation factor.
 */
Object.defineProperty(Number.prototype,'Lerp',{value:function(a,b){return (a*(1.0-this))+(b*this);},enumerable:false});
