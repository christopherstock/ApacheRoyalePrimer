/**
 * Generated by Apache Royale Compiler from mx/resources/ResourceBundle.as
 * mx.resources.ResourceBundle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('mx.resources.ResourceBundle');
/* Royale Dependency List: mx.core.mx_internal,XML*/

goog.require('mx.resources.IResourceBundle');



/**
 *  Constructor.
 *
 *  @asparam locale A locale string, such as <code>"en_US"</code>.
 *
 *  @asparam bundleName A name that identifies this bundle,
 *  such as <code>"MyResources"</code>.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @implements {mx.resources.IResourceBundle}
 * @param {string=} locale
 * @param {string=} bundleName
 */
mx.resources.ResourceBundle = function(locale, bundleName) {
  locale = typeof locale !== 'undefined' ? locale : null;
  bundleName = typeof bundleName !== 'undefined' ? bundleName : null;
  
  this.mx_resources_ResourceBundle__content = {};
  ;
  this._locale = locale;
  this._bundleName = bundleName;
  this.mx_resources_ResourceBundle__content = this.getContent();
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('mx.resources.ResourceBundle', mx.resources.ResourceBundle);


/**
 * @export
 * @type {string}
 */
mx.resources.ResourceBundle.locale;


/**
 * @export
 * @type {string}
 */
mx.resources.ResourceBundle.prototype._bundleName;


/**
 * @private
 * @type {Object}
 */
mx.resources.ResourceBundle.prototype.mx_resources_ResourceBundle__content;


/**
 * @export
 * @type {string}
 */
mx.resources.ResourceBundle.prototype._locale;


/**
 *  When a properties file is compiled into a resource bundle,
 *  the MXML compiler autogenerates a subclass of ResourceBundle.
 *  The subclass overrides this method to return an Object
 *  that contains key-value pairs for the bundle's resources.
 *
 *  <p>If you create your own ResourceBundle instances,
 *  you can set the key-value pairs on the <code>content</code> object.</p>
 *  
 *  @asreturn The Object that contains key-value pairs for the bundle's resources.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 * @return {Object}
 */
mx.resources.ResourceBundle.prototype.getContent = function() {
  return {};
};


/**
 *  @asprivate
 * @private
 * @param {string} key
 * @return {Object}
 */
mx.resources.ResourceBundle.prototype.mx_resources_ResourceBundle__getObject = function(key) {
  var /** @type {Object} */ value = this.content[key];
  if (!value) {
    throw new Error("Key " + key + " was not found in resource bundle " + this.bundleName);
  }
  return value;
};


mx.resources.ResourceBundle.prototype.get__bundleName = function() {
  return this._bundleName;
};


mx.resources.ResourceBundle.prototype.get__content = function() {
  return this.mx_resources_ResourceBundle__content;
};


mx.resources.ResourceBundle.prototype.get__locale = function() {
  return this._locale;
};


Object.defineProperties(mx.resources.ResourceBundle.prototype, /** @lends {mx.resources.ResourceBundle.prototype} */ {
/**
  * @export
  * @type {string} */
bundleName: {
get: mx.resources.ResourceBundle.prototype.get__bundleName},
/**
  * @export
  * @type {Object} */
content: {
get: mx.resources.ResourceBundle.prototype.get__content},
/**
  * @export
  * @type {string} */
locale: {
get: mx.resources.ResourceBundle.prototype.get__locale}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
mx.resources.ResourceBundle.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ResourceBundle', qName: 'mx.resources.ResourceBundle', kind: 'class' }], interfaces: [mx.resources.IResourceBundle] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
mx.resources.ResourceBundle.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'bundleName': { type: 'String', access: 'readonly', declaredBy: 'mx.resources.ResourceBundle'},
        'content': { type: 'Object', access: 'readonly', declaredBy: 'mx.resources.ResourceBundle'},
        'locale': { type: 'String', access: 'readonly', declaredBy: 'mx.resources.ResourceBundle'}
      };
    },
    methods: function () {
      return {
        'ResourceBundle': { type: '', declaredBy: 'mx.resources.ResourceBundle', parameters: function () { return [ { index: 1, type: 'String', optional: true },{ index: 2, type: 'String', optional: true } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
mx.resources.ResourceBundle.prototype.ROYALE_REFLECTION_INFO.compileFlags = 26;
