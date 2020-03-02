package de.mayflower.royaleMvp.io
{
    import de.mayflower.royaleMvp.base.*;
    import mx.controls.Image;
    import mx.core.UIComponent;

    /*******************************************************************************************************************
    *   Loads and offers static images.
    *******************************************************************************************************************/
    public class ImageSystem
    {
        /** Number of image files to load in this session. */
        private         var         filesToLoad         :Array                  = null;
        /** The closure to invoke when all images of this session are loaded. */
        private         var         onLoadComplete      :Function               = null;
        /** The closure to invoke when the number of loaded images changed. */
        private         var         onLoadIndexChange   :Function               = null;

        /** Current number of images to load. */
        private         var         onLoadCount         :Number                 = 0;
        /** The array with all loaded images. */
        private         var         loadedImages        :Array                  = null;

        /***************************************************************************************************************
        *   Starts a new image loading session.
        *
        *   @param filesToLoad       All image filenames to load.
        *   @param onLoadComplete    Closure to invoke when all images are loaded.
        *   @param onLoadIndexChange Closure to invoke when loaded images count changed.
        *   @param bg                The UI bg to add all images to.
        *                            Images won't get loaded by the system otherwise.
        ***************************************************************************************************************/
        public function loadImages(
            filesToLoad       :Array,
            onLoadComplete    :Function,
            onLoadIndexChange :Function,
            bg                :UIComponent
        )
        : void
        {
            App.consoleLog( "ImageSystem.loadImages() - [" + filesToLoad.length + "] images to load" );

            this.filesToLoad       = filesToLoad;
            this.onLoadComplete    = onLoadComplete;
            this.onLoadIndexChange = onLoadIndexChange;

            this.onLoadCount    = 0;
            this.loadedImages   = [];

            for ( var i:Number = 0; i < this.filesToLoad.length; ++i )
            {
                // create an invisible image with a callback
                this.loadedImages[ i ] = new Image();

                this.loadedImages[ i ].visible = false;
                this.loadedImages[ i ].src = this.filesToLoad[ i ];
                this.loadedImages[ i ].addEventListener( "load", this.imageLoaded );

                // and the image to an UI-Component ( otherwise the system won't load it! )
                bg.addElement( this.loadedImages[ i ] );
            }
        }

        /***************************************************************************************************************
        *   Being invoked by the system when an Image is fully loaded.
        *
        *   @param e The load event containing additional information.
        ***************************************************************************************************************/
        private function imageLoaded( e:* ) : void
        {
            App.consoleLog( "ImageSystem.imageLoaded() being invoked" );

            // increase load index
            ++this.onLoadCount;

            // notify load index change
            if ( this.onLoadIndexChange !== null )
            {
                this.onLoadIndexChange( this.onLoadCount );
            }

            // check if all images have been loaded now
            if ( this.onLoadCount === this.filesToLoad.length )
            {
                this.onLoadComplete( this.loadedImages );
            }
        }
    }
}
