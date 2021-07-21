// RWD漢堡選單 
let menuCtr = document.querySelector("#menu-ctr");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let open = false;

menuCtr.addEventListener("click", function () {
  open = !open;
  if (open) {
    hamburgerMenu.style.display = 'block';
  } else {
    hamburgerMenu.style.display = 'none';
  }
});


// header 右側登入鈕

let logIn = document.querySelector(".login-button"); //抓登入按鈕
let bgTransparency = document.querySelector(".bg"); // 抓背景透明度
let loginLightBox = document.querySelector(".web-transparency"); // 抓跳出的登入視窗
let closeBtn = document.querySelector(".fa-times"); // 抓登入視窗右邊的xx關閉鈕


logIn.addEventListener("click", function () { // 監聽按下去的登入鈕事件，按下去會打開登入視窗
  bgTransparency.style.display = 'block'; //讓背景透明度出現
  loginLightBox.style.display = 'block'; // 讓登入視窗跳出
  // 讓body捲軸隱藏不動(按登入畫面跳出的時候不能在捲捲軸)
  let body = document.querySelector("body");
  body.style.overflowY = "hidden"; // overflowY 就是捲軸的y軸
});

closeBtn.addEventListener("click", function () {  // 監聽按下去的登入鈕事件，按下去會關閉登入視窗
  bgTransparency.style.display = 'none';  //讓背景透明度隱藏
  loginLightBox.style.display = 'none';  // 讓登入視窗關閉
  let body = document.querySelector("body");
  body.style.overflowY = "auto";
});

// nav bar

let navTab_1 = document.querySelector("#navTab_1");  // 抓選單的值
let navTab_2 = document.querySelector("#navTab_2");
let navTab_3 = document.querySelector("#navTab_3");
let navTab_4 = document.querySelector("#navTab_4");
let blok_1 = document.querySelector("#blok_1"); // 抓選單相對應區塊的值
let blok_2 = document.querySelector("#blok_2");
let blok_3 = document.querySelector("#blok_3");
let blok_4 = document.querySelector("#blok_4");

// navTab_1.addEventListener("click", function () {
//   blok_1.style.display = 'block';
//   blok_2.style.display = 'none';
//   blok_3.style.display = 'none';
//   blok_4.style.display = 'none';
// });

// navTab_2.addEventListener("click", function () {
//   blok_1.style.display = 'none';
//   blok_2.style.display = 'block';
//   blok_3.style.display = 'none';
//   blok_4.style.display = 'none';
// });

// navTab_3.addEventListener("click", function () {
//   blok_1.style.display = 'none';
//   blok_2.style.display = 'none';
//   blok_3.style.display = 'block';
//   blok_4.style.display = 'none';
// });

// navTab_4.addEventListener("click", function () {
//   blok_1.style.display = 'none';
//   blok_2.style.display = 'none';
//   blok_3.style.display = 'none';
//   blok_4.style.display = 'block';
// });


// function () {
  
// }

// () => {}

navTab_1.addEventListener("click", function () {
  displayOpen(1);
});
navTab_2.addEventListener("click", function () {
  displayOpen(2);
});
navTab_3.addEventListener("click", function () {
  displayOpen(3);
});
navTab_4.addEventListener("click", function () {
  displayOpen(4);
});

function displayOpen(index) {
  const tabArr = [blok_1, blok_2, blok_3, blok_4];
  const navArr = [navTab_1, navTab_2, navTab_3, navTab_4];
  for (let i = 1; i <= 4; i++) {
    if (index === i) {
      tabArr[i - 1].style.display = 'block';
      navArr[i - 1].classList.add("focus"); // 新增一個class名稱抓取相對應的css樣式
      // classList 是 class標籤列表的意思
    } else {
      tabArr[i - 1].style.display = 'none';
      navArr[i - 1].classList.remove("focus");
    }
    // (index === i) ? tabArr[i - 1].style.display = 'block' : tabArr[i - 1].style.display = 'none';
  }
}

// 物件寫法
// function displayOpen(index) {
//   const tabObj = {
//     blok_1: blok_1,
//     blok_2: blok_2,
//     blok_3: blok_3,
//     blok_4: blok_4
//   };
//   const navObj = {
//     navTab_1: navTab_1,
//     navTab_2: navTab_2,
//     navTab_3: navTab_3,
//     navTab_4: navTab_4
//   };
//   for (let i = 1; i <= 4; i++) {
//     if (index === i) {
//       tabObj[`blok_${i}`].style.display = 'block';
//       navObj[`navTab_${i}`].classList.add("focus");
//     } else {
//       tabObj[`blok_${i}`].style.display = 'none';
//       navObj[`navTab_${i}`].classList.remove("focus");
//     }
    
//   }
// }



// 常見問答縮放

let zoom = document.querySelectorAll(".fa-chevron-down"); //抓箭頭開關鈕
let qa1 = document.querySelector(".qa1"); //抓隱藏答案區塊
let qa2 = document.querySelector(".qa2");
let qa3 = document.querySelector(".qa3");
let qa4 = document.querySelector(".qa4");
let qa5 = document.querySelector(".qa5");
let qa6 = document.querySelector(".qa6");
let zoom1 = document.querySelector(".zoom1");
let zoom2 = document.querySelector(".zoom2");
let zoom3 = document.querySelector(".zoom3");
let zoom4 = document.querySelector(".zoom4");
let zoom5 = document.querySelector(".zoom5");
let zoom6 = document.querySelector(".zoom6");
let openStatus = [false, false, false, false, false, false]; //開關狀態

//執行的優化寫法
for (let i = 0; i < zoom.length; i++) {
  zoom[i].addEventListener("click", function () {
    let roomNumber = zoom[i].getAttribute('data-room');
    qaOpen(Number(roomNumber));
  });
}
// 執行的原始寫法
// zoom1.addEventListener("click", function () {
//   qaOpen(1);
// });
// zoom2.addEventListener("click", function () {
//   qaOpen(2);
// });
// zoom3.addEventListener("click", function () {
//   qaOpen(3);
// });
// zoom4.addEventListener("click", function () {
//   qaOpen(4);
// });
// zoom5.addEventListener("click", function () {
//   qaOpen(5);
// });
// zoom6.addEventListener("click", function () {
//   qaOpen(6);
// });

function qaOpen(index) {
  const qaArr = [qa1, qa2, qa3, qa4, qa5, qa6];
  const zoomArr = [zoom1, zoom2 ,zoom3, zoom4, zoom5, zoom6];
  for (let i = 1; i <= 6; i++) {
    if (index === i) {
      openStatus[i - 1] = !openStatus[i - 1];
      if (openStatus[i - 1]) {
        zoomArr[i - 1].style.transform = "rotate(180deg)";
        zoomArr[i - 1].style.marginLeft = "20px";
        zoomArr[i - 1].style.marginRight = "20px";
        qaArr[i - 1].style.display = "block";
      } else {
        zoomArr[i - 1].style.transform = "rotate(0deg)";
        zoomArr[i - 1].style.marginLeft = "0px";
        zoomArr[i - 1].style.marginRight = "16px";
        qaArr[i - 1].style.display = "none";
      }
    }
  }
}


// zoom.addEventListener("click",function () {
//   zoomOpen = !zoomOpen;
//   if (zoomOpen) {
//     zoom.style.transform = "rotate(180deg)";
//     zoom.style.marginLeft = "20px";
//     zoom.style.marginRight = "20px";
//     qa1.style.display = "block";
//   } else {
//     zoom.style.transform = "rotate(360deg)";
//     zoom.style.marginLeft = "0px";
//     zoom.style.marginRight = "16px";
//     qa1.style.display = "none";
//   }
  
// });




