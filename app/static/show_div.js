function showDiv(card) {
    // document.getElementById(card).style.display = "block";

    var x = document.getElementById(card);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
