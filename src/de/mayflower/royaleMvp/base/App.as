package de.mayflower.royaleMvp.base
{
    import de.mayflower.royaleMvp.io.*;
    import mx.core.UIComponent;

    /*******************************************************************************************************************
    *   The main class. Its method main() is the entry point of the application.
    *******************************************************************************************************************/
    public class App
    {
        /** The website instance. */
        private                     var     website                 :Website                        = null;
        /** The preloader instance. */
        private                     var     preloader               :Preloader                      = null;

        /** The current app state. */
        private                     var     appState                :Number                         = State.LOAD_PRELOADER_IMAGES;
        /** Current delay ticks for delays between app state change. */
        private                     var     appStateDelayTicks      :Number                         = 0;

        /***************************************************************************************************************
        *   The main method being invoked when the application starts.
        *
        *   @param app The Mg base application.
        ***************************************************************************************************************/
        public function start( app:Mg ) : void
        {
            // acclaim debug console
            App.consoleLog( Setting.APP_TITLE );
            App.consoleLog();

            // create website
            this.website = new Website();
            this.website.setTitle(       Setting.APP_TITLE     );
            this.website.setBodyBgColor( Setting.COLOR_BODY_BG );

            // create and add bg body and bg screen
            this.website.createBgBody( app );
            this.website.createBgScreen();

            // initially center bg screen in bg body and add onSize event listener for auto-centering screen in body
            this.website.centerScreenInBodyBg();
            App.addResizeListener( this.onWindowResize );

            // create preloader
            this.preloader = new Preloader();

            // load preloader images
            new ImageSystem().loadImages(
                ImageResource.IMAGES_PRELOADER,
                this.onPreloaderImagesLoaded,
                null,
                this.website.getBgScreen()
            );

            // start the main thread
            triggerTimeout( this.onTick, Setting.GAME_LOOP_DELAY );
        }

        /***************************************************************************************************************
        *   Being invoked when all preloader images have been loaded.
        *
        *   @param images All loaded preloader images.
        ***************************************************************************************************************/
        private function onPreloaderImagesLoaded( images:Array ) : void
        {
            App.consoleLog( "Main.onPreloaderImagesLoaded()" );

            // init website
            this.website.initWebsiteElements( images[ 1 ], images[ 2 ] );

            // init and add preloader
            this.preloader.setupPreloader( images[ 0 ] );
            this.preloader.addTo( this.website.getBgScreen() );

            // next app state
            this.appStateDelayTicks = Setting.TICKS_FADE_IN_OUT;
            this.appState = State.DELAY_AFTER_STARTUP;
        }

        /***************************************************************************************************************
        *   Being invoked when the number of loaded content images has been changed.
        *
        *   @param loadCount The number of currently loaded content images.
        ***************************************************************************************************************/
        private function onGalleryImageLoadCountChange( loadCount:Number ) : void
        {
            App.consoleLog(
                "Main.onGalleryImageLoadCountChange() received ["
                + loadCount
                + "] / ["
                + ImageResource.IMAGES_GALLERY.length
                + "] loaded images"
            );

            // adjust preloader fg according to loaded images
            this.preloader.setPreloaderPercent( loadCount / ImageResource.IMAGES_GALLERY.length );
        }

        /***************************************************************************************************************
        *   Being invoked when all content images have been loaded.
        *
        *   @param images All loaded content images.
        ***************************************************************************************************************/
        private function onGalleryImagesLoaded( images:Array ) : void
        {
            App.consoleLog( "Main.onGalleryImagesLoaded()" );

            // assign all content images and remember total gallery width
            this.website.setupGalleryImages( images );

            // set preloader fg to full width and hide preloader bg
            this.preloader.setPreloadingComplete();

            // next app state
            this.appStateDelayTicks = Setting.TICKS_DELAY_AROUND_PRELOADING;
            this.appState = State.DELAY_AFTER_PRELOADING;
        }

        /***************************************************************************************************************
        *   Being invoked each frame of the game loop.
        ***************************************************************************************************************/
        private function onTick() : void
        {
            switch ( this.appState )
            {
                case State.LOAD_PRELOADER_IMAGES:
                {
                    // do nothing until preloader images are loaded and app state is changed

                    break;
                }

                case State.DELAY_AFTER_STARTUP:
                {
                    --this.appStateDelayTicks;
                    if ( this.appStateDelayTicks <= 0 )
                    {
                        this.appStateDelayTicks = Setting.TICKS_FADE_IN_OUT;
                        this.appState = State.FADE_IN_SCREEN_BG;
                    }

                    break;
                }

                case State.FADE_IN_SCREEN_BG:
                {
                    --this.appStateDelayTicks;

                    this.website.setScreenOpacity(
                        String( 1.0 - ( this.appStateDelayTicks / Setting.TICKS_FADE_IN_OUT ) )
                    );

                    if ( this.appStateDelayTicks <= 0 )
                    {
                        this.website.setScreenOpacity( "1.0" );

                        this.appStateDelayTicks = Setting.TICKS_FADE_IN_OUT;
                        this.appState = State.FADE_IN_PRELOADER;
                    }
                    break;
                }

                case State.FADE_IN_PRELOADER:
                {
                    --this.appStateDelayTicks;

                    var currentOpacity :String = String(
                        1.0 - ( this.appStateDelayTicks / Setting.TICKS_FADE_IN_OUT )
                    );

                    this.preloader.setOpacity( currentOpacity );

                    if ( this.appStateDelayTicks <= 0 )
                    {
                        this.preloader.setOpacity( "1.0" );

                        this.appStateDelayTicks = Setting.TICKS_DELAY_AROUND_PRELOADING;
                        this.appState = State.DELAY_BEFORE_PRELOADING;
                    }
                    break;
                }

                case State.DELAY_BEFORE_PRELOADING:
                {
                    if ( --this.appStateDelayTicks <= 0 )
                    {
                        this.appState = State.LOAD_GALLERY_IMAGES;

                        // load gallery images
                        new ImageSystem().loadImages(
                            ImageResource.IMAGES_GALLERY,
                            this.onGalleryImagesLoaded,
                            this.onGalleryImageLoadCountChange,
                            this.website.getBgScreen()
                        );
                    }
                    break;
                }

                case State.LOAD_GALLERY_IMAGES:
                {
                    // do nothing until gallery images are loaded and app state is changed

                    break;
                }

                case State.DELAY_AFTER_PRELOADING:
                {
                    if ( --this.appStateDelayTicks <= 0 )
                    {
                        this.appStateDelayTicks = Setting.TICKS_FADE_IN_OUT;
                        this.appState = State.FADE_OUT_PRELOADER;
                    }
                    break;
                }

                case State.FADE_OUT_PRELOADER:
                {
                    --this.appStateDelayTicks;

                    var newOpacity :String = String( this.appStateDelayTicks / Setting.TICKS_FADE_IN_OUT );

                    this.preloader.setOpacity( newOpacity );

                    if ( this.appStateDelayTicks <= 0 )
                    {
                        this.preloader.setOpacity( "0.0" );

                        this.appStateDelayTicks = Setting.TICKS_FADE_IN_OUT;
                        this.appState = State.FADE_IN_SITE;
                    }
                    break;
                }

                case State.FADE_IN_SITE:
                {
                    --this.appStateDelayTicks;

                    var opacity :String = String( 1.0 - ( this.appStateDelayTicks / Setting.TICKS_FADE_IN_OUT ) );

                    // assign opacity to header logo and menu placeholder
                    this.website.setContentOpacity( opacity );

                    if ( this.appStateDelayTicks <= 0 )
                    {
                        this.appState = State.ANIMATE_SITE;
                    }
                    break;
                }

                case State.ANIMATE_SITE:
                {
                    this.website.animateGallery();

                    break;
                }
            }

            triggerTimeout( this.onTick, Setting.GAME_LOOP_DELAY )
        }

        /***************************************************************************************************************
        *   Being invoked when the browser window has been resized.
        *
        *   @param event The event holding additional information.
        ***************************************************************************************************************/
        private function onWindowResize( event:* ) : void
        {
            App.consoleLog( "MgApp.onWindowResize()" );

            this.website.centerScreenInBodyBg();
        }

        /***************************************************************************************************************
        *   Adds the specified element to add to the specified base element.
        *
        *   @param baseElement  The base element.
        *   @param elementToAdd The element to add to the base element.
        ***************************************************************************************************************/
        public static function addElement( baseElement:*, elementToAdd:UIComponent ) : void
        {
            baseElement.addElement( elementToAdd );
        }

        /***************************************************************************************************************
        *   Sets a timeout for a closure to execute after the specified delay time.
        *
        *   @param closure Function to execute after the specified delay.
        *   @param delay   The delay in milliseconds.
        ***************************************************************************************************************/
        public static function triggerTimeout( closure:Function, delay:Number ) : void
        {
            setTimeout( closure, delay );
        }

        /***************************************************************************************************************
        *   Performs a console log operation.
        *
        *   @param subject The subject to log. Mostly a String but can also be any other type.
        ***************************************************************************************************************/
        public static function consoleLog( subject:* = "" ) : void
        {
            if ( Setting.DEBUG_MODE )
            {
                console.log( subject );
            }
        }

        /***************************************************************************************************************
        *   Adds a resize listener to the DOM window.
        *
        *   @param closure The Function to invoke when the window 'resize' event has been occurred.
        ***************************************************************************************************************/
        public static function addResizeListener( closure:Function ) : void
        {
            window.addEventListener( "resize", closure );
        }
    }
}
