/**
 * Generated by Apache Royale Compiler from de/mayflower/royaleMvp/io/ImageSystem.as
 * de.mayflower.royaleMvp.io.ImageSystem
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('de.mayflower.royaleMvp.io.ImageSystem');
/* Royale Dependency List: de.mayflower.royaleMvp.base.App,mx.controls.Image,mx.core.UIComponent,org.apache.royale.utils.Language*/




/**
 * @constructor
 */
de.mayflower.royaleMvp.io.ImageSystem = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('de.mayflower.royaleMvp.io.ImageSystem', de.mayflower.royaleMvp.io.ImageSystem);


/**
 * @private
 * @type {Array}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_filesToLoad = null;


/**
 * @private
 * @type {Function}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_onLoadComplete = null;


/**
 * @private
 * @type {Function}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_onLoadIndexChange = null;


/**
 * @private
 * @type {number}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_onLoadCount = 0;


/**
 * @private
 * @type {Array}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_loadedImages = null;


/***************************************************************************************************************
 *   Starts a new image loading session.
 *
 *   @asparam filesToLoad       All image filenames to load.
 *   @asparam onLoadComplete    Closure to invoke when all images are loaded.
 *   @asparam onLoadIndexChange Closure to invoke when loaded images count changed.
 *   @asparam bg                The UI bg to add all images to.
 *                            Images won't get loaded by the system otherwise.
 * @export
 * @param {Array} filesToLoad
 * @param {Function} onLoadComplete
 * @param {Function} onLoadIndexChange
 * @param {mx.core.UIComponent} bg
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.loadImages = function(filesToLoad, onLoadComplete, onLoadIndexChange, bg) {
  de.mayflower.royaleMvp.base.App.consoleLog("ImageSystem.loadImages() - [" + filesToLoad.length + "] images to load");
  this.de_mayflower_royaleMvp_io_ImageSystem_filesToLoad = filesToLoad;
  this.de_mayflower_royaleMvp_io_ImageSystem_onLoadComplete = onLoadComplete;
  this.de_mayflower_royaleMvp_io_ImageSystem_onLoadIndexChange = onLoadIndexChange;
  this.de_mayflower_royaleMvp_io_ImageSystem_onLoadCount = 0;
  this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages = [];
  for (var /** @type {number} */ i = 0; i < this.de_mayflower_royaleMvp_io_ImageSystem_filesToLoad.length; ++i) {
    this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages[i] = new mx.controls.Image();
    this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages[i].visible = false;
    this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages[i].src = this.de_mayflower_royaleMvp_io_ImageSystem_filesToLoad[i];
    this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages[i].addEventListener("load", org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_io_ImageSystem_imageLoaded, this, 'imageLoaded'));
    bg.addElement(/* implicit cast */ org.apache.royale.utils.Language.as(this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages[i], org.apache.royale.core.IChild, true));
  }
};


/***************************************************************************************************************
 *   Being invoked by the system when an Image is fully loaded.
 *
 *   @asparam e The load event containing additional information.
 * @private
 * @param {*} e
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.de_mayflower_royaleMvp_io_ImageSystem_imageLoaded = function(e) {
  de.mayflower.royaleMvp.base.App.consoleLog("ImageSystem.imageLoaded() being invoked");
  ++this.de_mayflower_royaleMvp_io_ImageSystem_onLoadCount;
  if (this.de_mayflower_royaleMvp_io_ImageSystem_onLoadIndexChange !== null) {
    this.de_mayflower_royaleMvp_io_ImageSystem_onLoadIndexChange(this.de_mayflower_royaleMvp_io_ImageSystem_onLoadCount);
  }
  if (this.de_mayflower_royaleMvp_io_ImageSystem_onLoadCount === this.de_mayflower_royaleMvp_io_ImageSystem_filesToLoad.length) {
    this.de_mayflower_royaleMvp_io_ImageSystem_onLoadComplete(this.de_mayflower_royaleMvp_io_ImageSystem_loadedImages);
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ImageSystem', qName: 'de.mayflower.royaleMvp.io.ImageSystem', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'loadImages': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.io.ImageSystem', parameters: function () { return [ { index: 1, type: 'Array', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Function', optional: false },{ index: 4, type: 'mx.core.UIComponent', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
de.mayflower.royaleMvp.io.ImageSystem.prototype.ROYALE_REFLECTION_INFO.compileFlags = 9;

//# sourceMappingURL=./ImageSystem.js.map