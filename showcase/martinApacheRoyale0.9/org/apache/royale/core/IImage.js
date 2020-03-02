/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IImage.as
 * org.apache.royale.core.IImage
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IImage');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IImage = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IImage', org.apache.royale.core.IImage);
/**  * @type {Element}
 */org.apache.royale.core.IImage.prototype.imageElement;
/**
 * @export
 * @param {string} binaryDataAsString
 */
org.apache.royale.core.IImage.prototype.applyImageData = function(binaryDataAsString) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IImage.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IImage', qName: 'org.apache.royale.core.IImage', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IImage.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'imageElement': { type: 'Element', access: 'readonly', declaredBy: 'org.apache.royale.core.IImage'}
      };
    },
    methods: function () {
      return {
        'applyImageData': { type: 'void', declaredBy: 'org.apache.royale.core.IImage', parameters: function () { return [ { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.IImage.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
