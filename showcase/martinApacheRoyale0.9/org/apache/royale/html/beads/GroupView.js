/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/GroupView.as
 * org.apache.royale.html.beads.GroupView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.GroupView');
/* Royale Dependency List: org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IUIBase,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.BeadViewBase');
goog.require('org.apache.royale.core.IBeadView');
goog.require('org.apache.royale.core.ILayoutHost');



/**
 *  The GroupView class is the default view for
 *  the org.apache.royale.html.Group class.
 *  It lets you use some CSS styles to manage the border, background
 *  and padding around the content area.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @constructor
 * @extends {org.apache.royale.core.BeadViewBase}
 * @implements {org.apache.royale.core.IBeadView}
 * @implements {org.apache.royale.core.ILayoutHost}
 */
org.apache.royale.html.beads.GroupView = function() {
  org.apache.royale.html.beads.GroupView.base(this, 'constructor');
  this.org_apache_royale_html_beads_GroupView_layoutRunning = false;
};
goog.inherits(org.apache.royale.html.beads.GroupView, org.apache.royale.core.BeadViewBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.GroupView', org.apache.royale.html.beads.GroupView);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.beads.GroupView.prototype.org_apache_royale_html_beads_GroupView_layoutRunning;


/**
 * Handles the initComplete event by completing the setup and kicking off the
 * presentation of the contents.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 *  @royaleignorecoercion org.apache.royale.core.ILayoutChild
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.GroupView.prototype.handleInitComplete = function(event) {
  var /** @type {Object} */ ilc = this.host;
  if ((ilc.isHeightSizedToContent() || !isNaN(ilc.explicitHeight) || !isNaN(ilc.percentHeight)) && (ilc.isWidthSizedToContent() || !isNaN(ilc.explicitWidth) || !isNaN(ilc.percentWidth))) {
    this.completeSetup();
  } else {
    this.host.addEventListener("sizeChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
    this.host.addEventListener("widthChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
    this.host.addEventListener("heightChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
  }
};


/**
 * Handles the case where the size of the host is not immediately known, usually do
 * to one of its dimensions being indicated as a percent size.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.GroupView.prototype.deferredSizeHandler = function(event) {
  this.host.removeEventListener("sizeChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
  this.host.removeEventListener("widthChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
  this.host.removeEventListener("heightChanged", org.apache.royale.utils.Language.closure(this.deferredSizeHandler, this, 'deferredSizeHandler'));
  this.completeSetup();
};


/**
 * Called when the host is ready to complete its setup (usually after its size has been
 * determined).
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 */
org.apache.royale.html.beads.GroupView.prototype.completeSetup = function() {
  this.host.addEventListener("sizeChanged", org.apache.royale.utils.Language.closure(this.resizeHandler, this, 'resizeHandler'));
  this.host.addEventListener("widthChanged", org.apache.royale.utils.Language.closure(this.resizeHandler, this, 'resizeHandler'));
  this.host.addEventListener("heightChanged", org.apache.royale.utils.Language.closure(this.resizeHandler, this, 'resizeHandler'));
};


/**
 * Invoked in response to the strand being resized.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.GroupView.prototype.resizeHandler = function(event) {
};


/**
 * Provides a place for pre-layout actions.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 */
org.apache.royale.html.beads.GroupView.prototype.beforeLayout = function() {
};


/**
 * Executes the layout associated with this container. Once the layout has been
 * run, it may affect the size of the host or may cause the host to present scroll
 * bars view its viewport.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.GroupView.prototype.performLayout = function(event) {
};


/**
 * @export
 */
org.apache.royale.html.beads.GroupView.prototype.afterLayout = function() {
};


org.apache.royale.html.beads.GroupView.prototype.get__contentView = function() {
  return this.host;
};


org.apache.royale.html.beads.GroupView.prototype.get__resizableView = function() {
  return this.host;
};


org.apache.royale.html.beads.GroupView.prototype.set__strand = function(value) {
  org.apache.royale.html.beads.GroupView.superClass_.set__strand.apply(this, [ value] );
  
  this.host.addEventListener("initComplete", org.apache.royale.utils.Language.closure(this.handleInitComplete, this, 'handleInitComplete'));
};


Object.defineProperties(org.apache.royale.html.beads.GroupView.prototype, /** @lends {org.apache.royale.html.beads.GroupView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.ILayoutView} */
contentView: {
get: org.apache.royale.html.beads.GroupView.prototype.get__contentView},
/**
  * @export
  * @type {org.apache.royale.core.IUIBase} */
resizableView: {
get: org.apache.royale.html.beads.GroupView.prototype.get__resizableView},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.GroupView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.GroupView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GroupView', qName: 'org.apache.royale.html.beads.GroupView', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView, org.apache.royale.core.ILayoutHost] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.GroupView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.royale.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.GroupView'},
        'resizableView': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.GroupView'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.GroupView'}
      };
    },
    methods: function () {
      return {
        'GroupView': { type: '', declaredBy: 'org.apache.royale.html.beads.GroupView'},
        'beforeLayout': { type: 'void', declaredBy: 'org.apache.royale.html.beads.GroupView'},
        'afterLayout': { type: 'void', declaredBy: 'org.apache.royale.html.beads.GroupView'}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.GroupView.prototype.ROYALE_REFLECTION_INFO.compileFlags = 10;
