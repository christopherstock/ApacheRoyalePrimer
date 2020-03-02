/**
 * Generated by Apache Royale Compiler from mx/core/IUIComponent.as
 * mx.core.IUIComponent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.core.IUIComponent');
/* Royale Dependency List: mx.managers.ISystemManager,XML*/

goog.require('mx.core.IFlexDisplayObject');
goog.require('org.apache.royale.core.IChild');
goog.require('org.apache.royale.core.IUIBase');



/**
 * @interface
 * @extends {mx.core.IFlexDisplayObject}
 * @extends {org.apache.royale.core.IChild}
 * @extends {org.apache.royale.core.IUIBase}
 */
mx.core.IUIComponent = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.core.IUIComponent', mx.core.IUIComponent);
/**  * @type {Object}
 */mx.core.IUIComponent.prototype.mxmlDocument;
/**  * @type {boolean}
 */mx.core.IUIComponent.prototype.enabled;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitMaxHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitMaxWidth;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitMinHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitMinWidth;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.explicitWidth;
/**  * @type {boolean}
 */mx.core.IUIComponent.prototype.includeInLayout;
/**  * @type {boolean}
 */mx.core.IUIComponent.prototype.isPopUp;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.maxHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.maxWidth;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.measuredMinHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.measuredMinWidth;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.minHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.minWidth;
/**  * @type {mx.core.IUIComponent}
 */mx.core.IUIComponent.prototype.owner;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.percentHeight;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.percentWidth;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.scaleX;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.scaleY;
/**  * @type {mx.managers.ISystemManager}
 */mx.core.IUIComponent.prototype.systemManager;
/**  * @type {number}
 */mx.core.IUIComponent.prototype.rotation;
/**  * @type {Object}
 */mx.core.IUIComponent.prototype.styleName;
mx.core.IUIComponent.prototype.initialize = function() {
};
/**
 *  @copy mx.core.UIComponent#getExplicitOrMeasuredWidth()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {number}
 */
mx.core.IUIComponent.prototype.getExplicitOrMeasuredWidth = function() {
};
/**
 *  @copy mx.core.UIComponent#getExplicitOrMeasuredHeight()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {number}
 */
mx.core.IUIComponent.prototype.getExplicitOrMeasuredHeight = function() {
};
/**
 *  @copy mx.core.UIComponent#owns() 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {mx.core.IUIComponent} displayObject
 * @return {boolean}
 */
mx.core.IUIComponent.prototype.owns = function(displayObject) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.core.IUIComponent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IUIComponent', qName: 'mx.core.IUIComponent', kind: 'interface' }], interfaces: [mx.core.IFlexDisplayObject, org.apache.royale.core.IChild, org.apache.royale.core.IUIBase] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.core.IUIComponent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'mxmlDocument': { type: 'Object', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'enabled': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'explicitMaxHeight': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'explicitMaxWidth': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'explicitMinHeight': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'explicitMinWidth': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'includeInLayout': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'isPopUp': { type: 'Boolean', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'maxHeight': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'maxWidth': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'measuredMinHeight': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'measuredMinWidth': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'minHeight': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'minWidth': { type: 'Number', access: 'readonly', declaredBy: 'mx.core.IUIComponent'},
        'owner': { type: 'mx.core.IUIComponent', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'scaleX': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'scaleY': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'systemManager': { type: 'mx.managers.ISystemManager', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'rotation': { type: 'Number', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'},
        'styleName': { type: 'Object', access: 'readwrite', declaredBy: 'mx.core.IUIComponent'}
      };
    },
    methods: function () {
      return {
        'initialize': { type: 'void', declaredBy: 'mx.core.IUIComponent'},
        'getExplicitOrMeasuredWidth': { type: 'Number', declaredBy: 'mx.core.IUIComponent'},
        'getExplicitOrMeasuredHeight': { type: 'Number', declaredBy: 'mx.core.IUIComponent'},
        'owns': { type: 'Boolean', declaredBy: 'mx.core.IUIComponent', parameters: function () { return [ { index: 1, type: 'mx.core.IUIComponent', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
mx.core.IUIComponent.prototype.ROYALE_REFLECTION_INFO.compileFlags = 26;