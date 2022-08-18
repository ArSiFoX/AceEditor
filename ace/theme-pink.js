ace.define("ace/theme/pink",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-pink";
exports.cssText = ".ace-pink .ace_gutter {\
background: #CF5454;\
color: #FFFFFF\
}\
.ace-pink .ace_print-margin {\
width: 1px;\
background: #CF5454\
}\
.ace-pink {\
background-color: #E96161;\
color: #FFFFFF\
}\
.ace-pink .ace_cursor {\
color: #FFFFFF\
}\
.ace-pink .ace_marker-layer .ace_selection {\
background: #373B41\
}\
.ace-pink.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1D1F21;\
}\
.ace-pink .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-pink .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
}\
.ace-pink .ace_marker-layer .ace_active-line {\
background: #DF8C8C\
}\
.ace-pink .ace_gutter-active-line {\
background-color: #DF8C8C\
}\
.ace-pink .ace_marker-layer .ace_selected-word {\
border: 1px solid #373B41\
}\
.ace-pink .ace_invisible {\
color: #4B4E55\
}\
.ace-pink .ace_keyword,\
.ace-pink .ace_meta,\
.ace-pink .ace_storage,\
.ace-pink .ace_storage.ace_type,\
.ace-pink .ace_support.ace_type {\
color: #B294BB\
}\
.ace-tomorrow-night .ace_keyword.ace_operator {\
color: #8ABEB7\
}\
.ace-pink .ace_constant.ace_character,\
.ace-pink .ace_constant.ace_language,\
.ace-pink .ace_constant.ace_numeric,\
.ace-pink .ace_keyword.ace_other.ace_unit,\
.ace-pink .ace_support.ace_constant,\
.ace-pink .ace_variable.ace_parameter {\
color: #DE935F\
}\
.ace-pink .ace_constant.ace_other {\
color: #CED1CF\
}\
.ace-pink .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-pink .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-pink .ace_fold {\
background-color: #81A2BE;\
border-color: #C5C8C6\
}\
.ace-pink .ace_entity.ace_name.ace_function,\
.ace-pink .ace_support.ace_function,\
.ace-pink .ace_variable {\
color: #81A2BE\
}\
.ace-pink .ace_support.ace_class,\
.ace-pink .ace_support.ace_type {\
color: #F0C674\
}\
.ace-pink .ace_heading,\
.ace-pink .ace_markup.ace_heading,\
.ace-pink .ace_string {\
color: #B5BD68\
}\
.ace-pink .ace_entity.ace_name.ace_tag,\
.ace-pink .ace_entity.ace_other.ace_attribute-name,\
.ace-pink .ace_meta.ace_tag,\
.ace-pink .ace_string.ace_regexp,\
.ace-pink .ace_variable {\
color: #CC6666\
}\
.ace-pink .ace_comment {\
color: #969896\
}\
.ace-pink .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/pink"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
