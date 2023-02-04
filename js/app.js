const mob = 767.98;
const tab = 991;
const des = 992;
if (window.innerWidth < mob) {
  window.addEventListener("resize", () => {
    if (window.innerWidth > mob) {
      location.reload();
    }
  });
} else if (window.innerWidth > mob && window.innerWidth < des) {
  window.addEventListener("resize", () => {
    if (window.innerWidth < mob || window.innerWidth > tab) {
      location.reload();
    }
  });
} else if (window.innerWidth > des) {
  window.addEventListener("resize", () => {
    if (window.innerWidth < des) {
      location.reload();
    }
  });
}

document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    mousewheel: true,
    // speed: 1500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      320: {
        slidesPerView: 1.25,
        centeredSlides: false,
        spaceBetween: 20,
        // slidesOffsetBefore: 500,
        direction: "horizontal",
      },
      767: {
        freeMode: true,
        centeredSlides: true,
        direction: "vertical",
        spaceBetween: 0,
        slidesPerView: 3.75,
        slidesOffsetBefore: -150,
      },
      992: {
        freeMode: true,
        centeredSlides: true,
        direction: "vertical",
        spaceBetween: 0,
        slidesOffsetBefore: -100,
        slidesPerView: 1.75,
      },
    },
  });
});
bindSwipers(slider1, slider2);

window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const headerSocialsLink = document.querySelectorAll(".header__socials-link");
  const headerBtn = document.querySelector(".header__btn");
  const headerTel = document.querySelector(".header__tel");
  const headerEmail = document.querySelector(".header__email");

  setTimeout(function () {
    body.classList.add("active");
  }, 500);

  setTimeout(function () {
    document.querySelector(".slider1").classList.add("active");
  }, 1000);
  setTimeout(function () {
    document.querySelector(".slider2").classList.add("active");
  }, 1300);

  if (screen.width > 992) {
    setTimeout(function () {
      document.querySelector(["h1"]).classList.add("active");
      let delay = 0.04;
      document
        .querySelector(["h1"])
        .querySelectorAll(".span")
        .forEach((span) => {
          delay += 0.04;
          span.style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
        });
    }, 2400);
    setTimeout(function () {
      let delay = 0.3;
      headerSocialsLink.forEach((link) => {
        link.classList.add("active");
        delay += 0.3;
        link.style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
        link.querySelector(
          ".socials-svg"
        ).style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
      });
    }, 4000);
    setTimeout(() => {
      headerSocialsLink.forEach((link) => {
        link.querySelector(
          ".socials-svg"
        ).style = `transition-delay: 0s;  animation-delay: 0s;`;
        link
          .querySelector(".header__socials-svg")
          .classList.remove("socials-svg");
        // link.querySelector(".header__socials-svg").classList.add("active");
      });
    }, 6800);
    setTimeout(function () {
      let delay = 0.6;
      headerBtn.classList.add("active");
      headerBtn.style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
    }, 5300);
    setTimeout(function () {
      let delay = 0.6;
      headerTel.classList.add("active");
      headerTel.style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
    }, 5800);
    setTimeout(function () {
      let delay = 0.6;
      headerEmail.classList.add("active");
      headerEmail.style = `transition-delay: ${delay}s;  animation-delay: ${delay}s;`;
    }, 6100);

    setTimeout(function () {
      const headerTitle1 = document.querySelectorAll(".title1");
      const headerTitle2 = document.querySelectorAll(".title2");
      const headerTitle3 = document.querySelectorAll(".title3");

      let timeOut1 = 3000;
      let Interval1 = 1000;
      let timeOut2 = 3500;
      let Interval2 = 1000;
      let timeOut3 = 4000;
      let Interval3 = 1000;

      setInterval(() => {
        headerTitle1.forEach((el) => {
          el.classList.remove("active");
        });
        setTimeout(() => {
          headerTitle1[
            Math.floor(Math.random() * headerTitle1.length)
          ].classList.add("active");
        }, Interval1);
      }, timeOut1);

      setInterval(() => {
        headerTitle2.forEach((el) => {
          el.classList.remove("active");
        });
        setTimeout(() => {
          headerTitle2[
            Math.floor(Math.random() * headerTitle2.length)
          ].classList.add("active");
        }, Interval2);
      }, timeOut2);

      setInterval(() => {
        headerTitle3.forEach((el) => {
          el.classList.remove("active");
        });
        setTimeout(() => {
          headerTitle3[
            Math.floor(Math.random() * headerTitle3.length)
          ].classList.add("active");
        }, Interval3);
      }, timeOut3);
    }, 4000);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (screen.width > 992) {
    const sliders = document.querySelectorAll(".slider__item a");
    const body = document.querySelector("body");
    let cx,
      cy,
      mouseX,
      mouseY,
      posX,
      posY,
      clientX,
      clientY,
      dx,
      dy,
      tiltx,
      tilty,
      request,
      radius,
      degree;
    // document.addEventListener("DOMContentLoaded", () => {
    sliders.forEach((slider) => {
      slider.addEventListener("mousemove", (e) => {
        cx = slider.offsetHeight;
        cy = slider.offsetWidth;
        clientX = e.pageX;
        clientY = e.pageY;
        request = requestAnimationFrame(updateMe);

        function updateMe() {
          dx = clientX - cx;
          dy = clientY - cy;
          tiltx = dy / cy;
          tilty = dx / cx;
          radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
          degree = radius * 12;
          gsap.to(slider, 1, {
            transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
          });
        }
      });
      slider.addEventListener("mouseout", (e) => {
        cx = slider.offsetHeight;
        cy = slider.offsetWidth;
        clientX = e.pageX;
        clientY = e.pageY;
        request = requestAnimationFrame(updateMe);

        function updateMe() {
          tiltx = 0;
          tilty = 0;
          degree = 0;
          gsap.to(slider, 1, {
            transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
          });
        }
      });
    });

    body.addEventListener("mousemove", (e) => {
      mouseCoords(e);
      cursor.classList.remove("hidden");
      follower.classList.remove("hidden");
    });

    const cursor = document.getElementById("cursor"),
      follower = document.getElementById("aura"),
      links = document.getElementsByTagName("a"),
      items = document.querySelectorAll(".slider__img");

    (mouseX = 0), (mouseY = 0), (posX = 0), (posY = 0);

    function mouseCoords(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    }

    gsap.to({}, 0.01, {
      repeat: -1,

      onRepeat: () => {
        posX += (mouseX - posX) / 15;
        posY += (mouseY - posY) / 15;

        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });

        gsap.set(follower, {
          css: {
            left: posX - 24,
            top: posY - 24,
          },
        });
      },
    });

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      });

      links[i].addEventListener("mouseout", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    }

    body.addEventListener("mouseout", () => {
      cursor.classList.add("hidden");
      follower.classList.add("hidden");
    });
    // });
  }
});
