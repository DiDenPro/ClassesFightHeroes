var cursor = document.getElementById('hoveredDiv');
document.addEventListener('onmouseover',function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor.style.display = "none";
});