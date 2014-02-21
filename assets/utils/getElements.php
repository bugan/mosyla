<?php
    header('Content-type: text/xml');
    $dir = $_GET['folder'];
    
    $folders = scandir($dir);
    $xml="";
    $xml.= '<?xml version="1.0" encoding="UTF-8"?><parent>';
    foreach($folders as $folder){
        
        if($folder != "." && $folder != ".."){
            if(is_dir($dir.'/'.$folder)){
                
                $xml.= ("<apostila><path>assets/apostilas/".$folder."</path>");
                $xml.= ("<name>".$folder."</name></apostila>");
            }
        }
    }
    $xml.= "</parent>";
    echo $xml;
?>