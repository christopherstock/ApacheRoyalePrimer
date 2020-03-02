/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/TextLineMetrics.as
 * org.apache.royale.core.TextLineMetrics
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.TextLineMetrics');
/* Royale Dependency List: */



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 */
org.apache.royale.core.TextLineMetrics = function() {
  ;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.TextLineMetrics', org.apache.royale.core.TextLineMetrics);


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.ascent;


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.descent;


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.height;


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.leading;


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.width;


/**
 * @export
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.x;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.TextLineMetrics.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextLineMetrics', qName: 'org.apache.royale.core.TextLineMetrics', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.TextLineMetrics.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'ascent': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.ascent = v : inst.ascent;}},
        'descent': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.descent = v : inst.descent;}},
        'height': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.height = v : inst.height;}},
        'leading': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.leading = v : inst.leading;}},
        'width': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.width = v : inst.width;}},
        'x': { type: 'Number', get_set: function (/** org.apache.royale.core.TextLineMetrics */ inst, /** * */ v) {return v !== undefined ? inst.x = v : inst.x;}}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'TextLineMetrics': { type: '', declaredBy: 'org.apache.royale.core.TextLineMetrics'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.TextLineMetrics.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
