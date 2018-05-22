// SCRAPE ARTICLE BUTTON
$("#scrape").on("click", function() {
    console.log("click is workieee!!")
    $.ajax({
        method: "GET",
        url: "/scrape",
        success: function(result) {
            for (i = 0; i < result.length; i++){
                $(".articles").append(
                    "<div class='card border-color'><div class='card-header headline'>" 
                    + result[i].title + 
                    "</div>" + "<div class='card-body'><p>" 
                    + result[i].summary 
                    + "</p><a href='" 
                    + result[i].link 
                    + "'<button type='button' class='btn btn-success save'" 
                    + result[i]._id 
                    + ">Save Article</button></div></div>"
                )
            }
        }
    })
});