var light_index = 0;
var imgs = [
    "static/image/MiJing/bg1.png",
    "static/image/MiJing/bg2.png",
    "static/image/MiJing/bg3.png",
    "static/image/MiJing/bg4.png",
    "static/image/MiJing/bg5.png",
    "static/image/MiJing/bg6.png",
    "static/image/MiJing/bg7.png",
    "static/image/MiJing/bg8.png",
    "static/image/MiJing/bg9.png",
    "static/image/MiJing/bg10.png",
    "static/image/MiJing/bg11.png",
    "static/image/MiJing/bg12.png",
    "static/image/MiJing/bg13.png",
    "static/image/MiJing/bg14.png",
    "static/image/MiJing/bg15.png",
    "static/image/MiJing/bg16.png",
    "static/image/MiJing/bg17.png",
    "static/image/MiJing/bg18.png",
    "static/image/MiJing/bg19.png",
];
var reward1 = [
    "static/image/MiJing/reward1-1.png",
    "static/image/MiJing/reward2-1.png",
    "static/image/MiJing/reward3-1.png",
    "static/image/MiJing/reward4-1.png",
    "static/image/MiJing/reward5-1.png",
    "static/image/MiJing/reward6-1.png",
    "static/image/MiJing/reward7-1.png",
    "static/image/MiJing/reward8-1.png",
    "static/image/MiJing/reward9-1.png",
    "static/image/MiJing/reward10-1.png",
    "static/image/MiJing/reward11-1.png",
    "static/image/MiJing/reward12-1.png",
    "static/image/MiJing/reward13-1.png",
    "static/image/MiJing/reward14-1.png",
    "static/image/MiJing/reward15-1.png",
    "static/image/MiJing/reward16-1.png",
    "static/image/MiJing/reward17-1.png",
    "static/image/MiJing/reward18-1.png",
    "static/image/MiJing/reward19-1.png",

];
var reward2 = [
    "static/image/MiJing/reward1-2.png",
    "static/image/MiJing/reward2-2.png",
    "static/image/MiJing/reward3-2.png",
    "static/image/MiJing/reward4-2.png",
    "static/image/MiJing/reward5-2.png",
    "static/image/MiJing/reward6-2.png",
    "static/image/MiJing/reward7-2.png",
    "static/image/MiJing/reward8-2.png",
    "static/image/MiJing/reward9-2.png",
    "static/image/MiJing/reward10-2.png",
    "static/image/MiJing/reward11-2.png",
    "static/image/MiJing/reward12-2.png",
    "static/image/MiJing/reward13-2.png",
    "static/image/MiJing/reward14-2.png",
    "static/image/MiJing/reward15-2.png",
    "static/image/MiJing/reward16-2.png",
    "static/image/MiJing/reward17-2.png",
    "static/image/MiJing/reward18-2.png",
    "static/image/MiJing/reward19-2.png",
];
var reward3 = [
    "",
    "",
    "",
    "",
    "",

    "static/image/MiJing/reward6-3.png",
    "static/image/MiJing/reward7-3.png",
    "",
    "",
    "static/image/MiJing/reward10-3.png",

    "static/image/MiJing/reward11-3.png",
    "",
    "",
    "static/image/MiJing/reward14-3.png",
    "static/image/MiJing/reward15-3.png",

    "static/image/MiJing/reward16-3.png",
    "",
    "static/image/MiJing/reward18-3.png",
    "",

];
var hasThird = [
    false,
    false,
    false,
    false,
    false,

    true,
    true,
    false,
    false,
    true,

    true,
    false,
    false,
    true,
    true,

    true,
    false,
    true,
    false,
]
var textLong = [
    false,
    true,
    true,
    false,
    true,

    true,
    false,
    false,
    "",
    true,

    false,
    false,
    false,
    false,
    false,

    false,
    "",
    "",
    "",
]
var texts = [
    "static/image/MiJing/text1.png",
    "static/image/MiJing/text2.png",
    "static/image/MiJing/text3.png",
    "static/image/MiJing/text4.png",
    "static/image/MiJing/text5.png",
    "static/image/MiJing/text6.png",
    "static/image/MiJing/text7.png",
    "static/image/MiJing/text8.png",
    "static/image/MiJing/text9.png",
    "static/image/MiJing/text10.png",
    "static/image/MiJing/text11.png",
    "static/image/MiJing/text12.png",
    "static/image/MiJing/text13.png",
    "static/image/MiJing/text14.png",
    "static/image/MiJing/text15.png",
    "static/image/MiJing/text16.png",
    "static/image/MiJing/text17.png",
    "static/image/MiJing/text18.png",
    "static/image/MiJing/text19.png",
]
var names = [
    "仲夏庭院",
    "塞西莉亚苗圃",
    "震雷连山密宫",
    "铭记之谷",
    "孤云凌霄之处",
    "无妄引咎密宫",
    "华池岩岫",
    "忘却之峡",
    "太山府",
    "芬德尼尔之顶",
    "山脊守望",
    "砂流之庭",
    "堇色之庭",
    "椛染之庭",
    "沉眠之庭",
    "岩中幽谷",
    "昏识塔",
    "缘觉塔",
    "有顶塔",
]
$("#btn").click(function () {
    light_index = (light_index - 1) % 19;
    if (light_index < 0) {
        light_index = light_index + 19;
    }
    change(light_index);
    close(false);

});
$("#jk").click(function () {
    light_index = (light_index + 1) % 19;
    change(light_index);
    close(false);

});
$(".light").click(function () {
    lightClick()

});
$("#back").click(function () {
    close();

});
$(".bu").hover(function () {
    $(".bu").attr("src","static/image/MiJing/bu1.png" );

}, function () {
    $(".bu").attr("src","static/image/MiJing/bu2.png" );

});
$(".bu").click(function () {
    tipIn();
});
var isFadeOut = true;
function close(flag) {
    let srcs = $(".open").attr("src");
    if (flag !== false||isFadeOut) {
        $(".open").fadeOut(300);
        $(".light2").fadeOut(200);
        $(".light3").fadeOut(200);
        $(".light4").fadeOut(200);
        $(".bu").fadeOut(200);
        isFadeOut = true;


    } else {
        lightClick();
    }

}

function change(index) {
    $(".light").attr("src", imgs[index]);
    $(".light5").attr("src", texts[index]);
    if (textLong[index]) {
        $(".light5").attr("width", "10%");
        $(".light5").css("left", "45.2%");
        $(".light5").css("top", "86.5%");

    }else if (textLong[index] === "") {
        $(".light5").attr("width", "8%");
        $(".light5").css("left", "46.3%");
        $(".light5").css("top", "88.2%");
    } else {
        $(".light5").attr("width", "7%");
        $(".light5").css("left", "46.5%");
        $(".light5").css("top", "88.5%");


    }
}

function lightClick() {
    isFadeOut = false;
    $(".open").attr("src", "static/image/MiJing/background.png");
    $(".open").fadeIn(500);
    $(".light2").attr("src", reward1[light_index]);
    $(".light2").fadeIn(1000);
    $(".light3").attr("src", reward2[light_index]);
    $(".light3").fadeIn(1000);
    $(".bu").attr("src","static/image/MiJing/bu2.png" );
    $(".bu").fadeIn(1000);

    if (hasThird[light_index]) {
        $(".light2").css("top", "39.2%");
        $(".light3").css("top", "39.2%");
        $(".light4").attr("src", reward3[light_index]);
        $(".light4").fadeIn(1000);

    } else {
        $(".light2").css("top", "44.2%");
        $(".light3").css("top", "44.2%");
        $(".light4").attr("src", "");
        $(".light4").fadeOut(200);

    }
}

$(function () {
    $(".tip").css("visibility", "visible");
    $(".tip").fadeOut(1);
    $(".open").css("visibility", "visible");
    $(".open").fadeOut(1);
    $(".light2").css("visibility", "visible");
    $(".light2").fadeOut(1);
    $(".light3").css("visibility", "visible");
    $(".light3").fadeOut(1);



});
var tipFlag = 0;
function tipIn() {
    $(".el-message__content").text("已经添加到控制台: "+names[light_index]);
    setCookie(light_index);
    tipFlag = 0;
    $(".tip").fadeIn(200);
    let long = $(".tip").css("top");
    long = long + "";
    long=long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 50; i++) {
        $(".tip").css("top", Number(long) + i + "px");
    }
    setInterval(function () {
        tipFlag = tipFlag + 1;
    },999);
    setTimeout(function () {
        if (tipFlag>=2) {
            tipOut();
        }
    },3000);
}

function tipOut() {
    $(".tip").fadeOut(400);
    let long = $(".tip").css("top");
    long = long + "";
    long=long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 150; i++) {
        $(".tip").css("top", Number(long) - i + "px");
    }
    setTimeout(function () {
        $(".tip").css("top", "0px");
    },350);

    // $(".tip").css("visibility", "hidden");

}

function setCookie(index) {
    let number;
    if (getCookie(names[index]) !== "") {
        number = getCookie(names[index]);
        $.cookie(names[index], Number(number) + 1);
        return true;
    } else {
        $.cookie(names[index], 1);
    }
}
function setCookieValueAdd(value) {
    let number;
    if (getCookie(value) !== "") {
        number = getCookie(value);
        $.cookie(value, Number(number) + 1);
        return true;
    } else {
        $.cookie(value, 1);
    }
}
function setCookieValueMinus(value) {
    let number;
    if (getCookie(value) !== "") {
        number = getCookie(value);
        if (Number(number) > 1) {
            $.cookie(value, Number(number) - 1);
        } else {
            execTip("已为最小数量!");
        }
        return true;
    } else {
        $.cookie(value, 1);
    }
}
function setCookieValueToZero(value) {
    let number;
    if (getCookie(names[index]) !== "") {
        number = getCookie(names[index]);
        $.cookie(names[index], -1);
        return true;
    } else {
        $.cookie(names[index], 1);
    }
}

function getCookie(key) {
    if ($.cookie(key) != null) {
        return $.cookie(key);
    } else {
        return "";
    }
}


function deleteCookie(key) {
    $.cookie(key,null,{expires:0} );
}

function taskFinish() {
    setCookieValueToZero(value);
        var p = $(this).parent();
        p.fadeOut(function () {
            $(".comp").append(p);
            p.fadeIn();
        });
        $(this).remove();
}

var execTasks = [];
var execTasksNumber = [];
function execTask() {
    names.forEach(function (value, index, array) {
        let cookie = getCookie(value);
        if (cookie !== "" && cookie !== -1) {
            execTasks.push(value);
            execTasksNumber.push(cookie);
        }
    });
    if (execTasks.length === 0) {
        execTip("当前没有可执行的任务!");
    } else {
        execTip("即将开始执行任务: " + execTasks);
        execTasks.length = 0;
    }
}

function execTip(text) {
    $(".el-message__content").text(text);
    $(".tip").fadeIn(200);
    let long = $(".tip").css("top");
    long = long + "";
    long=long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 50; i++) {
        $(".tip").css("top", Number(long) + i + "px");
    }
    setInterval(function () {
        tipFlag = tipFlag + 1;
    },999);
    setTimeout(function () {
        if (tipFlag>=2) {
            tipOut();
        }
    },3000);
}