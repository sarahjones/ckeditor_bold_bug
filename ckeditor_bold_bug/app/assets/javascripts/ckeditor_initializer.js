//= require ckeditor/ckeditor

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'ckeditor/ckeditor'], factory);
  } else {
    root.ckeditorInitializers = factory(jQuery, CKEDITOR);
  }
}(this, function($, CKEDITOR) {
    'use strict';

    return {
      initFullEditor: function(selector) {
        var $el = $(selector);
        return CKEDITOR.inline($el[0], {
          title: '',
          enterMode: CKEDITOR.ENTER_DIV,
          allowedContent: true,
          coreStyles_bold: {
            element: 'div',
            attributes: { class: 'bold' }
          }
        });



      }
    }
  }

));
