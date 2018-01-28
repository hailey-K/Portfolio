function parsingProjectsForIndex() {
    var htm = "";
    $.each($.parseJSON(projects), function () {
        htm += "<div class='col-lg-12'><div class='thumbnail'>" +
            "<img src=" + this.imgurl + " alt ='projects image' height = "+this.height+"width="+this.width+" >" +
            "</div> <div class='caption'><h3>" +this.caption+"</h3><p>"+this.description+"</p></div></div><br><br><br>";
    });
    document.getElementById("rowProjectsDiv").innerHTML = htm;
}