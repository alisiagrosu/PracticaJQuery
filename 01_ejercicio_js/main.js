$("#img1") .on ("mouseover", function ()
{
console.log(  $("#img1").attr("src", "img/rio.jpg")
);
});


$("#img1").on("mouseout", function ()
{
    console.log (
        $("#img1").attr("src","img/arbol.jpg"));
});