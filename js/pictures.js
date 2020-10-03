"use strict";
{
  // 画像の配列images を作る
  const images = [
    "../img/受付.jpg",
    "../img/待合室.jpeg",
    "../img/診察室.jpg",
    "../img/処置室.jpg",
    "../img/kidsroom.jpg",
  ];
  //   { image: "../img/受付.jpg", text: "受付" },
  //   { image: "../img/待合室.jpeg", text: "待合室" },
  //   { image: "../img/診察室.jpg", text: "診察室" },
  //   { image: "../img/処置室.jpg", text: "処置室" },
  //   { image: "../img/kidsroom.jpg", text: "キッズルーム" },
  // ];

  // const texts = Object.keys(images);

  let currentIndex = 0;

  // 配列に順番を与える

  const mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex];

  // main 要素をidから取得し、メイン画像をmainImageと定義
  // currentIndex番目の画像を、メイン画像に入れる

  // texts.forEach(() => {
  //   const p = document.querySelector("p");
  //   p.textContent = images[currentIndex].text;
  // });

  // それぞれの画像(画像、〇番目がわかるようにしてある)にループを回す
  images.forEach(function (image, index) {
    const img = document.createElement("img");
    img.src = image;

    // img要素を作成し、と img定義する
    // img 属性に画像を代入する

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }

    // li要素を作成して、liと定義する
    // liにcurrentクラスをつける
    // liにクリック後の処理
    li.addEventListener("click", () => {
      mainImage.src = image;
      // メイン画像にクリック画像を入れる
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      // thumbnailsクラスの下の階層のli要素すべてを取得してthumbnailsと定義する
      thumbnails[currentIndex].classList.remove("current");
      // 現在番目のthumbnailsの画像からcurrentクラスを除去
      currentIndex = index;
      // 現在番目は？？？
      thumbnails[currentIndex].classList.add("current");
      // 現在番目のthumbnailsの画像にcurrentクラスを付ける
    });

    li.appendChild(img);
    // liの下の階層にimgセットしつつ
    document.querySelector(".thumbnails").appendChild(li);
    // クラス付きのli要素を取得する
  });

  // nextボタンの処理

  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  // next要素ををidから取得してnextと定義する
  // nextクリックしたら
  // thumbnailsクラス付きのli要素すべてを取得しつつ
  // target番目=  現在の画像（〇番目）＋１番目 つまり次の画像になり
  // 加えてクリックイベントが実行される

  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  // prev要素ををidから取得してprevと定義する
  // prevクリックしたら
  // thumbnailsクラス付きのli要素すべてを取得しつつ
  // target番目=  現在の画像（〇番目）-１番目 つまり前の画像になり
  // 加えてクリックイベントが実行される

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  // nextクリックが1秒毎に実行されて

  let isPlaying = false;

  const play = document.getElementById("play");

  // play要素をplay idから取得し
  // playにクリックイベントをつける

  play.addEventListener("click", () => {
    if (isPlaying === false) {
      // もし
      playSlideshow();
      play.textContent = "Pause";
    } else {
      clearTimeout(timeoutId);
      play.textContent = "Play";
    }
    isPlaying = !isPlaying;
    // trueになる
  });
}
