package de.mayflower.royaleMvp.base
{
    /*******************************************************************************************************************
    *   All app states.
    *******************************************************************************************************************/
    public class State
    {
        public      static  const   LOAD_PRELOADER_IMAGES       :Number             = 0;
        public      static  const   DELAY_AFTER_STARTUP         :Number             = 1;
        public      static  const   FADE_IN_SCREEN_BG           :Number             = 2;
        public      static  const   FADE_IN_PRELOADER           :Number             = 3;
        public      static  const   DELAY_BEFORE_PRELOADING     :Number             = 4;
        public      static  const   LOAD_GALLERY_IMAGES         :Number             = 5;
        public      static  const   DELAY_AFTER_PRELOADING      :Number             = 6;
        public      static  const   FADE_OUT_PRELOADER          :Number             = 7;
        public      static  const   FADE_IN_SITE                :Number             = 8;
        public      static  const   ANIMATE_SITE                :Number             = 9;
    }
}
