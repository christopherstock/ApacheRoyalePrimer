package de.mayflower.royaleMvp.base
{
    import de.mayflower.royaleMvp.ui.UIComponentFacility;
    import mx.controls.Image;
    import mx.core.UIComponent;

    /*******************************************************************************************************************
    *   Represents the entire flash website.
    *******************************************************************************************************************/
    public class Preloader
    {
        /** The preloader 'logo' image. */
        private                     var     preloaderLogo           :Image                          = null;
        /** The preloader bg. */
        private                     var     preloaderBg             :UIComponent                    = null;
        /** The preloader fg. */
        private                     var     preloaderFg             :UIComponent                    = null;

        /***************************************************************************************************************
        *   Sets up the preloader with the loaded preloader images.
        *
        *   @param logoImage The preloader logo image.
        ***************************************************************************************************************/
        public function setupPreloader( logoImage:Image ) : void
        {
            // reference, show and hide the transparent logo
            this.preloaderLogo = logoImage;

            var logoX :Number = ( ( Setting.SCREEN_WIDTH  - this.preloaderLogo.width  ) / 2 );
            var logoY :Number = ( ( Setting.SCREEN_HEIGHT - this.preloaderLogo.height - Setting.OFFSET_PRELOADER_DISTANCE_Y - Setting.OFFSET_PRELOADER_BAR_HEIGHT ) / 2 );

            this.preloaderLogo.visible = true;
            this.preloaderLogo.setStyle( "opacity", "0.0" );
            this.preloaderLogo.x = logoX;
            this.preloaderLogo.y = logoY;

            // create the preloader bg transparent
            this.preloaderBg = UIComponentFacility.createFilledRect(
                ( this.preloaderLogo.width  + "px" ),
                ( Setting.OFFSET_PRELOADER_BAR_HEIGHT + "px" ),
                Setting.COLOR_PRELOADER_BG
            );
            this.preloaderBg.x = logoX;
            this.preloaderBg.y = ( logoY + this.preloaderLogo.height + Setting.OFFSET_PRELOADER_DISTANCE_Y );
            this.preloaderBg.setStyle( "opacity", "0.0" );

            // create the preloader fg transparent
            this.preloaderFg = UIComponentFacility.createFilledRect(
                "0px",
                ( Setting.OFFSET_PRELOADER_BAR_HEIGHT + "px" ),
                Setting.COLOR_PRELOADER_FG
            );
            this.preloaderFg.x = logoX;
            this.preloaderFg.y = ( logoY + this.preloaderLogo.height + Setting.OFFSET_PRELOADER_DISTANCE_Y );
            this.preloaderFg.setStyle( "opacity", "1.0" );
        }

        /***************************************************************************************************************
        *   Sets the preloading progress to the specified percent.
        *
        *   @param percent A floating value from 0.0 to 1.0.
        ***************************************************************************************************************/
        public function setPreloaderPercent(percent:Number ) : void
        {
            this.preloaderFg.setStyle(
                "width",
                ( this.preloaderLogo.width * percent ) + "px"
            );
        }

        /***************************************************************************************************************
        *   Adds the preloader bg and fg to the specified component.
        *
        *   @param component The component to add the preloader bg and fg to.
        ***************************************************************************************************************/
        public function addTo( component:UIComponent ) : void
        {
            App.addElement( component, this.preloaderBg );
            App.addElement( component, this.preloaderFg );
        }

        /***************************************************************************************************************
        *   Sets the opacity for all elements of the preloader.
        *
        *   @param opacity The opacity value as a string to set.
        ***************************************************************************************************************/
        public function setOpacity( opacity:String ) : void
        {
            this.preloaderLogo.setStyle( "opacity", opacity );
            this.preloaderFg.setStyle(   "opacity", opacity );
            this.preloaderBg.setStyle(   "opacity", opacity );
        }

        /***************************************************************************************************************
        *   Completes the preloader by setting the full width for the preloader fg.
        *   Additionally hides the preloader bg.
        ***************************************************************************************************************/
        public function setPreloadingComplete() : void
        {
            this.preloaderFg.setStyle( "width", String( this.preloaderLogo.width ) + "px" );
            this.preloaderBg.setStyle( "opacity", "0.0" );
        }
    }
}
