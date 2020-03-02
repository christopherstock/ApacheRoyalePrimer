package de.mayflower.royaleMvp.base
{
    import de.mayflower.royaleMvp.ui.UIComponentFacility;
    import mx.controls.Image;
    import mx.core.UIComponent;

    /*******************************************************************************************************************
    *   Represents the entire flash website.
    *******************************************************************************************************************/
    public class Website
    {
        /** The body bg rect. */
        private                     var     bgBody                  :UIComponent                    = null;
        /** The screen bg rect. */
        private                     var     bgScreen                :UIComponent                    = null;

        /** All gallery images. */
        private                     var     galleryImages           :Array                          = null;
        /** Current gallery animation X. */
        private                     var     galleryAnimationX       :Number                         = 0;
        /** Total gallery width. */
        private                     var     galleryTotalWidth       :Number                         = 0;

        /** The menu placeholder image. */
        private                     var     menuPlaceholder         :Image                          = null;
        /** The header logo image. */
        private                     var     headerLogo              :Image                          = null;

        /** The scroll lane bg. */
        private                     var     scrollLane              :UIComponent                    = null;
        /** The scroll knob. */
        private                     var     scrollKnob              :UIComponent                    = null;

        /***************************************************************************************************************
        *   Creates the 'body' component which is an entire html body size container.
        ***************************************************************************************************************/
        public function createBgBody( app:* ) : void
        {
            this.bgBody = UIComponentFacility.createFilledRect(
                "100%",
                "100%",
                "transparent"
            );
            App.addElement( app, this.bgBody );
        }

        /***************************************************************************************************************
        *   Creates the 'screen' component which is the actual website's background frame.
        ***************************************************************************************************************/
        public function createBgScreen() : void
        {
            this.bgScreen = UIComponentFacility.createFilledRect(
                ( Setting.SCREEN_WIDTH  + "px" ),
                ( Setting.SCREEN_HEIGHT + "px" ),
                Setting.COLOR_SCREEN_BG
            );

            this.bgScreen.setStyle( "opacity",  "0.0"    );
            this.bgScreen.setStyle( "overflow", "hidden" );

            App.addElement( this.bgBody, this.bgScreen );
        }

        /***************************************************************************************************************
        *   Horizontally and vertically centers the screen UIComponent inside the body UIComponent.
        ***************************************************************************************************************/
        public function centerScreenInBodyBg() : void
        {
            if ( this.bgBody.width > this.bgScreen.width )
            {
                this.bgScreen.x = ( ( this.bgBody.width - this.bgScreen.width ) / 2 );
            }
            else
            {
                this.bgScreen.x = 0;
            }

            if ( this.bgBody.height > this.bgScreen.height )
            {
                this.bgScreen.y = ( ( this.bgBody.height - this.bgScreen.height ) / 2 );
            }
            else
            {
                this.bgScreen.y = 0;
            }
        }

        /***************************************************************************************************************
        *   Sets up all content images for the website.
        *
        *   @param images All content images to assign to the website.
        ***************************************************************************************************************/
        public function setupGalleryImages( images:Array ) : void
        {
            this.galleryImages = images;

            // show all images but make them full transparent - assign initial position and size
            var currentX :Number = 0;
            for (var i:Number = 0; i < this.galleryImages.length; ++i )
            {
                this.galleryImages[ i ].visible = true;
                this.galleryImages[ i ].setStyle( "opacity", "0.0" );

                this.galleryImages[ i ].width  = (
                    Setting.OFFSET_GALLERY_HEIGHT * this.galleryImages[ i ].width / this.galleryImages[ i ].height
                );
                this.galleryImages[ i ].height = Setting.OFFSET_GALLERY_HEIGHT;

                this.galleryImages[ i ].x = currentX;
                this.galleryImages[ i ].y = Setting.OFFSET_GALLERY_IMAGES_Y;

                currentX += this.galleryImages[ i ].width;
            }

            this.galleryTotalWidth = currentX;
        }

        /***************************************************************************************************************
        *   Initializes all elements for the website.
        *
        *   @param imageMenuPlaceholder The image to use as the menu placeholder.
        *   @param imageHeaderLogo      The image to use as the header logo.
        ***************************************************************************************************************/
        public function initWebsiteElements( imageMenuPlaceholder:Image, imageHeaderLogo:Image ) : void
        {
            this.menuPlaceholder = imageMenuPlaceholder;
            this.headerLogo      = imageHeaderLogo;

            // show and place menu placeholder, header logo, scroll lane and scroll knob but make them fully transparent
            this.menuPlaceholder.visible = true;
            this.menuPlaceholder.setX( 0 );
            this.menuPlaceholder.setY( Setting.SCREEN_HEIGHT - this.menuPlaceholder.height );
            this.menuPlaceholder.setStyle( "opacity", "0.0" );

            this.headerLogo.visible = true;
            this.headerLogo.setX( Setting.OFFSET_HEADER_LOGO_X );
            this.headerLogo.setY( Setting.OFFSET_HEADER_LOGO_Y );
            this.headerLogo.setStyle( "opacity", "0.0" );

            this.scrollLane = UIComponentFacility.createFilledRect(
                Setting.SCREEN_WIDTH              + "px",
                Setting.OFFSET_SCROLL_LANE_HEIGHT + "px",
                Setting.COLOR_SCROLL_LANE
            );
            this.scrollLane.setY( Setting.OFFSET_GALLERY_IMAGES_Y + Setting.OFFSET_GALLERY_HEIGHT );
            this.scrollLane.setStyle( "opacity", "0.0" );

            this.scrollKnob = UIComponentFacility.createFilledRect(
                Setting.OFFSET_SCROLL_KNOB_WIDTH  + "px",
                Setting.OFFSET_SCROLL_LANE_HEIGHT + "px",
                Setting.COLOR_SCROLL_KNOB
            );
            this.scrollKnob.setY( Setting.OFFSET_GALLERY_IMAGES_Y + Setting.OFFSET_GALLERY_HEIGHT );
            this.scrollKnob.setStyle( "opacity", "0.0" );

            App.addElement( this.getBgScreen(), this.scrollLane );
            App.addElement( this.getBgScreen(), this.scrollKnob );
        }

        /***************************************************************************************************************
        *   Sets the opacity for all elements of the website.
        *
        *   @param opacity The opacity to set.
        ***************************************************************************************************************/
        public function setContentOpacity( opacity:String ) : void
        {
            this.menuPlaceholder.setStyle( "opacity", opacity );
            this.headerLogo.setStyle(      "opacity", opacity );
            this.scrollLane.setStyle(      "opacity", opacity );
            this.scrollKnob.setStyle(      "opacity", opacity );

            // assign opacity to all images
            for (var i:Number = 0; i < this.galleryImages.length; ++i )
            {
                this.galleryImages[ i ].setStyle( "opacity", opacity );
            }
        }

        /***************************************************************************************************************
        *   Animates the gallery for one tick of the game loop.
        ***************************************************************************************************************/
        public function animateGallery() : void
        {
            const MAX_X :Number = this.galleryTotalWidth - Setting.SCREEN_WIDTH;

            // increase gallery X animation
            this.galleryAnimationX += Setting.OFFSET_GALLERY_SPEED_X;
            if ( this.galleryAnimationX > MAX_X )
            {
                this.galleryAnimationX = MAX_X;
            }

            // animate images
            var currentX :Number = -this.galleryAnimationX;
            for (var j:Number = 0; j < this.galleryImages.length; ++j )
            {
                this.galleryImages[ j ].x = currentX;
                currentX += this.galleryImages[ j ].width;
            }

            // animate scroll lane knob
            var scrollKnobX :Number = (
                this.galleryAnimationX * ( Setting.SCREEN_WIDTH - Setting.OFFSET_SCROLL_KNOB_WIDTH ) / MAX_X
            );
            this.scrollKnob.setX( scrollKnobX );
        }

        /***************************************************************************************************************
        *   Sets the opacity for the screen background.
        *
        *   @param opacity The opacity to set as a String.
        ***************************************************************************************************************/
        public function setScreenOpacity( opacity:String ) : void
        {
            this.bgScreen.setStyle( "opacity", opacity );
        }

        /***************************************************************************************************************
        *   Delivers the screen background.
        *
        *   @return The screen bg.
        ***************************************************************************************************************/
        public function getBgScreen() : UIComponent
        {
            return this.bgScreen;
        }

        /***************************************************************************************************************
        *   Sets the document title.
        *
        *   @param title The web page title to set.
        ***************************************************************************************************************/
        public function setTitle( title:String ) : void
        {
            document.title = title;
        }

        /***************************************************************************************************************
        *   Sets the bg color for the document body.
        *
        *   @param color CSS-Color value to assign.
        ***************************************************************************************************************/
        public function setBodyBgColor( color:String ) : void
        {
            document.body.style.background = color;
        }
    }
}
