function parsingProjectsForIndex() {
    var htm = "";
    $.each($.parseJSON(projects), function () {
        htm += "<div class='col-lg-12'><div class='thumbnail'>" +
            "<img src=" + this.imgurl + " alt ='projects image' >" +
            "</div> <div class='caption'><h3>" +this.caption+"</h3><p>Some sample text. Some sample text.</p></div></div>";
    });
    document.getElementById("rowProjectsDiv").innerHTML = htm;
}