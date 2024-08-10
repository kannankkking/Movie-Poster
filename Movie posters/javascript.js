var thumbnail=document.querySelectorAll(".img");

var mainImage=document.querySelector("#main-image");

for(var i=0;i<thumbnail.length; i++){
    thumbnail[i].addEventListener("click", function(){
        mainImage.src=this.src
    }
);
}