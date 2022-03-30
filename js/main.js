//加载完成后执行
window.addEventListener('load', function () {
    //载入动画
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1s;");
    $('#section').css("cssText", "opacity: 1;transition: ease 1s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1s;");

    //用户欢迎
    iziToast.settings({
        timeout: 3000,
        backgroundColor: '#ffffff40',
        titleColor: '#efefef',
        messageColor: '#efefef',
        progressBar: false,
        close: false,
        closeOnEscape: true,
        position: 'topCenter',
        transitionIn: 'bounceInDown',
        transitionOut: 'flipOutX',
        displayMode: 'replace',
        layout: '1'
    });
    setTimeout(function () {
        iziToast.show({
            title: hello,
            message: '欢迎来到 XKの自定义'
        });
    }, 800);

}, false)

//进入问候
now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨好";
} else if (hour < 9) {
    var hello = "早上好";
} else if (hour < 12) {
    var hello = "上午好";
} else if (hour < 14) {
    var hello = "中午好";
} else if (hour < 17) {
    var hello = "下午好";
} else if (hour < 19) {
    var hello = "傍晚好";
} else if (hour < 22) {
    var hello = "晚上好";
} else {
    var hello = "夜深了";
}

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    $("#time_text").html(h + '<span id="point">:</span>' + m);
    $("#day").html(mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + weekday[day]);
    t = setTimeout(time, 1000);
}

//获取天气
//每日限量 100 次
//请前往 https://www.tianqiapi.com/index/doc?version=v6 申请（免费）
fetch('https://yiketianqi.com/api?unescape=1&version=v6&appid=43986679&appsecret=TksqGZT7')
    .then(response => response.json())
    .then(data => {
        //$('#wea_text').html(data.wea + '&nbsp;' + data.tem_night + '℃' + '&nbsp;~&nbsp;' + data.tem_day + '℃')
        $('#wea_text').text(data.wea)
        $('#tem1').text(data.tem1)
        $('#tem2').text(data.tem2)
    })
    .catch(console.error)

//屏蔽右键
document.oncontextmenu = function () {
    iziToast.info({
        timeout: 3000,
        iconUrl: './img/warn.png',
        // title: '温馨提醒',
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//屏蔽终端
document.onkeydown = function (event) {
    if (window.event && window.event.keyCode === 123) {
        event.keyCode = 0;
        event.returnValue = false;
        iziToast.info({
            timeout: 3000,
            iconUrl: './img/warn.png',
            // title: '温馨提醒',
            message: '为了浏览体验，本站禁用 F12'
        });
    return false;
    }
}

//兼容提醒
if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = './css/firefox.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    window.addEventListener('load', function () {
        iziToast.info({
            timeout: 5000,
            iconUrl: './img/warn.png',
            // title: '兼容提醒',
            message: '您正在使用火狐浏览器，部分功能可能不支持'
        });
    }, false)
}

//Tab书签页
$(function () {
    $(".mark .tab .tab-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".products .mainCont").eq($(this).index()).css("display", "flex").siblings().css("display", "none");
    })
})

//设置
$(function () {
    $(".set .tabs .tab-items").click(function () {
        $(this).addClass("actives").siblings().removeClass("actives");
        $(".productss .mainConts").eq($(this).index()).css("display", "flex").siblings().css("display", "none");
    })
})

//点击搜索按钮
$(".sou-button").click(function () {
    iziToast.show({
        message: '问题未修复，请点击键盘上的确认键以搜索',
    });
    // $('#search-submit').click();
});

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'XKの自定义'
var title2 = `版权所有`
var content = `
主页:  https://www.xukaiyyds.cn
地址:  https://github.com/kaibazhidao66/nav
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)