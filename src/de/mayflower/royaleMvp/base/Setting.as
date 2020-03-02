package de.mayflower.royaleMvp.base
{
    /*******************************************************************************************************************
    *   Loads and offers static images.
    *******************************************************************************************************************/
    public class Setting
    {
        /** Flags global debug mode. */
        public  static  const   DEBUG_MODE                      :Boolean            = true;

        /** The Application Title. */
        public  static  const   APP_TITLE                       :String             = (
            "Fotografie Martin Gehrig, FlashMartinAdobeRoyale v.1.0, MVP"
        );

        /** Delay between game loop ticks in milliseconds. */
        public  static  const   GAME_LOOP_DELAY                 :Number             = 16.6;

        /** Screen dimension X. */
        public  static  const   SCREEN_WIDTH                    :Number             = 1024;
        /** Screen dimension Y. */
        public  static  const   SCREEN_HEIGHT                   :Number             = 636;

        /** Screen bg color. */
        public  static  const   COLOR_SCREEN_BG                 :String             = "#505050";
        /** Body bg color. */
        public  static  const   COLOR_BODY_BG                   :String             = "#848484";
        /** Preloader bg color. */
        public  static  const   COLOR_PRELOADER_BG              :String             = "#6a6a6a";
        /** Preloader fg color. */
        public  static  const   COLOR_PRELOADER_FG              :String             = "#ffffff";
        /** Scroll lane bg color. */
        public  static  const   COLOR_SCROLL_LANE               :String             = "#5c5c5c";
        /** Scroll lane knob color. */
        public  static  const   COLOR_SCROLL_KNOB               :String             = "#ffffff";

        /** Number of ticks for the screen bg to fade in. */
        public  static  const   TICKS_FADE_IN_OUT               :Number             = 60;
        /** Number of ticks for the preloader to delay before and after preloading. For a smooth user experience. */
        public  static  const   TICKS_DELAY_AROUND_PRELOADING   :Number             = 15;

        /** Height of the preloader bar in px. */
        public  static  const   OFFSET_PRELOADER_BAR_HEIGHT     :Number             = 6;
        /** Vertical distance between preloader logo and bar. in px. */
        public  static  const   OFFSET_PRELOADER_DISTANCE_Y     :Number             = 18;
        /** Height of the image gallery in px. */
        public  static  const   OFFSET_GALLERY_HEIGHT           :Number             = 330;
        /** Top distance for the image gallery to the top screen border in px. */
        public  static  const   OFFSET_GALLERY_IMAGES_Y         :Number             = 150;
        /** Header logo left position. */
        public  static  const   OFFSET_HEADER_LOGO_X            :Number             = 75;
        /** Header logo top position. */
        public  static  const   OFFSET_HEADER_LOGO_Y            :Number             = 50;
        /** Width of the scrollbar knob in px. */
        public  static  const   OFFSET_SCROLL_KNOB_WIDTH        :Number             = 75;
        /** Height of the scrollbar lane in px. */
        public  static  const   OFFSET_SCROLL_LANE_HEIGHT       :Number             = 6;

        /** Gallery translation X per tick. */
        public  static  const   OFFSET_GALLERY_SPEED_X          :Number             = 1;
    }
}
