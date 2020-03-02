package de.mayflower.royaleMvp.ui
{
    import mx.core.UIComponent;

    /*******************************************************************************************************************
    *   Offers static functionality for creating UI components.
    *******************************************************************************************************************/
    public class UIComponentFacility
    {
        /***************************************************************************************************************
        *   Creates a filled rectangle.
        *
        *   @param width  The dimension X of the rectangle.
        *   @param height The dimension X of the rectangle.
        *   @param color  The color to fill the rectangle with.
        *
        *   @return The created rectangle.
        ***************************************************************************************************************/
        public static function createFilledRect( width:String, height:String, color:String ) : UIComponent
        {
            // introduce a filled test rectangle
            var rect :UIComponent = new UIComponent();

            rect.visible = true;

            rect.setStyle( "width",  width  );
            rect.setStyle( "height", height );

            rect.setStyle( "background", color  );

            return rect;
        }
    }
}
