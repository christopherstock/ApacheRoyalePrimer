/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/ItemAddedEvent.as
 * org.apache.royale.events.ItemAddedEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.ItemAddedEvent');
/* Royale Dependency List: org.apache.royale.events.IRoyaleEvent*/

goog.require('org.apache.royale.events.CustomEvent');



/**
 * Constructor.
 *
 * @asparam type The name of the event.
 * @asparam bubbles Whether the event bubbles.
 * @asparam cancelable Whether the event can be canceled.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.CustomEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.royale.events.ItemAddedEvent = function(type, bubbles, cancelable) {
  org.apache.royale.events.ItemAddedEvent.base(this, 'constructor');
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  
  org.apache.royale.events.ItemAddedEvent.base(this, 'constructor', type);
  this.item = null;
};
goog.inherits(org.apache.royale.events.ItemAddedEvent, org.apache.royale.events.CustomEvent);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.ItemAddedEvent', org.apache.royale.events.ItemAddedEvent);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.ItemAddedEvent.prototype.item;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.royale.events.ItemAddedEvent.prototype.cloneEvent = function() {
  var /** @type {org.apache.royale.events.ItemAddedEvent} */ newEvent = new org.apache.royale.events.ItemAddedEvent(this.type);
  newEvent.item = this.item;
  return newEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.ItemAddedEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemAddedEvent', qName: 'org.apache.royale.events.ItemAddedEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.ItemAddedEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'item': { type: 'Object', get_set: function (/** org.apache.royale.events.ItemAddedEvent */ inst, /** * */ v) {return v !== undefined ? inst.item = v : inst.item;}}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ItemAddedEvent': { type: '', declaredBy: 'org.apache.royale.events.ItemAddedEvent', parameters: function () { return [ { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.ItemAddedEvent'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.events.ItemAddedEvent.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
