!function() {
    "use strict";
    var e = {};
    e.templates = {},
    e.render = function(a, t) {
        return e.templates[a] ? e.templates[a].call(e, t || {}) : ""
    }
    ,
    e.templates.popup = function(e) {
        var a, t, l = '<h1>Tab Limiter</h1><form><h2>Maximum Tabs:</h2><select id="max" name="max"> ';
        for (var o in e.options)
            t = e.max == o,
            t && (a = !0),
            l += ' <option value="' + o + '"',
            t && (l += " selected"),
            l += ">" + e.options[o] + "</option> ";
        return l += ' <option value="other"',
        a || (l += " selected"),
        l += '>Other...</option></select><input type="number" name="max" id="input-max"',
        a || (l += ' style="display: block;" value="' + e.max + '"'),
        l += '><h2>Close existing tab:</h2><label><input type="radio" name="algo" value="used"',
        "used" == e.algo && (l += " checked"),
        l += '>Least recently used</label><label><input type="radio" name="algo" value="accessed"',
        "accessed" == e.algo && (l += " checked"),
        l += '>Least accessed</label><label><input type="radio" name="algo" value="oldest"',
        "oldest" == e.algo && (l += " checked"),
        l += '>Oldest</label><h2>Block new tab:</h2><label><input type="radio" name="algo" value="block"',
        "block" == e.algo && (l += " checked"),
        l += '>Block new tabs from opening</label></form>'
    }
    ,
    "undefined" != typeof module && module.exports ? module.exports = e : window.Aftershave = e
}();
