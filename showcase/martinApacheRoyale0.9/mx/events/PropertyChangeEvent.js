/**
 * Generated by Apache Royale Compiler from mx/events/PropertyChangeEvent.as
 * mx.events.PropertyChangeEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.events.PropertyChangeEvent');
/* Royale Dependency List: mx.events.PropertyChangeEventKind,org.apache.royale.events.IRoyaleEvent,XML*/

goog.require('org.apache.royale.events.Event');



/**
 *  Constructor.
 *
 *  @asparam type The event type; indicates the action that triggered the event.
 *
 *  @asparam bubbles Specifies whether the event can bubble
 *  up the display list hierarchy.
 *
 *  @asparam cancelable Specifies whether the behavior
 *  associated with the event can be prevented.
 *
 *  @asparam kind Specifies the kind of change.
 *  The possible values are <code>PropertyChangeEventKind.UPDATE</code>,
 *  <code>PropertyChangeEventKind.DELETE</code>, and <code>null</code>.
 *
 *  @asparam property A String, QName, or int
 *  specifying the property that changed.
 *
 *  @asparam oldValue The value of the property before the change.
 *
 *  @asparam newValue The value of the property after the change.
 *
 *  @asparam source The object that the change occured on.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {string=} kind
 * @param {Object=} property
 * @param {Object=} oldValue
 * @param {Object=} newValue
 * @param {Object=} source
 */
mx.events.PropertyChangeEvent = function(type, bubbles, cancelable, kind, property, oldValue, newValue, source) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  kind = typeof kind !== 'undefined' ? kind : null;
  property = typeof property !== 'undefined' ? property : null;
  oldValue = typeof oldValue !== 'undefined' ? oldValue : null;
  newValue = typeof newValue !== 'undefined' ? newValue : null;
  source = typeof source !== 'undefined' ? source : null;
  mx.events.PropertyChangeEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.kind = kind;
  this.property = property;
  this.oldValue = oldValue;
  this.newValue = newValue;
  this.source = source;
};
goog.inherits(mx.events.PropertyChangeEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.events.PropertyChangeEvent', mx.events.PropertyChangeEvent);


/**
 * @export
 * @const
 * @type {string}
 */
mx.events.PropertyChangeEvent.PROPERTY_CHANGE = "propertyChange";


/**
 *  Returns a new PropertyChangeEvent of kind
 *  <code>PropertyChangeEventKind.UPDATE</code>
 *  with the specified properties.
 *  This is a convenience method.
 * 
 *  @asparam source The object where the change occured.
 *
 *  @asparam property A String, QName, or int
 *  specifying the property that changed,
 *
 *  @asparam oldValue The value of the property before the change.
 *
 *  @asparam newValue The value of the property after the change.
 *
 *  @asreturn A newly constructed PropertyChangeEvent
 *  with the specified properties. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @param {Object} source
 * @param {Object} property
 * @param {Object} oldValue
 * @param {Object} newValue
 * @return {mx.events.PropertyChangeEvent}
 */
mx.events.PropertyChangeEvent.createUpdateEvent = function(source, property, oldValue, newValue) {
  var /** @type {mx.events.PropertyChangeEvent} */ event = new mx.events.PropertyChangeEvent(mx.events.PropertyChangeEvent.PROPERTY_CHANGE);
  event.kind = mx.events.PropertyChangeEventKind.UPDATE;
  event.oldValue = oldValue;
  event.newValue = newValue;
  event.source = source;
  event.property = property;
  return event;
};


/**
 * @private
 * @type {string}
 */
mx.events.PropertyChangeEvent.prototype.mx_events_PropertyChangeEvent__kind;


/**
 * @private
 * @type {Object}
 */
mx.events.PropertyChangeEvent.prototype.mx_events_PropertyChangeEvent__newValue;


/**
 * @private
 * @type {Object}
 */
mx.events.PropertyChangeEvent.prototype.mx_events_PropertyChangeEvent__oldValue;


/**
 * @private
 * @type {Object}
 */
mx.events.PropertyChangeEvent.prototype.mx_events_PropertyChangeEvent__property;


/**
 * @private
 * @type {Object}
 */
mx.events.PropertyChangeEvent.prototype.mx_events_PropertyChangeEvent__source;


/**
 *  @asprivate
 * @export
 * @override
 */
mx.events.PropertyChangeEvent.prototype.cloneEvent = function() {
  return new mx.events.PropertyChangeEvent(this.type, this.bubbles, this.cancelable, this.kind, this.property, this.oldValue, this.newValue, this.source);
};


mx.events.PropertyChangeEvent.prototype.get__kind = function() {
  return this.mx_events_PropertyChangeEvent__kind;
};


mx.events.PropertyChangeEvent.prototype.set__kind = function(value) {
  this.mx_events_PropertyChangeEvent__kind = value;
};


mx.events.PropertyChangeEvent.prototype.get__newValue = function() {
  return this.mx_events_PropertyChangeEvent__newValue;
};


mx.events.PropertyChangeEvent.prototype.set__newValue = function(value) {
  this.mx_events_PropertyChangeEvent__newValue = value;
};


mx.events.PropertyChangeEvent.prototype.get__oldValue = function() {
  return this.mx_events_PropertyChangeEvent__oldValue;
};


mx.events.PropertyChangeEvent.prototype.set__oldValue = function(value) {
  this.mx_events_PropertyChangeEvent__oldValue = value;
};


mx.events.PropertyChangeEvent.prototype.get__property = function() {
  return this.mx_events_PropertyChangeEvent__property;
};


mx.events.PropertyChangeEvent.prototype.set__property = function(value) {
  this.mx_events_PropertyChangeEvent__property = value;
};


mx.events.PropertyChangeEvent.prototype.get__source = function() {
  return this.mx_events_PropertyChangeEvent__source;
};


mx.events.PropertyChangeEvent.prototype.set__source = function(value) {
  this.mx_events_PropertyChangeEvent__source = value;
};


Object.defineProperties(mx.events.PropertyChangeEvent.prototype, /** @lends {mx.events.PropertyChangeEvent.prototype} */ {
/**
  * @export
  * @type {string} */
kind: {
get: mx.events.PropertyChangeEvent.prototype.get__kind,
set: mx.events.PropertyChangeEvent.prototype.set__kind},
/**
  * @export
  * @type {Object} */
newValue: {
get: mx.events.PropertyChangeEvent.prototype.get__newValue,
set: mx.events.PropertyChangeEvent.prototype.set__newValue},
/**
  * @export
  * @type {Object} */
oldValue: {
get: mx.events.PropertyChangeEvent.prototype.get__oldValue,
set: mx.events.PropertyChangeEvent.prototype.set__oldValue},
/**
  * @export
  * @type {Object} */
property: {
get: mx.events.PropertyChangeEvent.prototype.get__property,
set: mx.events.PropertyChangeEvent.prototype.set__property},
/**
  * @export
  * @type {Object} */
source: {
get: mx.events.PropertyChangeEvent.prototype.get__source,
set: mx.events.PropertyChangeEvent.prototype.set__source}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.events.PropertyChangeEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PropertyChangeEvent', qName: 'mx.events.PropertyChangeEvent', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.events.PropertyChangeEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'kind': { type: 'String', access: 'readwrite', declaredBy: 'mx.events.PropertyChangeEvent'},
        'newValue': { type: 'Object', access: 'readwrite', declaredBy: 'mx.events.PropertyChangeEvent'},
        'oldValue': { type: 'Object', access: 'readwrite', declaredBy: 'mx.events.PropertyChangeEvent'},
        'property': { type: 'Object', access: 'readwrite', declaredBy: 'mx.events.PropertyChangeEvent'},
        'source': { type: 'Object', access: 'readwrite', declaredBy: 'mx.events.PropertyChangeEvent'}
      };
    },
    methods: function () {
      return {
        '|createUpdateEvent': { type: 'mx.events.PropertyChangeEvent', declaredBy: 'mx.events.PropertyChangeEvent', parameters: function () { return [ { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Object', optional: false },{ index: 3, type: 'Object', optional: false },{ index: 4, type: 'Object', optional: false } ]; }},
        'PropertyChangeEvent': { type: '', declaredBy: 'mx.events.PropertyChangeEvent', parameters: function () { return [ { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'String', optional: true },{ index: 5, type: 'Object', optional: true },{ index: 6, type: 'Object', optional: true },{ index: 7, type: 'Object', optional: true },{ index: 8, type: 'Object', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'mx.events.PropertyChangeEvent'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
mx.events.PropertyChangeEvent.prototype.ROYALE_REFLECTION_INFO.compileFlags = 26;