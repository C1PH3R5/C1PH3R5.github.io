function LogbogEventClicked(clicked_name) {
    //var buttonName = event.target.name;
    embededHtml = document.getElementById("logbogContentHolder");
    if (clicked_name == "LærningsPlan") {
        embededHtml.src="../Resources/Logbog/LærningsPlan/LærningsPlan.html";
        embededHtml.innerHTML.location.reload();
       //alert(clicked_name);
    }else{
        const splitetText = clicked_name.split("_");
        embededHtml.src="../Resources/Logbog/" + splitetText[0] + "/" + splitetText[1] + ".html";
        embededHtml.innerHTML.location.reload();
        //4alert(clicked_name);
    }

    
    

}