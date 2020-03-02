/**
 * Generated by Apache Royale Compiler from mx/managers/IFocusManagerContainer.as
 * mx.managers.IFocusManagerContainer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.managers.IFocusManagerContainer');
/* Royale Dependency List: mx.managers.IFocusManager,mx.managers.ISystemManager,XML*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
mx.managers.IFocusManagerContainer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.managers.IFocusManagerContainer', mx.managers.IFocusManagerContainer);
/**  * @type {mx.managers.IFocusManager}
 */mx.managers.IFocusManagerContainer.prototype.focusManager;
/**  * @type {mx.managers.ISystemManager}
 */mx.managers.IFocusManagerContainer.prototype.systemManager;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.managers.IFocusManagerContainer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IFocusManagerContainer', qName: 'mx.managers.IFocusManagerContainer', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.managers.IFocusManagerContainer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'focusManager': { type: 'mx.managers.IFocusManager', access: 'readwrite', declaredBy: 'mx.managers.IFocusManagerContainer'},
        'systemManager': { type: 'mx.managers.ISystemManager', access: 'readonly', declaredBy: 'mx.managers.IFocusManagerContainer'}
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
mx.managers.IFocusManagerContainer.prototype.ROYALE_REFLECTION_INFO.compileFlags = 26;
