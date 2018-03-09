//Mouse over: clase destacar

$("#elem1") .on ("mouseover", function ()
{
console.log(  $("#elem1").addClass("destacar")
);
}
);

$("#elem2") .on ("mouseover", function ()
{
console.log(  $("#elem2").addClass("destacar")
);
});

$("#elem3") .on ("mouseover", function ()
{
console.log(  $("#elem3").addClass("destacar")
);
});


$("#elem4") .on ("mouseover", function ()
{
console.log(  $("#elem4").addClass("destacar")
);
});

//Remove clase destacar
$("#elem1") .on ("mouseout", function ()
{
console.log(  $("#elem1").removeClass("destacar")
);
});

$("#elem2") .on ("mouseout", function ()
{
console.log(  $("#elem2").removeClass("destacar")
);
});

$("#elem3") .on ("mouseout", function ()
{
console.log(  $("#elem3").removeClass("destacar")
);
});

$("#elem4") .on ("mouseout", function ()
{
console.log(  $("#elem4").removeClass("destacar")
);
});



