/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here.
  // For the complete reference:
  // http://docs.ckeditor.com/#!/api/CKEDITOR.config

  // The toolbar groups arrangement, optimized for a single toolbar row.
  config.toolbarGroups = [
    {name: 'document', groups: ['mode', 'document', 'doctools']},
    {name: 'clipboard', groups: ['clipboard', 'undo']},
    {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
    {name: 'forms'},
    {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
    {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
    {name: 'links'},
    {name: 'insert'},
    {name: 'styles'},
    {name: 'colors'},
    {name: 'tools'},
    {name: 'others'},
    {name: 'merge-fields'}
  ];

  // The default plugins included in the basic setup define some buttons that
  // we don't want too have in a basic editor. We remove them here.
  config.removeButtons = 'Cut,Copy,Paste,Anchor,Underline,Strike,Subscript,Superscript';

  // Let's have it basic on dialogs as well.
  config.removeDialogTabs = 'link:advanced';

  // This doesn't really work in CKEditor, but we are keeping in case they fix their bug
  config.disableObjectResizing = true;

  // This must be set to false in order to enable native spellchecking in browsers.
  config.disableNativeSpellChecker = false;

};

// Disable image resizing in Firefox but don't blow up in other browsers.
try {
  document.execCommand("enableObjectResizing", false, "false");
} catch (e) {
}
