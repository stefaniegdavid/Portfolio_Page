var cursor = document.getElementById("cursor");
document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
}


// let cursor = document.querySelector('#cursor');

// window.onmousemove = (e) =>{
//     cursor.style.top = e.pageY + 'px';
//     cursor.style.left = e.pageX + 'px';
// }

document.querySelectorAll('a').forEach(links =>{
links.onmouseenter = () =>{
    cursor.classList.add('active');
}
links.onmouseleave = () =>{
    cursor.classList.remove('active');
}


});