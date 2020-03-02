/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/models/ViewportModel.as
 * org.apache.royale.html.beads.models.ViewportModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.ViewportModel');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.core.layout.EdgeData*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IViewportModel');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IViewportModel}
 */
org.apache.royale.html.beads.models.ViewportModel = function() {
  org.apache.royale.html.beads.models.ViewportModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.ViewportModel, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.ViewportModel', org.apache.royale.html.beads.models.ViewportModel);


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.org_apache_royale_html_beads_models_ViewportModel__borderMetrics;


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.org_apache_royale_html_beads_models_ViewportModel__strand;


org.apache.royale.html.beads.models.ViewportModel.prototype.get__borderMetrics = function() {
  return this.org_apache_royale_html_beads_models_ViewportModel__borderMetrics;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.set__borderMetrics = function(value) {
  this.org_apache_royale_html_beads_models_ViewportModel__borderMetrics = value;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.get__chromeMetrics = function() {
  return this.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.set__chromeMetrics = function(value) {
  this.org_apache_royale_html_beads_models_ViewportModel__chromeMetrics = value;
};


org.apache.royale.html.beads.models.ViewportModel.prototype.set__strand = function(value) {
  this.org_apache_royale_html_beads_models_ViewportModel__strand = value;
};


Object.defineProperties(org.apache.royale.html.beads.models.ViewportModel.prototype, /** @lends {org.apache.royale.html.beads.models.ViewportModel.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.layout.EdgeData} */
borderMetrics: {
get: org.apache.royale.html.beads.models.ViewportModel.prototype.get__borderMetrics,
set: org.apache.royale.html.beads.models.ViewportModel.prototype.set__borderMetrics},
/**
  * @export
  * @type {org.apache.royale.core.layout.EdgeData} */
chromeMetrics: {
get: org.apache.royale.html.beads.models.ViewportModel.prototype.get__chromeMetrics,
set: org.apache.royale.html.beads.models.ViewportModel.prototype.set__chromeMetrics},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.models.ViewportModel.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ViewportModel', qName: 'org.apache.royale.html.beads.models.ViewportModel', kind: 'class' }], interfaces: [org.apache.royale.core.IViewportModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'borderMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'},
        'chromeMetrics': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'}
      };
    },
    methods: function () {
      return {
        'ViewportModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.ViewportModel'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.models.ViewportModel.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
