<?php

    //set example data
    $setExampleData = false;
    if ( $setExampleData )
    {
        $_POST[ 'name'    ] = "Chris";
        $_POST[ 'email'   ] = "chris@jenetic.de";
        $_POST[ 'message' ] = "Hello this is the content from the contect form!";
        $_POST[ 'subject' ] = "Betreff-Text";
        $_POST[ 'body'    ] = "Body-Text";
    }

    if 
    ( 
            !empty( $_POST[ 'name'    ] ) 
        &&  !empty( $_POST[ 'email'   ] ) 
        &&  !empty( $_POST[ 'message' ] )
        &&  !empty( $_POST[ 'subject' ] )
        &&  !empty( $_POST[ 'body'    ] )
    )
    {
        $to = "info@art-fleckenstein.com"; 
      //$to = "chris@jenetic.de";
        
        //replace with your mail address    
        $subject = $_POST[ 'subject' ];
        
        $body =  $_POST[ 'body' ] . "\n\n";
        $body .= "Name:      [$name]\n";    
        $body .= "E-Mail:    [$email]\n";    
        $body .= "Nachricht: [$message]\n";    
/*        
        $header = "From: $s_name <$s_mail>\n";    
        $header = "Reply-To: $s_name <$s_mail>\n";    
        $header = "X-Mailer: PHP/" . phpversion() . "\n";
*/            
        //set highest priority
        $header = "X-Priority: 1";    
        
        //send mail
        if ( @mail( $to, $subject, $body, $header ) )    
        {
            echo "output=sent";
        } 
        else
        {        
            echo "output=error";
        }
    } 
    else 
    {    
        echo "output=error";
    }
?>