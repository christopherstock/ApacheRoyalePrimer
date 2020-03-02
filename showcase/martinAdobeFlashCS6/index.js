
    /* workaround */
    function writeObject()
    {
        document.write( '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="1024" height="636" id="martingehrig">' );
        document.write( '   <param name="movie"                 value="martingehrig.swf">'  );
        document.write( '    <param name="quality"              value="high">'              );
        document.write( '    <param name="scale"                value="exactfit">'          );
        document.write( '    <param name="menu"                 value="false">'             );
        document.write( '    <param name="play"                 value="true">'              );
        document.write( '    <param name="loop"                 value="false">'             );
        document.write( '    <param name="bgcolor"              value="#848484">'           );
        document.write( '    <param name="allowScriptAccess"    value="sameDomain">'        );
        document.write( '    <embed src="martingehrig.swf" quality="high" bgcolor="#848484" width="1024" height="636" name="martingehrig" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">' );
        document.write( '    </embed>'                                                      );
/*
        document.write( '    <noembed>' );
        document.write( '    alternativ noembed' );
        document.write( '    </noembed>' );
        document.write( '    alternativ object' );
        document.write( '    <img src="images_static/logo.gif" style="margin-top: 240px;">' );
*/
        document.write( '</object>' );
    } //endFunction
