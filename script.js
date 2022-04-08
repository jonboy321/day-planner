$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var entry = $(this).siblings(".textarea").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, entry);
        location.reload();
    })
});
console.log(localStorage);