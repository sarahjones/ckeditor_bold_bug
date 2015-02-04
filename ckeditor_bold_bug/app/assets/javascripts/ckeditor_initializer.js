(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'ckeditor/ckeditor'], factory);
  } else {
    root.onlineLeases || (onlineLeases = {});
    onlineLeases.ckeditorInitializers = factory(jQuery, CKEDITOR);
  }
}(this, function($, CKEDITOR) {
    'use strict';

    return {
      initFullEditor: function(selector) {
        var $el = $(selector);
        return CKEDITOR.inline($el[0], {
          title: '',
          removePlugins: 'placeholder,widget',
          enterMode: CKEDITOR.ENTER_DIV,
          coreStyles_bold: {
            element: 'div',
            attributes: {'class': 'bold'}
          }
        });



      }
    }
  }

));
