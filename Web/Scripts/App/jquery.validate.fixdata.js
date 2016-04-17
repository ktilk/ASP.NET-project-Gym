﻿$(function () {
    // replace html5 datetime, date and time types on inputs - this disables builtin html5 editors in browsers
    // add data-type attribute instead
    $('input[type="datetime"]').attr('type', 'text').attr('data-type', 'datetime');
    $('input[type="date"]').attr('type', 'text').attr('data-type', 'date');
    $('input[type="time"]').attr('type', 'text').attr('data-type', 'time');

    // fix up attributes for datetime
    var attr = $('input[data-type="datetime"]:first');
    var attrText;

    //if (attr.length === 1) {
    //    attrText = attr.eq(0).attr('data-val-date');
    //    if (attrText != undefined) {
    //        attrText = attrText.replace('date.', 'datetime.');
    //        $('input[data-type="datetime"]').removeAttr('data-val-date');
    //        $('input[data-type="datetime"]').attr('data-val-datetime', attrText);
    //    } else {
    //        // TODO: translations
    //        $('input[data-type="datetime"]').attr('data-val-datetime', 'Field has to be of type datetime.');
    //    }
    //}
    $('input[data-type="datetime"]').attr('data-val-time', 'Field has to be of type datetime.');

    // fix up attributes for time
    // TODO: translations
    $('input[data-type="time"]').attr('data-val-time', 'Field has to be of type time.');
});