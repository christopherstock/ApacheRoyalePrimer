/**
 * Generated by Apache Royale Compiler from de/mayflower/royaleMvp/base/App.as
 * de.mayflower.royaleMvp.base.App
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('de.mayflower.royaleMvp.base.App');
/* Royale Dependency List: Mg,de.mayflower.royaleMvp.base.Preloader,de.mayflower.royaleMvp.base.Setting,de.mayflower.royaleMvp.base.State,de.mayflower.royaleMvp.base.Website,de.mayflower.royaleMvp.io.ImageResource,de.mayflower.royaleMvp.io.ImageSystem,mx.core.UIComponent,org.apache.royale.utils.Language*/




/**
 * @constructor
 */
de.mayflower.royaleMvp.base.App = function() {

this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.LOAD_PRELOADER_IMAGES;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('de.mayflower.royaleMvp.base.App', de.mayflower.royaleMvp.base.App);


/**
 * @private
 * @type {de.mayflower.royaleMvp.base.Website}
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_website = null;


/**
 * @private
 * @type {de.mayflower.royaleMvp.base.Preloader}
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_preloader = null;


/**
 * @private
 * @type {number}
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_appState = null;


/**
 * @private
 * @type {number}
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_appStateDelayTicks = 0;


/***************************************************************************************************************
 *   The main method being invoked when the application starts.
 *
 *   @asparam app The Mg base application.
 * @export
 * @param {Mg} app
 */
de.mayflower.royaleMvp.base.App.prototype.start = function(app) {
  de.mayflower.royaleMvp.base.App.consoleLog(de.mayflower.royaleMvp.base.Setting.APP_TITLE);
  de.mayflower.royaleMvp.base.App.consoleLog();
  this.de_mayflower_royaleMvp_base_App_website = new de.mayflower.royaleMvp.base.Website();
  this.de_mayflower_royaleMvp_base_App_website.setTitle(de.mayflower.royaleMvp.base.Setting.APP_TITLE);
  this.de_mayflower_royaleMvp_base_App_website.setBodyBgColor(de.mayflower.royaleMvp.base.Setting.COLOR_BODY_BG);
  this.de_mayflower_royaleMvp_base_App_website.createBgBody(app);
  this.de_mayflower_royaleMvp_base_App_website.createBgScreen();
  this.de_mayflower_royaleMvp_base_App_website.centerScreenInBodyBg();
  de.mayflower.royaleMvp.base.App.addResizeListener(org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onWindowResize, this, 'onWindowResize'));
  this.de_mayflower_royaleMvp_base_App_preloader = new de.mayflower.royaleMvp.base.Preloader();
  new de.mayflower.royaleMvp.io.ImageSystem().loadImages(de.mayflower.royaleMvp.io.ImageResource.IMAGES_PRELOADER, org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onPreloaderImagesLoaded, this, 'onPreloaderImagesLoaded'), null, this.de_mayflower_royaleMvp_base_App_website.getBgScreen());
  de.mayflower.royaleMvp.base.App.triggerTimeout(org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onTick, this, 'onTick'), de.mayflower.royaleMvp.base.Setting.GAME_LOOP_DELAY);
};


/***************************************************************************************************************
 *   Being invoked when all preloader images have been loaded.
 *
 *   @asparam images All loaded preloader images.
 * @private
 * @param {Array} images
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_onPreloaderImagesLoaded = function(images) {
  de.mayflower.royaleMvp.base.App.consoleLog("Main.onPreloaderImagesLoaded()");
  this.de_mayflower_royaleMvp_base_App_website.initWebsiteElements(/* implicit cast */ org.apache.royale.utils.Language.as(images[1], mx.controls.Image, true), /* implicit cast */ org.apache.royale.utils.Language.as(images[2], mx.controls.Image, true));
  this.de_mayflower_royaleMvp_base_App_preloader.setupPreloader(/* implicit cast */ org.apache.royale.utils.Language.as(images[0], mx.controls.Image, true));
  this.de_mayflower_royaleMvp_base_App_preloader.addTo(this.de_mayflower_royaleMvp_base_App_website.getBgScreen());
  this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT;
  this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.DELAY_AFTER_STARTUP;
};


/***************************************************************************************************************
 *   Being invoked when the number of loaded content images has been changed.
 *
 *   @asparam loadCount The number of currently loaded content images.
 * @private
 * @param {number} loadCount
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_onGalleryImageLoadCountChange = function(loadCount) {
  de.mayflower.royaleMvp.base.App.consoleLog("Main.onGalleryImageLoadCountChange() received [" + loadCount + "] / [" + de.mayflower.royaleMvp.io.ImageResource.IMAGES_GALLERY.length + "] loaded images");
  this.de_mayflower_royaleMvp_base_App_preloader.setPreloaderPercent(loadCount / de.mayflower.royaleMvp.io.ImageResource.IMAGES_GALLERY.length);
};


/***************************************************************************************************************
 *   Being invoked when all content images have been loaded.
 *
 *   @asparam images All loaded content images.
 * @private
 * @param {Array} images
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_onGalleryImagesLoaded = function(images) {
  de.mayflower.royaleMvp.base.App.consoleLog("Main.onGalleryImagesLoaded()");
  this.de_mayflower_royaleMvp_base_App_website.setupGalleryImages(images);
  this.de_mayflower_royaleMvp_base_App_preloader.setPreloadingComplete();
  this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_DELAY_AROUND_PRELOADING;
  this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.DELAY_AFTER_PRELOADING;
};


/***************************************************************************************************************
 *   Being invoked each frame of the game loop.
 * @private
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_onTick = function() {
  switch (this.de_mayflower_royaleMvp_base_App_appState) {
    case de.mayflower.royaleMvp.base.State.LOAD_PRELOADER_IMAGES:
      break;
    case de.mayflower.royaleMvp.base.State.DELAY_AFTER_STARTUP:
      --this.de_mayflower_royaleMvp_base_App_appStateDelayTicks;
      if (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT;
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.FADE_IN_SCREEN_BG;
      }
      break;
    case de.mayflower.royaleMvp.base.State.FADE_IN_SCREEN_BG:
      --this.de_mayflower_royaleMvp_base_App_appStateDelayTicks;
      this.de_mayflower_royaleMvp_base_App_website.setScreenOpacity(String(1.0 - (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks / de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT)));
      if (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_website.setScreenOpacity("1.0");
        this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT;
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.FADE_IN_PRELOADER;
      }
      break;
    case de.mayflower.royaleMvp.base.State.FADE_IN_PRELOADER:
      --this.de_mayflower_royaleMvp_base_App_appStateDelayTicks;
      var /** @type {string} */ currentOpacity = String(1.0 - (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks / de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT));
      this.de_mayflower_royaleMvp_base_App_preloader.setOpacity(currentOpacity);
      if (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_preloader.setOpacity("1.0");
        this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_DELAY_AROUND_PRELOADING;
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.DELAY_BEFORE_PRELOADING;
      }
      break;
    case de.mayflower.royaleMvp.base.State.DELAY_BEFORE_PRELOADING:
      if (--this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.LOAD_GALLERY_IMAGES;
        new de.mayflower.royaleMvp.io.ImageSystem().loadImages(de.mayflower.royaleMvp.io.ImageResource.IMAGES_GALLERY, org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onGalleryImagesLoaded, this, 'onGalleryImagesLoaded'), org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onGalleryImageLoadCountChange, this, 'onGalleryImageLoadCountChange'), this.de_mayflower_royaleMvp_base_App_website.getBgScreen());
      }
      break;
    case de.mayflower.royaleMvp.base.State.LOAD_GALLERY_IMAGES:
      break;
    case de.mayflower.royaleMvp.base.State.DELAY_AFTER_PRELOADING:
      if (--this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT;
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.FADE_OUT_PRELOADER;
      }
      break;
    case de.mayflower.royaleMvp.base.State.FADE_OUT_PRELOADER:
      --this.de_mayflower_royaleMvp_base_App_appStateDelayTicks;
      var /** @type {string} */ newOpacity = String(this.de_mayflower_royaleMvp_base_App_appStateDelayTicks / de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT);
      this.de_mayflower_royaleMvp_base_App_preloader.setOpacity(newOpacity);
      if (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_preloader.setOpacity("0.0");
        this.de_mayflower_royaleMvp_base_App_appStateDelayTicks = de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT;
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.FADE_IN_SITE;
      }
      break;
    case de.mayflower.royaleMvp.base.State.FADE_IN_SITE:
      --this.de_mayflower_royaleMvp_base_App_appStateDelayTicks;
      var /** @type {string} */ opacity = String(1.0 - (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks / de.mayflower.royaleMvp.base.Setting.TICKS_FADE_IN_OUT));
      this.de_mayflower_royaleMvp_base_App_website.setContentOpacity(opacity);
      if (this.de_mayflower_royaleMvp_base_App_appStateDelayTicks <= 0) {
        this.de_mayflower_royaleMvp_base_App_appState = de.mayflower.royaleMvp.base.State.ANIMATE_SITE;
      }
      break;
    case de.mayflower.royaleMvp.base.State.ANIMATE_SITE:
      this.de_mayflower_royaleMvp_base_App_website.animateGallery();
      break;
  }
  de.mayflower.royaleMvp.base.App.triggerTimeout(org.apache.royale.utils.Language.closure(this.de_mayflower_royaleMvp_base_App_onTick, this, 'onTick'), de.mayflower.royaleMvp.base.Setting.GAME_LOOP_DELAY);
};


/***************************************************************************************************************
 *   Being invoked when the browser window has been resized.
 *
 *   @asparam event The event holding additional information.
 * @private
 * @param {*} event
 */
de.mayflower.royaleMvp.base.App.prototype.de_mayflower_royaleMvp_base_App_onWindowResize = function(event) {
  de.mayflower.royaleMvp.base.App.consoleLog("MgApp.onWindowResize()");
  this.de_mayflower_royaleMvp_base_App_website.centerScreenInBodyBg();
};


/***************************************************************************************************************
 *   Adds the specified element to add to the specified base element.
 *
 *   @asparam baseElement  The base element.
 *   @asparam elementToAdd The element to add to the base element.
 * @export
 * @param {*} baseElement
 * @param {mx.core.UIComponent} elementToAdd
 */
de.mayflower.royaleMvp.base.App.addElement = function(baseElement, elementToAdd) {
  baseElement.addElement(elementToAdd);
};


/***************************************************************************************************************
 *   Sets a timeout for a closure to execute after the specified delay time.
 *
 *   @asparam closure Function to execute after the specified delay.
 *   @asparam delay   The delay in milliseconds.
 * @export
 * @param {Function} closure
 * @param {number} delay
 */
de.mayflower.royaleMvp.base.App.triggerTimeout = function(closure, delay) {
  setTimeout(closure, delay);
};


/***************************************************************************************************************
 *   Performs a console log operation.
 *
 *   @asparam subject The subject to log. Mostly a String but can also be any other type.
 * @export
 * @param {*=} subject
 */
de.mayflower.royaleMvp.base.App.consoleLog = function(subject) {
  subject = typeof subject !== 'undefined' ? subject : "";
  if (de.mayflower.royaleMvp.base.Setting.DEBUG_MODE) {
    console.log(subject);
  }
};


/***************************************************************************************************************
 *   Adds a resize listener to the DOM window.
 *
 *   @asparam closure The Function to invoke when the window 'resize' event has been occurred.
 * @export
 * @param {Function} closure
 */
de.mayflower.royaleMvp.base.App.addResizeListener = function(closure) {
  window.addEventListener("resize", closure);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
de.mayflower.royaleMvp.base.App.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'App', qName: 'de.mayflower.royaleMvp.base.App', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
de.mayflower.royaleMvp.base.App.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'start': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.base.App', parameters: function () { return [ { index: 1, type: 'Mg', optional: false } ]; }},
        '|addElement': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.base.App', parameters: function () { return [ { index: 1, type: '*', optional: false },{ index: 2, type: 'mx.core.UIComponent', optional: false } ]; }},
        '|triggerTimeout': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.base.App', parameters: function () { return [ { index: 1, type: 'Function', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        '|consoleLog': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.base.App', parameters: function () { return [ { index: 1, type: '*', optional: true } ]; }},
        '|addResizeListener': { type: 'void', declaredBy: 'de.mayflower.royaleMvp.base.App', parameters: function () { return [ { index: 1, type: 'Function', optional: false } ]; }}
      };
    }
  };
};
/**
 * @export
 * @const
 * @type {number}
 */
de.mayflower.royaleMvp.base.App.prototype.ROYALE_REFLECTION_INFO.compileFlags = 9;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @export
 * @const
 * @type {Array<string>}
 */
de.mayflower.royaleMvp.base.App.prototype.ROYALE_REFLECTION_INFO.statics = Object.keys(de.mayflower.royaleMvp.base.App);

//# sourceMappingURL=./App.js.map
