function markdown_parser ($markdown) {
    $regex = '/(?:(#+)(.+?)\n)|(?:(.+?)\n\s*=+\s*\n)/';
    $headerText = $markdown.newFunction();
    const newLocal = "</h$h_num>";
    $headerText = preg_replace_callback(
        $regex,
        function($matches){
            if (!preg_match('/\s/',$matches[2])) {
                return "#".$matches[2];
            }
            if($matches[1] != ""){
               $h_num = strlen($matches[1]);
               return html_entity_decode("<h$h_num>".trim($matches[2]).newLocal);
            }  
        },
        $headerText
    );
    return $headerText;

    function newFunction() {
        "\n";
    }
    }