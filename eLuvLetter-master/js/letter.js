var aparted = false;

$("#open").click(function () {
  if (!aparted) {
    var typed = new Typed('.letter', {
      strings: [
        "^1000Dear&nbsp;&nbsp;陈沁羽",
        "何其有幸能认识你<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我爱你，陈沁羽。虽然我们无法预料到未来的事，但请相信我会一直信守对你的承诺。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不知道如何去形容我有多么爱你，但我会用行动证明我有多爱你。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你愿意做我一辈子的女朋友吗？陈沁羽。<br><br><p style='float:right; display:block; width:80px;'>杨奕轩</p>"
      ],
      typeSpeed: 100,
      backSpeed: 50
    });

    $('#open').find("span").eq(0).css('background-position', "0 -150px");

    aparted = true;

    var music = document.getElementById('music2');
    if (music.paused) {
      music.play();
      $('#music_btn2').css("opacity", "1");
    }
  }
});

function playPause() {
  var music = document.getElementById('music2');
  var music_btn = $('#music_btn2');

  if (music.paused) {
    music.play();
    music_btn.css("opacity", "1");
    music_btn.text("暂停音乐");
  } else {
    music.pause();
    music_btn.css("opacity", "0.2");
    music_btn.text("播放音乐");
  }
}

window.onload = function () {
  var currentUrl = window.location.href;
  var firstIndex = currentUrl.indexOf("#");
  if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

  // ✅ 删除设置 bgmsrc 的这一行
  // $('#music2').attr('src', bgmsrc);

  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) event.preventDefault();
  });

  var lastTouchEnd = 0;

  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) event.preventDefault();
    lastTouchEnd = now;
  }, false);

  document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
  });

  $('body').css('opacity', '1');
  $('#jsi-cherry-container').css('z-index', '-99');
}
