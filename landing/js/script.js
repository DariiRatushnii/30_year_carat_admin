$(function () {

  $(".header__toggle").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("header__toggle-active");
    $("body").toggleClass("no-scroll");
    $(".header-menu").slideToggle("middle");
  });

  $(".header-menu__link--parent").on("click", function (e) {
    e.preventDefault();

    $(this).toggleClass("header-menu__link--active");
    $(this).siblings(".header-menu__inner").slideToggle("middle");
  })

  $("input[type='checkbox'], input[type='radio']").change(function () {
    if ($(this).val() == "other") {
      $(this).parent().find(".main-other").attr("required", true);
      $(this).parent().find(".main-other").focus();
    } else {
      $(this).parent().parent().find(".main-other").attr("required", false);
    }
  });

  $(".main-other").keyup(function () {
    var value = $(this).val();
    $(this).parent().find("input[type=radio], input[type=checkbox]").val(value);

    if ($(this).parent().find("input[type=checkbox], input[type=radio]").length > 0) {
      if (value === "") {
        $(this).parent().find("input[type=checkbox], input[type=radio]").prop('checked', false);
      } else {
        $(this).parent().find("input[type=checkbox], input[type=radio]").prop('checked', true);
      }
    }
  });

  $(".main-other").focus(function () {
    $(this).attr("required", true);
    $(this).parent().find("input[type=radio]").prop('checked', true);
  });

  $(".main-other").focusout(function () {
    if ($(this).val() === "") {
      $(this).attr("required", false);
      $(this).parent().find("input[type=radio], input[type=checkbox]").prop('checked', false);
    }
  });

  const browserWidth = $(window).width();


  $("form").validate({
    rules: {
      branch: {
        required: true
      },
      position: {
        required: true
      },
      "work-people": {
        required: true
      },
      "online-percent": {
        required: true
      },
      "new-services": {
        required: true
      },
      "what-new-services": {
        required: true
      },
      digital: {
        required: true
      },
      direction: {
        required: true
      },
      technologies: {
        required: true
      },
      research: {
        required: true
      },
      adapt: {
        required: true
      },
      efir: {
        required: true
      },
      reputation: {
        required: true
      },
      options: {
        required: true
      },
      social: {
        required: true
      },
      sphere: {
        required: true
      },
      "sphere-plan": {
        required: true
      },
      influencer: {
        required: true
      },
      "influencer-plan": {
        required: true
      },
      "social-work": {
        required: true
      },
      "social-plan": {
        required: true
      },
      "invest-plan": {
        required: true
      },
      techno: {
        required: true
      },
      "techno-plan": {
        required: true
      },
      "techno-problem": {
        required: true
      },
      martech: {
        required: true
      },
      "martech-plan": {
        required: true
      },
      "martech-partner": {
        required: true
      },
      "role-partner": {
        required: true
      }
    },
    submitHandler: function (form, e) {
      e.preventDefault();

      var objSerial = $(form).serializeArray();

      objSerial = $.map(objSerial, function (item, index) {
        if (String(item.name).indexOf('other') != -1) {
          return null;
        }
        return item;
      });

      $.ajax({
        url: 'get.php',
        type: "POST",
        dataType: 'json',
        data: objSerial,
        success: function (result) {
          console.log(result);

          $(".main__first").slideUp("middle");
          $(".infos").slideUp("middle");
          $(".main__second").slideDown("middle");
        },
        error: function (xhr, resp, text) {
          console.log(xhr, resp, text);
        }
      });
    },
    focusInvalid: false,
    invalidHandler: function (form, validator) {
      if (!validator.numberOfInvalids())
        return;

      $('html, body').animate({
        scrollTop: $(validator.errorList[0].element).offset().top
      }, 600);
    }
  });

  $(".slider__wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    nextArrow: '<a href="#!" class="slider__arrow slider__arrow-next"><span></span></a>',
    prevArrow: '<a href="#!" class="slider__arrow slider__arrow-prev"><span></span></a>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // $(".video__link").on("click", function (e) {
  //   e.preventDefault();
  //
  //   if (!$(this).hasClass("video__link--active")) {
  //     $(".video__link").removeClass("video__link--active");
  //     $(this).addClass("video__link--active");
  //     $(".video iframe").attr("src", $(this).data("src"));
  //   }
  // });
  const modal = document.querySelector('#modal')

  $(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      document.body.style.overflow = 'inherit'
      modal.classList.add('mfp-hide')
      modal.classList.remove('modal-open')
    }
  });


  $('.modal__close').click((e) => {
    document.body.style.overflow = 'inherit'
    modal.classList.add('mfp-hide')
    modal.classList.remove('modal-open')
  })

  $(".open-modal").click((e) => {
    const comments = modal.querySelector('.comments__wrap')
    comments.innerHTML = ''
    const donor = e.target.closest('.flip-card')

    const imgPosition = donor.getAttribute('data-img-position')
    const donorPos = donor.getAttribute('data-pos')
    const donorName = donor.getAttribute('data-name')
    const donorImg = donor.querySelector('img').getAttribute('src')
    const donorBg = donor.getAttribute('data-bg')
    const donorComments = donor.getAttribute('data-comments') ? donor.getAttribute('data-comments').split('|') : null;
    const donorMobBg = donor.getAttribute('data-mob-prev-img')

    document.body.style.overflow = 'hidden'
    modal.classList.remove('mfp-hide')
    modal.classList.add('modal-open')

    const modal__pic__wrap = modal.querySelector('.modal__pic__wrap')
    const img = modal.querySelector('.modal__pic img')
    const name = modal.querySelector('.modal__name')
    const pos = modal.querySelector('.modal__pos')
    const bg = modal.querySelector('.modal__line')
    const mobBg = modal.querySelector('#modal_date_img')

    modal__pic__wrap.style.justifyContent = imgPosition;
    if (donorComments)
      donorComments.map((el, index) => {
        if (el.length) {
          const div = document.createElement('div')
          div.classList.add('comments__text')
          div.innerText = el
          comments.appendChild(div)
        }
      })

    name.innerText = donorName
    pos.innerText = donorPos
    if (browserWidth <= 580) {
      bg.style.background = "#2dc5f6"
    } else {
      bg.style.background = `url(${donorBg})`
    }
    img.setAttribute('src', donorImg)
    mobBg.setAttribute('src', donorMobBg)

  })

  $('#modal').click(function (event) {
    if ($('#modal.modal-open').length && !$(event.target).closest('.modal__wrapper').length && !$(event.target).is('.modal__wrapper')) {
      document.body.style.overflow = 'inherit'
      modal.classList.add('mfp-hide')
      modal.classList.remove('modal-open')
    }
  });

  $(".down-arrow").click((e) => {
    $('header').css({"height": "auto"})
    $('.header-video').fadeOut(1000, () => {
      $('.home-page').fadeIn()
    })
  })
  $(".header-text").click((e) => {
    $('header').css({"height": "auto"})
    $('.header-video').fadeOut(1000, () => {
      $('.home-page').fadeIn()
    })
  })
  $(".header-video").click((e) => {
    $('header').css({"height": "auto"})
    $('.header-video').fadeOut(1000, () => {
      $('.home-page').fadeIn()
    })
    // document.querySelector('.home-page').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  })


  if (browserWidth > 580)
    $('#header-video-wraper').append(`<div class="header-video desctop-only">
      <div class="header-video-back">
        <img loading="lazy" class="preloder" id="preloder" src="/img/fps_1.jpg" />
        <video id="player" autoplay="" muted="" loop="" loading="lazy">
          <source src="/video/FL12_people_site_14.mp4" type="video/mp4">
        </video>
      </div>
    </div>`)
  else
    $('#header-video-wraper').append(`<div class="header-mobile-poster mobile-only">
    <img class="" loading="lazy" src="/img/mobile_video_placeholder.jpg" />
  </div>`)

  $('#player').on('loadeddata', (e) => {
    //Video should now be loaded
    $('#preloder').hide()
  });

});


