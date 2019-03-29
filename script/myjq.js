(function(window, undefined) {
  var 
    core_version = '0.0.1',
    core_deletedIds = [],
    
    core_trim = core_version.trim,
    core_indexOf = core_deleteIds.indexOf,
    
    trim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  
  var jQuery = {
    trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
      function(str) {
        return str == null ? "" : core_trim.call(str);
      } :
      function(str) {
        return str == null ? "" : (str + "").replace(rtrim, "");
      },
    
    each: function(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = Array.isArray(obj);
      if (args) {
        if (Array) {
          for ( ; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (Array) {
          for ( ; i < length; i++) {
            value = callback.call(obj[i], i , obj[i]);
            if (value === false) {
              break;
            }
          } 
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
    },
    
    inArray: function(elem, arr, i) {
      var len;
      
      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }
        len = arr.length;
        i = i ? i > 0 ? Math.max(0, len + i) : i : 0;
        for ( ; i < len; i++) {
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }
      return -1;
    }
    
    
  };
  
  
  "use strict";
  window.jQuery = window.$ = jQuery;
})(window);