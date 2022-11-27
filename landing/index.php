<?php
include_once('./include/functions.php');

$emplyees = get_emplyees();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Futurelab 12 | Головна | Dentsu Ukraine</title>
  <link rel="apple-touch-icon" sizes="57x57" href="./img/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./img/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./img/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./img/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./img/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./img/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./img/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./img/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./img/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="./img/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./img/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon/favicon-16x16.png">
  <link rel="manifest" href="./img/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#000">
  <meta name="msapplication-TileImage" content="./img/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#000">

  <meta property="og:image" content="https://futurelab.dentsu.com.ua/img/FL12_FB_preview.png" />
  <meta property="og:image:secure_url" content="https://futurelab.dentsu.com.ua/img/FL12_FB_preview.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://futurelab.dentsu.com.ua" />
  <meta property="og:title" content="Future Lab – щорічна маркетингова конференція групи dentsu Ukraine з 2011 року." />
  <meta property="og:description"
    content="2 вересня 2021. 12-а конференція. Тема року – HumanTech – про синергію комунікацій та ІТ, про martech-рішення, які працюють на благо людини та суспільства." />



  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,700;1,900&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="./css/slick.css">
  <link rel="stylesheet" href="./css/magnific-popup.css">
  <link rel="stylesheet" href="./css/main.css">
</head>

<body>
  <header class="header --videoplayer">
    <div class="container">
      <div class="header__row">
        <a href="https://dentsu.com.ua/" class="header__logo">
          <img src="https://static.dentsu.com.ua/assets/logos/main-logo.png" alt="Dentsu Ukraine" loading="lazy">
        </a>

        <a href="#!" class="header__lang desctop-only">
          <span class="header__lang-span">UA</span>
        </a>

        <a href="#!" class="header__toggle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>

    <nav class="header-menu">
      <div class="container">
        <div class="header-menu__list">
          <li class="header-menu__item">
            <a href="#!" class="header-menu__link header-menu__link--parent">Хто ми<svg class="header-menu__arrow"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                </path>
              </svg>
            </a>
            <ul class="header-menu__inner">
              <li>
                <a href="https://dentsu.com.ua/about/">Dentsu Ukraine</a>
              </li>
              <li>
                <a href="https://dentsu.com.ua/leadership/">Агентства</a>
              </li>
              <li>
                <a href="https://dentsu.com.ua/team/">Команда</a>
              </li>
            </ul>
          </li>
          <li class="header-menu__item">
            <a href="https://dentsu.com.ua/news/" class="header-menu__link">Новини</a>
          </li>
          <li class="header-menu__item">
            <a href="https://futurelab.dentsu.com.ua/" class="header-menu__link">Future Lab</a>
          </li>
          <li class="header-menu__item">
            <a href="https://dentsu.com.ua/csr/" class="header-menu__link">Відповідальне лідерство</a>
          </li>
          <li class="header-menu__item">
            <a href="https://dentsu.com.ua/careers/" class="header-menu__link">Кар'єра</a>
          </li>
          <li class="header-menu__item">
            <a href="https://dentsu.com.ua/contacts/" class="header-menu__link">Контакти</a>
          </li>
        </div>
      </div>
    </nav>

    <div class="header-video ">
      <div class="header-video-back">
        <!-- <img loading="lazy" src="./img/header_bg.png" /> -->
        <!-- <video src="./video/photo_banner_ prev.mp4" autoplay></video> -->
        <!-- <img loading="lazy" src="./img/we_are_carat.svg" /> -->

        <video autoplay muted loop id="myVideo">
          <source src="./video/photo_banner_ prev.mp4" type="video/mp4">
        </video>
      </div>
      <div class="header-text">
        <p><b>Вітаємо із 30-річчям CARAT.</b></p>
        <p>Кожен день нашого існування та кожне досягнення - завдяки нашим людям.<br />
          Натискайте на наші фото,аби дізнатись більше про нашу команду</p>
      </div>

      <div class="arrow-to-bottom">
        <img src="./img/arrow_bottom.svg">
      </div>

    </div>


  </header>

  <main class="home-page">
    <div class="flip-wrap">

    <?php foreach($emplyees as $emplye): ?>
      <div class="flip-card open-modal" data-name="<?=$emplye['full_name']?>" data-pos="<?=$emplye['position']?>"
        data-bg="<?=$emplye['preview_img']?>" data-img-position="<?=$emplye['img_position']?>" data-comments="<?=get_emplyees_comments($emplye['id']);?>">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="<?=$emplye['original_img']?>" alt="Avatar">
          </div>
          <div class="flip-card-back">
            <h3><?=$emplye['full_name']?></h3>
            <p><?=$emplye['position']?></p>
          </div>
        </div>
      </div>
      <?php endforeach; ?>

    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__adress">
          <p class="footer__name"><img loading="lazy" src="./img/logo.png"></p>
          <p class="footer__line">
            <span>Загальні питання:</span>
            <a href="tel:0444988450"><b>(044) 498 8450</b></a>
          </p>
          <p class="footer__line">
            <span>New Business Team:</span>
            <a href="mailto:newbiz@dentsu.com.ua">newbiz@dentsu.com.ua</a>
          </p>
          <p class="footer__line">
            <span>PR Team:</span>
            <a href="mailto:pr@dentsu.com.ua">pr@dentsu.com.ua</a>
          </p>
        </div>

        <div class="footer__col">
          <p class="footer__addr">Вул. Сім'ї Прахових, 58/10 <br>Київ, 01033</p>
          <div class="footer__socials">
            <a href="https://www.linkedin.com/company/dentsu-ukraine/" class="footer__soc">
              <img loading="lazy" src="./img/in.png" alt="">
            </a>
            <a href="https://www.youtube.com/channel/UCsj6sXxCk8HAMIZffE1dEuQ" class="footer__soc">
              <img loading="lazy" src="./img/tube.png" alt="">
            </a>
            <a href="https://www.facebook.com/dentsuaegisnetworkua/" class="footer__soc">
              <img loading="lazy" src="./img/fb.png" alt="">
            </a>
            <a href="https://www.instagram.com/dentsu.ukraine/" class="footer__soc">
              <img loading="lazy" src="./img/ig.png" alt="">
            </a>


          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- mfp-hide -->
  <div id="modal" class="modal mfp-hide white-popup-block">
    <div class="modal__wrapper">
      <div class="modal__close">✖</div>
      <div class="modal__line">
        <div class="modal__pic__wrap">
          <picture class="modal__pic">
            <img loading="lazy" src="./img/users/Андрейченко Галина.jpg" alt="">
          </picture>
          <div class="mobile-only">
            <img loading="lazy" class="date-img" src="./img/data.png" alt="">
          </div>
        </div>
      </div>
      <div class="modal__content">
        <div class="modal__right">
          <p class="modal__name"><?=$emplye['full_name']?></p>
          <p class="modal__pos"><?=$emplye['position']?></p>
        </div>
        <div class="comments__wrap">
          <div class="comments__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
          <div class="comments__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  </div>


  <script src="./js/jquery.min.js"></script>
  <script src="./js/jquery.validate.min.js"></script>
  <script src="./js/slick.min.js"></script>
  <script src="./js/jquery.magnific-popup.min.js"></script>
  <script src="./js/script.js"></script>
</body>

</html>