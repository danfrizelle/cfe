"use strict";

(function () {
  "use strict";

  var body = document.body;
  body.classList.add("RSPCA_040");

  // Variation 2

  //get current page url
  var currentPage = window.location.href;

  // cookie functions

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var loadDynamicScript = function loadDynamicScript(callback) {
    var existingScript = document.getElementById("tinySlider");

    if (!existingScript) {
      var script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"; // URL for the third-party library being loaded.
      script.id = "tinySlider"; // e.g., googleMaps or stripe
      document.head.appendChild(script);

      script.onload = function () {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
  };

  var loadSmoothScript = function loadSmoothScript(callback) {
    var existingScript = document.getElementById("smoothscroll");

    if (!existingScript) {
      var script = document.createElement("script");
      script.src =
        "https://polyfill.io/v3/polyfill.min.js?features=smoothscroll"; // URL for the third-party library being loaded.
      script.id = "smoothscroll"; // e.g., googleMaps or stripe
      document.head.appendChild(script);

      script.onload = function () {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
  };

  /////////////////////////
  // set cookie for testing
  if (currentPage.indexOf("fed013test=true") > -1) {
    setCookie("fed013test", "true");
    console.log("cookie set");
  }
  /////////////////////////

  // variables
  var donationAmount = 0;
  var donationAmountMessage = "monthly";
  var donationMessageAmount = "test";
  var donationMessage = "test message";

  var buildHeader = function buildHeader() {
    var header = document.querySelector("#header .divider-indent");
    var mainHeading = document.createElement("h1");
    mainHeading.classList.add("fe-main-heading");
    mainHeading.innerHTML = "Help us be there for more animals";
    header.append(mainHeading);
  };

  // build banner
  var buildBanner = function buildBanner() {
    var check = document.querySelector(".fe-donate-banner");
    if (check) {
      check.remove();
    }

    var newBanner = document.createElement("div");
    newBanner.className = "fe-donate-banner";
    newBanner.innerHTML =
      '\n      <div class="fe-donate-banner__inner">\n        <div class="fe-donate-banner__message">\n          <div class="fe-donate-banner__message-content">\n            Your donation makes a difference\n          </div>\n        </div>\n        <div class="fe-donate-banner__button-container">\n          <a class="fe-donate-banner__button" href="#fe-donations__card" id="">Donate today</a>\n        </div>\n      </div>\n      ';

    body.prepend(newBanner);
  };

  var buildTestSection = function buildTestSection() {
    var newTestSection = document.createElement("div");
    newTestSection.classList.add("fe-donations");
    var pageContent = document.querySelector("#content");
    pageContent.parentElement.insertBefore(newTestSection, pageContent);
  };

  var buildDonationSection = function buildDonationSection() {
    var testSection = document.querySelector(".fe-donations");
    var donationSection = document.createElement("div");
    donationSection.id = "fe-donations__card";
    donationSection.classList.add("fe-donations__card-outer");
    donationSection.innerHTML =
      '\n      <div class="fe-donations__card">\n    \n        <div class="fe-donations__card-left">\n          <img class="hundred" src=\'https://assets.codepen.io/2087490/white-kittens.jpg?format=auto\'>\n          <img class="other" src=\'https://assets.codepen.io/2087490/fox.jpg?format=auto\'>\n          <img class="fifty" src=\'https://assets.codepen.io/2087490/lady-with-dog.jpg?format=auto\'>\n          <img class="twenty" src=\'https://assets.codepen.io/2087490/carry-dog.jpg?format=auto\'>\n          <img class="ten" src=\'https://assets.codepen.io/2087490/puppy.jpg?format=auto\'>\n          <img class="five" src=\'https://assets.codepen.io/2087490/bird.jpg?format=auto\'>\n          <img class="two" src=\'https://assets.codepen.io/2087490/boat.jpg?format=auto\'>\n          <div class="fe-donations__card-left-message-container"><div class="fe-donations__card-left-message"><span>\xA3' +
      donationMessageAmount +
      "</span> " +
      donationMessage +
      '</div></div>\n        </div>\n    \n        <div class="fe-donations__card-right">\n          <h2>Donate today</h2>\n          <div class="fe-donations__card-right-buttons">\n            <button class="fe-donations__card-freq-button fe-donations__card-monthly fe-active">Monthly</button>\n            <button class="fe-donations__card-freq-button fe-donations__card-oneoff">One-off</button>\n          </div>\n    \n          <div class="fe-donations__card-right-monthly fe-active">\n            <div class="fe-donations__card-right-smallprint">Your kindness of a monthly donation helps support our long-term projects, thank you.</div>\n            <div class="fe-donations__card-right-buttons">\n              <button class="fe-donations__card-button fe-donations__card-button--six fe-equal-height-block" data-amount="6" data-amount-info="monthly">\xA36 <span class="fe-donations__card-button-info"></span></button>\n              <button class="fe-donations__card-button fe-donations__card-button--ten fe-equal-height-block" data-amount="10" data-amount-info="monthly">\xA310 <span class="fe-donations__card-button-info"></span></button>\n              <button class="fe-donations__card-button fe-donations__card-button--twelve fe-equal-height-block" data-amount="12" data-amount-info="monthly">\xA312 <span class="fe-donations__card-button-info"></span></button>\n              <div class="fe-input-group fe-equal-height-block">\n                <span class="fe-input-group-addon">\xA3</span>\n                <input class="fe-donations__card-right-monthly-input" name="monthly-amount" placeholder="Other" title="donation-amount" type="number" min="2" value="">\n              </div>\n            </div>\n            <div class="fe-error-message js-fe-error-message-monthly"></div>\n          </div>\n    \n          <div class="fe-donations__card-right-one-off">\n            <div class="fe-donations__card-right-smallprint">Have you considered a monthly donation instead? Your kindness supports our long-term projects.</div>\n            <div class="fe-donations__card-right-buttons">\n              <button class="fe-donations__card-button fe-donations__card-button--fifteen fe-equal-height-block" data-amount="15" data-amount-info="once">\xA315</button>\n              <button class="fe-donations__card-button fe-donations__card-button--tweentyfive fe-equal-height-block" data-amount="25" data-amount-info="once">\xA325</button>\n              <button class="fe-donations__card-button fe-donations__card-button--forty fe-equal-height-block" data-amount="40" data-amount-info="once">\xA340</button>\n              <div class="fe-input-group fe-equal-height-block">\n                <span class="fe-input-group-addon">\xA3</span>\n                <input class="fe-donations__card-right-oneoff-input" name="one-off-amount" placeholder="Other" title="donation-amount" type="number" min="1" value="">\n              </div>\n            </div>\n             <div class="fe-error-message js-fe-error-message-one-off"></div>\n          </div>\n    \n          <button class="fe-donations__card-donate fe-donations__card-donate-main">Donate \xA3' +
      donationAmount +
      " " +
      donationAmountMessage +
      " now</button>\n        </div>\n        </div>\n      ";
    testSection.append(donationSection);
  };

  var donationButtonActions = function donationButtonActions() {
    // default seletion on page load
    setTimeout(function () {
      var monthlyMainButton = document.querySelector(
        ".fe-donations__card-monthly"
      );
      monthlyMainButton.click();
      var monthlyFirstAmountButton = document.querySelector(
        ".fe-donations__card-right--monthly .fe-donations__card-button--ten"
      );
      monthlyFirstAmountButton.click();
    }, 200);

    // set donation amount
    var donateButton = document.querySelector(".fe-donations__card-donate");
    var oldInputField = document.querySelector("#_donationAmount");
    var donationMessageEl = document.querySelector(
      ".fe-donations__card-left-message"
    );
    var imageContainer = document.querySelector(".fe-donations__card-left");
    var errorMessages = document.querySelectorAll(".fe-error-message");

    var donationButtons = document.querySelectorAll(
      ".fe-donations__card-button"
    );
    donationButtons.forEach(function (donationButton) {
      donationButton.addEventListener("click", function () {
        donationAmount = donationButton.getAttribute("data-amount");
        donationAmountMessage = donationButton.getAttribute("data-amount-info");
        donateButton.innerHTML =
          "Donate \xA3" + donationAmount + " " + donationAmountMessage + " now";
        oldInputField.value = donationAmount;
        errorMessages.forEach(function (errorMessage) {
          errorMessage.classList.remove("fe-active");
        });

        // set message and image

        // one off amounts
        if (donationAmount === "15") {
          imageContainer.className = "fe-donations__card-left hundred";
          donationMessage =
            "could help pay towards essential flea treatment for kittens in our care";
        } else if (donationAmount === "25") {
          imageContainer.className = "fe-donations__card-left fifty";
          donationMessage =
            "could help towards feeding three dogs in our care for a week";
        } else if (donationAmount === "40") {
          imageContainer.className = "fe-donations__card-left twenty";
          donationMessage =
            "could help our animal rescue teams continue saving animals";
        }

        // monthly amounts
        else if (donationAmount === "6") {
          imageContainer.className = "fe-donations__card-left ten";
          donationMessage =
            "a month could help towards essential veterinary care";
        } else if (donationAmount === "10") {
          imageContainer.className = "fe-donations__card-left five";
          donationMessage =
            "a month could help us rehabilitate and release more wildlife";
        } else if (donationAmount === "12") {
          imageContainer.className = "fe-donations__card-left two";
          donationMessage =
            "a month could help our rescue teams reach more animals in need";
        }

        donationMessageEl.innerHTML =
          "<span>\xA3" + donationAmount + "</span> " + donationMessage;

        donationButtons.forEach(function (donationButton) {
          donationButton.classList.remove("fe-active");
          donationMessageEl.classList.remove("fe-other");
        });

        donationButton.classList.add("fe-active");
      });
    });

    // setting custom donation amount and relevant message
    var monthlyCustomInput = document.querySelector(
      ".fe-donations__card-right-monthly-input"
    );
    var oneOffCustomInput = document.querySelector(
      ".fe-donations__card-right-oneoff-input"
    );

    // error message el

    var monthlyErrorMessage = document.querySelector(
      ".js-fe-error-message-monthly"
    );
    var oneOffErrorMessage = document.querySelector(
      ".js-fe-error-message-one-off"
    );

    // monthly
    monthlyCustomInput.addEventListener("input", function () {
      donationAmount = monthlyCustomInput.value;
      oneOffCustomInput.value = monthlyCustomInput.value;
      donateButton.innerHTML = "Donate \xA3" + donationAmount + " monthly now";
      oldInputField.value = donationAmount;
      // if (donationAmount <= 15) {
      //   donationMessage = 'sadsfgdf sggsadf asdhf 15'
      // } else if (donationAmount > 15 &&  donationAmount <= 25) {
      //   donationMessage = 'sg fgsdfg sdfhs dghdsfgh 25'
      // } else if (donationAmount > 25) {
      //   donationMessage = 'asfdg sdfhsdf hsdghsdg hsfgh 75'
      // }

      if (donationAmount === "") {
        donateButton.innerHTML = "Donate monthly now";
        monthlyErrorMessage.innerHTML = "";
        monthlyErrorMessage.classList.remove("fe-active");
      } else if (donationAmount < 2) {
        monthlyErrorMessage.innerHTML =
          "Due to administration costs we are unable to accept donations under £2";
        monthlyErrorMessage.classList.add("fe-active");
      } else if (donationAmount >= 2 && donationAmount < 1001) {
        monthlyErrorMessage.innerHTML = "";
        monthlyErrorMessage.classList.remove("fe-active");
      } else if (donationAmount >= 1001) {
        monthlyErrorMessage.innerHTML =
          "Due to administration costs we are unable to accept donations over £1000";
        monthlyErrorMessage.classList.add("fe-active");
      }

      donationButtons.forEach(function (donationButton) {
        donationButton.classList.remove("fe-active");
        donationMessageEl.classList.remove("fe-other");
      });
    });

    monthlyCustomInput.addEventListener("click", function () {
      donationButtons.forEach(function (donationButton) {
        donationButton.classList.remove("fe-active");
        // donationMessageEl.innerHTML = `<span>£${donationAmount}</span> ${donationMessage}`
        donationMessageEl.innerHTML =
          "Thank you. Your donation will help us help more animals";
        donationMessageEl.classList.add("fe-other");
      });

      // update image
      imageContainer.className = "fe-donations__card-left other";
    });

    // one off
    oneOffCustomInput.addEventListener("input", function () {
      donationAmount = oneOffCustomInput.value;
      monthlyCustomInput.value = oneOffCustomInput.value;
      donateButton.innerHTML = "Donate \xA3" + donationAmount + " now";
      oldInputField.value = donationAmount;
      // if (donationAmount <= 15) {
      //   donationMessage = 'sadsfgdf sggsadf asdhf 15'
      // } else if (donationAmount > 15 &&  donationAmount <= 25) {
      //   donationMessage = 'sg fgsdfg sdfhs dghdsfgh 25'
      // } else if (donationAmount > 25) {
      //   donationMessage = 'asfdg sdfhsdf hsdghsdg hsfgh 75'
      // }

      if (donationAmount === "") {
        donateButton.innerHTML = "Donate now";
        oneOffErrorMessage.innerHTML = "";
        oneOffErrorMessage.classList.remove("fe-active");
      } else if (donationAmount < 1) {
        oneOffErrorMessage.innerHTML =
          "Due to administration costs we are unable to accept donations under £1";
        oneOffErrorMessage.classList.add("fe-active");
      } else if (donationAmount >= 1) {
        oneOffErrorMessage.innerHTML = "";
        oneOffErrorMessage.classList.remove("fe-active");
      }

      donationButtons.forEach(function (donationButton) {
        donationButton.classList.remove("fe-active");
      });
    });

    oneOffCustomInput.addEventListener("click", function () {
      donationButtons.forEach(function (donationButton) {
        donationButton.classList.remove("fe-active");
        // donationMessageEl.innerHTML = `<span>£${donationAmount}</span> ${donationMessage}`
        donationMessageEl.innerHTML =
          "Thank you. Your donation will help us help more animals";
        donationMessageEl.classList.add("fe-other");
      });

      // update image
      imageContainer.className = "fe-donations__card-left other";
    });

    // payment frequency button actions
    var oldMonthlyButton = document.querySelector(".donateMonthlyTab a");
    var oldOneOffButton = document.querySelector(".donateOnceTab a");
    var MonthlySection = document.querySelector(
      ".fe-donations__card-right-monthly"
    );
    var oneOffSection = document.querySelector(
      ".fe-donations__card-right-one-off"
    );

    var oneOffButton = document.querySelector(".fe-donations__card-oneoff");
    oneOffButton.addEventListener("click", function () {
      oldOneOffButton.click();
      this.classList.add("fe-active");
      oneOffSection.classList.add("fe-active");
      monthlyButton.classList.remove("fe-active");
      MonthlySection.classList.remove("fe-active");
      var oneOffFirstAmountButton = document.querySelector(
        ".fe-donations__card-right-one-off .fe-donations__card-button--tweentyfive"
      );
      oneOffFirstAmountButton.click();
    });

    var monthlyButton = document.querySelector(".fe-donations__card-monthly");
    monthlyButton.addEventListener("click", function () {
      oldMonthlyButton.click();
      this.classList.add("fe-active");
      oneOffButton.classList.remove("fe-active");
      oneOffSection.classList.remove("fe-active");
      MonthlySection.classList.add("fe-active");
      var monthlyFirstAmountButton = document.querySelector(
        ".fe-donations__card-right-monthly .fe-donations__card-button--ten"
      );
      monthlyFirstAmountButton.click();
    });

    // donate button
    var mainDonateButton = document.querySelector(".fe-donations__card-donate");
    var oldDonateButton = document.querySelector("#donateButton");

    mainDonateButton.addEventListener("click", function () {
      oldDonateButton.click();
    });
  };

  var buildRestOfPage = function buildRestOfPage() {
    // quote section
    var testSection = document.querySelector(".fe-donations");
    var quoteSection = document.createElement("div");
    quoteSection.classList.add("fe-donations__quote");
    quoteSection.innerHTML =
      "\n      <span>Your donation will make a difference</span><br /><strong>Help us reduce animal cruelty</strong>\n      ";
    testSection.append(quoteSection);

    // stats section
    var statsSection = document.createElement("div");
    statsSection.classList.add("fe-donations__stats");
    statsSection.innerHTML =
      '\n      <div class="fe-donations__stats-inner">\n      <div><span>31k</span>Our centres took in more than 31,000 cats and dogs during 2019</div>\n      <div><span>1.2m</span>We answered over 1.2 million animal welfare calls</div>\n      <div><span>39k</span>We found new homes for 39,178 animals</div>\n      </div>\n      ';
    testSection.append(statsSection);

    // slideshow section
    var sliderSection = document.createElement("div");
    sliderSection.classList.add("fe-donations__slider");
    sliderSection.innerHTML =
      '\n      <div class="fe-donations__slider-slide">\n      <div class="fe-donations__slider-slide-inner">\n        <div class="fe-donations__slider-slide-content">\n          <h2>Help us help more dogs like Oscar</h2>\n          <p>When we rescued Oscar, he was painfully thin, undernourished and needed nursing back to a healthy weight. Fearful and reactive, he was classified as a \u2018red\u2019 dog with specialist needs. No less worthy of love and attention, they\u2019re simply more challenging animals who\u2019ve had a traumatic past. Months of work with our vet team and animal behaviourists helped this gentle boy learn to be loved.</p>\n          <p>Now Oscar has found his forever home with Paul and Carol. They adore the new member of their family \u2013 and Oscar is finally getting the long walks and playtime he deserves.</p>\n        </div>\n        <div class="fe-donations__slider-slide-image">\n          <img src="https://assets.codepen.io/2087490/case-study-oscar-1.jpg?format=auto" alt="">\n        </div>\n      </div>\n      </div>\n      <div class="fe-donations__slider-slide">\n      <div class="fe-donations__slider-slide-inner">\n        <div class="fe-donations__slider-slide-content">\n          <h2>Help us help more cats like Maurice</h2>\n          <p>This cheeky chap was rescued by one of our inspectors as a stray. He had a nasty wound and an abscess on the side of his face, so he needed veterinary treatment and a good dose of TLC in our cattery.</p>\n          <p>Although he could be an affectionate lap cat, Maurice was wary and gained a reputation for nipping fingers and hands. He\u2019d need a home with no other pets, a calm approach and owners willing to earn his trust. Thankfully, our animal care staff are great matchmakers and soon found Maurice his home for life \u2013 a  retreat where he no longer bites the hand that feeds (and strokes) him.</p>\n        </div>\n        <div class="fe-donations__slider-slide-image">\n          <img src="https://assets.codepen.io/2087490/case-study-3.jpg?format=auto" alt="">\n        </div>\n        </div>\n      </div>\n      </div>\n      <div class="fe-donations__slider-slide">\n      <div class="fe-donations__slider-slide-inner">\n        <div class="fe-donations__slider-slide-content">\n          <h2>Help us help more wildlife like Dolly</h2>\n          <p>Dolly came to our Wildlife Centre in East Sussex in October 2020. The British Divers Marine Life Rescue team had found the young seal stranded on a beach and weighing just 12kg. Unable to survive by herself in the wild, she was transferred to our care.</p>\n          <p>We discovered a serious injury to Dolly\u2019s right eye. She was treated for infection and monitored closely, as with seals\u2019 eyes there\u2019s a real risk of rupture. Thanks to the expert care of our wildlife vet team, Dolly pulled through. A few more weeks of feeding up and she was ready to go home. Here she is, being released back to the sea in January, weighing a healthy 38.6kg.</p>\n        </div>\n        <div class="fe-donations__slider-slide-image">\n          <img src="https://assets.codepen.io/2087490/case-study-2.jpg?format=auto" alt="">\n        </div>\n      </div>\n      </div>\n      ';
    testSection.append(sliderSection);
    setTimeout(function () {
      var slider = tns({
        container: ".fe-donations__slider",
        items: 1,
        slideBy: 1,
        loop: false,
        nav: false,
        mouseDrag: true,
        controlsPosition: "bottom",
        controlsText: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 0v24H0V0z" fill="none"/><path d="M18 10l-1.41-1.41L12 13.17 7.41 8.59 6 10l6 6z" fill="#000"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 0v24H0V0z" fill="none"/><path d="M18 10l-1.41-1.41L12 13.17 7.41 8.59 6 10l6 6z" fill="#000"/></svg>',
        ],
      });

      setTimeout(function () {
        var slideshowContent = document.querySelector(
          ".fe-donations__slider-slide-content"
        );
        var slideshowControls = document.querySelector(".tns-controls");

        if (window.innerWidth < 769) {
          var imageHeight = slideshowContent.offsetHeight + 107;
          slideshowControls.style.bottom = imageHeight + "px";
        }

        window.addEventListener("resize", function () {
          if (window.innerWidth < 769) {
            var _imageHeight = slideshowContent.offsetHeight + 107;
            slideshowControls.style.bottom = _imageHeight + "px";
          } else {
            slideshowControls.style.bottom = 83 + "px";
          }
        });
      }, 1000);
    }, 500);

    // accordion section
    var accordionSection = document.createElement("div");
    accordionSection.classList.add("fe-donations__accordion-container");
    accordionSection.innerHTML =
      '\n      <div class="fe-donations__accordion" role="tablist" aria-live="polite">\n        <article>\n          <button class="fe-donations__accordion-button"><h3>How we use the money you give us</h3></button>\n          <div class="fe-donations__accordion-content">\n              <p>We couldn\'t fund our life-saving work for animals without you.</p>\n    \n              <p>More than 80 percent of your donation (83p from every \xA31) will go to rescuing and caring for vulnerable animals, then rehoming or releasing them. This helps abandoned or neglected pets get the treatment and love they deserve. It helps injured or orphaned wildlife in need.</p>\n    \n              <p>The next 16p from each \xA31 goes towards fundraising. Each year, we rescue more than 100,000 animals. Without the funds gained through our marketing, we would not be able to finance our crucial work.</p>\n    \n              <p>The remaining 1p from each \xA31 goes towards governance. This will support our board members as they create campaigns and push for governance change. At home or abroad, our prevention campaigns are essential for improving the safety and happiness of animals.</p>\n              <p><em>(based on RSPCA 2019 accounts)</em></p>\n              <p>Your generous donation helps us fight animal cruelty \u2013 thank you.</p>\n          </div>\n        </article>\n        <article>\n          <button class="fe-donations__accordion-button"><h3>Our supporter promise</h3></button>\n          <div class="fe-donations__accordion-content">\n              <p>We do everything we can to alleviate animal suffering, but we know we can\'t do it alone. It\'s the generosity of supporters like you who make it possible.</p>\n    \n              <p>Your trust is important to us, so we are committed to being transparent and accountable to you.</p>\n    \n              <p>You need to know that we\'re using your support wisely to rescue, protect and care for animals in need. You need assurance your personal data is always secure. We\'ve established a set of important promises, so you can be confident in this.</p>\n    \n              <p>Read more about <a target="_blank" href="https://www.rspca.org.uk/getinvolved/donate/advice/promise">our supporter promise</a>\n          </div>\n        </article>\n        <article class="fe-border-bottom">\n          <button class="fe-donations__accordion-button"><h3>Contact Supporter Services</h3></button>\n          <div class="fe-donations__accordion-content">\n              <p>To make changes to the information we hold about you, please contact our Supporter Services team:</p>\n    \n              <p>Phone: 0300 123 0346 (Monday to Friday, 9am to 5pm)\n              <br />\n              Email: <a href="mailto:supportercare@rspca.org.uk">supportercare@rspca.org.uk</a>\n              <br />\n              Post: RSPCA Supporter Services, Wilberforce Way, Horsham, West Sussex, RH13 9RS.</p>\n    \n              <p>For further information please visit <a target="_blank" href="https://www.rspca.org.uk/utilities/privacy/details">supporter services</a></p>\n          </div>\n        </article>\n      </div>\n      ';
    testSection.append(accordionSection);

    // other ways section
    var otherWaysSection = document.createElement("div");
    otherWaysSection.classList.add("fe-donations__other-ways");
    otherWaysSection.innerHTML =
      '\n        <h2>Other ways you can keep helping</h2>\n        <div class="fe-donations__other-ways-image">\n          <img src="https://assets.codepen.io/2087490/swan.jpg?format=auto" alt="">\n        </div>\n        <p>Our teams do all they can to stop animals suffering. But they can\u2019t do it alone. It\u2019s the kindness of supporters like you that makes it possible.</p>\n        <a target="_blank" href="/getinvolved/donate/online/otherways" class="fe-donations__other-ways-button">Other ways to keep helping us</a>\n      ';
    testSection.append(otherWaysSection);
  };

  // make accordion work
  var buildAccordion = function buildAccordion() {
    var accordionEls = document.querySelectorAll(".fe-donations__accordion");

    accordionEls.forEach(function (accordionEl) {
      var acc = accordionEl.querySelectorAll("article button");

      for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (e) {
          closeAll(e.target);
          this.classList.toggle("fe-donations__accordion-button--open");

          var panel = this.nextElementSibling;

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

      function closeAll(tar) {
        //var accs = accordionEl.querySelectorAll('article button');
        for (var i = 0; i < acc.length; i++) {
          if (acc[i] == tar) {
            continue;
          }
          acc[i].classList.remove("fe-donations__accordion-button--open");
          var panel = acc[i].nextElementSibling;

          if (panel) {
            panel.style.maxHeight = null;
          }
        }
      }
    });
  };

  // additional footer sections added
  var buildFooter = function buildFooter() {
    var footerSection = document.querySelector("#footer");

    var newFooterLinks = document.createElement("div");
    newFooterLinks.classList.add("fe-footer-follow-links");
    newFooterLinks.id = "follow-links";
    newFooterLinks.innerHTML =
      '\n        <div class="follow-us divider-indent">\n        <div class="follow-us-header">Follow us</div>\n        <div class="follow-us-icons">\n          <a href="//www.facebook.com/RSPCA" target="_blank"><img src="/webContent/webComponents/images/svgIcons/facebook.svg" alt="Follow us on Facebook"></a>\n          <a href="//twitter.com/RSPCA_official" target="_blank"><img src="/webContent/webComponents/images/svgIcons/twitter.svg" alt="Follow us on Twitter"></a>\n          <a href="//www.youtube.com/user/rspcauk?sub_confirmation=1" target="_blank"><img src="/webContent/webComponents/images/svgIcons/youtube.svg" alt="Follow us on YouTube"></a>\n          <a href="//instagram.com/official_rspca" target="_blank"><img src="/webContent/webComponents/images/svgIcons/instagram.svg" alt="Follow us on Instagram"></a>\n        </div>\n      </div>\n      ';
    footerSection.prepend(newFooterLinks);

    var newFooter = document.createElement("div");
    newFooter.classList.add("fe-footer-links");
    newFooter.id = "footer-links";
    newFooter.innerHTML =
      '\n      <section class="divider-indent">\n                    <div class="footerColumnArea">\n                        <div class="footerColumn">\n                            <h3 class="footer">How we help</h3>\n                            <div class="mobileFooter collapsed" data-toggle="collapse" data-target="#footerCollapse1">\n                                How we help <i class="fa fa-chevron-down"></i>\n                            </div>\n                            <div id="footerCollapse1" class="mobileFooterCollapse collapse">\n                                <p class="themeTxtSm">Last year we looked into more than</p>\n                                <p class="themeTotalNum">130,700</p>\n                                <p class="themeTxtSm">complaints about animals suffering</p>\n                            </div>\n                        </div>\n                        <div class="footerColumn">\n                            <h3 class="footer">Get in touch</h3>\n                            <div class="mobileFooter collapsed" data-toggle="collapse" data-target="#footerCollapse2">\n                                Get in touch <i class="fa fa-chevron-down"></i>\n                            </div>\n                            <div id="footerCollapse2" class="mobileFooterCollapse collapse">\n                                <div><a href="/whatwedo/yourlocal" target="_blank">Find your local RSPCA</a></div>\n                                <div><a href="/utilities/contactus" target="_blank">Contact us</a></div>\n                                <div><a href="/utilities/contactus/reportcruelty" target="_blank">Report cruelty</a></div>\n                            </div>\n                        </div>\n                        <div class="footerColumn">\n                            <h3 class="footer">Our charity</h3>\n                            <div class="mobileFooter collapsed" data-toggle="collapse" data-target="#footerCollapse3">\n                                Our charity <i class="fa fa-chevron-down"></i>\n                            </div>\n                            <div id="footerCollapse3" class="mobileFooterCollapse collapse">\n                                <div><a href="https://media.rspca.org.uk/media/home" target="_blank">Media centre</a></div>\n                                <div><a href="https://science.rspca.org.uk/sciencegroup/home" target="_blank">Science</a></div>\n                                <div><a href="https://www.rspcaassured.org.uk" target="_blank">RSPCA Assured</a></div>\n                                <div><a href="https://education.rspca.org.uk/education/home" target="_blank">Education</a></div>\n                            </div>\n                        </div>\n                        <div class="footerColumn">\n    \n                            <h3 class="footer">Stay up to date</h3>\n                            <p class="themeTxtSm">\n                                Sign up for pet care advice, hints and tips on helping wildlife, our latest news, rehoming success stories and more directly to your inbox. Unsubscribe at any time.\n                            </p>\n    \n                            <form id="footerSignUp" action="/utilities/aboutus/stayinformed" method="get" target="_blank">\n    \n                                <input type="hidden" name="source" value="RSPCA_Website">\n                                <input type="submit" class="themeActionButton" value="Sign up">\n                            </form>\n                        </div>\n                    </div>\n                </section>\n      ';
    footerSection.prepend(newFooter);
  };

  loadDynamicScript();
  loadSmoothScript();
  buildHeader();
  buildBanner();
  buildTestSection();
  buildDonationSection();
  donationButtonActions();
  buildRestOfPage();
  buildAccordion();
  buildFooter();

  // get height of site header
  var siteHeader = document.querySelector("#header");
  var siteHeaderHeight = siteHeader.offsetHeight;

  var donateSection = document.querySelector(".fe-donations__card");
  var donateSectionHeight = donateSection.offsetHeight;

  var totalHeaderHeight = siteHeaderHeight + donateSectionHeight;

  // When a user scrolls, hide or show banner
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > totalHeaderHeight ||
      document.documentElement.scrollTop > totalHeaderHeight
    ) {
      document.querySelector(".fe-donate-banner").style.top = "0";
    } else {
      document.querySelector(".fe-donate-banner").style.top = "-152px";
    }
  }

  // Hide old Social loinks
  var oldSocialLinks = document.querySelector(
    "#footer .divider-indent .follow-us"
  );

  oldSocialLinks.remove();
}.call(undefined));
