 (function (factory) {
   if (typeof define === 'function' && define.amd) {
     // AMD
     define(['jquery', 'datatables.net'], function ($) {
       return factory($, window, document);
     });
   } else if (typeof exports === 'object') {
     // CommonJS
     module.exports = function (root, $) {
       if (!root) {
         root = window;
       }

       if (!$ || !$.fn.dataTable) {
         $ = require('datatables.net')(root, $).$;
       }

       return factory($, root, root.document);
     };
   } else {
     // Browser
     factory(jQuery, window, document);
   }
 }(function ($, window, document, undefined) {
   'use strict';
   var DataTable = $.fn.dataTable;
   //
   var ColumnStyle = function (dt, opts) {
     var settings = new $.fn.dataTable.Api(dt).settings()[0];
     //
     this.s = {
       dt: settings,
       init: opts,
     };
     settings.oApi._fnCallbackReg(settings, 'aoRowCallback', $.proxy(this._FnRowCallback, this), 'columnStyle');
     //
     return this;
   };

   ColumnStyle.prototype = {
     '_FnRowCallback': function (row) {
       var that = this;
       var styleKey = that.s.init.styleKey;
       var tableApi = $.fn.dataTable.Api(that.s.dt);
       var columns = tableApi.settings().init().columns;
       var $cells = $(row).find('td');
       $cells.each(function () {
         var $cell = $(this);
         var columnIndex = tableApi.column(this).index();
         var styleOption = columns[columnIndex][styleKey];
         //
         if (styleOption && $.isPlainObject(styleOption)) {
           $cell.css(styleOption);
         }
         //
       });
     }
   };
   ColumnStyle.defaults = {
     styleKey: 'css'
   };

   $.fn.dataTable.ColumnStyle = ColumnStyle;
   $.fn.DataTable.ColumnStyle = ColumnStyle;

   // Automatic initialisation listener
   $(document).on('preInit.dt.columnStyle', function (e, settings) {
     if (e.namespace !== 'dt') {
       return;
     }
     // prepare options
     var plugin_options = ColumnStyle.defaults;
     var init_options = settings.oInit.columnStyle;
     var defaults_options = DataTable.defaults.columnStyle;
     var opts = $.extend(true, {}, plugin_options);
     if (defaults_options) {
       $.extend(true, opts, defaults_options);
     }
     if (init_options) {
       $.extend(true, opts, init_options);
     }
     //
     if (init_options !== false) {
       new ColumnStyle(settings, opts);
     }
   });
   //
   //
   //
 }));