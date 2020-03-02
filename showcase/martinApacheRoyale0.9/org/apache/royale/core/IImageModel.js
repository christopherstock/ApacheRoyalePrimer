/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IImageModel.as
 * org.apache.royale.core.IImageModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IImageModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.IImageModel = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IImageModel', org.apache.royale.core.IImageModel);
/**  * @type {string}
 */org.apache.royale.core.IImageModel.prototype.url;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IImageModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IImageModel', qName: 'org.apache.royale.core.IImageModel', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IBeadModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IImageModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'url': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IImageModel'}
      };
    },
    methods: function () {return {};}
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.core.IImageModel.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
