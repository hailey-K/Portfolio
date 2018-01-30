function parsingProjectsForIndex() {
    var htm = "";
    $.each($.parseJSON(projects), function () {
  /*    htm += "<div class='col-lg-12'><div class='thumbnail' id='imageSection'>" +
            "<img src=" + this.imgurl + " alt ='projects image' height ="+this.height+"width="+this.width+">" +
            "</div> <div class='caption' id='imageSection'><h3>" +this.caption+"</h3><p>"+this.description+"</p></div></div><br><br><br>";*/
    
    /*        htm += "<div id='imageCaptionDiv'><div id='projectImageDiv'>" +
            "<img src=" + this.imgurl + " alt ='projects image' height ="+this.height+"width="+this.width+">" +
            "</div> <div id='projectCaptionDiv'><h4>" +this.caption+"</h4><p>"+this.description+"</p></div></div>";
*/
   htm += "<div class='row' id='imageCaptionDiv'><div class='col-lg-6'>" +
            "<img src=" + this.imgurl + " alt ='projects image' height ="+this.height+"width="+this.width+">" +
            "</div> <div class='col-lg-6'><h4>" +this.caption+"</h4><p>"+this.description+"</p></div></div>";

            if(this.imgurl != "js/json/img/4.png")
                {
 htm += "<hr>";
                }
        });
            
    document.getElementById("rowProjectsDiv").innerHTML = htm;
}