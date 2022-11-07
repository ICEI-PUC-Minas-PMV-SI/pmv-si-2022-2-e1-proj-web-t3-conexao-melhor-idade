$(function () {
  // start - Search input tabs
  const links = Array.from(document.querySelectorAll(".cmi-hero-search li"));

  Array.from(links).forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    });
  });
  // end - Search input tabs

  // start - PopOver Buttons
  const popOverTriggers = $("[data-bs-content-id]");

  popOverTriggers.each(function (index, elem) {
    const popover = new mdb.Popover(elem, {
      html: true,
      content: $(`#${$(elem).data("bs-content-id")}`).html(),
    });
  });
  // end - PopOver Buttons

  // start - SignUp Buttons
  function toggleSignUpType(elem1, elem2) {
    elem1.on("click", function (e) {
      elem1.removeClass("btn-light");
      elem1.addClass("btn-secondary");
      elem2.removeClass("btn-secondary");
      elem2.addClass("btn-light");
    });
  }

  const opt1 = $(".cmi-sign-up-client");
  const opt2 = $(".cmi-sign-up-pro");

  toggleSignUpType(opt1, opt2);
  toggleSignUpType(opt2, opt1);
  // end - SignUp Buttons
});

// Timeline

(function ($) {
  $(function () {
    $(window).on("scroll", function () {
      fnOnScroll();
    });

    $(window).on("resize", function () {
      fnOnResize();
    });

    var agTimeline = $(".js-timeline"),
      agTimelineLine = $(".js-timeline_line"),
      agTimelineLineProgress = $(".js-timeline_line-progress"),
      agTimelinePoint = $(".js-timeline-card_point-box"),
      agTimelineItem = $(".js-timeline_item"),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top:
          agTimelineItem.first().find(agTimelinePoint).offset().top -
          agTimelineItem.first().offset().top,
        bottom:
          agTimeline.offset().top +
          agTimeline.outerHeight() -
          agTimelineItem.last().find(agTimelinePoint).offset().top,
      });

      f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({ height: n + "px" });

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
          ? $(this).addClass("js-ag-active")
          : $(this).removeClass("js-ag-active");
      });
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }
  });
})(jQuery);
