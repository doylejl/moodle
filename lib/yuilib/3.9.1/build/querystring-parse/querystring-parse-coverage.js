/* YUI 3.9.1 (build 5852) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/querystring-parse/querystring-parse.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/querystring-parse/querystring-parse.js",
    code: []
};
_yuitest_coverage["build/querystring-parse/querystring-parse.js"].code=["YUI.add('querystring-parse', function (Y, NAME) {","","/**"," * The QueryString module adds support for serializing JavaScript objects into"," * query strings and parsing JavaScript objects from query strings format."," *"," * The QueryString namespace is added to your YUI instance including static methods"," * `Y.QueryString.parse(..)` and `Y.QueryString.stringify(..)`."," *"," * The `querystring` module is a alias for `querystring-parse` and"," * `querystring-stringify`."," *"," * As their names suggest, `querystring-parse` adds support for parsing"," * Query String data (`Y.QueryString.parse`) and `querystring-stringify` for serializing"," * JavaScript data into Query Strings (`Y.QueryString.stringify`).  You may choose to"," * include either of the submodules individually if you don't need the"," * complementary functionality, or include the rollup for both."," *"," * @module querystring"," * @main querystring","*/","","/**"," * Provides Y.QueryString.parse method to accept Query Strings and return native"," * JavaScript objects."," *"," * @module querystring"," * @submodule querystring-parse","*/","","/**"," * The QueryString module adds support for serializing JavaScript objects into"," * query strings and parsing JavaScript objects from query strings format."," * @class QueryString"," * @static"," */","var QueryString = Y.namespace(\"QueryString\"),","","// Parse a key=val string.","// These can get pretty hairy","// example flow:","// parse(foo[bar][][bla]=baz)","// return parse(foo[bar][][bla],\"baz\")","// return parse(foo[bar][], {bla : \"baz\"})","// return parse(foo[bar], [{bla:\"baz\"}])","// return parse(foo, {bar:[{bla:\"baz\"}]})","// return {foo:{bar:[{bla:\"baz\"}]}}","pieceParser = function (eq) {","    return function parsePiece (key, val) {","","        var sliced, numVal, head, tail, ret;","","        if (arguments.length !== 2) {","            // key=val, called from the map/reduce","            key = key.split(eq);","            return parsePiece(","                QueryString.unescape(key.shift()),","                QueryString.unescape(key.join(eq))","            );","        }","        key = key.replace(/^\\s+|\\s+$/g, '');","        if (Y.Lang.isString(val)) {","            val = val.replace(/^\\s+|\\s+$/g, '');","            // convert numerals to numbers","            if (!isNaN(val)) {","                numVal = +val;","                if (val === numVal.toString(10)) {","                    val = numVal;","                }","            }","        }","        sliced = /(.*)\\[([^\\]]*)\\]$/.exec(key);","        if (!sliced) {","            ret = {};","            if (key) {","                ret[key] = val;","            }","            return ret;","        }","        // [\"foo[][bar][][baz]\", \"foo[][bar][]\", \"baz\"]","        tail = sliced[2];","        head = sliced[1];","","        // array: key[]=val","        if (!tail) {","            return parsePiece(head, [val]);","        }","","        // obj: key[subkey]=val","        ret = {};","        ret[tail] = val;","        return parsePiece(head, ret);","    };","},","","// the reducer function that merges each query piece together into one set of params","mergeParams = function(params, addition) {","    return (","        // if it's uncontested, then just return the addition.","        (!params) ? addition","        // if the existing value is an array, then concat it.","        : (Y.Lang.isArray(params)) ? params.concat(addition)","        // if the existing value is not an array, and either are not objects, arrayify it.","        : (!Y.Lang.isObject(params) || !Y.Lang.isObject(addition)) ? [params].concat(addition)","        // else merge them as objects, which is a little more complex","        : mergeObjects(params, addition)","    );","},","","// Merge two *objects* together. If this is called, we've already ruled","// out the simple cases, and need to do the for-in business.","mergeObjects = function(params, addition) {","    for (var i in addition) {","        if (i && addition.hasOwnProperty(i)) {","            params[i] = mergeParams(params[i], addition[i]);","        }","    }","    return params;","};","","/**"," * Accept Query Strings and return native JavaScript objects."," *"," * @method parse"," * @param qs {String} Querystring to be parsed into an object."," * @param sep {String} (optional) Character that should join param k=v pairs together. Default: \"&\""," * @param eq  {String} (optional) Character that should join keys to their values. Default: \"=\""," * @public"," * @static"," */","QueryString.parse = function (qs, sep, eq) {","    // wouldn't Y.Array(qs.split()).map(pieceParser(eq)).reduce(mergeParams) be prettier?","    return Y.Array.reduce(","        Y.Array.map(","            qs.split(sep || \"&\"),","            pieceParser(eq || \"=\")","        ),","        {},","        mergeParams","    );","};","","/**"," * Provides Y.QueryString.unescape method to be able to override default decoding"," * method.  This is important in cases where non-standard delimiters are used, if"," * the delimiters would not normally be handled properly by the builtin"," * (en|de)codeURIComponent functions."," * Default: replace \"+\" with \" \", and then decodeURIComponent behavior."," *"," * @method unescape"," * @param s {String} String to be decoded."," * @public"," * @static"," **/","QueryString.unescape = function (s) {","    return decodeURIComponent(s.replace(/\\+/g, ' '));","};","","","","","}, '3.9.1', {\"requires\": [\"yui-base\", \"array-extras\"]});"];
_yuitest_coverage["build/querystring-parse/querystring-parse.js"].lines = {"1":0,"37":0,"49":0,"51":0,"53":0,"55":0,"56":0,"61":0,"62":0,"63":0,"65":0,"66":0,"67":0,"68":0,"72":0,"73":0,"74":0,"75":0,"76":0,"78":0,"81":0,"82":0,"85":0,"86":0,"90":0,"91":0,"92":0,"98":0,"113":0,"114":0,"115":0,"118":0,"131":0,"133":0,"155":0,"156":0};
_yuitest_coverage["build/querystring-parse/querystring-parse.js"].functions = {"parsePiece:49":0,"pieceParser:48":0,"mergeParams:97":0,"mergeObjects:112":0,"parse:131":0,"unescape:155":0,"(anonymous 1):1":0};
_yuitest_coverage["build/querystring-parse/querystring-parse.js"].coveredLines = 36;
_yuitest_coverage["build/querystring-parse/querystring-parse.js"].coveredFunctions = 7;
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 1);
YUI.add('querystring-parse', function (Y, NAME) {

/**
 * The QueryString module adds support for serializing JavaScript objects into
 * query strings and parsing JavaScript objects from query strings format.
 *
 * The QueryString namespace is added to your YUI instance including static methods
 * `Y.QueryString.parse(..)` and `Y.QueryString.stringify(..)`.
 *
 * The `querystring` module is a alias for `querystring-parse` and
 * `querystring-stringify`.
 *
 * As their names suggest, `querystring-parse` adds support for parsing
 * Query String data (`Y.QueryString.parse`) and `querystring-stringify` for serializing
 * JavaScript data into Query Strings (`Y.QueryString.stringify`).  You may choose to
 * include either of the submodules individually if you don't need the
 * complementary functionality, or include the rollup for both.
 *
 * @module querystring
 * @main querystring
*/

/**
 * Provides Y.QueryString.parse method to accept Query Strings and return native
 * JavaScript objects.
 *
 * @module querystring
 * @submodule querystring-parse
*/

/**
 * The QueryString module adds support for serializing JavaScript objects into
 * query strings and parsing JavaScript objects from query strings format.
 * @class QueryString
 * @static
 */
_yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "(anonymous 1)", 1);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 37);
var QueryString = Y.namespace("QueryString"),

// Parse a key=val string.
// These can get pretty hairy
// example flow:
// parse(foo[bar][][bla]=baz)
// return parse(foo[bar][][bla],"baz")
// return parse(foo[bar][], {bla : "baz"})
// return parse(foo[bar], [{bla:"baz"}])
// return parse(foo, {bar:[{bla:"baz"}]})
// return {foo:{bar:[{bla:"baz"}]}}
pieceParser = function (eq) {
    _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "pieceParser", 48);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 49);
return function parsePiece (key, val) {

        _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "parsePiece", 49);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 51);
var sliced, numVal, head, tail, ret;

        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 53);
if (arguments.length !== 2) {
            // key=val, called from the map/reduce
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 55);
key = key.split(eq);
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 56);
return parsePiece(
                QueryString.unescape(key.shift()),
                QueryString.unescape(key.join(eq))
            );
        }
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 61);
key = key.replace(/^\s+|\s+$/g, '');
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 62);
if (Y.Lang.isString(val)) {
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 63);
val = val.replace(/^\s+|\s+$/g, '');
            // convert numerals to numbers
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 65);
if (!isNaN(val)) {
                _yuitest_coverline("build/querystring-parse/querystring-parse.js", 66);
numVal = +val;
                _yuitest_coverline("build/querystring-parse/querystring-parse.js", 67);
if (val === numVal.toString(10)) {
                    _yuitest_coverline("build/querystring-parse/querystring-parse.js", 68);
val = numVal;
                }
            }
        }
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 72);
sliced = /(.*)\[([^\]]*)\]$/.exec(key);
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 73);
if (!sliced) {
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 74);
ret = {};
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 75);
if (key) {
                _yuitest_coverline("build/querystring-parse/querystring-parse.js", 76);
ret[key] = val;
            }
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 78);
return ret;
        }
        // ["foo[][bar][][baz]", "foo[][bar][]", "baz"]
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 81);
tail = sliced[2];
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 82);
head = sliced[1];

        // array: key[]=val
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 85);
if (!tail) {
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 86);
return parsePiece(head, [val]);
        }

        // obj: key[subkey]=val
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 90);
ret = {};
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 91);
ret[tail] = val;
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 92);
return parsePiece(head, ret);
    };
},

// the reducer function that merges each query piece together into one set of params
mergeParams = function(params, addition) {
    _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "mergeParams", 97);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 98);
return (
        // if it's uncontested, then just return the addition.
        (!params) ? addition
        // if the existing value is an array, then concat it.
        : (Y.Lang.isArray(params)) ? params.concat(addition)
        // if the existing value is not an array, and either are not objects, arrayify it.
        : (!Y.Lang.isObject(params) || !Y.Lang.isObject(addition)) ? [params].concat(addition)
        // else merge them as objects, which is a little more complex
        : mergeObjects(params, addition)
    );
},

// Merge two *objects* together. If this is called, we've already ruled
// out the simple cases, and need to do the for-in business.
mergeObjects = function(params, addition) {
    _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "mergeObjects", 112);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 113);
for (var i in addition) {
        _yuitest_coverline("build/querystring-parse/querystring-parse.js", 114);
if (i && addition.hasOwnProperty(i)) {
            _yuitest_coverline("build/querystring-parse/querystring-parse.js", 115);
params[i] = mergeParams(params[i], addition[i]);
        }
    }
    _yuitest_coverline("build/querystring-parse/querystring-parse.js", 118);
return params;
};

/**
 * Accept Query Strings and return native JavaScript objects.
 *
 * @method parse
 * @param qs {String} Querystring to be parsed into an object.
 * @param sep {String} (optional) Character that should join param k=v pairs together. Default: "&"
 * @param eq  {String} (optional) Character that should join keys to their values. Default: "="
 * @public
 * @static
 */
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 131);
QueryString.parse = function (qs, sep, eq) {
    // wouldn't Y.Array(qs.split()).map(pieceParser(eq)).reduce(mergeParams) be prettier?
    _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "parse", 131);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 133);
return Y.Array.reduce(
        Y.Array.map(
            qs.split(sep || "&"),
            pieceParser(eq || "=")
        ),
        {},
        mergeParams
    );
};

/**
 * Provides Y.QueryString.unescape method to be able to override default decoding
 * method.  This is important in cases where non-standard delimiters are used, if
 * the delimiters would not normally be handled properly by the builtin
 * (en|de)codeURIComponent functions.
 * Default: replace "+" with " ", and then decodeURIComponent behavior.
 *
 * @method unescape
 * @param s {String} String to be decoded.
 * @public
 * @static
 **/
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 155);
QueryString.unescape = function (s) {
    _yuitest_coverfunc("build/querystring-parse/querystring-parse.js", "unescape", 155);
_yuitest_coverline("build/querystring-parse/querystring-parse.js", 156);
return decodeURIComponent(s.replace(/\+/g, ' '));
};




}, '3.9.1', {"requires": ["yui-base", "array-extras"]});
