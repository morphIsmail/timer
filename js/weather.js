window.onload = function () {
    //Фоновая картинка в зависимости от времени года
    //Включить снег только зимой и дождь только соенью
    var curDate = new Date();
    if (curDate.getMonth() == 0 || curDate.getMonth() == 1 || curDate.getMonth() == 11) { //зима
        snow(1);
        $('body').css("background-image", "url('img/winter.jpg')");
    }
    if (curDate.getMonth() == 8 || curDate.getMonth() == 9 || curDate.getMonth() == 10) { //осень
        rain(1);
        $('body').css("background-image", "url('img/autumn.jpg')");
    }
    if(curDate.getMonth()==2||curDate.getMonth()==3||curDate.getMonth()==4)//весна
		$('body').css("background-image", "url('img/spring.jpg')");
	if(curDate.getMonth()==5||curDate.getMonth()==6||curDate.getMonth()==7)//лето
		$('body').css("background-image", "url('img/summer.jpg')");
}

function snow(id) {
    var pos_x = Math.random() * (99 - 1) + 1;
    pos_x = Math.floor(pos_x);
    if (pos_x >= 1 & pos_x <= 10) {var q = -10; var png_sh = 1;}
    if (pos_x > 10 & pos_x <= 20) {var q = 10; var png_sh = 3;}
    if (pos_x > 20 & pos_x <= 30) {var q = -10; var png_sh = 0;}
    if (pos_x > 30 & pos_x <= 40) {var q = 10; var png_sh = 2;}
    if (pos_x > 40 & pos_x <= 50) {var q = -10; var png_sh = 1;}
    if (pos_x > 50 & pos_x <= 60) {var q = 10; var png_sh = 3;}
    if (pos_x > 60 & pos_x <= 70) {var q = -10; var png_sh = 0;}
    if (pos_x > 70 & pos_x <= 80) {var q = 10; var png_sh = 2;}
    if (pos_x > 80 & pos_x <= 90) {var q = -10; var png_sh = 1;}
    if (pos_x > 90 & pos_x <= 99) {var q = 10; var png_sh = 3;}
    var end_x = pos_x + q;
    var img = "<img id='snow_" + id + "' style='left:" + pos_x + "%; top:-10%; position:fixed;' src='img/show_" + png_sh + ".png'/>";
    $("#weather").append(img);
    move_show_snow(id, end_x);
    id++;
    setTimeout("snow(" + id + ");", 100);
}

function move_show_snow(id, end_x) {
    $("#snow_" + id).animate({
        top: "150%",
        left: "" + end_x + "%"
    }, 20000, function () {
        $("#snow_" + id).empty().remove();
    });
}

function rain(id) {
    var pos_x = Math.random() * (99 - 1) + 1;
    pos_x = Math.floor(pos_x);
    var end_x = pos_x;
    var img = "<img id='rain_" + id + "' style='left:" + pos_x + "%; top:-10%; position:fixed;' src='img/rain.png'/>";
    $("#weather").append(img);
    move_show_rain(id, end_x);
    id++;
    setTimeout("rain(" + id + ");", 10);
}

function move_show_rain(id, end_x) {
    $("#rain_" + id).animate({
        top: "100%",
        left: "" + end_x + "%"
    }, 2000, function () {
        $("#rain_" + id).empty().remove();
    });
}