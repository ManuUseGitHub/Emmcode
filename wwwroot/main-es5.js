function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/app.component.pug":
  /*!*************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/app.component.pug ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppAppComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"preloader\"><div class=\"preloader_image\"></div></div><!-- search modal--><div class=\"modal\" id=\"search_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"search_modal\"><button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"widget widget_search\"><form class=\"searchform search-form\" method=\"get\" action=\"/\"><div class=\"form-group\"><input class=\"form-control\" id=\"modal-search-input\" type=\"text\" value=\"\" name=\"search\" placeholder=\"Search keyword\"></div><button class=\"btn\" type=\"submit\">Search</button></form></div></div><!-- Unyson messages modal--><div class=\"modal fade\" id=\"messages_modal\" tabindex=\"-1\" role=\"dialog\"><div class=\"fw-messages-wrap ls p-normal\"><!-- Uncomment this UL with LI to show messages in modal popup to your user:--><!--<ul class=\"list-unstyled\">\n<li>Message To User</li>\n</ul>--></div></div><!-- eof .modal--><!-- wrappers for visual page editor and boxed version of template--><div id=\"canvas\"><div id=\"box_wrapper\"><!-- template sections--><!-- topline section visible only on small screens|--><div class=\"header_absolute s-pb-30\"><header class=\"page_header ds\"><app-navigation></app-navigation></header></div><span class=\"toggle_menu_side header-slide\"><span></span></span><section class=\"page_slider main_slider\"><app-sliders></app-sliders></section><section class=\"about-home\" id=\"about\"><app-me></app-me><app-transcorner [wrapperClass]=\"'.crn-on-down'\" [crnClass]=\"'crn-left-delayed25.crn-light'\"></app-transcorner></section><section class=\"about-home\" id=\"site-presentaiton\"><div class=\"container\"><app-projects></app-projects></div></section><section class=\"service-item2 ls\" id=\"services\"><app-transcorner [crnClass]=\"'crn-left-delayed25.crn-light'\" [hrefid]=\"'skills'\"></app-transcorner><div class=\"container animate\" data-animation=\"fadeInUp\"><app-hardskills class=\"row\" id=\"skills\"></app-hardskills></div><app-transcorner [wrapperClass]=\"'.crn-on-down'\" [crnClass]=\"'crn-left-delayed25.crn-light'\" [hrefid]=\"'timeadvice'\"></app-transcorner></section><section class=\"s-pt-130 s-pb-15 s-pb-md-50 s-pt-xl-100 s-pb-lg-30 overflow-visible s-parallax testimonials-sliders main-testimonials ds\" id=\"testimonials\"><div class=\"container\"><div class=\"row align-items-center c-mb-20 c-mb-lg-60\"><div class=\"col-xs-12\"><h3 class=\"animate\" data-animation=\"fadeInUp\">My Codepen.io</h3><div class=\"divider-30\"></div><div class=\"author-bio-darken animate\" data-animation=\"fadeInUp\"><p>There was a time after my first position where I needed to display my front - end skills but also make some wishes come true. Here are some softies I made ! There are more on my profile. Do not hesitate to check them out.</p></div></div></div></div><app-codepenio></app-codepenio><div class=\"container\"><div class=\"row\"><div class=\"col-xs-6\"><div class=\"author-bio-darken animate\" data-animation=\"fadeInUp\"><p>Here is a list of what I am able to do (better) now thanks to codepen.io</p><ul class=\"list1\"><li>SVG manipulation</li><li>SVG line art</li><li>Pug templating</li><li>Javascript class design</li><li>Play with the 3D perspective</li><li>CSS3 preprocesors use</li><li>Ecmascript6 (ES6)</li></ul></div></div></div></div></section><section id=\"coderdojo\"><app-transcorner [crnClass]=\"'.crn-left-delayed75.crn-light'\" [hrefid]=\"'coach'\"></app-transcorner><div class=\"container\"><app-coach></app-coach></div></section><!--section#gallery.s-pt-75.s-pt-xl-50.gallery-carousel.main-gallery.container-px-0.container-fluid\n  .img-wrap.text-center\n    img(src='assets/img/vertical_line.png' alt='')\n    .divider-40.d-block.d-sm-none\n  //.row\n    .col-lg-12\n      .row.justify-content-center\n        .col-md-10.col-xl-5\n          .filters.gallery-filters.small-text.text-lg-right\n            a.active.selected(href='#' data-filter='*') All\n            a(href='#' data-filter='.web-design') Web Design\n            a(href='#' data-filter='.logo-design') Logo Design\n            a(href='#' data-filter='.advertisement') Advertisement\n            a(href='#' data-filter='.branding') Branding\n            a(href='#' data-filter='.design') Design\n            a(href='#' data-filter='.photo') Photo\n      .owl-carousel.gallery-owl-nav(data-autoplay='false' data-responsive-lg='5' data-responsive-md='3' data-responsive-sm='3' data-responsive-xs='2' data-nav='true' data-dots='false' data-filters='.gallery-filters' data-margin='0' data-loop='true')\n        .vertical-item.item-gallery.content-absolute.text-center.ds.web-design\n          .item-media\n            img(src='assets/images/gallery/gallery-1.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') web-design\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n        .vertical-item.item-gallery.content-absolute.text-center.ds.logo-design\n          .item-media\n            img(src='assets/images/gallery/gallery-2.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') logo-design\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n        .vertical-item.item-gallery.content-absolute.text-center.ds.advertisement\n          .item-media\n            img(src='assets/images/gallery/gallery-3.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') advertisement\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n        .vertical-item.item-gallery.content-absolute.text-center.ds.branding\n          .item-media\n            img(src='assets/images/gallery/gallery-4.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') branding\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n        .vertical-item.item-gallery.content-absolute.text-center.ds.design\n          .item-media\n            img(src='assets/images/gallery/gallery-5.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') design\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n        .vertical-item.item-gallery.content-absolute.text-center.ds.photo\n          .item-media\n            img(src='assets/images/gallery/gallery-6.jpg' alt='')\n            .media-links\n          .item-content\n            h6\n              a.small-text(href='gallery-regular.html') photo\n            h6\n              a(href='gallery-regular.html') Clothes Badge Design\n      // .owl-carousel--><!--section#team.page_slider.team_slider.container-fluid\n  .row\n    .shortcode-team-slider.main-team\n      h3.slider-title Team\n      .flexslider.team-slider(data-nav='false' data-dots='true')\n        ul.slides\n          li.ls\n            img(src='assets/images/team/team_slide_01.jpg' alt='')\n          li.ls\n            img(src='assets/images/team/team_slide_02.jpg' alt='')\n          li.ls\n            img(src='assets/images/team/team_slide_03.jpg' alt='')\n          li.ls\n            img(src='assets/images/team/team_slide_04.jpg' alt='')\n      // eof flexslider\n      .flexslider-controls\n        ul.flex-control-nav-1\n          li.menu_item.flex-active\n            | Gregory F. Parrino\n            span.position CEO\n            span.team-social-icons\n              span.social-icons\n                a.fa.fa-facebook.color-icon.border-icon.rounded-icon(href='#' title='facebook')\n                a.fa.fa-twitter.color-icon.border-icon.rounded-icon(href='#' title='twitter')\n                a.fa.fa-google.color-icon.border-icon.rounded-icon(href='#' title='google')\n          li.menu_item\n            | Letha L. Young\n            span.position Designer\n            span.team-social-icons\n              span.social-icons\n                a.fa.fa-facebook.color-icon.border-icon.rounded-icon(href='#' title='facebook')\n                a.fa.fa-twitter.color-icon.border-icon.rounded-icon(href='#' title='twitter')\n                a.fa.fa-google.color-icon.border-icon.rounded-icon(href='#' title='google')\n          li.menu_item\n            | Harold D. Cote\n            span.position Developer\n            span.team-social-icons\n              span.social-icons\n                a.fa.fa-facebook.color-icon.border-icon.rounded-icon(href='#' title='facebook')\n                a.fa.fa-twitter.color-icon.border-icon.rounded-icon(href='#' title='twitter')\n                a.fa.fa-google.color-icon.border-icon.rounded-icon(href='#' title='google')\n          li.menu_item\n            | Oren R. Odom\n            span.position Marketer\n            span.team-social-icons\n              span.social-icons\n                a.fa.fa-facebook.color-icon.border-icon.rounded-icon(href='#' title='facebook')\n                a.fa.fa-twitter.color-icon.border-icon.rounded-icon(href='#' title='twitter')\n                a.fa.fa-google.color-icon.border-icon.rounded-icon(href='#' title='google')--><!--section.ls.ms.book-item.s-pb-30.s-pb-lg-25.corner.corner-light\n.container\n  .row\n    .col-md-8.offset-md-2\n      .text-block.text-center\n        .btn-book-section.overflow-visible\n          a.btn.btn-maincolor([hidden]=\"true\" href='#') Get Started\n        .img-wrap.text-center\n          img(src='assets/img/vertical_line.png' alt='')\n          .divider-35\n        h5\n          | B2B Marketing &amp; Web Design\n          br\n          |  Resources\n        p\n          | B2B client acquisition is not the same as B2C&ndash; a B2B website, brand messaging and\n          | content marketing play a much different role. We understand the B2B marketing and\n          | sales funnel and the tactics that generate and nurture ideal client leads.\n        .divider-30\n        .img-wrap.text-center\n          img(src='assets/img/vertical_line.png' alt='')\n    .divider-40\n    .row.c-gutter-30.c-mb-30.c-mb-lg-0.text-center.book\n      .col-12.col-lg-4\n        .stage.book-1.ls\n          img(src='assets/images/book-1.png' alt='#')\n          .info\n            header\n              h6\n                a(href='#')\n                  | Annual Report\n                  br\n                  | 2017-2018\n            p\n              | At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n              | gubergren.\n            p.small-text.link-a\n              a(href='#') Buy It Now!\n      .col-12.col-lg-4\n        .stage.book-2.ds\n          img(src='assets/images/book-2.png' alt='#')\n          .info\n            header\n              h6\n                a(href='#') Tools of Trading: Modern Marketing\n            p\n              | Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam numy\n              | eirmod.\n            p.small-text.link-a\n              a(href='#') Buy It Now!\n      .col-12.col-lg-4\n        .stage.book-3.ls\n          img(src='assets/images/book-3.png' alt='#')\n          .info\n            header\n              h6\n                a(href='#') Business Magazine: Design\n            p\n              | Et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.\n            p.small-text.link-a\n              a(href='#') Buy It Now!\n    .divider-30\n    .text-center.img-wrap.col-md-12\n      div\n        img(src='assets/img/vertical_line.png' alt='')\n      .divider-40\n      a.btn.btn-outline-maincolor([hidden]=\"true\" href='#') Get Started\n      .divider-40\n      div\n        img(src='assets/img/vertical_line.png' alt='')\n  .divider-10--><!--section.ls.ms.blog-post-carousel.container-fluid\n  .row\n    .col-12\n      .owl-carousel(data-responsive-lg='1' data-responsive-md='1' data-responsive-sm='1' data-responsive-xs='1' data-nav='false' data-dots='false' data-loop='true' data-margin='4')\n        //article.box.text-center\n          .item-content\n            //p.small-text\n              a(href='#') December 29, 2017\n            h6\n              a(href='#') Traffic control test by New York Cabs program\n            //.post-author\n              img(src='assets/images/small_author.png' alt='')\n              p\n                a(href='#') by Admin\n          // .item-content\n        // #post-##\n        //article.box.text-center\n          .item-content\n            //p.small-text\n              a(href='#') December 26, 2017\n            h6\n              a(href='#') Live support, key of an endless satisfaction\n            //.post-author\n              img(src='assets/images/small_author.png' alt='')\n              p\n                a(href='#') by Admin\n          // .item-content\n        // #post-##\n        //article.box.text-center\n          .item-content\n            //p.small-text\n              a(href='#') December 21, 2017\n            h6\n              a(href='#') Strong servers, customer friendly services\n            //.post-author\n              img(src='assets/images/small_author.png' alt='')\n              p\n                a(href='#') by Admin\n          // .item-content\n        // #post-##\n        article.box.text-center\n          .item-content\n            //p.small-text\n              a(href='#') December 15, 2017\n            h6\n              a(href='#') Weekly meeting in companies Think Room\n            //.post-author\n              img(src='assets/images/small_author.png' alt='')\n              p\n                a(href='#') by Admin\n          // .item-content\n        // #post-##--><section id=\"codepens\"><app-transcorner [wrapperClass]=\"'.crn-on-down'\" [crnClass]=\"'.crn-concave.crn-left-delayed75.crn-light'\"></app-transcorner></section><section class=\"ds process-part skew_right s-parallax overflow-visible\" id=\"steps\"><div class=\"container\"><div class=\"row align-items-center c-mb-20 c-mb-lg-60\" id=\"timeadvice\"><div class=\"col-xs-12\"><h3 class=\"animate\" data-animation=\"fadeInUp\">Experience management</h3><div class=\"divider-30\"></div><div class=\"author-bio-darken animate\" data-animation=\"fadeInUp\"><h5>While being OTB</h5><p>When you are moving <strong>from a position to another</strong>, you should consider how you will spend your time. You can relax and profit about being alive or you can <strong>use your time to be more awesome</strong>.\n<br><br>In my case I use the time available to get more experience. For a good or a bad reason, <strong>having more time always opens new fields</strong> !\nHere are steps I am used to follow to manage my time between two opportunities. Here are some steps below I follow to improve myself.</p></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-left-part text-right\"><h2 class=\"step-title\"><span class=\"color-main\">01</span>Maintain</h2></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-center-part text-center\"><img src=\"assets/images/step_1.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-right-part\"><p class=\"step-text\">Contact people who may have the need of an IT solution. Take a website for instance. It is always good to maintain what you have learned during your last position.</p></div></div></div><div class=\"row align-items-center right c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4 order-lg-3\"><div class=\"step-left-part\"><h2 class=\"step-title color1\"><span class=\"color-main2\">02</span>Tweak</h2></div></div><div class=\"col-12 col-lg-4 order-lg-2\"><div class=\"step-center-part text-center\"><img src=\"assets/images/code.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4 order-lg-1 text-right\"><div class=\"step-right-part\"><p class=\"step-text\">Create small projects public or not. In my case I make some on codepen.io to make javascript libraries.\nIt can be for fun or for getting usable good practices such as using classes in Javascript and the ES6 Syntax.\n<br><br><strong>Having a strong basis is a way to improve</strong>!</p></div></div></div><div class=\"row align-items-center c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4\"><div class=\"step-left-part text-right part3\"><h2 class=\"step-title\"><span class=\"color-main3\">03</span>Discover</h2></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-center-part text-center\"><img src=\"assets/images/rav.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-right-part\"><p class=\"step-text\">Get out of your confort zone and get your hands on new technologies. Mastering Angular 2, Vue.JS and React is a great point. <strong>Follow trends</strong>! <br><br>\nAdditionnaly, you can try something like creating unit tests. It does not have to be a complex test suite but a satisfying enough <strong>to know how to set UTs</strong>.</p></div></div></div><div class=\"row align-items-center right c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4 order-lg-3\"><div class=\"step-left-part part4\"><h2 class=\"step-title color1\"><span class=\"color-main4\">04</span>Make IT real</h2></div></div><div class=\"col-12 col-lg-4 order-lg-2\"><div class=\"step-center-part text-center last\"><img src=\"assets/images/internet.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4 order-lg-1 text-right\"><div class=\"step-right-part\"><p class=\"step-text\">This is it ! Gather all your new knowledge to build something concrete and promote what new skills you got.</p></div></div></div><div class=\"divider-10 d-block d-sm-none\"></div></div></section><section class=\"s-pt-130 s-pt-md-50 ls text-section\" style=\"background-color: #00d4aa; z-index:5\"><app-contact></app-contact></section><section class=\"s-pt-50 s-pb-100 s-pt-lg-30 s-pb-lg-75 ls ms teaser-contact-icon main-icon s-parallax\" id=\"contact\"><div class=\"text-center img-wrap col-md-12\"><img src=\"assets/img/dark_line_short.png\" alt=\"\"></div><div class=\"container\"><div class=\"divider-10 d-none d-xl-block\"></div><div class=\"row c-mb-50 c-mb-lg-0\"><div class=\"col-lg-4 text-center\"><!--.border-icon.teaser-icon\n  img(src='assets/images/icon1.png' alt='')--><!--h6| Call Us--><!--pstrong New Accounts:\n|  1-800-123-4567\nbr\nstrong Support:\n|  1-800-123-4569--></div><div class=\"col-lg-4 text-center\"><div class=\"border-icon\"><div class=\"teaser-icon\"><img src=\"assets/images/icon3.png\" alt=\"\"></div></div><h6>Write Me</h6><p>jean.luc.e.verhan@gmail.com<br>info@emmcode.be</p></div><!--.col-lg-4.text-center.border-icon\n  .teaser-icon\n    img(src='assets/images/icon2.png' alt='')\nh6\n  | Visit Us\np\n  | 2231 Sycamore Lake Road\n  br\n  |  Green Bay, WI 54304--></div><div class=\"divider-30 d-none d-lg-block\"></div><div class=\"text-center img-wrap col-md-12 layout-2\"><img src=\"assets/img/dark_line_short.png\" alt=\"\"></div></div><div class=\"divider-10\"></div></section><footer class=\"page_footer corner-footer ds s-pt-30 s-pb-0 s-pb-lg-10 s-pb-xl-50 c-gutter-60 s-parallax\"><div class=\"container\"><div class=\"container\"><div class=\"row\"><div class=\"divider-20 d-none d-xl-block\"></div><div class=\"col-md-12 mt-4 text-center animate\" data-animation=\"fadeInUp\"><!--img.margin-negative(src='assets/images/footer_logo.png' alt='')--><img class=\"margin-negative\" src=\"assets/images/logofooter.svg\" alt=\"\" style=\"max-width: 50%;\"><div class=\"widget widget_social_buttons\"><a class=\"fa fa-facebook color-icon\" href=\"http://www.facebook.com/#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon\" href=\"http://www.twitter.com/#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon\" href=\"http://www.plus.google.com/#\" title=\"google\"></a><a class=\"fa fa-youtube-play color-icon\" href=\"http://www.youtube.com/#\" title=\"youtube-play\"></a><a class=\"fa fa-linkedin color-icon\" href=\"http://www.linkedin.com/#\" title=\"linkedin\"></a></div></div></div></div></div></footer><section class=\"page_copyright light-copy cs s-py-20 s-py-lg-5 s-parallax copyright\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"divider-20 d-none d-lg-block\"></div><div class=\"col-md-12 text-center\"><p>&copy; Copyright<span class=\"copyright_year\">2018</span> All Rights Reserved</p></div><div class=\"divider-20 d-none d-lg-block\"></div></div></div></section></div><!-- eof #box_wrapper--></div><!-- eof #canvas--><router-outlet></router-outlet>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/common/transcorner/transcorner.component.pug":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/common/transcorner/transcorner.component.pug ***!
    \***************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsCommonTranscornerTranscornerComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"corner-wrapper\" [ngClass]=\"getWrapperClass()\"><div class=\"corner\" [ngClass]=\"getCrnClass()\" [ngStyle]=\"customStyl\"></div><a [href]=\"'#'+hrefid\"><i class=\"fa fa-chevron-down\"></i></a></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/contact/contact.component.pug":
  /*!************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/contact/contact.component.pug ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsContactContactComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<app-transcorner [crnClass]=\"'.crn-top.crn-green'\"></app-transcorner><app-transcorner [wrapperClass]=\"'.crn-concave.crn-on-down'\" [crnClass]=\"'.crn-concave.crn-top.crn-green'\"></app-transcorner><div class=\"container\"><div class=\"row\"><div class=\"divider-40 d-none d-xl-block\"></div><div class=\"col-lg-8 offset-lg-2 animate animated scaleAppear\" data-animation=\"scaleAppear\"><h4 class=\"text-center\">Contact Me !</h4><div class=\"divider-40 d-none d-xl-block\"></div><form class=\"contact-form c-mb-20 text-center\" [formGroup]=\"mailForm\" method=\"post\" action=\"/\" (ngSubmit)=\"sendMessage({event:$event,inputs:mailForm.value})\"><div class=\"row\"><div class=\"col-sm-12\"><div class=\"form-group has-placeholder\"><label for=\"name\">Full Name<span class=\"required\">*</span></label><input class=\"form-control\" id=\"name\" type=\"text\" aria-required=\"true\" size=\"30\" formControlName=\"name\" placeholder=\"Full Name\" style=\"background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;\"></div></div><div class=\"col-sm-12\"><div class=\"form-group has-placeholder\"><label for=\"phone\">Phone<span class=\"required\">*</span></label><input class=\"form-control\" id=\"phone\" type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" formControlName=\"phone\" placeholder=\"Phone Number\"></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"form-group has-placeholder\"><label for=\"email\">Email address<span class=\"required\">*</span></label><input class=\"form-control\" id=\"email\" type=\"email\" aria-required=\"true\" size=\"30\" value=\"\" formControlName=\"email\" placeholder=\"Email Address\"></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"form-group has-placeholder\"><label for=\"subject\">Subject<span class=\"required\">*</span></label><input class=\"form-control\" id=\"email\" type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" formControlName=\"subject\" placeholder=\"Subject\"></div></div><div class=\"col-sm-12\"><div class=\"form-group has-placeholder\"><label for=\"message\">Message</label><textarea class=\"form-control\" id=\"message\" aria-required=\"true\" rows=\"6\" cols=\"45\" formControlName=\"message\" placeholder=\"Your Message\"></textarea></div></div></div><div class=\"row c-mt-md-15 c-md-0\"><div class=\"col-sm-12\"><div class=\"form-group text-center contact-form1\"><button class=\"btn btn-maincolor\" id=\"contact_form_submit\" type=\"submit\" name=\"contact_submit\" style=\"border-color: #f4f4f5;\">Send Message</button></div></div></div></form></div><!-- .col-*--><div class=\"divider-75 d-none d-xl-block\"></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/filters/multifilter/multifilter.component.pug":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/filters/multifilter/multifilter.component.pug ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsFiltersMultifilterMultifilterComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"col-12\"><h6>Filters</h6><div class=\"divider-30\"></div></div><div class=\"col-12\"><div class=\"container multi-filter\"><div class=\"row\"><app-skill-filter class=\"col-sm-6 col-md-4\" [name]=\"name+i\" *ngFor=\"let filters of filterSet; let i = index\" [filters]=\"filters\" [gid]=\"i\" [filterConfiguration]=\"filterConfiguration\" (filterSkills)=\"emitChange($event)\" (removeFilter)=\"emitRemoveFilter($event)\"></app-skill-filter><div class=\"add-filter col-sm-6 col-md-4\" *ngIf=\"getRemaining()\"><button class=\"add-filter-button\" (click)=\"emitAddFilters($event)\">Add</button></div></div></div></div><div class=\"col-12\"><div class=\"divider-60\"></div><h6>Skills</h6></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/filters/skill-filter/skill-filter.component.pug":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/filters/skill-filter/skill-filter.component.pug ***!
    \******************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsFiltersSkillFilterSkillFilterComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<button class=\"btn btn-info\" [hidden]=\"!isLastFilter()\" (click)=\"emitRemoveFilter($event)\"></button><select class=\"postform\" [class.consistent-filter]=\"consistentClass()\" [name]=\"name\" (change)=\"emitChange($event)\"><option class=\"level-0\" [class.used-filter]=\"isSelected(filter.code)\" *ngFor=\"let filter of filters\" [value]=\"filter.code\">{{filter.title}}</option></select><span class=\"filter-grain\">{{getFilterGrain()}}</span>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/hardskills/hardskills.component.pug":
  /*!******************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/hardskills/hardskills.component.pug ***!
    \******************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsHardskillsHardskillsComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"d-none d-lg-block divider-20\"></div><div class=\"col-12\"><h3>Hard Skills</h3><div class=\"author-bio\"><p>Here is a list of some <strong>technical skills</strong> that I have. \nEach skill is sorted based on filters. Some layer of sorting give extra information I want to highlight. Have fun, discover !</p></div></div><div class=\"col-xs-12 container\"><app-multifilter class=\"row skills-filters\" [name]=\"getFilterNames()\" [(filterSet)]=\"filterSet\" [filterConfiguration]=\"filterConfiguration\" (filterSkills)=\"filterSkills($event)\" (removeFilter)=\"removeFilter($event)\" (addFilters)=\"addFilters($event)\"></app-multifilter></div><app-skill class=\"col-12 col-md-6 col-lg-4 animate\" data-animation=\"fadeInUp\" *ngFor=\"let skill of skills\" [skill]=\"skill\" [filterConfiguration]=\"filterConfiguration\"></app-skill><div class=\".col-*\"></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/hardskills/skill/skill.component.pug":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/hardskills/skill/skill.component.pug ***!
    \*******************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsHardskillsSkillSkillComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"vertical-item text-center framed\"><div class=\"item-media\"><img src=\"{{'assets/images/service/'+skill.img}}\" alt=\"\"></div><div class=\"item-content\"><h6><a>{{skill.label}}</a></h6><div class=\"progress\" [style.opacity]=\"displayIfEaseFiltered()\"><div class=\"progress-bar bg-maincolor2\" role=\"progressbar\" [ngClass]=\"getProgressClasses()\" [attr.data-transitiongoal]=\"skill.ease\" aria-valuemin=\"0\" aria-valuemax=\"100\" [attr.aria-valuenow]=\"skill.ease\"><span class=\"float-right\">{{skill.ease}}%</span></div></div><div><ul class=\"hardSkills\"><li *ngFor=\"let item of skill.skills\">{{item}}</li></ul><ul class=\"complement\" [style.display]=\"displayIfAchievementFiltered()\"><li *ngFor=\"let compl of skill.complements\">{{compl}}</li></ul></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/home/home.component.pug":
  /*!******************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/home/home.component.pug ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsHomeHomeComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"preloader\"><div class=\"preloader_image\"></div></div><!-- search modal--><div class=\"modal\" id=\"search_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"search_modal\"><button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"widget widget_search\"><form class=\"searchform search-form\" method=\"get\" action=\"/\"><div class=\"form-group\"><input class=\"form-control\" id=\"modal-search-input\" type=\"text\" value=\"\" name=\"search\" placeholder=\"Search keyword\"></div><button class=\"btn\" type=\"submit\">Search</button></form></div></div><!-- Unyson messages modal--><div class=\"modal fade\" id=\"messages_modal\" tabindex=\"-1\" role=\"dialog\"><div class=\"fw-messages-wrap ls p-normal\"><!-- Uncomment this UL with LI to show messages in modal popup to your user:--><!--<ul class=\"list-unstyled\">\n<li>Message To User</li>\n</ul>--></div></div><!-- eof .modal--><!-- wrappers for visual page editor and boxed version of template--><div id=\"canvas\"><div id=\"box_wrapper\"><!-- template sections--><!-- topline section visible only on small screens|--><div class=\"header_absolute s-pb-30\"><header class=\"page_header ds\"><div class=\"container-fluid\"><div class=\"row align-items-center\"><div class=\"col-xl-2 col-lg-3 col-11\"><a class=\"logo text-center\" href=\"./\"><img src=\"assets/images/logo.png\" alt=\"\"></a></div><div class=\"col-xl-8 col-lg-6 col-1 text-sm-center\"><!-- main nav start--><nav class=\"top-nav\"><ul class=\"nav sf-menu\"><li class=\"active\"><a href=\"index.html\">Home</a><ul><li><a href=\"index.html\">Home 1</a></li><li><a href=\"index-2.html\">Home 2</a></li><li><a href=\"index_static.html\">Static Intro</a></li><li><a href=\"index_singlepage.html\">Single Page</a></li></ul></li><li><a href=\"about.html\">About</a></li><li><a href=\"services1.html\">Services</a><ul><li><a href=\"services1.html\">Services 1</a></li><li><a href=\"services2.html\">Services 2</a></li><li><a href=\"services3.html\">Services 3</a></li><li><a href=\"services4.html\">Services 4</a></li><li><a href=\"services5.html\">Services 5</a></li><li><a href=\"service-single1.html\">Single Service</a><ul><li><a href=\"service-single1.html\">Single Service 1</a></li><li><a href=\"service-single2.html\">Single Service 2</a></li><li><a href=\"service-single3.html\">Single Service 3</a></li><li><a href=\"service-single4.html\">Single Service 4</a></li></ul></li></ul></li><!-- blog--><!-- gallery--><li><a href=\"gallery-regular.html\">Works</a><ul><!-- Gallery image only--><li><a href=\"gallery-regular.html\">Gallery Regular</a><ul><li><a href=\"gallery-regular-2-cols.html\">2 columns</a></li><li><a href=\"gallery-regular.html\">3 columns</a></li><li><a href=\"gallery-regular-4-cols-fullwidth.html\">4 columns\nfullwidth</a></li></ul></li><!-- eof Gallery image only--><!-- Gallery with title--><li><a href=\"gallery-title.html\">Gallery Title</a><ul><li><a href=\"gallery-title-2-cols.html\">2 columns</a></li><li><a href=\"gallery-title.html\">3 column</a></li><li><a href=\"gallery-title-4-cols-fullwidth.html\">4 columns\nfullwidth</a></li></ul></li><!-- eof Gallery with title--><!-- Gallery with excerpt--><li><a href=\"gallery-excerpt.html\">Gallery Extended</a><ul><li><a href=\"gallery-excerpt-2-cols.html\">2 columns</a></li><li><a href=\"gallery-excerpt.html\">3 column</a></li><li><a href=\"gallery-excerpt-4-cols-fullwidth.html\">4 columns\nfullwdith</a></li></ul></li><!-- eof Gallery with excerpt--><li><a href=\"gallery-tiled.html\">Tiled Gallery</a></li><li><a href=\"gallery-list.html\">Gallery List</a></li><!-- Gallery item--><li><a href=\"gallery-item.html\">Gallery Item</a><ul><li><a href=\"gallery-item.html\">Style 1</a></li><li><a href=\"gallery-item2.html\">Style 2</a></li><li><a href=\"gallery-item3.html\">Style 3</a></li></ul></li><!-- eof Gallery item--></ul></li><!-- eof Gallery--><li><a href=\"about.html\">Pages</a><ul><li><a href=\"process.html\">Process</a></li><li><a href=\"clients.html\">Clients</a></li><li><a href=\"testimonials.html\">Testimonials</a></li><li><a href=\"pricing.html\">Pricing</a></li><!-- shop--><li><a href=\"shop-right.html\">Shop</a><ul><li><a href=\"shop-account-dashboard.html\">Account</a><ul><li><a href=\"shop-account-details.html\">Account\ndetails</a></li><li><a href=\"shop-account-address-edit.html\">Edit\nAddress</a></li><li><a href=\"shop-account-orders.html\">Orders</a></li><li><a href=\"shop-account-order-single.html\">Single\nOrder</a></li><li><a href=\"shop-account-downloads.html\">Downloads</a></li><li><a href=\"shop-account-password-reset.html\">Password\nReset</a></li><li><a href=\"shop-account-login.html\">Login/Logout</a></li></ul></li><li><a href=\"shop-right.html\">Right Sidebar</a></li><li><a href=\"shop-left.html\">Left Sidebar</a></li><li><a href=\"shop-product-right.html\">Product Right Sidebar</a></li><li><a href=\"shop-product-left.html\">Product Left Sidebar</a></li><li><a href=\"shop-cart.html\">Cart</a></li><li><a href=\"shop-checkout.html\">Checkout</a></li><li><a href=\"shop-order-received.html\">Order Received</a></li></ul></li><!-- eof shop--><!-- features--><li><a href=\"shortcodes_iconbox.html\">Shortcodes</a><ul><li><a href=\"shortcodes_typography.html\">Typography</a></li><li><a href=\"shortcodes_buttons.html\">Buttons</a></li><li><a href=\"shortcodes_iconbox.html\">Icon Boxes</a></li><li><a href=\"shortcodes_progress.html\">Progress</a></li><li><a href=\"shortcodes_tabs.html\">Tabs &amp; Collapse</a></li><li><a href=\"shortcodes_bootstrap.html\">Bootstrap Elements</a></li><li><a href=\"shortcodes_animation.html\">Animation</a></li><li><a href=\"shortcodes_icons.html\">Template Icons</a></li><li><a href=\"shortcodes_socialicons.html\">Social Icons</a></li></ul></li><!-- eof shortcodes--><li><a href=\"shortcodes_widgets_default.html\">Widgets</a><ul><li><a href=\"shortcodes_widgets_default.html\">Default\nWidgets</a></li><li><a href=\"shortcodes_widgets_shop.html\">Shop Widgets</a></li></ul></li><!-- events--><li><a href=\"events-left.html\">Events</a><ul><li><a href=\"events-left.html\">Left Sidebar</a></li><li><a href=\"events-right.html\">Right Sidebar</a></li><li><a href=\"events-full.html\">Full Width</a></li><li><a href=\"event-single-left.html\">Single Event</a><ul><li><a href=\"event-single-left.html\">Left Sidebar</a></li><li><a href=\"event-single-right.html\">Right Sidebar</a></li><li><a href=\"event-single-full.html\">Full Width</a></li></ul></li></ul></li><!-- eof events--><li><a href=\"team-1.html\">Team</a><ul><li><a href=\"team-1.html\">Team 1</a></li><li><a href=\"team-2.html\">Team 2</a></li><li><a href=\"team-single-1.html\">Single Team</a><ul><li><a href=\"team-single-1.html\">Team Member 1</a></li><li><a href=\"team-single-2.html\">Team Member 2</a></li><li><a href=\"team-single-3.html\">Team Member 3</a></li></ul></li></ul></li><li><a href=\"comingsoon.html\">Comingsoon</a></li><li><a href=\"maintenance.html\">Maintenance</a></li><li><a href=\"faq-1.html\">FAQ</a><ul><li><a href=\"faq-1.html\">FAQ 1</a></li><li><a href=\"faq-2.html\">FAQ 2</a></li><li><a href=\"faq-3.html\">FAQ 3</a></li></ul></li><li><a href=\"404.html\">404</a></li></ul></li><!-- eof pages--><li><a href=\"blog-1.html\">Blog</a><ul><li><a href=\"blog-1.html\">Blog 1</a></li><li><a href=\"blog-2.html\">Blog 2</a></li><li><a href=\"blog-3.html\">Blog 3</a></li><li><a href=\"blog-4.html\">Blog 4</a></li><li><a href=\"blog-list.html\">Blog List</a></li><li><a href=\"blog-masonry.html\">Blog Masonry</a></li><li><a href=\"post1.html\">Post</a><ul><li><a href=\"post1.html\">Post 1</a></li><li><a href=\"post2.html\">Post 2</a></li><li><a href=\"post3.html\">Post 3</a></li><li><a href=\"post4.html\">Post 4</a></li><li><a href=\"post5.html\">Post 5</a></li></ul></li><li><a href=\"blog-single-video-right.html\">Video Post</a><ul><li><a href=\"blog-single-video-right.html\">Right Sidebar</a></li><li><a href=\"blog-single-video-left.html\">Left Sidebar</a></li><li><a href=\"blog-single-video-full.html\">Full Width</a></li></ul></li></ul></li><!-- eof blog--><li><a href=\"contact.html\">Contacts</a><ul><li><a href=\"contact.html\">Contact 1</a></li><li><a href=\"contact2.html\">Contact 2</a></li><li><a href=\"contact3.html\">Contact 3</a></li><li><a href=\"contact4.html\">Contact 4</a></li></ul></li><!-- eof contacts--><li><a href=\"#\">Features</a><div class=\"mega-menu\"><ul class=\"mega-menu-row\"><li class=\"mega-menu-col\"><a href=\"#\">Headers</a><ul><li><a href=\"header1.html\">Header Type 1</a></li><li><a href=\"header2.html\">Header Type 2</a></li><li><a href=\"header3.html\">Header Type 3</a></li><li><a href=\"header4.html\">Header Type 4</a></li><li><a href=\"header5.html\">Header Type 5</a></li><li><a href=\"header6.html\">Header Type 6</a></li></ul></li><li class=\"mega-menu-col\"><a href=\"#\">Side Menus</a><ul><li><a href=\"header-side.html\">Push Left</a></li><li><a href=\"header-side-right.html\">Push Right</a></li><li><a href=\"header-side-slide.html\">Slide Left</a></li><li><a href=\"header-side-slide-right.html\">Slide Right</a></li><li><a href=\"header-side-sticked.html\">Sticked Left</a></li><li><a href=\"header-side-sticked-right.html\">Sticked\nRight</a></li></ul></li><li class=\"mega-menu-col\"><a href=\"title1.html\">Title Sections</a><ul><li><a href=\"title1.html\">Title section 1</a></li><li><a href=\"title2.html\">Title section 2</a></li><li><a href=\"title3.html\">Title section 3</a></li><li><a href=\"title4.html\">Title section 4</a></li><li><a href=\"title5.html\">Title section 5</a></li><li><a href=\"title6.html\">Title section 6</a></li></ul></li><li class=\"mega-menu-col\"><a href=\"footer1.html#footer\">Footers</a><ul><li><a href=\"footer1.html#footer\">Footer Type 1</a></li><li><a href=\"footer2.html#footer\">Footer Type 2</a></li><li><a href=\"footer3.html#footer\">Footer Type 3</a></li><li><a href=\"footer4.html#footer\">Footer Type 4</a></li><li><a href=\"footer5.html#footer\">Footer Type 5</a></li><li><a href=\"footer6.html#footer\">Footer Type 6</a></li></ul></li><li class=\"mega-menu-col\"><a href=\"copyright1.html#copyright\">Copyright</a><ul><li><a href=\"copyright1.html#copyright\">Copyright 1</a></li><li><a href=\"copyright2.html#copyright\">Copyright 2</a></li><li><a href=\"copyright3.html#copyright\">Copyright 3</a></li><li><a href=\"copyright4.html#copyright\">Copyright 4</a></li><li><a href=\"copyright5.html#copyright\">Copyright 5</a></li><li><a href=\"copyright6.html#copyright\">Copyright 6</a></li></ul></li></ul></div><!-- eof mega menu--></li><!-- eof features--><!-- contacts--></ul></nav><!-- eof main nav--></div><div class=\"col-xl-2 col-lg-3 text-lg-left text-xl-right d-none d-lg-block\"><div class=\"header_phone\"><h6><span>+32</span>495 ** ** **</h6></div></div><div class=\"search-box\"><input class=\"search-text\" type=\"text\" name=\"search\" placeholder=\"search keyword\"><a class=\"search-btn\" href=\"#\"><i class=\"fa fa-search\"></i></a></div></div></div><!-- header toggler--><span class=\"toggle_menu\"><span></span></span></header></div><span class=\"toggle_menu_side header-slide\"><span></span></span><section class=\"page_slider main_slider\"><div class=\"flexslider\" data-nav=\"true\" data-dots=\"false\"><ul class=\"slides\"><li class=\"ds text-center slide1\"><span class=\"flexslider-overlay\"></span><span class=\"embed-responsive embed-responsive-16by9\"><!-- <iframe src=\"https://www.youtube.com/embed/UBufeh1yv2c?feature=oembed&;showinfo=0&;autoplay=1&;controls=0&;mute=1&;loop=1&;playlist=UBufeh1yv2c\" allowfullscreen=\"\"></iframe>--><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/lRTtMcx6rSM?feature=oembed&amp;showinfo=0&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;loop=1&amp;playlist=UBufeh1yv2c\" allowfullscreen=\"\"></iframe></span><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeIn\"><p class=\"text-uppercase intro_after_featured_word\">Howdy!</p></div><div class=\"intro_layer\" data-animation=\"slideRight\"><h2 class=\"text-uppercase intro_featured_word\">emmcode.be</h2></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h3 class=\"intro_before_featured_word\">A portal-folio with love by J. L. Emmanuel<br/><br/><span class=\"color-main2\">Fullstack&nbsp;</span><span class=\"color-main3\">SVG Graphism&nbsp;</span>Code Pen&nbsp;<span class=\"color-main4\">Personal Practices&nbsp;</span><span class=\"color-main2\">Coder Dojo&nbsp;</span><span class=\"color-main4\">Softies&nbsp;</span>&amp; More&nbsp;</h3></div><div class=\"intro_layer page-bottom\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" href=\"about.html\">Get Started</a></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li><li class=\"ds text-center slide3\"><!--img(src='assets/images/slide_03.jpg' alt='')--><span class=\"flexslider-overlay\"></span><span class=\"embed-responsive embed-responsive-16by9\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rSL3bU6xxtc??feature=oembed&amp;showinfo=0&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;loop=1&amp;playlist=UBufeh1yv2c\" allowfullscreen=\"\"></iframe></span><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeInRight\"><h2 class=\"text-uppercase intro_featured_word light\">I am a developer</h2></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h2 class=\"text-uppercase intro_featured_word bold\">doing both</h2><h2 class=\"text-uppercase intro_featured_word bold\">design &amp; functional</h2></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h2 class=\"text-uppercase intro_featured_word\">A Full stack !</h2></div><div class=\"intro_layer page-bottom\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" href=\"about.html\">Get Started</a><a class=\"btn btn-outline-maincolor\" href=\"#\">our folio</a></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li><li class=\"ds text-center slide2\"><span class=\"flexslider-overlay\"></span><img src=\"assets/images/external-content.duckduckgo.com.jpg\" alt=\"\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeIn\"><h3 class=\"text-lowercase intro_before_featured_word\">coach at The Lean Square (Li&egrave;ge)</h3></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h2 class=\"text-uppercase intro_featured_word\"><img class=\"c-header__logo-img\" style=\"height: 200px;\" data-v-1a9bb128=\"\" src=\"https://coderdojo.com/_nuxt/img/coderdojo.761bb66.svg\"></h2></div><div class=\"intro_layer\" data-animation=\"pullDown\"><p class=\"text-uppercase intro_after_featured_word\">Volunteer</p></div><div class=\"intro_layer page-bottom\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" href=\"about.html\">Get Started</a></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li></ul></div><!-- eof flexslider--><!-- TODO: Here is the right slope--><div class=\"flexslider-bottom d-none d-xl-block\"><a class=\"mouse-button animated floating\" href=\"#about\"></a></div></section><div class=\"divider-10 d-block d-sm-none\"></div><section class=\"s-pt-30 s-pt-lg-50 s-pt-xl-25 ls about-home\" id=\"about\"><div class=\"divider-5 d-none d-xl-block\"></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-lg-8 offset-lg-2\"><div class=\"main-content text-center\"><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"><div class=\"divider-35\"></div></div><h5>We are the one of the most effective Web Design Companies</h5><p>Getting online is easy. Succeeding online is a different story. You&rsquo;ll need more\nthan just a beautiful website to stand out these days.<strong>Online marketing solutions.</strong> Conversion-based web design coupled\n                  with a lead generating marketing plan, your online success is inevitable.</p><div class=\"divider-30\"></div><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"></div><div><div class=\"divider-40\"></div><button class=\"btn btn-outline-maincolor\" type=\"button\">Get Started</button><div class=\"divider-40\"></div></div><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"></div><div class=\"divider-10 d-none d-xl-block\"></div></div></div></div></div><div class=\"divider-10 d-block d-sm-none\"></div></section><section class=\"s-pt-30 s-pb-3 service-item2 ls animate\" id=\"services\" data-animation=\"fadeInUp\"><div class=\"container\"><div class=\"row c-mb-50 c-mb-md-60\"><div class=\"d-none d-lg-block divider-20\"></div><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_1-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">Marketing</a></h6><p>We use strategic marketing tactics that have been proven to work.</p></div></div></div><!-- .col-*--><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_2-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">Development</a></h6><p>Custom programming for most complex functions you can think.</p></div></div></div><!-- .col-*--><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_3-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">Web Design</a></h6><p>Pork chop pork belly hamburger prosciutto, fatback andouille flank.</p></div></div></div><!-- .col-*--><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_4-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">SEO Optimization</a></h6><p>Optimizing our web designs to rank on the first page of google is our specialty.</p></div></div></div><!-- .col-*--><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_5-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">Ecommerce</a></h6><p>We build your online store using a flexible, modular platform that allows</p></div></div></div><!-- .col-*--><div class=\"col-12 col-md-6 col-lg-4\"><div class=\"vertical-item text-center\"><div class=\"item-media\"><img src=\"assets/images/service/service_icon_6-1.png\" alt=\"\"></div><div class=\"item-content\"><h6><a href=\"service-single1.html\">Branding</a></h6><p>A solid brand strategy, logo and guidelines help you to get You recognized.</p></div></div></div><!-- .col-*--></div><div class=\"pink-line text-center\"><img src=\"assets/img/pink_line_big.png\" alt=\"\"></div></div></section><section class=\"s-pt-100 s-pt-lg-130 ds process-part skew_right s-parallax top_white_line_big overflow-visible\" id=\"steps\"><div class=\"container\"><div class=\"divider-65\"></div><div class=\"row align-items-center c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4\"><div class=\"step-left-part text-right\"><h2 class=\"step-title\"><span class=\"color-main\">01</span>Strategy</h2></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-center-part text-center\"><img src=\"assets/images/step_img_1.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-right-part\"><p class=\"step-text\">We define your competition and target audience. Discover what is\nworking in your online industry, then design your website accordingly.</p></div></div></div><div class=\"row align-items-center right c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4 order-lg-3\"><div class=\"step-left-part\"><h2 class=\"step-title color1\"><span class=\"color-main2\">02</span>Design</h2></div></div><div class=\"col-12 col-lg-4 order-lg-2\"><div class=\"step-center-part text-center\"><img src=\"assets/images/step_img_2.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4 order-lg-1 text-right\"><div class=\"step-right-part\"><p class=\"step-text\">Color scheme, layout, sitemap, and style. We will bring your brand\nto life with a one of a kind masterpiece, built just for you.</p></div></div></div><div class=\"row align-items-center c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4\"><div class=\"step-left-part text-right part3\"><h2 class=\"step-title\"><span class=\"color-main3\">03</span>Develop</h2></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-center-part text-center\"><img src=\"assets/images/step_img_3.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4\"><div class=\"step-right-part\"><p class=\"step-text\">We turn your ideas into a reality. &amp;our website is placed on a\n&quot;development server&quot; where you get to watch the whole process, live.</p></div></div></div><div class=\"row align-items-center right c-mb-20 c-mb-lg-60\"><div class=\"col-12 col-lg-4 order-lg-3\"><div class=\"step-left-part part4\"><h2 class=\"step-title color1\"><span class=\"color-main4\">04</span>Support</h2></div></div><div class=\"col-12 col-lg-4 order-lg-2\"><div class=\"step-center-part text-center last\"><img src=\"assets/images/step_img_2.jpg\" alt=\"\"></div></div><div class=\"col-12 col-lg-4 order-lg-1 text-right\"><div class=\"step-right-part\"><p class=\"step-text\">This is where you go live, to the world. Design, marketing, and\nmaintenance; we&apos;ll be at your side for the life of your site.</p></div></div></div><div class=\"divider-10 d-block d-sm-none\"></div><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line2.png\" alt=\"\"></div><div class=\"white-button text-center\"><a class=\"btn white-btn\" href=\"#\">Get Started</a></div><div class=\"divider-30 d-none d-xl-block\"></div></div></section><section class=\"s-pt-75 s-pt-xl-50 gallery-carousel main-gallery container-px-0\" id=\"gallery\"><div class=\"container-fluid\"><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"><div class=\"divider-40 d-block d-sm-none\"></div></div><div class=\"row\"><div class=\"col-lg-12\"><div class=\"row justify-content-center\"><div class=\"col-md-10 col-xl-5\"><div class=\"filters gallery-filters small-text text-lg-right\"><a class=\"active selected\" href=\"#\" data-filter=\"*\">All</a><a href=\"#\" data-filter=\".web-design\">Web Design</a><a href=\"#\" data-filter=\".logo-design\">Logo Design</a><a href=\"#\" data-filter=\".advertisement\">Advertisement</a><a href=\"#\" data-filter=\".branding\">Branding</a><a href=\"#\" data-filter=\".design\">Design</a><a href=\"#\" data-filter=\".photo\">Photo</a></div></div></div><div class=\"owl-carousel gallery-owl-nav\" data-autoplay=\"false\" data-responsive-lg=\"5\" data-responsive-md=\"3\" data-responsive-sm=\"3\" data-responsive-xs=\"2\" data-nav=\"true\" data-dots=\"false\" data-filters=\".gallery-filters\" data-margin=\"0\" data-loop=\"true\"><div class=\"vertical-item item-gallery content-absolute text-center ds web-design\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-1.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">web-design</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div><div class=\"vertical-item item-gallery content-absolute text-center ds logo-design\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-2.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">logo-design</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div><div class=\"vertical-item item-gallery content-absolute text-center ds advertisement\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-3.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">advertisement</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div><div class=\"vertical-item item-gallery content-absolute text-center ds branding\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-4.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">branding</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div><div class=\"vertical-item item-gallery content-absolute text-center ds design\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-5.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">design</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div><div class=\"vertical-item item-gallery content-absolute text-center ds photo\"><div class=\"item-media\"><img src=\"assets/images/gallery/gallery-6.jpg\" alt=\"\"><div class=\"media-links\"></div></div><div class=\"item-content\"><h6><a class=\"small-text\" href=\"gallery-regular.html\">photo</a></h6><h6><a href=\"gallery-regular.html\">Clothes Badge Design</a></h6></div></div></div><!-- .owl-carousel--></div></div></div></section><section class=\"page_slider team_slider\" id=\"team\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"shortcode-team-slider main-team\"><h3 class=\"slider-title\">Team</h3><div class=\"flexslider team-slider\" data-nav=\"false\" data-dots=\"true\"><ul class=\"slides\"><li class=\"ls\"><img src=\"assets/images/team/team_slide_01.jpg\" alt=\"\"></li><li class=\"ls\"><img src=\"assets/images/team/team_slide_02.jpg\" alt=\"\"></li><li class=\"ls\"><img src=\"assets/images/team/team_slide_03.jpg\" alt=\"\"></li><li class=\"ls\"><img src=\"assets/images/team/team_slide_04.jpg\" alt=\"\"></li></ul></div><!-- eof flexslider--><div class=\"flexslider-controls\"><ul class=\"flex-control-nav-1\"><li class=\"menu_item flex-active\">Gregory F. Parrino<span class=\"position\">CEO</span><span class=\"team-social-icons\"><span class=\"social-icons\"><a class=\"fa fa-facebook color-icon border-icon rounded-icon\" href=\"#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon border-icon rounded-icon\" href=\"#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon border-icon rounded-icon\" href=\"#\" title=\"google\"></a></span></span></li><li class=\"menu_item\">Letha L. Young<span class=\"position\">Designer</span><span class=\"team-social-icons\"><span class=\"social-icons\"><a class=\"fa fa-facebook color-icon border-icon rounded-icon\" href=\"#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon border-icon rounded-icon\" href=\"#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon border-icon rounded-icon\" href=\"#\" title=\"google\"></a></span></span></li><li class=\"menu_item\">Harold D. Cote<span class=\"position\">Developer</span><span class=\"team-social-icons\"><span class=\"social-icons\"><a class=\"fa fa-facebook color-icon border-icon rounded-icon\" href=\"#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon border-icon rounded-icon\" href=\"#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon border-icon rounded-icon\" href=\"#\" title=\"google\"></a></span></span></li><li class=\"menu_item\">Oren R. Odom<span class=\"position\">Marketer</span><span class=\"team-social-icons\"><span class=\"social-icons\"><a class=\"fa fa-facebook color-icon border-icon rounded-icon\" href=\"#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon border-icon rounded-icon\" href=\"#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon border-icon rounded-icon\" href=\"#\" title=\"google\"></a></span></span></li></ul></div></div></div></div></section><section class=\"ls ms book-item s-pb-30 s-pb-lg-25\"><div class=\"corner corner-light\"></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-8 offset-md-2\"><div class=\"text-block text-center\"><div class=\"btn-book-section overflow-visible\"><a class=\"btn btn-maincolor\" href=\"#\">Get Started</a></div><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"><div class=\"divider-35\"></div></div><h5>B2B Marketing &amp; Web Design<br> Resources</h5><p>B2B client acquisition is not the same as B2C&ndash; a B2B website, brand messaging and\ncontent marketing play a much different role. We understand the B2B marketing and\nsales funnel and the tactics that generate and nurture ideal client leads.</p><div class=\"divider-30\"></div><div class=\"img-wrap text-center\"><img src=\"assets/img/vertical_line.png\" alt=\"\"></div></div></div><div class=\"divider-40\"></div><div class=\"row c-gutter-30 c-mb-30 c-mb-lg-0 text-center book\"><div class=\"col-12 col-lg-4\"><div class=\"stage book-1 ls\"><img src=\"assets/images/book-1.png\" alt=\"#\"><div class=\"info\"><header><h6><a href=\"#\">Annual Report<br>2017-2018</a></h6></header><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\ngubergren.</p><p class=\"small-text link-a\"><a href=\"#\">Buy It Now!</a></p></div></div></div><div class=\"col-12 col-lg-4\"><div class=\"stage book-2 ds\"><img src=\"assets/images/book-2.png\" alt=\"#\"><div class=\"info\"><header><h6><a href=\"#\">Tools of Trading: Modern Marketing</a></h6></header><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam numy\neirmod.</p><p class=\"small-text link-a\"><a href=\"#\">Buy It Now!</a></p></div></div></div><div class=\"col-12 col-lg-4\"><div class=\"stage book-3 ls\"><img src=\"assets/images/book-3.png\" alt=\"#\"><div class=\"info\"><header><h6><a href=\"#\">Business Magazine: Design</a></h6></header><p>Et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p><p class=\"small-text link-a\"><a href=\"#\">Buy It Now!</a></p></div></div></div></div><div class=\"divider-30\"></div><div class=\"text-center img-wrap col-md-12\"><div><img src=\"assets/img/vertical_line.png\" alt=\"\"></div><div class=\"divider-40\"></div><a class=\"btn btn-outline-maincolor\" href=\"#\">Get Started</a><div class=\"divider-40\"></div><div><img src=\"assets/img/vertical_line.png\" alt=\"\"></div></div></div><div class=\"divider-10\"></div></div></section><section class=\"ls ms blog-post-carousel\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-12\"><div class=\"owl-carousel\" data-responsive-lg=\"4\" data-responsive-md=\"3\" data-responsive-sm=\"2\" data-responsive-xs=\"1\" data-nav=\"false\" data-dots=\"false\" data-loop=\"true\" data-margin=\"4\"><article class=\"box text-center\"><div class=\"item-content\"><p class=\"small-text\"><a href=\"#\">December 29, 2017</a></p><h6><a href=\"#\">Traffic control test by New York Cabs program</a></h6><div class=\"post-author\"><img src=\"assets/images/small_author.png\" alt=\"\"><p><a href=\"#\">by Admin</a></p></div></div><!-- .item-content--></article><!-- #post-##--><article class=\"box text-center\"><div class=\"item-content\"><p class=\"small-text\"><a href=\"#\">December 26, 2017</a></p><h6><a href=\"#\">Live support, key of an endless satisfaction</a></h6><div class=\"post-author\"><img src=\"assets/images/small_author.png\" alt=\"\"><p><a href=\"#\">by Admin</a></p></div></div><!-- .item-content--></article><!-- #post-##--><article class=\"box text-center\"><div class=\"item-content\"><p class=\"small-text\"><a href=\"#\">December 21, 2017</a></p><h6><a href=\"#\">Strong servers, customer friendly services</a></h6><div class=\"post-author\"><img src=\"assets/images/small_author.png\" alt=\"\"><p><a href=\"#\">by Admin</a></p></div></div><!-- .item-content--></article><!-- #post-##--><article class=\"box text-center\"><div class=\"item-content\"><p class=\"small-text\"><a href=\"#\">December 15, 2017</a></p><h6><a href=\"#\">Weekly meeting in companies Think Room</a></h6><div class=\"post-author\"><img src=\"assets/images/small_author.png\" alt=\"\"><p><a href=\"#\">by Admin</a></p></div></div><!-- .item-content--></article><!-- #post-##--></div></div></div></div></section><section class=\"s-pt-130 s-pb-15 s-pb-md-50 s-pt-xl-100 s-pb-lg-30 overflow-visible s-parallax testimonials-sliders main-testimonials ds\" id=\"testimonials\"><div class=\"corner ls ms\"></div><div class=\"container\"><div class=\"row c-mt-30 c-mt-md-0\"><div class=\"divider-20\"></div><div class=\"text-center img-wrap line col-md-12\"><img src=\"assets/img/vertical_line2.png\" alt=\"\"></div><div class=\"divider-40 d-none d-md-block\"></div><div class=\"col-md-12\"><div class=\"owl-carousel\" id=\"quote\" data-autoplay=\"false\" data-responsive-lg=\"1\" data-responsive-md=\"1\" data-responsive-sm=\"1\" data-nav=\"false\" data-dots=\"true\"><div class=\"quote-item\"><div class=\"quote-image\"><img src=\"assets/images/team/testimonials_02.jpg\" alt=\"\"></div><p class=\"small-text author-job\">Eye Insurance</p><h5><a href=\"#\">George M. Baty</a></h5><p><em class=\"big\">I needed more leads for my services. Pay-per-click, banners of maybe even\nbroschures. They made an analysis of my existing site. It occurred that my\nwebdite is banned with Google, and I never knew about that!</em></p></div><div class=\"quote-item\"><div class=\"quote-image\"><img src=\"assets/images/team/testimonials_01.jpg\" alt=\"\"></div><p class=\"small-text author-job\">Moving co</p><h5><a href=\"#\">Jeffrey P. McAllister</a></h5><p><em class=\"big\">I highly recommend this company for all and any of your design needs. I am\nvery happy with the new redesigned and restructured website they built for\nmy moving company!</em></p></div><div class=\"quote-item\"><div class=\"quote-image\"><img src=\"assets/images/team/testimonials_03.jpg\" alt=\"\"></div><p class=\"small-text author-job\">Paradox Inc</p><h5><a href=\"#\">Josephine B. Anderson</a></h5><p><em class=\"big\">This guys are awesome! It is hard to find a web design company who can\nactually listen and understand what you need. I&rsquo;m 100% satisfied with this\nguys. My website is exactly what I needed and even more...</em></p></div></div><!-- .testimonials-slider--></div><div class=\"divider-55 d-none d-md-block\"></div><div class=\"text-center img-wrap col-md-12\"><img src=\"assets/img/vertical_line2.png\" alt=\"\"></div><div class=\"divider-10 d-none d-md-block\"></div></div></div><div class=\"testimonials-btn text-center\"><a class=\"btn-maincolor\" href=\"#quote\"><i class=\"fa fa-angle-up\"></i></a></div><div class=\"corner corner-light\"></div></section><section class=\"s-pt-130 s-pt-md-50 ls text-section\"><div class=\"divider-30\"></div><div class=\"container\"><div class=\"row\"><div class=\"text-center col-md-12 justify-content-center text-block\"><img src=\"assets/img/vertical_line.png\" alt=\"\"><div class=\"divider-35\"></div><div class=\"content\"><h1>Lets Get Started<br> Your Project</h1><p>We&rsquo;ll help to achieve your goals and to grow business</p><div class=\"divider-30\"></div></div><img src=\"assets/img/vertical_line.png\" alt=\"\"><div><div class=\"divider-40\"></div><a class=\"btn btn-outline-maincolor\" href=\"#\">Let&rsquo;s Talk!</a><div class=\"divider-30\"></div></div><div class=\"img-wrap overflow-visible\"><img src=\"assets/img/vertical_line.png\" alt=\"\"><div class=\"divider-5 d-none d-xl-block\"></div></div></div></div></div></section><section class=\"s-pt-50 s-pb-100 s-pt-lg-30 s-pb-lg-75 ls ms teaser-contact-icon main-icon s-parallax\" id=\"contact\"><div class=\"corner corner-inverse\"></div><div class=\"text-center img-wrap col-md-12\"><img src=\"assets/img/dark_line_short.png\" alt=\"\"></div><div class=\"container\"><div class=\"divider-10 d-none d-xl-block\"></div><div class=\"row c-mb-50 c-mb-lg-0\"><div class=\"col-lg-4 text-center\"><div class=\"border-icon\"><div class=\"teaser-icon\"><img src=\"assets/images/icon1.png\" alt=\"\"></div></div><h6>Call Us</h6><p><strong>New Accounts:</strong> 1-800-123-4567<br><strong>Support:</strong> 1-800-123-4569</p></div><div class=\"col-lg-4 text-center\"><div class=\"border-icon\"><div class=\"teaser-icon\"><img src=\"assets/images/icon3.png\" alt=\"\"></div></div><h6>Write Us</h6><p>example@example.com<br> example@example.com</p></div><div class=\"col-lg-4 text-center\"><div class=\"border-icon\"><div class=\"teaser-icon\"><img src=\"assets/images/icon2.png\" alt=\"\"></div></div><h6>Visit Us</h6><p>2231 Sycamore Lake Road<br> Green Bay, WI 54304</p></div></div><div class=\"divider-30 d-none d-lg-block\"></div><div class=\"text-center img-wrap col-md-12 layout-2\"><img src=\"assets/img/dark_line_short.png\" alt=\"\"></div></div><div class=\"divider-10\"></div></section><footer class=\"page_footer corner-footer ds s-pt-30 s-pb-0 s-pb-lg-10 s-pb-xl-50 c-gutter-60 s-parallax\"><div class=\"container\"><div class=\"container\"><div class=\"row\"><div class=\"divider-20 d-none d-xl-block\"></div><div class=\"col-md-12 mt-4 text-center animate\" data-animation=\"fadeInUp\"><img class=\"margin-negative\" src=\"assets/images/footer_logo.png\" alt=\"\"><div class=\"widget widget_social_buttons\"><a class=\"fa fa-facebook color-icon\" href=\"http://www.facebook.com/#\" title=\"facebook\"></a><a class=\"fa fa-twitter color-icon\" href=\"http://www.twitter.com/#\" title=\"twitter\"></a><a class=\"fa fa-google color-icon\" href=\"http://www.plus.google.com/#\" title=\"google\"></a><a class=\"fa fa-youtube-play color-icon\" href=\"http://www.youtube.com/#\" title=\"youtube-play\"></a><a class=\"fa fa-linkedin color-icon\" href=\"http://www.linkedin.com/#\" title=\"linkedin\"></a></div></div></div></div></div></footer><section class=\"page_copyright light-copy cs s-py-20 s-py-lg-5 s-parallax copyright\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"divider-20 d-none d-lg-block\"></div><div class=\"col-md-12 text-center\"><p>&copy; Copyright<span class=\"copyright_year\">2018</span> All Rights Reserved</p></div><div class=\"divider-20 d-none d-lg-block\"></div></div></div></section></div><!-- eof #box_wrapper--></div><!-- eof #canvas--><router-outlet></router-outlet>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/home/navigation/navigation.component.pug":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/home/navigation/navigation.component.pug ***!
    \***********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsHomeNavigationNavigationComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"container-fluid\"><div class=\"row align-items-center\"><div class=\"col-xl-2 col-lg-3 col-11\"><a class=\"logo text-center\" href=\"./\"><img src=\"assets/images/logo.svg\" alt=\"\"></a></div><div class=\"col-xl-8 col-lg-6 col-1 text-sm-center\"><!-- main nav start--><nav class=\"top-nav\"><ul class=\"nav sf-menu\"><li class=\"active\"><a href=\"index.html\">Home</a><!--ulli\n  a(href='index.html') Home 1\nli\n  a(href='index-2.html') Home 2\nli\n  a(href='index_static.html') Static Intro\nli\n  a(href='index_singlepage.html') Single Page--></li><!--lia(href='about.html') About--><!--lia(href='services1.html') Services\nul\n  li\n    a(href='services1.html') Services 1\n  li\n    a(href='services2.html') Services 2\n  li\n    a(href='services3.html') Services 3\n  li\n    a(href='services4.html') Services 4\n  li\n    a(href='services5.html') Services 5\n  li\n    a(href='service-single1.html') Single Service\n    ul\n      li\n        a(href='service-single1.html') Single Service 1\n      li\n        a(href='service-single2.html') Single Service 2\n      li\n        a(href='service-single3.html') Single Service 3\n      li\n        a(href='service-single4.html') Single Service 4--><!-- blog--><!-- gallery--><!--lia(href='gallery-regular.html') Works\nul\n  // Gallery image only\n  li\n    a(href='gallery-regular.html') Gallery Regular\n    ul\n      li\n        a(href='gallery-regular-2-cols.html') 2 columns\n      li\n        a(href='gallery-regular.html') 3 columns\n      li\n        a(href='gallery-regular-4-cols-fullwidth.html')\n          | 4 columns\n          | fullwidth\n  // eof Gallery image only\n  // Gallery with title\n  li\n    a(href='gallery-title.html') Gallery Title\n    ul\n      li\n        a(href='gallery-title-2-cols.html') 2 columns\n      li\n        a(href='gallery-title.html') 3 column\n      li\n        a(href='gallery-title-4-cols-fullwidth.html')\n          | 4 columns\n          | fullwidth\n  // eof Gallery with title\n  // Gallery with excerpt\n  li\n    a(href='gallery-excerpt.html') Gallery Extended\n    ul\n      li\n        a(href='gallery-excerpt-2-cols.html') 2 columns\n      li\n        a(href='gallery-excerpt.html') 3 column\n      li\n        a(href='gallery-excerpt-4-cols-fullwidth.html')\n          | 4 columns\n          | fullwdith\n  // eof Gallery with excerpt\n  li\n    a(href='gallery-tiled.html') Tiled Gallery\n  li\n    a(href='gallery-list.html') Gallery List\n  // Gallery item\n  li\n    a(href='gallery-item.html') Gallery Item\n    ul\n      li\n        a(href='gallery-item.html') Style 1\n      li\n        a(href='gallery-item2.html') Style 2\n      li\n        a(href='gallery-item3.html') Style 3\n  // eof Gallery item--><!-- eof Gallery--><!--lia(href='about.html') Pages\nul\n  li\n    a(href='process.html') Process\n  li\n    a(href='clients.html') Clients\n  li\n    a(href='testimonials.html') Testimonials\n  li\n    a(href='pricing.html') Pricing\n  // shop\n  li\n    a(href='shop-right.html') Shop\n    ul\n      li\n        a(href='shop-account-dashboard.html') Account\n        ul\n          li\n            a(href='shop-account-details.html')\n              | Account\n              | details\n          li\n            a(href='shop-account-address-edit.html')\n              | Edit\n              | Address\n          li\n            a(href='shop-account-orders.html') Orders\n          li\n            a(href='shop-account-order-single.html')\n              | Single\n              | Order\n          li\n            a(href='shop-account-downloads.html') Downloads\n          li\n            a(href='shop-account-password-reset.html')\n              | Password\n              | Reset\n          li\n            a(href='shop-account-login.html') Login/Logout\n      li\n        a(href='shop-right.html') Right Sidebar\n      li\n        a(href='shop-left.html') Left Sidebar\n      li\n        a(href='shop-product-right.html') Product Right Sidebar\n      li\n        a(href='shop-product-left.html') Product Left Sidebar\n      li\n        a(href='shop-cart.html') Cart\n      li\n        a(href='shop-checkout.html') Checkout\n      li\n        a(href='shop-order-received.html') Order Received\n  // eof shop\n  // features\n  li\n    a(href='shortcodes_iconbox.html') Shortcodes\n    ul\n      li\n        a(href='shortcodes_typography.html') Typography\n      li\n        a(href='shortcodes_buttons.html') Buttons\n      li\n        a(href='shortcodes_iconbox.html') Icon Boxes\n      li\n        a(href='shortcodes_progress.html') Progress\n      li\n        a(href='shortcodes_tabs.html') Tabs &amp; Collapse\n      li\n        a(href='shortcodes_bootstrap.html') Bootstrap Elements\n      li\n        a(href='shortcodes_animation.html') Animation\n      li\n        a(href='shortcodes_icons.html') Template Icons\n      li\n        a(href='shortcodes_socialicons.html') Social Icons\n  // eof shortcodes\n  li\n    a(href='shortcodes_widgets_default.html') Widgets\n    ul\n      li\n        a(href='shortcodes_widgets_default.html')\n          | Default\n          | Widgets\n      li\n        a(href='shortcodes_widgets_shop.html') Shop Widgets\n  // events\n  li\n    a(href='events-left.html') Events\n    ul\n      li\n        a(href='events-left.html') Left Sidebar\n      li\n        a(href='events-right.html') Right Sidebar\n      li\n        a(href='events-full.html') Full Width\n      li\n        a(href='event-single-left.html') Single Event\n        ul\n          li\n            a(href='event-single-left.html') Left Sidebar\n          li\n            a(href='event-single-right.html') Right Sidebar\n          li\n            a(href='event-single-full.html') Full Width\n  // eof events\n  li\n    a(href='team-1.html') Team\n    ul\n      li\n        a(href='team-1.html') Team 1\n      li\n        a(href='team-2.html') Team 2\n      li\n        a(href='team-single-1.html') Single Team\n        ul\n          li\n            a(href='team-single-1.html') Team Member 1\n          li\n            a(href='team-single-2.html') Team Member 2\n          li\n            a(href='team-single-3.html') Team Member 3\n  li\n    a(href='comingsoon.html') Comingsoon\n  li\n    a(href='maintenance.html') Maintenance\n  li\n    a(href='faq-1.html') FAQ\n    ul\n      li\n        a(href='faq-1.html') FAQ 1\n      li\n        a(href='faq-2.html') FAQ 2\n      li\n        a(href='faq-3.html') FAQ 3\n  li\n    a(href='404.html') 404--><!-- eof pages--><!--lia(href='blog-1.html') Blog\nul\n  li\n    a(href='blog-1.html') Blog 1\n  li\n    a(href='blog-2.html') Blog 2\n  li\n    a(href='blog-3.html') Blog 3\n  li\n    a(href='blog-4.html') Blog 4\n  li\n    a(href='blog-list.html') Blog List\n  li\n    a(href='blog-masonry.html') Blog Masonry\n  li\n    a(href='post1.html') Post\n    ul\n      li\n        a(href='post1.html') Post 1\n      li\n        a(href='post2.html') Post 2\n      li\n        a(href='post3.html') Post 3\n      li\n        a(href='post4.html') Post 4\n      li\n        a(href='post5.html') Post 5\n  li\n    a(href='blog-single-video-right.html') Video Post\n    ul\n      li\n        a(href='blog-single-video-right.html') Right Sidebar\n      li\n        a(href='blog-single-video-left.html') Left Sidebar\n      li\n        a(href='blog-single-video-full.html') Full Width--><!-- eof blog--><!--lia(href='contact.html') Contacts\nul\n  li\n    a(href='contact.html') Contact 1\n  li\n    a(href='contact2.html') Contact 2\n  li\n    a(href='contact3.html') Contact 3\n  li\n    a(href='contact4.html') Contact 4--><!-- eof contacts--><!--lia(href='#') Features\n.mega-menu\n  ul.mega-menu-row\n    li.mega-menu-col\n      a(href='#') Headers\n      ul\n        li\n          a(href='header1.html') Header Type 1\n        li\n          a(href='header2.html') Header Type 2\n        li\n          a(href='header3.html') Header Type 3\n        li\n          a(href='header4.html') Header Type 4\n        li\n          a(href='header5.html') Header Type 5\n        li\n          a(href='header6.html') Header Type 6\n    li.mega-menu-col\n      a(href='#') Side Menus\n      ul\n        li\n          a(href='header-side.html') Push Left\n        li\n          a(href='header-side-right.html') Push Right\n        li\n          a(href='header-side-slide.html') Slide Left\n        li\n          a(href='header-side-slide-right.html') Slide Right\n        li\n          a(href='header-side-sticked.html') Sticked Left\n        li\n          a(href='header-side-sticked-right.html')\n            | Sticked\n            | Right\n    li.mega-menu-col\n      a(href='title1.html') Title Sections\n      ul\n        li\n          a(href='title1.html') Title section 1\n        li\n          a(href='title2.html') Title section 2\n        li\n          a(href='title3.html') Title section 3\n        li\n          a(href='title4.html') Title section 4\n        li\n          a(href='title5.html') Title section 5\n        li\n          a(href='title6.html') Title section 6\n    li.mega-menu-col\n      a(href='footer1.html#footer') Footers\n      ul\n        li\n          a(href='footer1.html#footer') Footer Type 1\n        li\n          a(href='footer2.html#footer') Footer Type 2\n        li\n          a(href='footer3.html#footer') Footer Type 3\n        li\n          a(href='footer4.html#footer') Footer Type 4\n        li\n          a(href='footer5.html#footer') Footer Type 5\n        li\n          a(href='footer6.html#footer') Footer Type 6\n    li.mega-menu-col\n      a(href='copyright1.html#copyright') Copyright\n      ul\n        li\n          a(href='copyright1.html#copyright') Copyright 1\n        li\n          a(href='copyright2.html#copyright') Copyright 2\n        li\n          a(href='copyright3.html#copyright') Copyright 3\n        li\n          a(href='copyright4.html#copyright') Copyright 4\n        li\n          a(href='copyright5.html#copyright') Copyright 5\n        li\n          a(href='copyright6.html#copyright') Copyright 6\n// eof mega menu--><!-- eof features--><!-- contacts--></ul></nav><!-- eof main nav--></div><div class=\"col-xl-2 col-lg-3 text-lg-left text-xl-right d-none d-lg-block\"><div class=\"header_phone\"><h6><span>+32</span>495 ** ** **</h6></div></div><!--.search-boxinput.search-text(type='text' name='search' placeholder='search keyword')\na.search-btn(href='#')\n  i.fa.fa-search--></div></div><!-- header toggler--><span class=\"toggle_menu\"><span></span></span>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/home/sliders/sliders.component.pug":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/home/sliders/sliders.component.pug ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsHomeSlidersSlidersComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"flexslider\" data-nav=\"true\" data-dots=\"false\"><ul class=\"slides\"><li class=\"ds text-center slide1\"><span class=\"flexslider-overlay\"></span><span class=\"d-none d-md-block embed-responsive embed-responsive-16by9\"><!--hHBVJp2VQ50--><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rSL3bU6xxtc?feature=oembed&amp;showinfo=0&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;loop=1&amp;playlist=rSL3bU6xxtc&amp;showinfo=0&amp;iv_load_policy=3\" allowfullscreen=\"\"></iframe></span><img class=\"d-block d-md-none\" src=\"assets/images/rSL3bU6xxtc.png\" alt=\"\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeIn\"><p class=\"text-uppercase intro_after_featured_word\">Wellcome on</p></div><div class=\"intro_layer\" data-animation=\"slideRight\"><h2 class=\"text-uppercase intro_featured_word\">emmcode.be</h2></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h3 class=\"intro_before_featured_word\">A place made with <i class=\"fa fa-heart\" style=\"color: #f59;\"></i> by J. L. Emmanuel<br/><br/></h3><h3 class=\"d-none d-md-block intro_before_featured_word\"><span class=\"color-main2\">Developer</span>&nbsp;&bull;&nbsp;<span class=\"color-main3\">Graphist</span>&nbsp;&bull;&nbsp;<span class=\"color-main4\">Volunteer</span></h3><h3 class=\"d-block d-md-none intro_before_featured_word\"><ul><li><span class=\"color-main2\">Developer</span></li><li><span class=\"color-main3\">Graphist</span></li><li><span class=\"color-main4\">Volunteer</span></li></ul></h3></div><div class=\"intro_layer page-bottom\" [hidden]=\"true\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" href=\"about.html\">Get Started</a></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li><li class=\"ds text-center slide3\"><!--img(src='assets/images/slide_03.jpg' alt='')--><span class=\"flexslider-overlay\"></span><span class=\"d-none d-md-block embed-responsive embed-responsive-16by9\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/o8DFOKuuAdg?feature=oembed&amp;showinfo=0&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;loop=1&amp;playlist=o8DFOKuuAdg\" allowfullscreen=\"\"></iframe></span><img class=\"d-block d-md-none\" src=\"assets/images/o8DFOKuuAdg.png\" alt=\"\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeInRight\"><h2 class=\"text-uppercase intro_featured_word light\">I am a full stack !</h2></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h2 class=\"text-uppercase intro_featured_word bold\">I do both</h2><h2 class=\"text-uppercase intro_featured_word bold\">design &amp; functional</h2></div><div class=\"intro_layer complement_layer\" data-animation=\"fadeIn\"><!--h2.text-uppercase.intro_featured_word| A full stack !\n--><span style=\"color: greenyellow\">Picture that as maintaining an equilibrium in a natural ecosystem <i class=\"fa fa-leaf\"></i></span></div><div class=\"intro_layer page-bottom\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" [hidden]=\"true\" href=\"about.html\">Get Started</a><!-- a.btn.btn-outline-maincolor(href='#') our folio--></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li><li class=\"ds text-center slide2\"><span class=\"flexslider-overlay\"></span><img src=\"assets/images/external-content.duckduckgo.com.jpg\" alt=\"\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 itro_slider\"><div class=\"intro_layers_wrapper\"><div class=\"intro_layers\"><div class=\"intro_layer\" data-animation=\"fadeIn\"><h3 class=\"text-lowercase intro_before_featured_word\">coach at The Lean Square (Li&egrave;ge)</h3></div><div class=\"intro_layer\" data-animation=\"fadeIn\"><h2 class=\"text-uppercase intro_featured_word\"><img class=\"c-header__logo-img\" style=\"height: 200px;\" data-v-1a9bb128=\"\" src=\"https://coderdojo.com/_nuxt/img/coderdojo.761bb66.svg\"></h2></div><div class=\"intro_layer\" data-animation=\"pullDown\"><p class=\"text-uppercase intro_after_featured_word\">Volunteer</p></div><div class=\"intro_layer page-bottom\" data-animation=\"expandUp\"><a class=\"btn btn-maincolor\" [hidden]=\"true\" href=\"about.html\">Get Started</a></div></div><!-- eof .intro_layers--></div><!-- eof .intro_layers_wrapper--></div><!-- eof .col-*--></div><!-- eof .row--></div><!-- eof .container--></li></ul></div><!-- eof flexslider--><!-- TODO: Here is the right slope--><div class=\"flexslider-bottom d-none d-xl-block\"><a class=\"mouse-button animated floating\" href=\"#about\"></a></div><app-transcorner [wrapperClass]=\"'.crn-on-down.crn-from-top.crn-concave'\" [crnClass]=\"'crn-bottom.crn-light'\"></app-transcorner><div class=\"divider-10 d-block d-sm-none\"></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/pens/pens.component.pug":
  /*!******************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/pens/pens.component.pug ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPensPensComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<p>pens works!</p>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/cards/card/card.component.pug":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/cards/card/card.component.pug ***!
    \*********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalCardsCardCardComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"mecard author-bio author-bio-darken side-item content-padding\"><div [innerHtml]=\"html\"></div><div class=\"cardControl\"><button class=\"previous\" (click)=\"emitDecrement()\"><i class=\"fa fa-chevron-left\"></i></button><button>{{number}}/{{cardsCount}}</button><button class=\"next\" (click)=\"emitIncrement()\"><i class=\"fa fa-chevron-right\"></i></button></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/cards/cards.component.pug":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/cards/cards.component.pug ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalCardsCardsComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<app-card *ngFor=\"let card of cards let i = index\" [id]=\"card.id\" [html]=\"card.html\" [htmlLines]=\"card.htmlLines\" [number]=\"i+1\" [cardsCount]=\"cards.length\" [selected]=\"selectedCard\" (incrementCards)=\"incrementCards()\" (decrementCards)=\"decrementCards()\" [level]=\"card.level\" [className]=\"getLevelClass(card)\"></app-card>{{selectedCard}}";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/coach/coach.component.pug":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/coach/coach.component.pug ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalCoachCoachComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"row\" id=\"coach\"><div class=\"col-12\"><h3>Coach</h3><div class=\"author-bio\"><h5>Coder dojo web coach</h5><p>I dispense coaching for children of around 11 years old willing to get hands-on web development.\nI do it <strong>one Sunday per month</strong> as <strong>a volunteer</strong>.\n<br><br>I went through the idea of being a coach when I have had a lot of time to spare.\nSo instead of doing nothing, I wanted to use it to share my love for web development or IT development in general to the next generation.</p></div></div></div><app-services></app-services><div class=\"row\"><div class=\"col-12\"><div class=\"author-bio\"><h5>My moto</h5><p>I use to say: <strong>\"We are not in a school, there is no homework, but just fun\"</strong>. By this saying I want the kids to come with the idea in mind that it will not be stressful. Even if there are things to do from one session to the next one. Everyone has his own rhythm.</p></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/coach/services/services.component.pug":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/coach/services/services.component.pug ***!
    \*****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalCoachServicesServicesComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 service-single to_animate animate\" data-animation=\"fadeInRight\"><div class=\"author-bio-darken d-block d-lg-none\"><img class=\"c-header__logo-img\" style=\"height:25px;\" src=\"assets/images/coderdojo.761bb66.svg\"></div><div class=\"divider-20 d-block d-lg-none\"></div><div class=\"author-bio-darken\"><h6 class=\"fs-20\">Above all: be cool!</h6><p>CoderDojo organizes free programming clubs called \"Dojo\". During these Dojos, girls and boys learn how to program, create websites and develop applications and games. They meet each other and present their projects to others. CoderDojo aims to make programming fun, cool and rewarding during this learning experience.</p><p>The dojos are set up and run by volunteers, \"coaches\" or \"cooks\". Most of our coaches have extensive expertise in ICT and also guide younger coaches. They assist and help our small programmers in their projects.</p><p>CoderDojo wants to show the world that programming is not just for nerds. Our programmers can build incredible projects, they are the perfect example that proves that technology can be fun.</p></div><div class=\"divider-20 d-block d-lg-none\"></div><img class=\"d-block d-lg-none\" src=\"assets/images/CoderDojo2-1024x585.jpg\" alt=\"\"><div class=\"divider-20\"></div><div class=\"author-bio\"><h6 class=\"fs-20\">What I learn to our young programmers</h6><ul class=\"list1\"><li>HTML</li><li>CSS</li><li>Javascript (for more advanced)</li></ul></div><div class=\"divider-20 d-block d-lg-none\"></div><img class=\"d-block d-lg-none\" src=\"assets/images/external-content.duckduckgo.com.jpg\" alt=\"\"><div class=\"divider-20 d-block d-lg-none\"></div></div><div class=\"col-lg-6 d-none d-lg-block to_animate fw-column animate\" data-animation=\"fadeInLeft\"><div class=\"author-bio-darken\"><img class=\"c-header__logo-img\" style=\"height:25px;\" src=\"assets/images/coderdojo.761bb66.svg\"></div><div class=\"divider-20\"></div><img src=\"assets/images/CoderDojo2-1024x585.jpg\" alt=\"\"><div class=\"divider-20\"></div><img src=\"assets/images/external-content.duckduckgo.com.jpg\" alt=\"\"><div class=\"divider-20\"></div></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/codepenio/codepenio.component.pug":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/codepenio/codepenio.component.pug ***!
    \*************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalCodepenioCodepenioComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12 animate\"><h5>NoJine (Notification Engine)</h5><iframe height=\"604\" style=\"width: 100%;\" scrolling=\"no\" title=\"NoJine - Overlaying Notifications Engine\" src=\"https://codepen.io/manuusepen/embed/orJoGw?height=604&amp;theme-id=dark&amp;default-tab=result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">See the Pen<a href=\"https://codepen.io/manuusepen/pen/orJoGw\">NoJine - Overlaying Notifications Engine</a> by Jean Luc Emmanuel VERHANNEMAN\n  (<a href=\"https://codepen.io/manuusepen\">@manuusepen</a>) on<a href=\"https://codepen.io\">CodePen</a>.</iframe></div><div class=\"col-md-6 animate\"><h5>Animated SVG line art</h5><iframe height=\"369\" style=\"width: 100%;\" scrolling=\"no\" title=\"Animated line art\" src=\"https://codepen.io/manuusepen/embed/preview/oNgQLwv?height=369&amp;theme-id=dark&amp;default-tab=result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">See the Pen<a href=\"https://codepen.io/manuusepen/pen/oNgQLwv\">Animated line art</a> by Jean Luc Emmanuel VERHANNEMAN\n  (<a href=\"https://codepen.io/manuusepen\">@manuusepen</a>) on<a href=\"https://codepen.io\">CodePen</a>.</iframe></div><div class=\"col-md-6 animate\"><h5>Parallax Background</h5><iframe height=\"369\" style=\"width: 100%;\" scrolling=\"no\" title=\"Parallax Background\" src=\"https://codepen.io/manuusepen/embed/qBWMwmy?height=352&amp;theme-id=dark&amp;default-tab=result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">See the Pen<a href=\"https://codepen.io/manuusepen/pen/qBWMwmy\">Parallax Background</a> by Jean Luc Emmanuel VERHANNEMAN\n  (<a href=\"https://codepen.io/manuusepen\">@manuusepen</a>) on<a href=\"https://codepen.io\">CodePen</a>.</iframe></div><div class=\"col-md-6 animate\"><h5>CORS Anywhere Demo ES6</h5><iframe height=\"369\" style=\"width: 100%;\" scrolling=\"no\" title=\"CORS Anywhere Demo ES6\" src=\"https://codepen.io/manuusepen/embed/VwZXZyG?height=265&amp;theme-id=dark&amp;default-tab=js,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">See the Pen<a href=\"https://codepen.io/manuusepen/pen/VwZXZyG\">CORS Anywhere Demo ES6</a> by Jean Luc Emmanuel VERHANNEMAN\n  (<a href=\"https://codepen.io/manuusepen\">@manuusepen</a>) on<a href=\"https://codepen.io\">CodePen</a>.</iframe></div><div class=\"col-md-6 animate\"><h5>preprocessed to processed (SVG)</h5><iframe height=\"369\" style=\"width: 100%;\" scrolling=\"no\" title=\"preprocessed langages to processed langages (SVG animation) | Advertize : Gloups\" src=\"https://codepen.io/manuusepen/embed/preview/BeMPRK?height=265&amp;theme-id=dark&amp;default-tab=result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">See the Pen<a href=\"https://codepen.io/manuusepen/pen/BeMPRK\">preprocessed langages to processed langages (SVG animation) | Advertize : Gloups</a> by Jean Luc Emmanuel VERHANNEMAN\n  (<a href=\"https://codepen.io/manuusepen\">@manuusepen</a>) on<a href=\"https://codepen.io\">CodePen</a>.</iframe></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/me/me.component.pug":
  /*!***********************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/me/me.component.pug ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalMeMeComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"row main-content\"><div class=\"col-12\"><h3>Me</h3></div><div class=\"divider-30\"></div><div class=\"col-md-10 col-lg-8\"><div class=\"text-center animate\" data-animation=\"fadeInUp\"><app-cards></app-cards><div class=\"cardFlipper\"></div></div></div></div></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/personal/projects/projects.component.pug":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/personal/projects/projects.component.pug ***!
    \***********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsPersonalProjectsProjectsComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<div class=\"row main-content\"><div class=\"col-12 animate\" data-animation=\"fadeInUp\"><h3>Projects</h3></div><div class=\"divider-30\"></div><div class=\"col-12\"><div class=\"author-bio-darken animate\" data-animation=\"fadeInLeft\"><p>Here are projects I made. I am used to mix multiple technologies to get the better experience of trended technologies.\nSo from one project to another, the combination <strong>back-end - front-end</strong> can change. <br><br>The reason behind such choice is that if I can master multiple stacks, I will be able to get my hands on a large set of projects for a wide range of enterprises.</p></div></div><div class=\"divider-40\"></div><div class=\"col-12\"><div class=\"book-item\"><div class=\"container\"><div class=\"row text-center book\"><div class=\"col-12 col-lg-6\"><div class=\"stage book-1 ls\"><img src=\"assets/images/radiosqbook.png\" alt=\"#\"><div class=\"info\"><header><h6>RADIO SQ - ONLY ONE RADIO TO MAKE YOU DISCOVER ALL THE CULTURE</h6></header><p class=\"justified\">Musical events, debates, conferences, politics, culture, religion, discover all the national (Belgium) and international news of the Portuguese-speaking world.</p><p class=\"small-text link-a\"><a href=\"https://www.radiosq.com\" target=\"blank\">Visit the website</a></p></div></div></div><div class=\"col-12 col-lg-6\"><div class=\"stage book-2 ds\"><img src=\"assets/images/emmcodebook.png\" alt=\"#\"><div class=\"info\"><header><h6><a href=\"#\">What is that ? This is a portfolio just to promote my self in hope to be hire easily</a></h6></header><p>I also made the portfolio by the idea to gather lots of great thinks to share with every one such as my codepen.io pens</p><!--p.small-text.link-aa(href='#') Buy It Now!--></div></div></div></div></div></div></div></div>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/pug-loader/index.js!./src/app/components/softies/softies.component.pug":
  /*!************************************************************************************!*\
    !*** ./node_modules/pug-loader!./src/app/components/softies/softies.component.pug ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPugLoaderIndexJsSrcAppComponentsSoftiesSoftiesComponentPug(module, exports, __webpack_require__) {
    var pug = __webpack_require__(
    /*! ../../../../node_modules/pug-runtime/index.js */
    "./node_modules/pug-runtime/index.js");

    function template(locals) {
      var pug_html = "",
          pug_mixins = {},
          pug_interp;
      pug_html = pug_html + "<p>softies works!</p>";
      ;
      return pug_html;
    }

    ;
    module.exports = template;
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.pug":
  /*!***********************************!*\
    !*** ./src/app/app.component.pug ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function srcAppAppComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/app.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/app.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.author-bio p {\n  text-align: justify;\n  -moz-text-align-last: left;\n       text-align-last: left;\n}\n.author-bio {\n  background-color: #ececec;\n  border-radius: 5px;\n  padding: 15px;\n  margin: 0;\n  margin-bottom: 10px;\n  position: relative;\n}\n.author-bio:last-child {\n  margin-bottom: 30px;\n}\n.author-bio-darken {\n  background: #2a3544c2;\n  padding: 15px;\n  border-radius: 3px;\n  /* border: 2px solid; */\n  color: lightgray;\n}\n.author-bio-darken:last-child {\n  margin-bottom: 30px;\n}\n.author-bio-darken h1,\n.author-bio-darken h3,\n.author-bio-darken h2,\n.author-bio-darken h5,\n.author-bio-darken h6 {\n  color: white;\n}\n.author-bio-darken p strong {\n  color: white;\n}\n.author-bio-darken .picture-zone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n.author-bio-darken .picture-zone h6 {\n  margin-bottom: 15px;\n}\n.author-bio-darken a.color-icon.fa-codepen,\n.author-bio-darken a[class*=fa-].codepen:hover {\n  color: white;\n}\n.author-bio-darken a.color-icon.fa-github,\n.author-bio-darken a[class*=fa-].github:hover {\n  color: darkviolet;\n}\n.complement_layer {\n  text-shadow: 2px 2px 2px #0007;\n  font-weight: bold;\n}\nsection:not(.page_slider) h3 {\n  text-align: left;\n  color: #ff497c;\n}\n#site-presentaiton {\n  background: url('laptop-desk-macbook-table-light-sky-974295-pxhere.com.jpg') #1f2732;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  /*  */\n  background-size: cover;\n}\n#site-presentaiton h3 {\n  color: #ff497c;\n}\n#steps {\n  -webkit-transform: none;\n          transform: none;\n}\n#steps .author-bio {\n  color: #1f2732;\n}\n#steps .author-bio h5 {\n  color: inherit;\n  font-size: 31px;\n  line-height: 34px;\n  margin-bottom: 25px;\n  margin-top: 0;\n  padding: 0 80px;\n}\n#steps .container {\n  -webkit-transform: none;\n          transform: none;\n}\nsection {\n  margin-top: 0;\n}\nsection > .container {\n  padding-top: 150px;\n  padding-bottom: 150px;\n}\n@media (max-width: 576px) {\n  section > .container {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n}\n.main-content {\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n}\napp-transcorner {\n  display: block;\n}\n.flexslider-bottom + app-transcorner .corner-wrapper button {\n  display: none;\n}\n#coderdojo,\n#codepens,\n#services,\n#about {\n  overflow: unset !important;\n}\n.withCustomBacground {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n#testimonials .col-xs-12:first-child {\n  margin-bottom: 0;\n}\n#testimonials .col-xs-12:first-child .author-bio-darken {\n  margin-bottom: 0;\n}\n#testimonials .container-fluid {\n  padding-top: 2em;\n}\n#testimonials iframe {\n  border-radius: 5px;\n}\n#testimonials .col-md-12 iframe {\n  border: 2px solid #01d1a8;\n}\n.profil {\n  background: url('/assets/images/Abstract light green background dark red polygon texture.jpg');\n  background-size: cover;\n  -webkit-filter: grayscale(1) blur(1px);\n          filter: grayscale(1) blur(1px);\n}\n.profil ~ * p {\n  color: #fefefe;\n  font-weight: bold;\n  background: #0000002b;\n  /* border: 1px solid; */\n  border-radius: 5px;\n  padding: 5px 15px;\n}\n.graphdesign {\n  background: url('/assets/images/wonderful-geometric-wallpaper-45213-46410-hd-wallpapers.jpg');\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n}\n.diplomed {\n  background: url('/assets/images/diploma.jpg');\n  -webkit-filter: sepia(0.7) brightness(50%) blur(1px);\n          filter: sepia(0.7) brightness(50%) blur(1px);\n}\napp-cards {\n  color: white;\n  position: absolute;\n  -webkit-perspective: 1500px;\n          perspective: 1500px;\n  left: 0;\n  right: 0;\n}\napp-cards app-card .mecard {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  background: #ececec;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: none;\n}\napp-cards .lvl-6 .mecard {\n  display: -webkit-box;\n  display: flex;\n  opacity: 0.1 !important;\n  z-index: 4;\n  -webkit-transform: translateY(-80px) scale(0.6);\n          transform: translateY(-80px) scale(0.6);\n}\napp-cards .lvl-5 .mecard {\n  display: -webkit-box;\n  display: flex;\n  opacity: 0.3 !important;\n  z-index: 5;\n  -webkit-transform: translateY(-65px) scale(0.7);\n          transform: translateY(-65px) scale(0.7);\n}\napp-cards .lvl-4 .mecard {\n  display: -webkit-box;\n  display: flex;\n  opacity: 0.5 !important;\n  z-index: 6;\n  -webkit-transform: translateY(-50px) scale(0.8);\n          transform: translateY(-50px) scale(0.8);\n}\napp-cards .lvl-3 .mecard {\n  display: -webkit-box;\n  display: flex;\n  opacity: 1 !important;\n  z-index: 7;\n  -webkit-transform: translateY(-30px) scale(0.9);\n          transform: translateY(-30px) scale(0.9);\n}\napp-cards .lvl-2 .mecard {\n  display: -webkit-box;\n  display: flex;\n  opacity: 1 !important;\n  z-index: 8;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\napp-cards .lvl-1 .mecard {\n  display: -webkit-box;\n  display: flex;\n  z-index: 9;\n  opacity: 0;\n  -webkit-transform: translateY(80%) rotateX(-90deg);\n          transform: translateY(80%) rotateX(-90deg);\n}\napp-cards .lvl-0 .mecard {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-transform: none;\n          transform: none;\n  opacity: 1;\n  height: initial !important;\n  padding-bottom: 0;\n  z-index: 10;\n}\napp-cards .lvl-0 .mecard .flip-next {\n  display: none;\n}\n.dashboard .justified {\n  -moz-text-align-last: justify;\n       text-align-last: justify;\n}\n.dashboard .justified label {\n  margin-bottom: 0.5rem !important;\n  padding: 0 !important;\n}\n.dashboard input:disabled {\n  color: #808080 !important;\n  font-style: italic;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  opacity: 0.5;\n}\n.dashboard input:disabled + label {\n  color: #808080 !important;\n  font-style: italic;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.dashboard .panel {\n  position: relative;\n  background: #333641;\n  padding: 1em;\n  border-radius: 5px;\n  margin-bottom: 1em;\n}\n.dashboard label {\n  font-size: fontsize;\n  font-weight: normal;\n}\n.dashboard label:before {\n  font-family: \"Font Awesome 5 Free\";\n}\n.dashboard label:after {\n  font-family: \"Font Awesome 5 Free\";\n}\n.dashboard button {\n  width: 100%;\n  margin: 15px 0;\n}\n.dashboard .choices.mandatory:after {\n  content: \"*\";\n  position: absolute;\n  font-size: fontsize;\n  top: 0;\n  right: 15px;\n}\n.dashboard .choices label {\n  margin-bottom: 1em;\n}\n.dashboard .choices input[type=radio] {\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  opacity: 0;\n}\n.dashboard .choices input[type=radio] + label:before {\n  font-family: \"Font Awesome 5 Free\";\n  margin-right: 5px;\n}\n.dashboard .choices input[type=radio] + label + input + label {\n  margin-left: 1em;\n}\n.dashboard .choices input[type=radio]:checked[type=radio] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=radio]:checked[type=checkbox] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=checkbox] {\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  opacity: 0;\n}\n.dashboard .choices input[type=checkbox] + label:before {\n  font-family: \"Font Awesome 5 Free\";\n  margin-right: 5px;\n}\n.dashboard .choices input[type=checkbox] + label + input + label {\n  margin-left: 1em;\n}\n.dashboard .choices input[type=checkbox]:checked[type=radio] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=checkbox]:checked[type=checkbox] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=radio][type=radio] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=checkbox][type=radio] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=radio][type=checkbox] + label:before {\n  content: \"\";\n}\n.dashboard .choices input[type=checkbox][type=checkbox] + label:before {\n  content: \"\";\n}\n.dashboard .choices .light hr {\n  border-top: 2px solid rgba(0, 0, 0, 0.2);\n}\n.dashboard textarea {\n  background: transparent;\n  color: #fff;\n  border: none;\n}\n.dashboard textarea:focus {\n  outline: none !important;\n}\n.dashboard * .panel:first-child {\n  margin-top: 1em;\n}\n.dashboard hr {\n  margin: 0.3rem 0;\n  border: 0;\n  border-top-color: currentcolor;\n  border-top-style: none;\n  border-top-width: 0px;\n  border-top: 2px solid rgba(255, 255, 255, 0.2);\n}\n.dashboard .vhr {\n  display: inline-block;\n  margin: 0 0.3rem;\n  font-size: 30px;\n}\n.dashboard .vhr:after {\n  content: \"|\";\n  color: rgba(255, 255, 255, 0.2);\n}\n.dashboard .star-rating {\n  direction: rtl;\n  text-align: center;\n}\n.dashboard .star-rating input {\n  width: 1px;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.dashboard .star-rating input:checked ~ label:before {\n  color: chozen-color;\n  opacity: 1 !important;\n}\n.dashboard .star-rating input + label:hover {\n  -webkit-transform: rotate(10deg) scale(1.2);\n          transform: rotate(10deg) scale(1.2);\n}\n.dashboard .star-rating input + label:hover:before {\n  opacity: 1 !important;\n  color: chozen-color;\n  font-weight: 900 !important;\n}\n.dashboard .star-rating input + label:hover ~ label:before {\n  opacity: 1 !important;\n  color: chozen-color;\n  font-weight: 900 !important;\n}\n.dashboard .star-rating label {\n  cursor: pointer;\n  -webkit-transition: all 0.5s cubic-bezier(0.62, 0.47, 0, 1.89);\n  transition: all 0.5s cubic-bezier(0.62, 0.47, 0, 1.89);\n  position: relative;\n}\n.dashboard .star-rating label:before {\n  font-weight: 900;\n  content: \"\";\n  opacity: 0.3;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.dashboard .star-rating:hover input:checked ~ label:before {\n  opacity: 0.3;\n  font-weight: unset;\n}\n.dashboard .star-rating.mandatory:before {\n  content: \" *\";\n  font-size: fontsize;\n}\n.dashboard .inputGroup {\n  position: relative;\n}\n.dashboard .inputGroup .mandatory + label:after {\n  content: \" *\";\n  font-size: fontsize;\n}\n.dashboard .inputGroup label {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 5px;\n  margin-top: 0;\n}\n.dashboard .inputGroup textarea {\n  margin-top: fontsize;\n  width: 100%;\n  max-height: 200px;\n  height: 35px;\n  resize: none;\n  border: thin solid rgba(255, 255, 255, 0.063);\n  border-bottom: 2px solid rgba(255, 255, 255, 0.208);\n  padding: 10px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  text-align: center;\n  outline: none;\n}\n.dashboard .inputGroup textarea + label {\n  display: inline-block;\n  bottom: unset;\n  top: halffontsize;\n  max-width: 100%;\n  min-width: contents;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard .inputGroup textarea:not(:placeholder-shown) + label {\n  font-size: 0.8em;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, -5px);\n          transform: translate(-50%, -5px);\n  margin-right: 0;\n  margin-left: 0;\n  margin: 0;\n}\n.dashboard .inputGroup textarea:focus + label {\n  font-size: 0.8em;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, -5px);\n          transform: translate(-50%, -5px);\n  margin-right: 0;\n  margin-left: 0;\n  margin: 0;\n}\n.dashboard .inputGroup textarea:valid {\n  border-bottom-color: transparent;\n}\n.dashboard .inputGroup select {\n  z-index: 2;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: inherit;\n  background: transparent;\n  margin-top: 1.5em;\n  border: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.208);\n  width: 100%;\n  position: relative;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  text-align: center;\n  outline: none;\n}\n.dashboard .inputGroup select:active {\n  outline: none;\n  outline-color: current-color;\n}\n.dashboard .inputGroup select:hover {\n  outline: none;\n  outline-color: current-color;\n}\n.dashboard .inputGroup select + label {\n  z-index: 1;\n}\n.dashboard .inputGroup select option {\n  color: inherit;\n  background: #1d1e22;\n}\n.dashboard .inputGroup select option:nth-child(even) {\n  background: #333641;\n}\n.dashboard .inputGroup select:focus + label {\n  bottom: fontsize !important;\n  left: 50%;\n  -webkit-transform: translate(-50%, -10px);\n          transform: translate(-50%, -10px);\n  margin-right: 0;\n  margin-left: 0;\n  font-size: 0.8em;\n}\n.dashboard .inputGroup select:required:valid + label {\n  bottom: fontsize !important;\n  left: 50%;\n  -webkit-transform: translate(-50%, -10px);\n          transform: translate(-50%, -10px);\n  margin-right: 0;\n  margin-left: 0;\n  font-size: 0.8em;\n}\n.dashboard .inputGroup select:valid {\n  border-bottom-color: transparent;\n}\n.dashboard .inputGroup select.optional:invalid {\n  box-shadow: none;\n}\n.dashboard .inputGroup input {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  background: transparent;\n  margin-top: 0.5em;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.208);\n  width: 100%;\n  color: inherit;\n  transition: all 0.5s ease-in-out;\n  text-align: center;\n  outline: none;\n}\n.dashboard .inputGroup input:not(:placeholder-shown):not([type=radio]):not([type=checkbox]) + label {\n  bottom: fontsize !important;\n  left: 50%;\n  -webkit-transform: translate(-50%, -10px);\n          transform: translate(-50%, -10px);\n  margin-right: 0;\n  margin-left: 0;\n  font-size: 0.8em;\n}\n.dashboard .inputGroup input:focus + label {\n  bottom: fontsize !important;\n  left: 50%;\n  -webkit-transform: translate(-50%, -10px);\n          transform: translate(-50%, -10px);\n  margin-right: 0;\n  margin-left: 0;\n  font-size: 0.8em;\n}\n.dashboard .inputGroup input:valid {\n  border-bottom-color: transparent;\n}\n.dashboard .input-conditional {\n  overflow: hidden;\n  position: relative;\n}\n.dashboard .input-conditional [type=radio]:not(:checked) ~ *:nth-child(n+3) {\n  pointer-events: none;\n  opacity: 0.5;\n  font-weight: normal !important;\n}\n.dashboard .input-conditional [type=radio]:not(:checked) ~ .inputGroup input {\n  color: inherit !important;\n  -webkit-text-decoration-line: line-through;\n          text-decoration-line: line-through;\n}\n.dashboard .input-conditional [type=checkbox]:not(:checked) ~ *:nth-child(n+3) {\n  pointer-events: none;\n  opacity: 0.5;\n  font-weight: normal !important;\n}\n.dashboard .input-conditional [type=checkbox]:not(:checked) ~ .inputGroup input {\n  color: inherit !important;\n  -webkit-text-decoration-line: line-through;\n          text-decoration-line: line-through;\n}\n.dashboard .input-conditional > input + label {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  display: block;\n  padding: 5px;\n  margin: 0;\n  border: 2px solid transparent;\n  border-radius: 5px;\n}\n.dashboard .input-conditional > input ~ div {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  overflow: hidden;\n  position: absolute;\n}\n.dashboard .input-conditional > input:not(:checked) + label {\n  background: none;\n  border-color: rgba(255, 255, 255, 0.059);\n}\n.input-conditional > input + label {\n  text-align: center;\n  margin-bottom: 0;\n}\n.input-conditional > input + label:before {\n  float: left;\n}\n.input-conditional .inputGroup input {\n  margin-top: 0;\n}\n.input-conditional .inputGroup input:not(:placeholder-shown):not([type=radio]):not([type=checkbox]) + label {\n  font-size: 0 !important;\n  max-width: 0;\n}\n.input-conditional .inputGroup input:not(:placeholder-shown):not([type=radio]):not([type=checkbox]) + label .fa {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup input:not(:placeholder-shown):not([type=radio]):not([type=checkbox]) + label .fas {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup input:focus + label {\n  font-size: 0 !important;\n  max-width: 0;\n}\n.input-conditional .inputGroup input:focus + label .fa {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup input:focus + label .fas {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup select {\n  margin-top: 0;\n}\n.input-conditional .inputGroup select:focus + label {\n  font-size: 0 !important;\n  max-width: 0;\n}\n.input-conditional .inputGroup select:focus + label .fa {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup select:focus + label .fas {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup select:required:valid + label {\n  font-size: 0 !important;\n  max-width: 0;\n}\n.input-conditional .inputGroup select:required:valid + label .fa {\n  font-size: 0 !important;\n}\n.input-conditional .inputGroup select:required:valid + label .fas {\n  font-size: 0 !important;\n}\n#messageType + label {\n  width: 100%;\n}\n#messageType + label i {\n  position: absolute !important;\n  right: 1em !important;\n  top: 50% !important;\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n}\nsmall.invalid-feedback {\n  display: block;\n  background: rgba(159, 0, 0, 0.2);\n  color: #f00;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcc291cmNlXFxFbW1jb2RlXFxBbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhc3NldHNcXHNjc3NcXGNkYXNoYlxcY2Rhc2hiLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtPQUFBLHFCQUFBO0FEQUY7QUNHQTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBTUEsa0JBQUE7QURORjtBQ0VFO0VBQ0UsbUJBQUE7QURBSjtBQ0tBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FERkY7QUNJRTtFQUNFLG1CQUFBO0FERko7QUNLRTs7Ozs7RUFLRSxZQUFBO0FESEo7QUNNRTtFQUNFLFlBQUE7QURKSjtBQ09FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBRExKO0FDT0k7RUFDRSxtQkFBQTtBRExOO0FDU0U7O0VBRUUsWUFBQTtBRFBKO0FDVUU7O0VBRUUsaUJBQUE7QURSSjtBQ1lBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBRFRGO0FDYUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURWSjtBQ2NBO0VBQ0Usb0ZBQUE7RUFFQSw0QkFBQTtFQUNBLDRCQUFBO0VBQThCLEtBQUE7RUFDOUIsc0JBQUE7QURYRjtBQ2FFO0VBQ0UsY0FBQTtBRFhKO0FDZUE7RUFDRSx1QkFBQTtVQUFBLGVBQUE7QURaRjtBQ2NFO0VBQ0UsY0FBQTtBRFpKO0FDYUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRFhOO0FDZUU7RUFDRSx1QkFBQTtVQUFBLGVBQUE7QURiSjtBQ29CQTtFQUNFLGFBQUE7QURqQkY7QUNrQkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FEaEJKO0FDcUJBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VEbEJGO0FBQ0Y7QUN5QkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7QUR2QkY7QUMwQkE7RUFDRSxjQUFBO0FEdkJGO0FDMkJFO0VBQ0UsYUFBQTtBRHhCSjtBQzRCQTs7OztFQUlFLDBCQUFBO0FEekJGO0FDNEJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEekJGO0FDNkJFO0VBQ0UsZ0JBQUE7QUQxQko7QUMyQkk7RUFDRSxnQkFBQTtBRHpCTjtBQzRCRTtFQUNFLGdCQUFBO0FEMUJKO0FDNEJFO0VBQ0Usa0JBQUE7QUQxQko7QUM2QkE7RUFDRSx5QkFBQTtBRDFCRjtBQzZCQTtFQUNFLDhGQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FEMUJGO0FDMkJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR6Qko7QUM0QkE7RUFDRSw2RkFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7QUQxQkY7QUM0QkE7RUFDRSw2Q0FBQTtFQUVBLG9EQUFBO1VBQUEsNENBQUE7QUQxQkY7QUMrQ0E7RUFJRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUQvQ0Y7QUNpREU7RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QURqREo7QUNtREU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FEakRKO0FDbURFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBRGpESjtBQ21ERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QURqREo7QUNtREU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FEakRKO0FDbURFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBRGpESjtBQ21ERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBRGpESjtBQ29ERTtFQUNFLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURsREo7QUNtREk7RUFDRSxhQUFBO0FEakROO0FFM09FO0VBQ0UsNkJBQUE7T0FBQSx3QkFBQTtBRjhPSjtBRTdPSTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7QUYrT047QUUzT0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLFlBQUE7QUY2T047QUUzT0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBRjZPTjtBRTFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRjRPSjtBRTFPRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUY0T0o7QUUzT0k7RUFDRSxrQ0FBQTtBRjZPTjtBRTNPSTtFQUNFLGtDQUFBO0FGNk9OO0FFMU9FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUY0T0o7QUV6T0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FGMk9OO0FFdk9JO0VBQ0Usa0JBQUE7QUZ5T047QUV2T0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUZ5T047QUV0T1U7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FGd09aO0FFbk9nQjtFQUNFLGdCQUFBO0FGcU9sQjtBRTVOVTtFQUNFLFlBQUE7QUY4Tlo7QUV4TlU7RUFDRSxZQUFBO0FGME5aO0FFck5JO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FGdU5OO0FFcE5VO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtBRnNOWjtBRWpOZ0I7RUFDRSxnQkFBQTtBRm1ObEI7QUUxTVU7RUFDRSxZQUFBO0FGNE1aO0FFdE1VO0VBQ0UsWUFBQTtBRndNWjtBRWxNTTtFQUNFLFlBQUE7QUZvTVI7QUVoTU07RUFDRSxZQUFBO0FGa01SO0FFOUxNO0VBQ0UsWUFBQTtBRmdNUjtBRTVMTTtFQUNFLFlBQUE7QUY4TFI7QUUxTE07RUFDRSx3Q0FBQTtBRjRMUjtBRXhMRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUYwTEo7QUV6TEk7RUFDRSx3QkFBQTtBRjJMTjtBRXRMTTtFQUNFLGVBQUE7QUZ3TFI7QUVwTEU7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtBRnNMSjtBRXBMRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FGc0xKO0FFckxJO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FGdUxOO0FFcExFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FGc0xKO0FFckxJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUZ1TE47QUVuTFk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FGcUxkO0FFOUtVO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtBRmdMWjtBRS9LWTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBRmlMZDtBRTdLWTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBRitLZDtBRXpLSTtFQUNFLGVBQUE7RUFDQSw4REFBQTtFQUFBLHNEQUFBO0VBQ0Esa0JBQUE7QUYyS047QUUxS007RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtBRjRLUjtBRXBLYztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRnNLaEI7QUU3Skk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUYrSk47QUU1SkU7RUFDRSxrQkFBQTtBRjhKSjtBRTVKTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRjhKUjtBRTNKSTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUY2Sk47QUUzSkk7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FGNkpOO0FFM0pRO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUY2SlY7QUUxSk07RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBRjRKUjtBRTFKTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FGNEpSO0FFMUpNO0VBQ0UsZ0NBQUE7QUY0SlI7QUV6Skk7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FGMkpOO0FFMUpNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FGNEpSO0FFMUpNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FGNEpSO0FFMUpNO0VBQ0UsVUFBQTtBRjRKUjtBRTFKTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBRjRKUjtBRTNKUTtFQUNFLG1CQUFBO0FGNkpWO0FFMUpNO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUY0SlI7QUV6SlE7RUFDRSwyQkFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRjJKVjtBRXhKTTtFQUNFLGdDQUFBO0FGMEpSO0FFdEpNO0VBQ0UsZ0JBQUE7QUZ3SlI7QUVySkk7RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRnVKTjtBRXBKVTtFQUNFLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FGc0paO0FFbEpNO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUZvSlI7QUVsSk07RUFDRSxnQ0FBQTtBRm9KUjtBRWhKRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUZrSko7QUUvSVE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBRmlKVjtBRTVJVTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBRjhJWjtBRXZJUTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FGeUlWO0FFcElVO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FGc0laO0FFaklJO0VBQ0Usd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUZtSU47QUVqSUk7RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRm1JTjtBRWhJTTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUZrSVI7QUU1SEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FGK0hKO0FFOUhJO0VBQ0UsV0FBQTtBRmdJTjtBRTVISTtFQUNFLGFBQUE7QUY4SE47QUUzSFU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUY2SFo7QUU1SFk7RUFDRSx1QkFBQTtBRjhIZDtBRTVIWTtFQUNFLHVCQUFBO0FGOEhkO0FFekhNO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FGMkhSO0FFMUhRO0VBQ0UsdUJBQUE7QUY0SFY7QUUxSFE7RUFDRSx1QkFBQTtBRjRIVjtBRXhISTtFQUNFLGFBQUE7QUYwSE47QUV6SE07RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUYySFI7QUUxSFE7RUFDRSx1QkFBQTtBRjRIVjtBRTFIUTtFQUNFLHVCQUFBO0FGNEhWO0FFeEhRO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FGMEhWO0FFekhVO0VBQ0UsdUJBQUE7QUYySFo7QUV6SFU7RUFDRSx1QkFBQTtBRjJIWjtBRXBIQTtFQUNFLFdBQUE7QUZ1SEY7QUV0SEU7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FGd0hKO0FFckhBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUZ3SEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYXV0aG9yLWJpbyBwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xufVxuXG4uYXV0aG9yLWJpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXV0aG9yLWJpbzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmF1dGhvci1iaW8tZGFya2VuIHtcbiAgYmFja2dyb3VuZDogIzJhMzU0NGMyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkOyAqL1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmF1dGhvci1iaW8tZGFya2VuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmF1dGhvci1iaW8tZGFya2VuIGgxLFxuLmF1dGhvci1iaW8tZGFya2VuIGgzLFxuLmF1dGhvci1iaW8tZGFya2VuIGgyLFxuLmF1dGhvci1iaW8tZGFya2VuIGg1LFxuLmF1dGhvci1iaW8tZGFya2VuIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmF1dGhvci1iaW8tZGFya2VuIHAgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmF1dGhvci1iaW8tZGFya2VuIC5waWN0dXJlLXpvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmF1dGhvci1iaW8tZGFya2VuIC5waWN0dXJlLXpvbmUgaDYge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmF1dGhvci1iaW8tZGFya2VuIGEuY29sb3ItaWNvbi5mYS1jb2RlcGVuLFxuLmF1dGhvci1iaW8tZGFya2VuIGFbY2xhc3MqPWZhLV0uY29kZXBlbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hdXRob3ItYmlvLWRhcmtlbiBhLmNvbG9yLWljb24uZmEtZ2l0aHViLFxuLmF1dGhvci1iaW8tZGFya2VuIGFbY2xhc3MqPWZhLV0uZ2l0aHViOmhvdmVyIHtcbiAgY29sb3I6IGRhcmt2aW9sZXQ7XG59XG5cbi5jb21wbGVtZW50X2xheWVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbjpub3QoLnBhZ2Vfc2xpZGVyKSBoMyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmY0OTdjO1xufVxuXG4jc2l0ZS1wcmVzZW50YWl0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2xhcHRvcC1kZXNrLW1hY2Jvb2stdGFibGUtbGlnaHQtc2t5LTk3NDI5NS1weGhlcmUuY29tLmpwZ1wiKSAjMWYyNzMyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAvKiAgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNzaXRlLXByZXNlbnRhaXRvbiBoMyB7XG4gIGNvbG9yOiAjZmY0OTdjO1xufVxuXG4jc3RlcHMge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4jc3RlcHMgLmF1dGhvci1iaW8ge1xuICBjb2xvcjogIzFmMjczMjtcbn1cbiNzdGVwcyAuYXV0aG9yLWJpbyBoNSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwIDgwcHg7XG59XG4jc3RlcHMgLmNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5zZWN0aW9uID4gLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgc2VjdGlvbiA+IC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG59XG4ubWFpbi1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmFwcC10cmFuc2Nvcm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmxleHNsaWRlci1ib3R0b20gKyBhcHAtdHJhbnNjb3JuZXIgLmNvcm5lci13cmFwcGVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjb2RlcmRvam8sXG4jY29kZXBlbnMsXG4jc2VydmljZXMsXG4jYWJvdXQge1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLndpdGhDdXN0b21CYWNncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuI3Rlc3RpbW9uaWFscyAuY29sLXhzLTEyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiN0ZXN0aW1vbmlhbHMgLmNvbC14cy0xMjpmaXJzdC1jaGlsZCAuYXV0aG9yLWJpby1kYXJrZW4ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3Rlc3RpbW9uaWFscyAuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IDJlbTtcbn1cbiN0ZXN0aW1vbmlhbHMgaWZyYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jdGVzdGltb25pYWxzIC5jb2wtbWQtMTIgaWZyYW1lIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAxZDFhODtcbn1cblxuLnByb2ZpbCB7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9BYnN0cmFjdCBsaWdodCBncmVlbiBiYWNrZ3JvdW5kIGRhcmsgcmVkIHBvbHlnb24gdGV4dHVyZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJsdXIoMXB4KTtcbn1cbi5wcm9maWwgfiAqIHAge1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyYjtcbiAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5ncmFwaGRlc2lnbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy93b25kZXJmdWwtZ2VvbWV0cmljLXdhbGxwYXBlci00NTIxMy00NjQxMC1oZC13YWxscGFwZXJzLmpwZ1wiKTtcbiAgZmlsdGVyOiBibHVyKDFweCk7XG59XG5cbi5kaXBsb21lZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9kaXBsb21hLmpwZ1wiKTtcbiAgZmlsdGVyOiBzZXBpYSgwLjcpIGJyaWdodG5lc3MoNTAlKSBibHVyKDFweCk7XG59XG5cbmFwcC1jYXJkcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbmFwcC1jYXJkcyBhcHAtY2FyZCAubWVjYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuYXBwLWNhcmRzIC5sdmwtNiAubWVjYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMC4xICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBweCkgc2NhbGUoMC42KTtcbn1cbmFwcC1jYXJkcyAubHZsLTUgLm1lY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpIHNjYWxlKDAuNyk7XG59XG5hcHAtY2FyZHMgLmx2bC00IC5tZWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbiAgei1pbmRleDogNjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KSBzY2FsZSgwLjgpO1xufVxuYXBwLWNhcmRzIC5sdmwtMyAubWVjYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHNjYWxlKDAuOSk7XG59XG5hcHAtY2FyZHMgLmx2bC0yIC5tZWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5hcHAtY2FyZHMgLmx2bC0xIC5tZWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKSByb3RhdGVYKC05MGRlZyk7XG59XG5hcHAtY2FyZHMgLmx2bC0wIC5tZWNhcmQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDtcbn1cbmFwcC1jYXJkcyAubHZsLTAgLm1lY2FyZCAuZmxpcC1uZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRhc2hib2FyZCAuanVzdGlmaWVkIHtcbiAgdGV4dC1hbGlnbi1sYXN0OiBqdXN0aWZ5O1xufVxuLmRhc2hib2FyZCAuanVzdGlmaWVkIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgaW5wdXQ6ZGlzYWJsZWQge1xuICBjb2xvcjogIzgwODA4MCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5kYXNoYm9hcmQgaW5wdXQ6ZGlzYWJsZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjODA4MDgwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cbi5kYXNoYm9hcmQgLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMzMzNjQxO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLmRhc2hib2FyZCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogZm9udHNpemU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZGFzaGJvYXJkIGxhYmVsOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbn1cbi5kYXNoYm9hcmQgbGFiZWw6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG59XG4uZGFzaGJvYXJkIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMubWFuZGF0b3J5OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiBmb250c2l6ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTVweDtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMgbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uZGFzaGJvYXJkIC5jaG9pY2VzIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uZGFzaGJvYXJkIC5jaG9pY2VzIGlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWwgKyBpbnB1dCArIGxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74aSXCI7XG59XG4uZGFzaGJvYXJkIC5jaG9pY2VzIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+FilwiO1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsICsgaW5wdXQgKyBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uZGFzaGJvYXJkIC5jaG9pY2VzIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWRbdHlwZT1yYWRpb10gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GklwiO1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkW3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhYpcIjtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMgaW5wdXRbdHlwZT1yYWRpb11bdHlwZT1yYWRpb10gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EkVwiO1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyBpbnB1dFt0eXBlPWNoZWNrYm94XVt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SRXCI7XG59XG4uZGFzaGJvYXJkIC5jaG9pY2VzIGlucHV0W3R5cGU9cmFkaW9dW3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLvg4hcIjtcbn1cbi5kYXNoYm9hcmQgLmNob2ljZXMgaW5wdXRbdHlwZT1jaGVja2JveF1bdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+DiFwiO1xufVxuLmRhc2hib2FyZCAuY2hvaWNlcyAubGlnaHQgaHIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmRhc2hib2FyZCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRhc2hib2FyZCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgKiAucGFuZWw6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4uZGFzaGJvYXJkIGhyIHtcbiAgbWFyZ2luOiAwLjNyZW0gMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wLWNvbG9yOiBjdXJyZW50Y29sb3I7XG4gIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbi5kYXNoYm9hcmQgLnZociB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAuM3JlbTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmRhc2hib2FyZCAudmhyOmFmdGVyIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uZGFzaGJvYXJkIC5zdGFyLXJhdGluZyB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGFzaGJvYXJkIC5zdGFyLXJhdGluZyBpbnB1dCB7XG4gIHdpZHRoOiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG59XG4uZGFzaGJvYXJkIC5zdGFyLXJhdGluZyBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgY29sb3I6IGNob3plbi1jb2xvcjtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmRhc2hib2FyZCAuc3Rhci1yYXRpbmcgaW5wdXQgKyBsYWJlbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKSBzY2FsZSgxLjIpO1xufVxuLmRhc2hib2FyZCAuc3Rhci1yYXRpbmcgaW5wdXQgKyBsYWJlbDpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBjaG96ZW4tY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgLnN0YXItcmF0aW5nIGlucHV0ICsgbGFiZWw6aG92ZXIgfiBsYWJlbDpiZWZvcmUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBjaG96ZW4tY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgLnN0YXItcmF0aW5nIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC42MiwgMC40NywgMCwgMS44OSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXNoYm9hcmQgLnN0YXItcmF0aW5nIGxhYmVsOmJlZm9yZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbnRlbnQ6IFwi74CFXCI7XG4gIG9wYWNpdHk6IDAuMztcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cbi5kYXNoYm9hcmQgLnN0YXItcmF0aW5nOmhvdmVyIGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBvcGFjaXR5OiAwLjM7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbn1cbi5kYXNoYm9hcmQgLnN0YXItcmF0aW5nLm1hbmRhdG9yeTpiZWZvcmUge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGZvbnQtc2l6ZTogZm9udHNpemU7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCAubWFuZGF0b3J5ICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGZvbnQtc2l6ZTogZm9udHNpemU7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiBmb250c2l6ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjMpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwOCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHRleHRhcmVhICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvdHRvbTogdW5zZXQ7XG4gIHRvcDogaGFsZmZvbnRzaXplO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogY29udGVudHM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCB0ZXh0YXJlYTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW46IDA7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHRleHRhcmVhOmZvY3VzICsgbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTVweCk7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgdGV4dGFyZWE6dmFsaWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgc2VsZWN0IHtcbiAgei1pbmRleDogMjtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHNlbGVjdDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lLWNvbG9yOiBjdXJyZW50LWNvbG9yO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCBzZWxlY3Q6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lLWNvbG9yOiBjdXJyZW50LWNvbG9yO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCBzZWxlY3QgKyBsYWJlbCB7XG4gIHotaW5kZXg6IDE7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHNlbGVjdCBvcHRpb24ge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogIzFkMWUyMjtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgc2VsZWN0IG9wdGlvbjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjMzMzNjQxO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCBzZWxlY3Q6Zm9jdXMgKyBsYWJlbCB7XG4gIGJvdHRvbTogZm9udHNpemUgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTBweCk7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHNlbGVjdDpyZXF1aXJlZDp2YWxpZCArIGxhYmVsIHtcbiAgYm90dG9tOiBmb250c2l6ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgc2VsZWN0OnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIHNlbGVjdC5vcHRpb25hbDppbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgaW5wdXQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5kYXNoYm9hcmQgLmlucHV0R3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KFt0eXBlPXJhZGlvXSk6bm90KFt0eXBlPWNoZWNrYm94XSkgKyBsYWJlbCB7XG4gIGJvdHRvbTogZm9udHNpemUgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTBweCk7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uZGFzaGJvYXJkIC5pbnB1dEdyb3VwIGlucHV0OmZvY3VzICsgbGFiZWwge1xuICBib3R0b206IGZvbnRzaXplICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmRhc2hib2FyZCAuaW5wdXRHcm91cCBpbnB1dDp2YWxpZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhc2hib2FyZCAuaW5wdXQtY29uZGl0aW9uYWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFzaGJvYXJkIC5pbnB1dC1jb25kaXRpb25hbCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSB+ICo6bnRoLWNoaWxkKG4rMykge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIC5pbnB1dC1jb25kaXRpb25hbCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSB+IC5pbnB1dEdyb3VwIGlucHV0IHtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0LWNvbmRpdGlvbmFsIFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpIH4gKjpudGgtY2hpbGQobiszKSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0LWNvbmRpdGlvbmFsIFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpIH4gLmlucHV0R3JvdXAgaW5wdXQge1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufVxuLmRhc2hib2FyZCAuaW5wdXQtY29uZGl0aW9uYWwgPiBpbnB1dCArIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kYXNoYm9hcmQgLmlucHV0LWNvbmRpdGlvbmFsID4gaW5wdXQgfiBkaXYge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRhc2hib2FyZCAuaW5wdXQtY29uZGl0aW9uYWwgPiBpbnB1dDpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNTkpO1xufVxuXG4uaW5wdXQtY29uZGl0aW9uYWwgPiBpbnB1dCArIGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmlucHV0LWNvbmRpdGlvbmFsID4gaW5wdXQgKyBsYWJlbDpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbn1cbi5pbnB1dC1jb25kaXRpb25hbCAuaW5wdXRHcm91cCBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uaW5wdXQtY29uZGl0aW9uYWwgLmlucHV0R3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KFt0eXBlPXJhZGlvXSk6bm90KFt0eXBlPWNoZWNrYm94XSkgKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDA7XG59XG4uaW5wdXQtY29uZGl0aW9uYWwgLmlucHV0R3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KFt0eXBlPXJhZGlvXSk6bm90KFt0eXBlPWNoZWNrYm94XSkgKyBsYWJlbCAuZmEge1xuICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1jb25kaXRpb25hbCAuaW5wdXRHcm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTpub3QoW3R5cGU9cmFkaW9dKTpub3QoW3R5cGU9Y2hlY2tib3hdKSArIGxhYmVsIC5mYXMge1xuICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1jb25kaXRpb25hbCAuaW5wdXRHcm91cCBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMDtcbn1cbi5pbnB1dC1jb25kaXRpb25hbCAuaW5wdXRHcm91cCBpbnB1dDpmb2N1cyArIGxhYmVsIC5mYSB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xufVxuLmlucHV0LWNvbmRpdGlvbmFsIC5pbnB1dEdyb3VwIGlucHV0OmZvY3VzICsgbGFiZWwgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xufVxuLmlucHV0LWNvbmRpdGlvbmFsIC5pbnB1dEdyb3VwIHNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uaW5wdXQtY29uZGl0aW9uYWwgLmlucHV0R3JvdXAgc2VsZWN0OmZvY3VzICsgbGFiZWwge1xuICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAwO1xufVxuLmlucHV0LWNvbmRpdGlvbmFsIC5pbnB1dEdyb3VwIHNlbGVjdDpmb2N1cyArIGxhYmVsIC5mYSB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xufVxuLmlucHV0LWNvbmRpdGlvbmFsIC5pbnB1dEdyb3VwIHNlbGVjdDpmb2N1cyArIGxhYmVsIC5mYXMge1xuICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1jb25kaXRpb25hbCAuaW5wdXRHcm91cCBzZWxlY3Q6cmVxdWlyZWQ6dmFsaWQgKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDA7XG59XG4uaW5wdXQtY29uZGl0aW9uYWwgLmlucHV0R3JvdXAgc2VsZWN0OnJlcXVpcmVkOnZhbGlkICsgbGFiZWwgLmZhIHtcbiAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtY29uZGl0aW9uYWwgLmlucHV0R3JvdXAgc2VsZWN0OnJlcXVpcmVkOnZhbGlkICsgbGFiZWwgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xufVxuXG4jbWVzc2FnZVR5cGUgKyBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI21lc3NhZ2VUeXBlICsgbGFiZWwgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMWVtICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xufVxuXG5zbWFsbC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTU5LCAwLCAwLCAwLjIpO1xuICBjb2xvcjogI2YwMDtcbiAgbWFyZ2luOiA1cHggMDtcbn0iLCIkcHJlc2VudGF0aW9uLWJhY2tncm91bmQ6ICMxZjI3MzI7XHJcblxyXG4uYXV0aG9yLWJpbyBwIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcclxufVxyXG5cclxuLmF1dGhvci1iaW8ge1xyXG4gIC8vYm9yZGVyOiAycHggc29saWQgI2UyZTRlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjOyAvLyNlZmVmZWZcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmF1dGhvci1iaW8tZGFya2VuIHtcclxuICBiYWNrZ3JvdW5kOiAjMmEzNTQ0YzI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLyogYm9yZGVyOiAycHggc29saWQ7ICovXHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMyxcclxuICBoMixcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBwIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucGljdHVyZS16b25lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgaDYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYS5jb2xvci1pY29uLmZhLWNvZGVwZW4sXHJcbiAgYVtjbGFzcyo9XCJmYS1cIl0uY29kZXBlbjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBhLmNvbG9yLWljb24uZmEtZ2l0aHViLFxyXG4gIGFbY2xhc3MqPVwiZmEtXCJdLmdpdGh1Yjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3Zpb2xldDtcclxuICB9XHJcbn1cclxuXHJcbi5jb21wbGVtZW50X2xheWVyIHtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNlY3Rpb246bm90KC5wYWdlX3NsaWRlcikge1xyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmNDk3YztcclxuICB9XHJcbn1cclxuXHJcbiNzaXRlLXByZXNlbnRhaXRvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9sYXB0b3AtZGVzay1tYWNib29rLXRhYmxlLWxpZ2h0LXNreS05NzQyOTUtcHhoZXJlLmNvbS5qcGdcIilcclxuICAgICRwcmVzZW50YXRpb24tYmFja2dyb3VuZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7IC8qICAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAjZmY0OTdjO1xyXG4gIH1cclxufVxyXG5cclxuI3N0ZXBzIHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gIC5hdXRob3ItYmlvIHtcclxuICAgIGNvbG9yOiAjMWYyNzMyO1xyXG4gICAgaDUge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiAzMXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgcGFkZGluZzogMCA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4jc2VydmljZXMge1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gICYgPiAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgc2VjdGlvbiA+IC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYXBwLXRyYW5zY29ybmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZsZXhzbGlkZXItYm90dG9tICsgYXBwLXRyYW5zY29ybmVyIC5jb3JuZXItd3JhcHBlciB7XHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4jY29kZXJkb2pvLFxyXG4jY29kZXBlbnMsXHJcbiNzZXJ2aWNlcyxcclxuI2Fib3V0IHtcclxuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpdGhDdXN0b21CYWNncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbHMge1xyXG4gIC5jb2wteHMtMTI6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC5hdXRob3ItYmlvLWRhcmtlbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICB9XHJcbiAgaWZyYW1lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn1cclxuI3Rlc3RpbW9uaWFscyAuY29sLW1kLTEyIGlmcmFtZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAxZDFhODtcclxufVxyXG5cclxuLnByb2ZpbCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL0Fic3RyYWN0IGxpZ2h0IGdyZWVuIGJhY2tncm91bmQgZGFyayByZWQgcG9seWdvbiB0ZXh0dXJlLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJsdXIoMXB4KTtcclxuICAmIH4gKiBwIHtcclxuICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmI7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIH1cclxufVxyXG4uZ3JhcGhkZXNpZ24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy93b25kZXJmdWwtZ2VvbWV0cmljLXdhbGxwYXBlci00NTIxMy00NjQxMC1oZC13YWxscGFwZXJzLmpwZ1wiKTtcclxuXHJcbiAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuLmRpcGxvbWVkIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvZGlwbG9tYS5qcGdcIik7XHJcblxyXG4gIGZpbHRlcjogc2VwaWEoMC43KSBicmlnaHRuZXNzKDUwJSkgYmx1cigxcHgpO1xyXG59XHJcbi8vIC5sdmwtMCB7XHJcbi8vICAgei1pbmRleDogMTA7XHJcbi8vIH1cclxuLy8gLmx2bC0xIC5tZWNhcmQge1xyXG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NXB4LCAxMHB4KTtcclxuLy8gICB6LWluZGV4OiA5O1xyXG4vLyB9XHJcbi8vIC5sdmwtMCB+IC5sdmwtMSAubWVjYXJkIHtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1NXB4LCAxMHB4KTtcclxuLy8gfVxyXG5cclxuLy8gLmx2bC0yIC5tZWNhcmQge1xyXG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMjBweCk7XHJcbi8vICAgei1pbmRleDogODtcclxuLy8gfVxyXG4vLyAubHZsLTAgfiAubHZsLTIgLm1lY2FyZCB7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDIwcHgpO1xyXG4vLyB9XHJcblxyXG5hcHAtY2FyZHMge1xyXG4gICoge1xyXG4gICAgLy9ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgYXBwLWNhcmQgLm1lY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2hlaWdodDozMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sdmwtNiAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAwLjEgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwcHgpIHNjYWxlKDAuNik7XHJcbiAgfVxyXG4gIC5sdmwtNSAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1cHgpIHNjYWxlKDAuNyk7XHJcbiAgfVxyXG4gIC5sdmwtNCAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpIHNjYWxlKDAuOCk7XHJcbiAgfVxyXG4gIC5sdmwtMyAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA3O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSBzY2FsZSgwLjkpO1xyXG4gIH1cclxuICAubHZsLTIgLm1lY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogODtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIC5sdmwtMSAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MCUpIHJvdGF0ZVgoLTkwZGVnKTtcclxuICB9XHJcblxyXG4gIC5sdmwtMCAubWVjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAuZmxpcC1uZXh0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbXBvcnQgXCIuLi9hc3NldHMvc2Nzcy9jZGFzaGIvY2Rhc2hiXCI7XHJcbiIsIiRjaG96ZW4tY29sb3ItZmFkZWQ6ICNmZmZmZmYyMCAhaW1wb3J0YW50O1xyXG4kZm9udHNpemU6IDE2cHQ7XHJcbiRkb3VibGVzaXplOiAzMnB0O1xyXG4kaGFsZmZvbnRzaXplOiA4cHQ7XHJcblxyXG4kaW5wdXRJbnNlcnRlZDogd2hpdGU7XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICAuanVzdGlmaWVkIHtcclxuICAgIHRleHQtYWxpZ24tbGFzdDoganVzdGlmeTtcclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZCArIGxhYmVsIHtcclxuICAgICAgY29sb3I6ICM4MDgwODAgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGFuZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzY0MTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiBmb250c2l6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAuY2hvaWNlcy5tYW5kYXRvcnkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogZm9udHNpemU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaG9pY2VzIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICArIHtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICArIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICsge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmNoZWNrZWRbdHlwZT1cInJhZGlvXCJdICsge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGYxOTJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpjaGVja2VkW3R5cGU9XCJjaGVja2JveFwiXSArIHtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTRhXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICsge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICsge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgKyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6Y2hlY2tlZFt0eXBlPVwicmFkaW9cIl0gKyB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjE5MlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmNoZWNrZWRbdHlwZT1cImNoZWNrYm94XCJdICsge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGYxNGFcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXVt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdW3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMGM4XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcZjBjOFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlnaHQge1xyXG4gICAgICBociB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgKiB7XHJcbiAgICAucGFuZWwge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIH1cclxuICAudmhyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwLjNyZW07XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJ8XCI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdGFyLXJhdGluZyB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgJjpjaGVja2VkIHtcclxuICAgICAgICB+IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBjaG96ZW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICsge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZykgc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjogY2hvemVuLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlciB+IGxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjogY2hvemVuLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjYyLCAwLjQ3LCAwLCAxLjg5KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgICB+IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnN0YXItcmF0aW5nLm1hbmRhdG9yeSB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiICpcIjtcclxuICAgICAgZm9udC1zaXplOiBmb250c2l6ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmlucHV0R3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1hbmRhdG9yeSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgKlwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogZm9udHNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgbWFyZ2luLXRvcDogZm9udHNpemU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogdGhpbiBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYzKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMDgpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICArIHtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBib3R0b206IHVuc2V0O1xyXG4gICAgICAgICAgdG9wOiBoYWxmZm9udHNpemU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTVweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAmOmZvY3VzICsgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNXB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6dmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjA4KTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZS1jb2xvcjogY3VycmVudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6IGN1cnJlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgKyBsYWJlbCB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZDFlMjI7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzMzY0MTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBib3R0b206IGZvbnRzaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgfVxyXG4gICAgICAmOnJlcXVpcmVkIHtcclxuICAgICAgICAmOnZhbGlkICsgbGFiZWwge1xyXG4gICAgICAgICAgYm90dG9tOiBmb250c2l6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOnZhbGlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0Lm9wdGlvbmFsIHtcclxuICAgICAgJjppbnZhbGlkIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjA4KTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAmOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICAgICAgICAmOm5vdChbdHlwZT1cInJhZGlvXCJdKSB7XHJcbiAgICAgICAgICAmOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKSArIGxhYmVsIHtcclxuICAgICAgICAgICAgYm90dG9tOiBmb250c2l6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBib3R0b206IGZvbnRzaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgfVxyXG4gICAgICAmOnZhbGlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdXQtY29uZGl0aW9uYWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAmOm5vdCg6Y2hlY2tlZCkgfiAqIHtcclxuICAgICAgICAmOm50aC1jaGlsZChuICsgMykge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgICAgfiAuaW5wdXRHcm91cCB7XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgJjpub3QoOmNoZWNrZWQpIH4gKiB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQobiArIDMpIHtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICAgIH4gLmlucHV0R3JvdXAge1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiBpbnB1dCArIGxhYmVsIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgID4gaW5wdXQgfiBkaXYge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgPiBpbnB1dCB7XHJcbiAgICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1OSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlucHV0LWNvbmRpdGlvbmFsIHtcclxuICA+IGlucHV0ICsgbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dEdyb3VwIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgJjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICAgICAgJjpub3QoW3R5cGU9XCJyYWRpb1wiXSkge1xyXG4gICAgICAgICAgJjpub3QoW3R5cGU9XCJjaGVja2JveFwiXSkgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZhcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmFzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmFzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOnJlcXVpcmVkIHtcclxuICAgICAgICAmOnZhbGlkICsgbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mYXMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuI21lc3NhZ2VUeXBlICsgbGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbnNtYWxsLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU5LCAwLCAwLCAwLjIpO1xyXG4gIGNvbG9yOiAjZjAwO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "Angular";
      this.isProd = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? "prod" : "notProd";
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.pug */
      "./src/app/app.component.pug")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_softies_softies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/softies/softies.component */
    "./src/app/components/softies/softies.component.ts");
    /* harmony import */


    var _components_pens_pens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/pens/pens.component */
    "./src/app/components/pens/pens.component.ts");
    /* harmony import */


    var _components_hardskills_hardskills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/hardskills/hardskills.component */
    "./src/app/components/hardskills/hardskills.component.ts");
    /* harmony import */


    var _components_hardskills_skill_skill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/hardskills/skill/skill.component */
    "./src/app/components/hardskills/skill/skill.component.ts");
    /* harmony import */


    var _components_filters_multifilter_multifilter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/filters/multifilter/multifilter.component */
    "./src/app/components/filters/multifilter/multifilter.component.ts");
    /* harmony import */


    var _components_filters_skill_filter_skill_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/filters/skill-filter/skill-filter.component */
    "./src/app/components/filters/skill-filter/skill-filter.component.ts");
    /* harmony import */


    var _components_personal_me_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/personal/me/me.component */
    "./src/app/components/personal/me/me.component.ts");
    /* harmony import */


    var _components_personal_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/personal/projects/projects.component */
    "./src/app/components/personal/projects/projects.component.ts");
    /* harmony import */


    var _components_common_transcorner_transcorner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/common/transcorner/transcorner.component */
    "./src/app/components/common/transcorner/transcorner.component.ts");
    /* harmony import */


    var _components_personal_coach_coach_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/personal/coach/coach.component */
    "./src/app/components/personal/coach/coach.component.ts");
    /* harmony import */


    var _components_personal_cards_cards_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/personal/cards/cards.component */
    "./src/app/components/personal/cards/cards.component.ts");
    /* harmony import */


    var _components_personal_cards_card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/personal/cards/card/card.component */
    "./src/app/components/personal/cards/card/card.component.ts");
    /* harmony import */


    var _components_personal_coach_services_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/personal/coach/services/services.component */
    "./src/app/components/personal/coach/services/services.component.ts");
    /* harmony import */


    var _components_personal_codepenio_codepenio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/personal/codepenio/codepenio.component */
    "./src/app/components/personal/codepenio/codepenio.component.ts");
    /* harmony import */


    var _components_home_sliders_sliders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/sliders/sliders.component */
    "./src/app/components/home/sliders/sliders.component.ts");
    /* harmony import */


    var _components_home_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/home/navigation/navigation.component */
    "./src/app/components/home/navigation/navigation.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _components_softies_softies_component__WEBPACK_IMPORTED_MODULE_9__["SoftiesComponent"], _components_pens_pens_component__WEBPACK_IMPORTED_MODULE_10__["PensComponent"], _components_hardskills_hardskills_component__WEBPACK_IMPORTED_MODULE_11__["HardskillsComponent"], _components_hardskills_skill_skill_component__WEBPACK_IMPORTED_MODULE_12__["SkillComponent"], _components_filters_multifilter_multifilter_component__WEBPACK_IMPORTED_MODULE_13__["MultifilterComponent"], _components_filters_skill_filter_skill_filter_component__WEBPACK_IMPORTED_MODULE_14__["SkillFilterComponent"], _components_personal_me_me_component__WEBPACK_IMPORTED_MODULE_15__["MeComponent"], _components_personal_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"], _components_common_transcorner_transcorner_component__WEBPACK_IMPORTED_MODULE_17__["TranscornerComponent"], _components_personal_coach_coach_component__WEBPACK_IMPORTED_MODULE_18__["CoachComponent"], _components_personal_cards_cards_component__WEBPACK_IMPORTED_MODULE_19__["CardsComponent"], _components_personal_cards_card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardComponent"], _components_personal_coach_services_services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"], _components_personal_codepenio_codepenio_component__WEBPACK_IMPORTED_MODULE_22__["CodepenioComponent"], _components_home_sliders_sliders_component__WEBPACK_IMPORTED_MODULE_23__["SlidersComponent"], _components_home_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__["NavigationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/common/transcorner/transcorner.component.pug":
  /*!*************************************************************************!*\
    !*** ./src/app/components/common/transcorner/transcorner.component.pug ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsCommonTranscornerTranscornerComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/common/transcorner/transcorner.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/common/transcorner/transcorner.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/common/transcorner/transcorner.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/common/transcorner/transcorner.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonTranscornerTranscornerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.corner {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 0px;\n  border-width: 0px;\n  border-style: solid;\n  border-bottom-width: 50px;\n  padding: 0;\n  z-index: 5;\n}\n.crn-top {\n  border-right: 50vw solid transparent;\n  border-left: 50vw solid transparent;\n}\n.crn-bottom {\n  border-right-width: 50vw;\n  border-left-width: 50vw;\n  border-bottom-width: 0px;\n  border-top-width: 50px;\n}\n.crn-right {\n  border-right-width: 100vw;\n  border-left-width: 0vw;\n}\n.crn-left {\n  border-right-width: 0vw;\n  border-left-width: 100vw;\n}\n.crn-left-delayed25 {\n  border-right-width: 25vw;\n  border-left-width: 75vw;\n}\n.crn-left-delayed75 {\n  border-right-width: 75vw;\n  border-left-width: 25vw;\n}\n.corner-wrapper {\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  position: absolute;\n  top: -50px;\n}\n.corner-wrapper.crn-on-down {\n  top: unset;\n  bottom: -50px;\n  z-index: 10;\n}\n.corner-wrapper.crn-on-down .corner {\n  border-bottom-width: 0px;\n  border-top-width: 50px;\n}\n.corner-wrapper.crn-from-top {\n  bottom: 0;\n}\n.corner-wrapper .corner.crn-light {\n  border-color: #f0f0f0 transparent;\n}\n.corner-wrapper .corner.crn-dark {\n  border-color: #333 transparent;\n}\n.corner-wrapper .corner.crn-green {\n  border-color: #00d4aaff transparent;\n}\n.corner-wrapper.crn-concave .corner:not(.crn-bottom) {\n  border-bottom-width: 50px;\n  border-top-width: 0px;\n}\n.corner-wrapper.crn-concave .corner {\n  border-color: transparent;\n}\n.corner-wrapper.crn-concave .corner.crn-light {\n  border-color: transparent #f0f0f0;\n}\n.corner-wrapper.crn-concave .corner.crn-green {\n  border-color: transparent #00d4aaff;\n}\n.corner-wrapper.crn-concave .corner.crn-dark {\n  border-color: transparent #333;\n}\n.corner-wrapper button {\n  position: absolute;\n  display: none;\n  z-index: 10;\n  height: 40px;\n  width: 40px;\n  background: #e9e9ea;\n  border: none;\n  color: #f0f0f0;\n  font-size: unset;\n  letter-spacing: unset;\n  line-height: unset;\n  padding: unset;\n  -webkit-transform: translate(-30px, 5px);\n          transform: translate(-30px, 5px);\n}\n.corner-wrapper a {\n  position: absolute;\n  display: none;\n  z-index: 10;\n  height: 40px;\n  width: 40px;\n  background: transparent;\n  border: none;\n  color: #f5f5f5;\n  font-size: 20px;\n  letter-spacing: unset;\n  line-height: unset;\n  padding: unset;\n  -webkit-transform: translate(-30px, 5px);\n  transform: translate(-30px, 5px);\n  text-align: center;\n  border-radius: 50%;\n  line-height: 40px;\n}\n.corner-wrapper a i:before {\n  content: \"\";\n}\n.corner-wrapper a:hover,\n.corner-wrapper button:hover {\n  background-color: #333;\n  color: #f0f0f0;\n}\n.corner-wrapper a:hover i:before,\n.corner-wrapper button:hover i:before {\n  content: \"\";\n}\n.corner-wrapper .crn-left-delayed25 + a,\n.corner-wrapper .crn-left-delayed25 + button {\n  display: block;\n  left: 75vw;\n}\n.corner-wrapper .crn-left-delayed75 + a,\n.corner-wrapper .crn-left-delayed75 + button {\n  display: block;\n  -webkit-transform: translate(-25px, 5px);\n          transform: translate(-25px, 5px);\n  left: 25vw;\n}\n@media (max-width: 576px) {\n  .corner-wrapper {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdHJhbnNjb3JuZXIvdHJhbnNjb3JuZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3RyYW5zY29ybmVyL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcdHJhbnNjb3JuZXJcXHRyYW5zY29ybmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURFRjtBQ0FBO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtBREdGO0FDQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsd0JBQUE7RUFDQSxzQkFBQTtBREVGO0FDQ0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FERUY7QUNBQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QURHRjtBQ0RBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBRElGO0FDRkE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FES0Y7QUNIQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURNRjtBQ0pFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FETUo7QUNKSTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QURNTjtBQ0hFO0VBQ0UsU0FBQTtBREtKO0FDREk7RUFDRSxpQ0FBQTtBREdOO0FDREk7RUFDRSw4QkFBQTtBREdOO0FDREk7RUFDRSxtQ0FBQTtBREdOO0FDRUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FEQU47QUNFSTtFQUNFLHlCQUFBO0FEQU47QUNDTTtFQUNFLGlDQUFBO0FEQ1I7QUNDTTtFQUNFLG1DQUFBO0FEQ1I7QUNDTTtFQUNFLDhCQUFBO0FEQ1I7QUNNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsd0NBQUE7VUFBQSxnQ0FBQTtBRExKO0FDT0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRExKO0FDTUk7RUFDRSxZQUFBO0FESk47QUNVSTs7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QURQTjtBQ1FNOztFQUNFLFlBQUE7QURMUjtBQ1VJOztFQUVFLGNBQUE7RUFDQSxVQUFBO0FEUk47QUNhSTs7RUFFRSxjQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFVBQUE7QURYTjtBQ2dCQTtFQUNFO0lBQ0UsYUFBQTtFRGJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi90cmFuc2Nvcm5lci90cmFuc2Nvcm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb3JuZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5jcm4tdG9wIHtcbiAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmNybi1ib3R0b20ge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDUwdnc7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1MHZ3O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDUwcHg7XG59XG5cbi5jcm4tcmlnaHQge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDEwMHZ3O1xuICBib3JkZXItbGVmdC13aWR0aDogMHZ3O1xufVxuXG4uY3JuLWxlZnQge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDB2dztcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwMHZ3O1xufVxuXG4uY3JuLWxlZnQtZGVsYXllZDI1IHtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAyNXZ3O1xuICBib3JkZXItbGVmdC13aWR0aDogNzV2dztcbn1cblxuLmNybi1sZWZ0LWRlbGF5ZWQ3NSB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNzV2dztcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDI1dnc7XG59XG5cbi5jb3JuZXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTBweDtcbn1cbi5jb3JuZXItd3JhcHBlci5jcm4tb24tZG93biB7XG4gIHRvcDogdW5zZXQ7XG4gIGJvdHRvbTogLTUwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLmNvcm5lci13cmFwcGVyLmNybi1vbi1kb3duIC5jb3JuZXIge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDUwcHg7XG59XG4uY29ybmVyLXdyYXBwZXIuY3JuLWZyb20tdG9wIHtcbiAgYm90dG9tOiAwO1xufVxuLmNvcm5lci13cmFwcGVyIC5jb3JuZXIuY3JuLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBmMGYwIHRyYW5zcGFyZW50O1xufVxuLmNvcm5lci13cmFwcGVyIC5jb3JuZXIuY3JuLWRhcmsge1xuICBib3JkZXItY29sb3I6ICMzMzMgdHJhbnNwYXJlbnQ7XG59XG4uY29ybmVyLXdyYXBwZXIgLmNvcm5lci5jcm4tZ3JlZW4ge1xuICBib3JkZXItY29sb3I6ICMwMGQ0YWFmZiB0cmFuc3BhcmVudDtcbn1cbi5jb3JuZXItd3JhcHBlci5jcm4tY29uY2F2ZSAuY29ybmVyOm5vdCguY3JuLWJvdHRvbSkge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA1MHB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XG59XG4uY29ybmVyLXdyYXBwZXIuY3JuLWNvbmNhdmUgLmNvcm5lciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29ybmVyLXdyYXBwZXIuY3JuLWNvbmNhdmUgLmNvcm5lci5jcm4tbGlnaHQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMGYwZjA7XG59XG4uY29ybmVyLXdyYXBwZXIuY3JuLWNvbmNhdmUgLmNvcm5lci5jcm4tZ3JlZW4ge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMGQ0YWFmZjtcbn1cbi5jb3JuZXItd3JhcHBlci5jcm4tY29uY2F2ZSAuY29ybmVyLmNybi1kYXJrIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMzMzO1xufVxuXG4uY29ybmVyLXdyYXBwZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogI2U5ZTllYTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiB1bnNldDtcbiAgbGV0dGVyLXNwYWNpbmc6IHVuc2V0O1xuICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gIHBhZGRpbmc6IHVuc2V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgNXB4KTtcbn1cbi5jb3JuZXItd3JhcHBlciBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IHVuc2V0O1xuICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gIHBhZGRpbmc6IHVuc2V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCA1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgNXB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLmNvcm5lci13cmFwcGVyIGEgaTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EkVwiO1xufVxuLmNvcm5lci13cmFwcGVyIGE6aG92ZXIsXG4uY29ybmVyLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmMGYwZjA7XG59XG4uY29ybmVyLXdyYXBwZXIgYTpob3ZlciBpOmJlZm9yZSxcbi5jb3JuZXItd3JhcHBlciBidXR0b246aG92ZXIgaTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BuFwiO1xufVxuLmNvcm5lci13cmFwcGVyIC5jcm4tbGVmdC1kZWxheWVkMjUgKyBhLFxuLmNvcm5lci13cmFwcGVyIC5jcm4tbGVmdC1kZWxheWVkMjUgKyBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogNzV2dztcbn1cbi5jb3JuZXItd3JhcHBlciAuY3JuLWxlZnQtZGVsYXllZDc1ICsgYSxcbi5jb3JuZXItd3JhcHBlciAuY3JuLWxlZnQtZGVsYXllZDc1ICsgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNXB4LCA1cHgpO1xuICBsZWZ0OiAyNXZ3O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvcm5lci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLmNvcm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4uY3JuLXRvcCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiA1MHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY3JuLWJvdHRvbSB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1MHZ3O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1MHZ3O1xyXG5cclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNybi1yaWdodCB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMDB2dztcclxuICBib3JkZXItbGVmdC13aWR0aDogMHZ3O1xyXG59XHJcbi5jcm4tbGVmdCB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwdnc7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5jcm4tbGVmdC1kZWxheWVkMjUge1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMjV2dztcclxuICBib3JkZXItbGVmdC13aWR0aDogNzV2dztcclxufVxyXG4uY3JuLWxlZnQtZGVsYXllZDc1IHtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDc1dnc7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDI1dnc7XHJcbn1cclxuLmNvcm5lci13cmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTBweDtcclxuXHJcbiAgJi5jcm4tb24tZG93biB7XHJcbiAgICB0b3A6IHVuc2V0O1xyXG4gICAgYm90dG9tOiAtNTBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIC5jb3JuZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuY3JuLWZyb20tdG9wIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5jb3JuZXIge1xyXG4gICAgJi5jcm4tbGlnaHQge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmMGYwZjAgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAmLmNybi1kYXJrIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJi5jcm4tZ3JlZW4ge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMGQ0YWFmZiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuY3JuLWNvbmNhdmUge1xyXG4gICAgLmNvcm5lcjpub3QoLmNybi1ib3R0b20pIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNTBweDtcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvcm5lciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICYuY3JuLWxpZ2h0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMGYwZjA7XHJcbiAgICAgIH1cclxuICAgICAgJi5jcm4tZ3JlZW4ge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwZDRhYWZmO1xyXG4gICAgICB9XHJcbiAgICAgICYuY3JuLWRhcmsge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzMzMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvcm5lci13cmFwcGVyIHtcclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllYTsgLy8jMDBhOWQwO1xyXG4gICAgYm9yZGVyOiBub25lOyAvLyMwMGE5ZDA7XHJcbiAgICBjb2xvcjogI2YwZjBmMDtcclxuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogdW5zZXQ7XHJcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgNXB4KTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogdW5zZXQ7XHJcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgNXB4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgaTpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSxcclxuICBidXR0b24ge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgIGNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICBpOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYwNzhcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY3JuLWxlZnQtZGVsYXllZDI1ICsge1xyXG4gICAgYSxcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsZWZ0OiA3NXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNybi1sZWZ0LWRlbGF5ZWQ3NSArIHtcclxuICAgIGEsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1cHgsIDVweCk7XHJcbiAgICAgIGxlZnQ6IDI1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuY29ybmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/common/transcorner/transcorner.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/common/transcorner/transcorner.component.ts ***!
    \************************************************************************/

  /*! exports provided: TranscornerComponent */

  /***/
  function srcAppComponentsCommonTranscornerTranscornerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranscornerComponent", function () {
      return TranscornerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TranscornerComponent =
    /*#__PURE__*/
    function () {
      function TranscornerComponent() {
        _classCallCheck(this, TranscornerComponent);

        this.hrefid = "";
      }

      _createClass(TranscornerComponent, [{
        key: "getCrnClass",
        value: function getCrnClass() {
          return this.getActiveClassFromValidateClasses(".crn-top.crn-bottom.crn-right.crn-left.crn-left-delayed25.crn-left-delayed75.crn-dark.crn-light.crn-green", this.crnClass);
        }
      }, {
        key: "getWrapperClass",
        value: function getWrapperClass() {
          return this.getActiveClassFromValidateClasses(".crn-concave.crn-on-down.crn-from-top.crn-decay-top", this.wrapperClass);
        }
      }, {
        key: "getActiveClassFromValidateClasses",
        value: function getActiveClassFromValidateClasses(serviceClasses) {
          var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var arr = classes.split(/[\.,\s]/);

          if (arr[0] == "") {
            arr.shift();
          }

          var result = {};
          arr.forEach(function (e) {
            var m = new RegExp("^.*(?:(?:[.]" + e + ")[.][^.].*|(?:[.]" + e + "))$").test(serviceClasses);

            if (m) {
              result[e] = true;
            }
          });
          return result;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TranscornerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranscornerComponent.prototype, "crnClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranscornerComponent.prototype, "wrapperClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranscornerComponent.prototype, "hrefid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranscornerComponent.prototype, "customStyl", void 0);
    TranscornerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-transcorner",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transcorner.component.pug */
      "./src/app/components/common/transcorner/transcorner.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transcorner.component.scss */
      "./src/app/components/common/transcorner/transcorner.component.scss")).default]
    })], TranscornerComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.pug":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.pug ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsContactContactComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/contact/contact.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/contact/contact.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/contact/contact.service */
    "./src/app/services/contact/contact.service.ts");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(formBuilder, contactService) {
        _classCallCheck(this, ContactComponent);

        this.formBuilder = formBuilder;
        this.contactService = contactService;
        this.mailForm = this.formBuilder.group({
          name: "",
          address: "",
          message: "",
          email: "",
          phone: "",
          subject: ""
        });
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendMessage",
        value: function sendMessage(e) {
          e.event.preventDefault(); //console.log(e);

          this.contactService.sendMessage(e.inputs).subscribe(function (ins) {
            console.log(ins);
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.pug */
      "./src/app/components/contact/contact.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/filters/multifilter/multifilter.component.pug":
  /*!**************************************************************************!*\
    !*** ./src/app/components/filters/multifilter/multifilter.component.pug ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsFiltersMultifilterMultifilterComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/filters/multifilter/multifilter.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/filters/multifilter/multifilter.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/filters/multifilter/multifilter.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/filters/multifilter/multifilter.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFiltersMultifilterMultifilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.add-filter-button {\n  padding: 15px;\n}\n\n.add-filter,\napp-skill-filter {\n  margin-bottom: 30px !important;\n}\n\n.multi-filter {\n  background: #ececec;\n  padding-top: 30px;\n  border-radius: 5px;\n}\n\n.col-12:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL211bHRpZmlsdGVyL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlcnNcXG11bHRpZmlsdGVyXFxtdWx0aWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL211bHRpZmlsdGVyL211bHRpZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBOztFQUVFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlcnMvbXVsdGlmaWx0ZXIvbXVsdGlmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uYWRkLWZpbHRlci1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5hZGQtZmlsdGVyLFxyXG5hcHAtc2tpbGwtZmlsdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aS1maWx0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29sLTEyOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIiwiYnV0dG9uLmFkZC1maWx0ZXItYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmFkZC1maWx0ZXIsXG5hcHAtc2tpbGwtZmlsdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbC0xMjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/filters/multifilter/multifilter.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/filters/multifilter/multifilter.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MultifilterComponent */

  /***/
  function srcAppComponentsFiltersMultifilterMultifilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultifilterComponent", function () {
      return MultifilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MultifilterComponent =
    /*#__PURE__*/
    function () {
      function MultifilterComponent() {
        _classCallCheck(this, MultifilterComponent);

        this.filterSkills = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MultifilterComponent, [{
        key: "getRemaining",
        value: function getRemaining() {
          return this.filterSet && this.filterSet.length == 0 && this.filterSet[0] ? 1 : this.filterSet[0].length - 1 - this.filterSet.length;
        }
      }, {
        key: "emitAddFilters",
        value: function emitAddFilters(e) {
          this.addFilters.emit(e);
        }
      }, {
        key: "emitChange",
        value: function emitChange(e) {
          this.filterSkills.emit(e);
        }
      }, {
        key: "emitRemoveFilter",
        value: function emitRemoveFilter(e) {
          this.removeFilter.emit(e);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MultifilterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultifilterComponent.prototype, "filterSet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultifilterComponent.prototype, "filterConfiguration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultifilterComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MultifilterComponent.prototype, "filterSkills", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MultifilterComponent.prototype, "addFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MultifilterComponent.prototype, "removeFilter", void 0);
    MultifilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-multifilter",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multifilter.component.pug */
      "./src/app/components/filters/multifilter/multifilter.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multifilter.component.scss */
      "./src/app/components/filters/multifilter/multifilter.component.scss")).default]
    })], MultifilterComponent);
    /***/
  },

  /***/
  "./src/app/components/filters/skill-filter/skill-filter.component.pug":
  /*!****************************************************************************!*\
    !*** ./src/app/components/filters/skill-filter/skill-filter.component.pug ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsFiltersSkillFilterSkillFilterComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/filters/skill-filter/skill-filter.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/filters/skill-filter/skill-filter.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/filters/skill-filter/skill-filter.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/filters/skill-filter/skill-filter.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFiltersSkillFilterSkillFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "select {\n  background-color: inherit;\n  border: 2px solid #e2e4e5;\n}\nselect option {\n  background-color: #f0f0f0;\n}\nselect option:nth-child(odd) {\n  background-color: #f3f3f3;\n}\n.btn {\n  border: 2px solid #e2e4e5;\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  line-height: 15px;\n  padding: 0;\n  background-color: #f0f0f0;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  margin-top: -15px;\n  margin-left: 15px;\n}\n.btn:hover {\n  border-color: #ff497c;\n  background-color: #ff497c;\n}\n.btn:hover:after {\n  color: #333;\n}\n.btn:after {\n  content: \"X\";\n  color: #ff497c;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.filter-grain {\n  border-radius: 50px;\n  font-size: 15px;\n  letter-spacing: 0.2em;\n  line-height: 15px;\n  padding: 0;\n  background-color: #e2e4e5;\n  color: inherit;\n  position: absolute;\n  left: 50%;\n  padding: 5px 10px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.filter-grain:hover {\n  background-color: #05d5ab;\n  color: #333;\n}\n.consistent-filter {\n  color: white;\n  background-color: #1cd6b1;\n  border-color: transparent;\n}\n.consistent-filter ~ .filter-grain {\n  color: white;\n  border: 2px solid #1cd6b1;\n  border: 2px solid #f0f0f0;\n  background-color: #1cd6b1;\n}\n.used-filter {\n  color: #1cd6b1 !important;\n}\n.used-filter:nth-child(odd) {\n  color: #1ddeb8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL3NraWxsLWZpbHRlci9EOlxcc291cmNlXFxFbW1jb2RlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmaWx0ZXJzXFxza2lsbC1maWx0ZXJcXHNraWxsLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL3NraWxsLWZpbHRlci9za2lsbC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURBRTtFQUNFLHlCQUFBO0FDRUo7QURESTtFQUNFLHlCQUFBO0FDR047QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0FDRU47QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNBSjtBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNERjtBREdFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDREo7QURLQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDRkY7QURHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNESjtBREtBO0VBQ0kseUJBQUE7QUNGSjtBREdJO0VBQ0UseUJBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVycy9za2lsbC1maWx0ZXIvc2tpbGwtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMmU0ZTU7XHJcbiAgb3B0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTRlNTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjQ5N2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0OTdjO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlhcIjtcclxuICAgIGNvbG9yOiAjZmY0OTdjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItZ3JhaW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU0ZTU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVkNWFiO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4uY29uc2lzdGVudC1maWx0ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNkNmIxO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgJiB+IC5maWx0ZXItZ3JhaW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFjZDZiMTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNkNmIxO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZWQtZmlsdGVye1xyXG4gICAgY29sb3I6ICMxY2Q2YjEgIWltcG9ydGFudDtcclxuICAgICY6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgIGNvbG9yOiAjMWRkZWI4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwic2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTRlNTtcbn1cbnNlbGVjdCBvcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuc2VsZWN0IG9wdGlvbjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlNGU1O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDk3YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk3Yztcbn1cbi5idG46aG92ZXI6YWZ0ZXIge1xuICBjb2xvcjogIzMzMztcbn1cbi5idG46YWZ0ZXIge1xuICBjb250ZW50OiBcIlhcIjtcbiAgY29sb3I6ICNmZjQ5N2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5maWx0ZXItZ3JhaW4ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU0ZTU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmZpbHRlci1ncmFpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWQ1YWI7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY29uc2lzdGVudC1maWx0ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxY2Q2YjE7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29uc2lzdGVudC1maWx0ZXIgfiAuZmlsdGVyLWdyYWluIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMWNkNmIxO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNkNmIxO1xufVxuXG4udXNlZC1maWx0ZXIge1xuICBjb2xvcjogIzFjZDZiMSAhaW1wb3J0YW50O1xufVxuLnVzZWQtZmlsdGVyOm50aC1jaGlsZChvZGQpIHtcbiAgY29sb3I6ICMxZGRlYjggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/filters/skill-filter/skill-filter.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/filters/skill-filter/skill-filter.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SkillFilterComponent */

  /***/
  function srcAppComponentsFiltersSkillFilterSkillFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillFilterComponent", function () {
      return SkillFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_types_filtered_filtered_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/types/filtered/filtered.module */
    "./src/app/modules/types/filtered/filtered.module.ts");
    /* harmony import */


    var src_app_modules_types_remove_filter_remove_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/types/remove-filter/remove-filter.module */
    "./src/app/modules/types/remove-filter/remove-filter.module.ts");

    var SkillFilterComponent =
    /*#__PURE__*/
    function () {
      function SkillFilterComponent() {
        _classCallCheck(this, SkillFilterComponent);

        this.filterSkills = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SkillFilterComponent, [{
        key: "emitChange",
        value: function emitChange(e) {
          var index = /.*([0-9]+)$/.exec(this.name)[1];
          this.filterSkills.emit(new src_app_modules_types_filtered_filtered_module__WEBPACK_IMPORTED_MODULE_2__["FilteredModule"](e, Number.parseInt(index), e.target.value));
        }
      }, {
        key: "emitRemoveFilter",
        value: function emitRemoveFilter(e) {
          var gid = this.gid;
          this.removeFilter.emit(new src_app_modules_types_remove_filter_remove_filter_module__WEBPACK_IMPORTED_MODULE_3__["RemoveFilterModule"](e, e.target, this.gid));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isSelected",
        value: function isSelected(value) {
          var keys = Object.keys(this.filterConfiguration);
          var config = this.filterConfiguration;
          var selected = false;
          var thisgid = this.gid;
          keys.forEach(function (element) {
            var item = config[element];

            if (item != '000' && item == value && config[thisgid] != value) {
              selected = true;
              return true;
            }
          });
          return selected;
        }
      }, {
        key: "isLastFilter",
        value: function isLastFilter() {
          return Object.keys(this.filterConfiguration).length - 1 == this.gid && this.gid != 0;
        }
      }, {
        key: "getFilterGrain",
        value: function getFilterGrain() {
          return this.gid == 0 ? "sort by" : "then by";
        }
      }, {
        key: "consistentClass",
        value: function consistentClass() {
          return this.filterConfiguration[this.gid] != "000";
        }
      }]);

      return SkillFilterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "filtersCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "filterConfiguration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillFilterComponent.prototype, "gid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SkillFilterComponent.prototype, "filterSkills", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SkillFilterComponent.prototype, "removeFilter", void 0);
    SkillFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-skill-filter",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill-filter.component.pug */
      "./src/app/components/filters/skill-filter/skill-filter.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill-filter.component.scss */
      "./src/app/components/filters/skill-filter/skill-filter.component.scss")).default]
    })], SkillFilterComponent);
    /***/
  },

  /***/
  "./src/app/components/hardskills/hardskills.component.pug":
  /*!****************************************************************!*\
    !*** ./src/app/components/hardskills/hardskills.component.pug ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsHardskillsHardskillsComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/hardskills/hardskills.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/hardskills/hardskills.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/hardskills/hardskills.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/hardskills/hardskills.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHardskillsHardskillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "author-bio {\n  border: 2px solid #e2e4e5;\n  background-color: #efefef;\n  padding: 15px;\n  margin: 0;\n  margin-bottom: 10px;\n}\nauthor-bio:last-child {\n  margin-bottom: 60px;\n}\napp-skill {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJkc2tpbGxzL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmRza2lsbHNcXGhhcmRza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZHNraWxscy9oYXJkc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYXJkc2tpbGxzL2hhcmRza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhdXRob3ItYmlvIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlNGU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtc2tpbGx7XHJcbiAgbWFyZ2luLXRvcDozMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MzBweDtcclxufSIsImF1dGhvci1iaW8ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlNGU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5hdXRob3ItYmlvOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG5hcHAtc2tpbGwge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/hardskills/hardskills.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/hardskills/hardskills.component.ts ***!
    \***************************************************************/

  /*! exports provided: HardskillsComponent */

  /***/
  function srcAppComponentsHardskillsHardskillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HardskillsComponent", function () {
      return HardskillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_hardskills_hard_skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/hardskills/hard-skill.service */
    "./src/app/services/hardskills/hard-skill.service.ts");
    /* harmony import */


    var src_app_services_types_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/types/filter.service */
    "./src/app/services/types/filter.service.ts");
    /* harmony import */


    var src_app_modules_types_filtered_filtered_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/types/filtered/filtered.module */
    "./src/app/modules/types/filtered/filtered.module.ts");

    var HardskillsComponent =
    /*#__PURE__*/
    function () {
      function HardskillsComponent(hardSkillService, filterService) {
        var _this = this;

        _classCallCheck(this, HardskillsComponent);

        this.hardSkillService = hardSkillService;
        this.filterService = filterService;
        this.filterService.getFilters().subscribe(function (filters) {
          _this.filterSet = [filters];
        });
        this.filterConfiguration = {
          0: "000"
        };
      } // life cycle


      _createClass(HardskillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.hardSkillService.getHardSkills().subscribe(function (skills) {
            skills = _this2.getSkillsFilteredByMoreEase(skills);
            _this2.skills = skills;
          });
        }
      }, {
        key: "getFilterNames",
        value: function getFilterNames() {
          return "skillFilter";
        } // Filters

      }, {
        key: "getSkillsFilteredByWeight",
        value: function getSkillsFilteredByWeight() {
          var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return skills.sort(function (previous, next) {
            return previous.preferedOrder < next.preferedOrder ? -1 : 1;
          });
        }
      }, {
        key: "getSkillsFilteredByMoreEase",
        value: function getSkillsFilteredByMoreEase() {
          var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return skills.sort(function (previous, next) {
            return previous.ease > next.ease ? -1 : 1;
          });
        }
      }, {
        key: "getSkillsFilteredByMoreAchievements",
        value: function getSkillsFilteredByMoreAchievements() {
          var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return skills.sort(function (previous, next) {
            return previous.complements.length > next.complements.length ? -1 : 1;
          });
        }
      }, {
        key: "getSkillsFilteredByMoreSkills",
        value: function getSkillsFilteredByMoreSkills() {
          var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return skills.sort(function (previous, next) {
            return previous.skills.length > next.skills.length ? -1 : 1;
          });
        }
      }, {
        key: "getSkillsFilteredByLabel",
        value: function getSkillsFilteredByLabel() {
          var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return skills.sort(function (previous, next) {
            return previous.label < next.label ? -1 : 1;
          });
        } // events

      }, {
        key: "addFilters",
        value: function addFilters(e) {
          var _this3 = this;

          this.filterService.getFilters().subscribe(function (filters) {
            var size = Object.keys(_this3.filterConfiguration).length;
            _this3.filterConfiguration[size] = "000";

            _this3.filterSet.push(filters);
          });
        }
      }, {
        key: "removeFilter",
        value: function removeFilter(e) {
          this.filterSet.pop();
          delete this.filterConfiguration[e.index];
          this.filterSkills(new src_app_modules_types_filtered_filtered_module__WEBPACK_IMPORTED_MODULE_4__["FilteredModule"](null, 0, "000"));
        }
      }, {
        key: "filterSkills",
        value: function filterSkills(e) {
          var _this4 = this;

          var lastValue = this.filterConfiguration[e.index];
          this.filterConfiguration[e.index] = e.code;
          this.swapFreshTwins(e, lastValue); // the filtered version is base on the alphabetic order by default

          var filtered = this.getSkillsFilteredByLabel(this.skills);
          var keys = Object.keys(this.filterConfiguration);
          keys.forEach(function (i) {
            var j = keys.length - 1 - Number(i);
            var filter = _this4.filterConfiguration[j];

            switch (filter) {
              case "001":
                filtered = _this4.getSkillsFilteredByWeight(filtered);
                break;

              case "002":
                filtered = _this4.getSkillsFilteredByMoreEase(filtered);
                break;

              case "003":
                filtered = _this4.getSkillsFilteredByMoreAchievements(filtered);
                break;

              case "004":
                filtered = _this4.getSkillsFilteredByMoreSkills(filtered);
                break;

              default:
            }
          });
          this.skills = filtered;
        }
      }, {
        key: "swapFreshTwins",
        value: function swapFreshTwins(e, lastValue) {
          var indexOfFirst = Object.values(this.filterConfiguration).indexOf(e.code);
          var indexOfLast = Object.values(this.filterConfiguration).indexOf(e.code, indexOfFirst + 1);

          if (e.code != "000" && 0 <= indexOfLast && indexOfFirst != indexOfLast) {
            this.selects = document.querySelectorAll("app-skill-filter select"); // index of the twin to swap with (the other)

            var twinIndex = e.index < indexOfLast ? indexOfLast : indexOfFirst; // putting the last value stored in the cibling twin

            this.filterConfiguration[twinIndex] = lastValue; // matching the configuration with the select values

            this.selects[indexOfFirst].value = this.filterConfiguration[indexOfFirst];
            this.selects[indexOfLast].value = this.filterConfiguration[indexOfLast];
          }
        } // logic

      }, {
        key: "isSelected",
        value: function isSelected(item) {}
      }]);

      return HardskillsComponent;
    }();

    HardskillsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_hardskills_hard_skill_service__WEBPACK_IMPORTED_MODULE_2__["HardSkillService"]
      }, {
        type: src_app_services_types_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
      }];
    };

    HardskillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-hardskills",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hardskills.component.pug */
      "./src/app/components/hardskills/hardskills.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hardskills.component.scss */
      "./src/app/components/hardskills/hardskills.component.scss")).default]
    })], HardskillsComponent);
    /***/
  },

  /***/
  "./src/app/components/hardskills/skill/skill.component.pug":
  /*!*****************************************************************!*\
    !*** ./src/app/components/hardskills/skill/skill.component.pug ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsHardskillsSkillSkillComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/hardskills/skill/skill.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/hardskills/skill/skill.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/hardskills/skill/skill.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/hardskills/skill/skill.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHardskillsSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".author-bio p {\n  text-align: justify;\n  -moz-text-align-last: left;\n       text-align-last: left;\n}\n\n.framed {\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #ececec;\n  padding-top: 15px;\n}\n\n.progress-bar {\n  background-color: #60566f;\n}\n\n.bg-maincolor {\n  background-color: #ff497c;\n}\n\n.bg-maincolor3 {\n  background-color: #05d5ab;\n}\n\n.bg-maincolor4 {\n  background-color: #05d5ab;\n}\n\n.progress {\n  overflow: initial;\n}\n\n.hardSkills {\n  background: white;\n  margin-bottom: 0px;\n}\n\n.hardSkills li {\n  display: inline-block;\n  padding: 0px 5px;\n  margin: 3px;\n  border-radius: 3px;\n  background: white;\n}\n\n.hardSkills + .complement {\n  background: #1f2732;\n  text-align: left;\n  list-style: none;\n}\n\n.hardSkills + .complement li {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJkc2tpbGxzL3NraWxsL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmRza2lsbHNcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oYXJkc2tpbGxzL3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtPQUFBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURIQTtFQUNFLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREpFO0VBQ0UsWUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYXJkc2tpbGxzL3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhvci1iaW8gcCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XHJcbn1cclxuXHJcbi5mcmFtZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDU2NmY7XHJcbn1cclxuLmJnLW1haW5jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk3YztcclxufVxyXG4uYmctbWFpbmNvbG9yMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ZDVhYjtcclxufVxyXG4uYmctbWFpbmNvbG9yNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ZDVhYjtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIG92ZXJmbG93OiBpbml0aWFsO1xyXG59XHJcbi5oYXJkU2tpbGxzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4uaGFyZFNraWxscyArIC5jb21wbGVtZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMWYyNzMyO1xyXG4gIC8vbWFyZ2luLXRvcDo1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiLmF1dGhvci1iaW8gcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcbn1cblxuLmZyYW1lZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA1NjZmO1xufVxuXG4uYmctbWFpbmNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk3Yztcbn1cblxuLmJnLW1haW5jb2xvcjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVkNWFiO1xufVxuXG4uYmctbWFpbmNvbG9yNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWQ1YWI7XG59XG5cbi5wcm9ncmVzcyB7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuXG4uaGFyZFNraWxscyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaGFyZFNraWxscyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5oYXJkU2tpbGxzICsgLmNvbXBsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjMWYyNzMyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhhcmRTa2lsbHMgKyAuY29tcGxlbWVudCBsaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/hardskills/skill/skill.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/hardskills/skill/skill.component.ts ***!
    \****************************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppComponentsHardskillsSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillComponent =
    /*#__PURE__*/
    function () {
      function SkillComponent() {
        _classCallCheck(this, SkillComponent);
      }

      _createClass(SkillComponent, [{
        key: "getProgressClasses",
        value: function getProgressClasses() {
          return this.skill.ease >= 75 ? "bg-maincolor3" : this.skill.ease >= 60 ? "bg-maincolor2" : this.skill.ease >= 50 ? "bg-maincolor5" : "bg-maincolor";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayIfEaseFiltered",
        value: function displayIfEaseFiltered() {
          return Object.values(this.filterConfiguration).indexOf("002") != -1 ? "1" : "0";
        }
      }, {
        key: "displayIfAchievementFiltered",
        value: function displayIfAchievementFiltered() {
          return Object.values(this.filterConfiguration).indexOf("003") != -1 ? "block" : "none";
        }
      }]);

      return SkillComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillComponent.prototype, "skill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillComponent.prototype, "filterConfiguration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillComponent.prototype, "name", void 0);
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-skill",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.pug */
      "./src/app/components/hardskills/skill/skill.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/components/hardskills/skill/skill.component.scss")).default]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.pug":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.pug ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsHomeHomeComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/home/home.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/home/home.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.pug */
      "./src/app/components/home/home.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/navigation/navigation.component.pug":
  /*!*********************************************************************!*\
    !*** ./src/app/components/home/navigation/navigation.component.pug ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsHomeNavigationNavigationComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/home/navigation/navigation.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/home/navigation/navigation.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/home/navigation/navigation.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/home/navigation/navigation.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/navigation/navigation.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/home/navigation/navigation.component.ts ***!
    \********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsHomeNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navigation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.pug */
      "./src/app/components/home/navigation/navigation.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/components/home/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/home/sliders/sliders.component.pug":
  /*!***************************************************************!*\
    !*** ./src/app/components/home/sliders/sliders.component.pug ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsHomeSlidersSlidersComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/home/sliders/sliders.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/home/sliders/sliders.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/home/sliders/sliders.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/home/sliders/sliders.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeSlidersSlidersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 576px) {\n  h2 {\n    font-size: 20pt !important;\n  }\n}\nul {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NsaWRlcnMvRDpcXHNvdXJjZVxcRW1tY29kZVxcQW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcc2xpZGVyc1xcc2xpZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NsaWRlcnMvc2xpZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsMEJBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NsaWRlcnMvc2xpZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBwdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIiwiQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHQgIWltcG9ydGFudDtcbiAgfVxufVxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/sliders/sliders.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/home/sliders/sliders.component.ts ***!
    \**************************************************************/

  /*! exports provided: SlidersComponent */

  /***/
  function srcAppComponentsHomeSlidersSlidersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidersComponent", function () {
      return SlidersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SlidersComponent =
    /*#__PURE__*/
    function () {
      function SlidersComponent() {
        _classCallCheck(this, SlidersComponent);
      }

      _createClass(SlidersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlidersComponent;
    }();

    SlidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sliders",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sliders.component.pug */
      "./src/app/components/home/sliders/sliders.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sliders.component.scss */
      "./src/app/components/home/sliders/sliders.component.scss")).default]
    })], SlidersComponent);
    /***/
  },

  /***/
  "./src/app/components/pens/pens.component.pug":
  /*!****************************************************!*\
    !*** ./src/app/components/pens/pens.component.pug ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPensPensComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/pens/pens.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/pens/pens.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/pens/pens.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/pens/pens.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPensPensComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVucy9wZW5zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/pens/pens.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/pens/pens.component.ts ***!
    \***************************************************/

  /*! exports provided: PensComponent */

  /***/
  function srcAppComponentsPensPensComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PensComponent", function () {
      return PensComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PensComponent =
    /*#__PURE__*/
    function () {
      function PensComponent() {
        _classCallCheck(this, PensComponent);
      }

      _createClass(PensComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PensComponent;
    }();

    PensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pens",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pens.component.pug */
      "./src/app/components/pens/pens.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pens.component.scss */
      "./src/app/components/pens/pens.component.scss")).default]
    })], PensComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/cards/card/card.component.pug":
  /*!*******************************************************************!*\
    !*** ./src/app/components/personal/cards/card/card.component.pug ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalCardsCardCardComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/cards/card/card.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/cards/card/card.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/cards/card/card.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/personal/cards/card/card.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalCardsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mecard {\n  min-height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-flow: wrap;\n}\n\n.diplomed {\n  background: url('/assets/images/diploma.jpg');\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-filter: sepia(0.7) brightness(50%);\n          filter: sepia(0.7) brightness(50%);\n}\n\n.cardControl {\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n}\n\nbutton {\n  padding: 0;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  background: none;\n  border: none;\n}\n\nbutton.previous, button.next {\n  margin: 0;\n}\n\nbutton.previous:active, button.next:active {\n  top: initial !important;\n  -webkit-transform: translateY(3px) !important;\n          transform: translateY(3px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9jYXJkcy9jYXJkL0Q6XFxzb3VyY2VcXEVtbWNvZGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBlcnNvbmFsXFxjYXJkc1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9jYXJkcy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBRUUsU0FBQTtBQ0FKOztBRENJO0VBQ0UsdUJBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL2NhcmRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IHdyYXA7XHJcbn1cclxuXHJcbi5kaXBsb21lZCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2RpcGxvbWEuanBnXCIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZmlsdGVyOiBzZXBpYSgwLjcpIGJyaWdodG5lc3MoNTAlKTtcclxufVxyXG5cclxuLmNhcmRDb250cm9sIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICAmLnByZXZpb3VzLFxyXG4gICYubmV4dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRvcDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVjYXJkIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogd3JhcDtcbn1cblxuLmRpcGxvbWVkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2RpcGxvbWEuanBnXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZmlsdGVyOiBzZXBpYSgwLjcpIGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLmNhcmRDb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmJ1dHRvbi5wcmV2aW91cywgYnV0dG9uLm5leHQge1xuICBtYXJnaW46IDA7XG59XG5idXR0b24ucHJldmlvdXM6YWN0aXZlLCBidXR0b24ubmV4dDphY3RpdmUge1xuICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/personal/cards/card/card.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/personal/cards/card/card.component.ts ***!
    \******************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsPersonalCardsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent(sanitizer) {
        _classCallCheck(this, CardComponent);

        this.sanitizer = sanitizer;
        this.incrementCards = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.decrementCards = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.html = this.sanitizer.bypassSecurityTrustHtml(!this.inlineHtml ? this.htmlLines.join("") : this.inlineHtml);
        }
      }, {
        key: "emitIncrement",
        value: function emitIncrement() {
          this.incrementCards.emit(this.number);
        }
      }, {
        key: "emitDecrement",
        value: function emitDecrement() {
          this.decrementCards.emit(this.number);
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "html", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "inlineHtml", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "htmlLines", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardsCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "incrementCards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "decrementCards", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.pug */
      "./src/app/components/personal/cards/card/card.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/components/personal/cards/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/cards/cards.component.pug":
  /*!***************************************************************!*\
    !*** ./src/app/components/personal/cards/cards.component.pug ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalCardsCardsComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/cards/cards.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/cards/cards.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/cards/cards.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/personal/cards/cards.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalCardsCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWwvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/personal/cards/cards.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/personal/cards/cards.component.ts ***!
    \**************************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppComponentsPersonalCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cards_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cards/cards.service */
    "./src/app/services/cards/cards.service.ts");

    var CardsComponent =
    /*#__PURE__*/
    function () {
      function CardsComponent(cardsService) {
        var _this5 = this;

        _classCallCheck(this, CardsComponent);

        this.cardsService = cardsService;
        this.selectedCard = 0;
        this.cardsService.getCards().subscribe(function (cards) {
          _this5.cards = cards;

          _this5.updateLevel();
        });
      }

      _createClass(CardsComponent, [{
        key: "incrementCards",
        value: function incrementCards(number) {
          this.selectedCard = this.getWarpedIndex(this.selectedCard + 1);
          this.updateLevel();
        }
      }, {
        key: "decrementCards",
        value: function decrementCards(number) {
          this.selectedCard = this.getWarpedIndex(this.selectedCard - 1);
          this.updateLevel();
        }
      }, {
        key: "updateLevel",
        value: function updateLevel() {
          var n = this.cards.length;
          var n2 = Math.ceil(n / 2);
          var step = this.selectedCard;

          for (var i = 1, t = n2; i < t; ++i) {
            step = this.getWarpedIndex(step - 1);
            this.cards[step]["level"] = i;
          }

          step = this.selectedCard;
          this.cards[step]["level"] = 0;

          for (var _i = 1, _t = n2; _i < _t; _i++) {
            step = this.getWarpedIndex(step + 1);
            this.cards[step]["level"] = _i;
          }
        }
      }, {
        key: "getWarpedIndex",
        value: function getWarpedIndex(value) {
          return (this.cards.length + value) % this.cards.length;
        }
      }, {
        key: "getLevelClass",
        value: function getLevelClass(card) {
          return "lvl-" + card.level;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsComponent;
    }();

    CardsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_cards_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"]
      }];
    };

    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cards",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.component.pug */
      "./src/app/components/personal/cards/cards.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.component.scss */
      "./src/app/components/personal/cards/cards.component.scss")).default]
    })], CardsComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/coach/coach.component.pug":
  /*!***************************************************************!*\
    !*** ./src/app/components/personal/coach/coach.component.pug ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalCoachCoachComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/coach/coach.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/coach/coach.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/coach/coach.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/personal/coach/coach.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalCoachCoachComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9jb2FjaC9EOlxcc291cmNlXFxFbW1jb2RlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwZXJzb25hbFxcY29hY2hcXGNvYWNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL2NvYWNoL2NvYWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWwvY29hY2gvY29hY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/personal/coach/coach.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/personal/coach/coach.component.ts ***!
    \**************************************************************/

  /*! exports provided: CoachComponent */

  /***/
  function srcAppComponentsPersonalCoachCoachComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachComponent", function () {
      return CoachComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoachComponent =
    /*#__PURE__*/
    function () {
      function CoachComponent() {
        _classCallCheck(this, CoachComponent);
      }

      _createClass(CoachComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoachComponent;
    }();

    CoachComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-coach",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coach.component.pug */
      "./src/app/components/personal/coach/coach.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coach.component.scss */
      "./src/app/components/personal/coach/coach.component.scss")).default]
    })], CoachComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/coach/services/services.component.pug":
  /*!***************************************************************************!*\
    !*** ./src/app/components/personal/coach/services/services.component.pug ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalCoachServicesServicesComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/coach/services/services.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/coach/services/services.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/coach/services/services.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/personal/coach/services/services.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalCoachServicesServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWwvY29hY2gvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/personal/coach/services/services.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/personal/coach/services/services.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentsPersonalCoachServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-services",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.pug */
      "./src/app/components/personal/coach/services/services.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.scss */
      "./src/app/components/personal/coach/services/services.component.scss")).default]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/codepenio/codepenio.component.pug":
  /*!***********************************************************************!*\
    !*** ./src/app/components/personal/codepenio/codepenio.component.pug ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalCodepenioCodepenioComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/codepenio/codepenio.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/codepenio/codepenio.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/codepenio/codepenio.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/personal/codepenio/codepenio.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalCodepenioCodepenioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYWwvY29kZXBlbmlvL2NvZGVwZW5pby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/personal/codepenio/codepenio.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/personal/codepenio/codepenio.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CodepenioComponent */

  /***/
  function srcAppComponentsPersonalCodepenioCodepenioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodepenioComponent", function () {
      return CodepenioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CodepenioComponent =
    /*#__PURE__*/
    function () {
      function CodepenioComponent() {
        _classCallCheck(this, CodepenioComponent);
      }

      _createClass(CodepenioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CodepenioComponent;
    }();

    CodepenioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-codepenio",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./codepenio.component.pug */
      "./src/app/components/personal/codepenio/codepenio.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./codepenio.component.scss */
      "./src/app/components/personal/codepenio/codepenio.component.scss")).default]
    })], CodepenioComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/me/me.component.pug":
  /*!*********************************************************!*\
    !*** ./src/app/components/personal/me/me.component.pug ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalMeMeComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/me/me.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/me/me.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/me/me.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/components/personal/me/me.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalMeMeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cardFlipper {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9tZS9EOlxcc291cmNlXFxFbW1jb2RlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwZXJzb25hbFxcbWVcXG1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL21lL21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9tZS9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkRmxpcHBlciB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4iLCIuY2FyZEZsaXBwZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/personal/me/me.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/personal/me/me.component.ts ***!
    \********************************************************/

  /*! exports provided: MeComponent */

  /***/
  function srcAppComponentsPersonalMeMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeComponent", function () {
      return MeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MeComponent =
    /*#__PURE__*/
    function () {
      function MeComponent() {
        _classCallCheck(this, MeComponent);
      }

      _createClass(MeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeComponent;
    }();

    MeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-me",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./me.component.pug */
      "./src/app/components/personal/me/me.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./me.component.scss */
      "./src/app/components/personal/me/me.component.scss")).default]
    })], MeComponent);
    /***/
  },

  /***/
  "./src/app/components/personal/projects/projects.component.pug":
  /*!*********************************************************************!*\
    !*** ./src/app/components/personal/projects/projects.component.pug ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsPersonalProjectsProjectsComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/personal/projects/projects.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/personal/projects/projects.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/personal/projects/projects.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/personal/projects/projects.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPersonalProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".book-1 header {\n  background: #fffa;\n  margin-bottom: 5px;\n}\n.book-1 p,\n.book-1 p a {\n  color: white;\n}\n.book-1 .justified {\n  text-align: justify;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  padding: 15px;\n  font-size: 0.8em;\n  background: #111;\n  line-height: 1.5;\n}\n@media (max-width: 767px) {\n  .container {\n    padding: 0;\n  }\n\n  .book {\n    margin: 0;\n    padding: 0;\n    font-size: 12pt;\n  }\n  .book .col-12 {\n    padding: 0;\n  }\n\n  .book-item .book .stage div {\n    padding: 15px 0px;\n  }\n  .book-item .book .stage div p {\n    margin-bottom: 5px;\n  }\n  .book-item .book .stage div header {\n    padding: 5px;\n  }\n  .book-item .book .stage div header h1,\n.book-item .book .stage div header h2,\n.book-item .book .stage div header h3,\n.book-item .book .stage div header h4,\n.book-item .book .stage div header h5,\n.book-item .book .stage div header h6 {\n    font-size: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hbC9wcm9qZWN0cy9EOlxcc291cmNlXFxFbW1jb2RlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwZXJzb25hbFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7O0VBRUUsWUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO09BQUEscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7QURLQTtFQUNFO0lBQ0UsVUFBQTtFQ0ZGOztFRElBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDREY7RURHRTtJQUNFLFVBQUE7RUNESjs7RURJQTtJQUNFLGlCQUFBO0VDREY7RURFRTtJQUNFLGtCQUFBO0VDQUo7RURFRTtJQUNFLFlBQUE7RUNBSjtFRENJOzs7Ozs7SUFNRSxrQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbmFsL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stMSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBwLFxyXG4gIHAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuanVzdGlmaWVkIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuYm9vayB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG5cclxuICAgIC5jb2wtMTIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm9vay1pdGVtIC5ib29rIC5zdGFnZSBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBoMSxcclxuICAgICAgaDIsXHJcbiAgICAgIGgzLFxyXG4gICAgICBoNCxcclxuICAgICAgaDUsXHJcbiAgICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmJvb2stMSBoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmYTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJvb2stMSBwLFxuLmJvb2stMSBwIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYm9vay0xIC5qdXN0aWZpZWQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmJvb2sge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgfVxuICAuYm9vayAuY29sLTEyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmJvb2staXRlbSAuYm9vayAuc3RhZ2UgZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgfVxuICAuYm9vay1pdGVtIC5ib29rIC5zdGFnZSBkaXYgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ib29rLWl0ZW0gLmJvb2sgLnN0YWdlIGRpdiBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuYm9vay1pdGVtIC5ib29rIC5zdGFnZSBkaXYgaGVhZGVyIGgxLFxuLmJvb2staXRlbSAuYm9vayAuc3RhZ2UgZGl2IGhlYWRlciBoMixcbi5ib29rLWl0ZW0gLmJvb2sgLnN0YWdlIGRpdiBoZWFkZXIgaDMsXG4uYm9vay1pdGVtIC5ib29rIC5zdGFnZSBkaXYgaGVhZGVyIGg0LFxuLmJvb2staXRlbSAuYm9vayAuc3RhZ2UgZGl2IGhlYWRlciBoNSxcbi5ib29rLWl0ZW0gLmJvb2sgLnN0YWdlIGRpdiBoZWFkZXIgaDYge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/personal/projects/projects.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/personal/projects/projects.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsPersonalProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-projects",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.pug */
      "./src/app/components/personal/projects/projects.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/components/personal/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/components/softies/softies.component.pug":
  /*!**********************************************************!*\
    !*** ./src/app/components/softies/softies.component.pug ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsSoftiesSoftiesComponentPug(module, exports, __webpack_require__) {
    var req = __webpack_require__(
    /*! !./node_modules/pug-loader!./src/app/components/softies/softies.component.pug */
    "./node_modules/pug-loader/index.js!./src/app/components/softies/softies.component.pug");

    module.exports = (req['default'] || req).apply(req, []);
    /***/
  },

  /***/
  "./src/app/components/softies/softies.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/softies/softies.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSoftiesSoftiesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdGllcy9zb2Z0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/softies/softies.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/softies/softies.component.ts ***!
    \*********************************************************/

  /*! exports provided: SoftiesComponent */

  /***/
  function srcAppComponentsSoftiesSoftiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoftiesComponent", function () {
      return SoftiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SoftiesComponent =
    /*#__PURE__*/
    function () {
      function SoftiesComponent() {
        _classCallCheck(this, SoftiesComponent);
      }

      _createClass(SoftiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SoftiesComponent;
    }();

    SoftiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-softies",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./softies.component.pug */
      "./src/app/components/softies/softies.component.pug")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./softies.component.scss */
      "./src/app/components/softies/softies.component.scss")).default]
    })], SoftiesComponent);
    /***/
  },

  /***/
  "./src/app/modules/types/filtered/filtered.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/types/filtered/filtered.module.ts ***!
    \***********************************************************/

  /*! exports provided: FilteredModule */

  /***/
  function srcAppModulesTypesFilteredFilteredModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilteredModule", function () {
      return FilteredModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var FilteredModule = function FilteredModule(event, index, code) {
      _classCallCheck(this, FilteredModule);

      this.code = code;
      this.event = event;
      this.index = index;
    };

    FilteredModule.ctorParameters = function () {
      return [{
        type: Object
      }, {
        type: Number
      }, {
        type: String
      }];
    };

    FilteredModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], FilteredModule);
    /***/
  },

  /***/
  "./src/app/modules/types/remove-filter/remove-filter.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/types/remove-filter/remove-filter.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RemoveFilterModule */

  /***/
  function srcAppModulesTypesRemoveFilterRemoveFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveFilterModule", function () {
      return RemoveFilterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var RemoveFilterModule = function RemoveFilterModule(event, target, index) {
      _classCallCheck(this, RemoveFilterModule);

      this.event = event;
      this.target = target;
      this.index = index;
    };

    RemoveFilterModule.ctorParameters = function () {
      return [{
        type: MouseEvent
      }, {
        type: HTMLElement
      }, {
        type: Number
      }];
    };

    RemoveFilterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], RemoveFilterModule);
    /***/
  },

  /***/
  "./src/app/services/cards/cards.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/cards/cards.service.ts ***!
    \*************************************************/

  /*! exports provided: CardsService */

  /***/
  function srcAppServicesCardsCardsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsService", function () {
      return CardsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_js_mecards_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/js/mecards.json */
    "./src/assets/js/mecards.json");

    var _assets_js_mecards_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/js/mecards.json */
    "./src/assets/js/mecards.json", 1);

    var CardsService =
    /*#__PURE__*/
    function () {
      function CardsService() {
        _classCallCheck(this, CardsService);
      }

      _createClass(CardsService, [{
        key: "getCards",
        value: function getCards() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_assets_js_mecards_json__WEBPACK_IMPORTED_MODULE_3__);
        }
      }]);

      return CardsService;
    }();

    CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CardsService);
    /***/
  },

  /***/
  "./src/app/services/contact/contact.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/contact/contact.service.ts ***!
    \*****************************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
        "Content-Type": "application/json"
      })
    };

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.sendUrl = "/contact";
      }
      /** POST: add a new hero to the database */


      _createClass(ContactService, [{
        key: "sendMessage",
        value: function sendMessage(contact) {
          console.log("heelo");
          return this.http.post(this.sendUrl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Something bad happened; please try again later.");
        }
      }]);

      return ContactService;
    }();

    ContactService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ContactService);
    /***/
  },

  /***/
  "./src/app/services/hardskills/hard-skill.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/hardskills/hard-skill.service.ts ***!
    \***********************************************************/

  /*! exports provided: HardSkillService */

  /***/
  function srcAppServicesHardskillsHardSkillServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HardSkillService", function () {
      return HardSkillService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _assets_js_hardskills_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/js/hardskills.json */
    "./src/assets/js/hardskills.json");

    var _assets_js_hardskills_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/js/hardskills.json */
    "./src/assets/js/hardskills.json", 1);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HardSkillService =
    /*#__PURE__*/
    function () {
      function HardSkillService(http) {
        _classCallCheck(this, HardSkillService);

        this.http = http;
        this.url = "https://my-json-server.typicode.com/ManuUseGitHub/emmcodeskills/hardskills";
        this.limit = "?_limit=100";
      }

      _createClass(HardSkillService, [{
        key: "getHardSkills",
        value: function getHardSkills() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_assets_js_hardskills_json__WEBPACK_IMPORTED_MODULE_3__); //return this.http.get<HardSkillModule[]>(`${this.url}${this.limit}`);
        }
      }]);

      return HardSkillService;
    }();

    HardSkillService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HardSkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], HardSkillService);
    /***/
  },

  /***/
  "./src/app/services/types/filter.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/types/filter.service.ts ***!
    \**************************************************/

  /*! exports provided: FilterService */

  /***/
  function srcAppServicesTypesFilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterService", function () {
      return FilterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _assets_js_typeFilter_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/js/typeFilter.json */
    "./src/assets/js/typeFilter.json");

    var _assets_js_typeFilter_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/js/typeFilter.json */
    "./src/assets/js/typeFilter.json", 1);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FilterService =
    /*#__PURE__*/
    function () {
      function FilterService(http) {
        _classCallCheck(this, FilterService);

        this.http = http;
        this.url = "https://my-json-server.typicode.com/ManuUseGitHub/emmcodeskills/typeFilter";
        this.limit = "?_limit=100";
      }

      _createClass(FilterService, [{
        key: "getFilters",
        value: function getFilters() {
          //return this.http.get<FilterModule[]>(`${this.url}${this.limit}`);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_assets_js_typeFilter_json__WEBPACK_IMPORTED_MODULE_3__); //return this.http.get<FilterModule[]>(`${this.url}${this.limit}`);
        }
      }]);

      return FilterService;
    }();

    FilterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], FilterService);
    /***/
  },

  /***/
  "./src/assets/js/hardskills.json":
  /*!***************************************!*\
    !*** ./src/assets/js/hardskills.json ***!
    \***************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */

  /***/
  function srcAssetsJsHardskillsJson(module) {
    module.exports = JSON.parse("[{\"id\":1,\"ease\":90,\"preferedOrder\":6,\"img\":\"feather.png\",\"label\":\"Graphics\",\"skills\":[\"The Gimp / photoshop\",\"SVG (Inkskape)\",\"Afinity photo/design\",\"SVG Logo\"],\"complements\":[\"Logo : 10+\",\"Mailfooters : 4\",\"Designs : 100+\"]},{\"id\":2,\"ease\":85,\"preferedOrder\":1,\"img\":\"cloud.png\",\"label\":\"Web Dev\",\"skills\":[\"Vue.js\",\"Angular 8\",\"PHP 7, Laravel 5\",\"PHP Debug\",\"Javascript ES6\",\"jQuery & ajax\",\"Typescript\",\"Gulp & Webpack\",\"animations\",\"SVG\",\"SASS\",\"Less\",\"Stylus\",\"pug/jade\",\"JSON\"],\"complements\":[\"SVG Manipulation : 4\",\"Gulp usage : 3\"]},{\"id\":3,\"ease\":75,\"preferedOrder\":2,\"img\":\"java.png\",\"label\":\"Java\",\"skills\":[\"javaFX\",\"java Swing\",\"JSP/JSF\",\"JEE REST\",\"Junit\",\"JPA/Hibernate\",\"serialize / unserialize\",\"TCP / UDP\",\".jar files\"],\"complements\":[\"JSF websites : 2\",\"applications : 50+\"]},{\"id\":4,\"ease\":75,\"preferedOrder\":5,\"img\":\"database.png\",\"label\":\"Database\",\"skills\":[\"UML\",\"MERISE\",\"SQL\"],\"complements\":[\"Databases : 20+\"]},{\"id\":5,\"ease\":60,\"preferedOrder\":3,\"img\":\"visualstudio.png\",\"label\":\".NET\",\"skills\":[\"li .NET C#\",\"Linq\",\"ASP.NET MVC\",\"MSTest\",\"Entity Framework\",\".exe files\",\"CSV\"],\"complements\":[\"Mono Games : 2\",\"websites : 2\"]},{\"id\":6,\"ease\":55,\"preferedOrder\":4,\"img\":\"android.png\",\"label\":\"Mobile\",\"skills\":[\"Android Java\",\"Android Kotlin\",\"Responsiveness\",\"HTTP request\",\"Recycled activity\",\"push Notifications\",\"application settings\",\"Gradle\"],\"complements\":[\"Android App : 2\"]},{\"id\":7,\"ease\":40,\"preferedOrder\":6,\"img\":\"source.png\",\"label\":\"Source Control\",\"skills\":[\"GIT\",\"BitBucket\",\"Source tree\",\"Git Lab\",\"Mercurial\"],\"complements\":[]},{\"id\":8,\"ease\":35,\"preferedOrder\":6,\"img\":\"rocketbox.png\",\"label\":\"Other\",\"skills\":[\"Linux\",\".bat\",\"python\",\"perl\",\"powershel\",\"C\",\"XML\",\"TeamWork\",\"RedMine\"],\"complements\":[]}]");
    /***/
  },

  /***/
  "./src/assets/js/mecards.json":
  /*!************************************!*\
    !*** ./src/assets/js/mecards.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, default */

  /***/
  function srcAssetsJsMecardsJson(module) {
    module.exports = JSON.parse("[{\"id\":1,\"html\":null,\"htmlLines\":[\"<div class=\\\"withCustomBacground profil\\\">\",\"    </div>\",\"     <div class=\\\"row\\\">\",\"        <div class=\\\"d-md-none col-3 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/team/circle.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-md-12 col-9 picture-zone\\\">\",\"                 <h6>Jean Luc Emmanuel VERHANNEMAN</h6>\",\"        </div>\",\"        <div class=\\\"d-none d-md-block col-md-3 col-lg-4 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/team/circle.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-12 col-sm-12 col-md-9 col-lg-8\\\">\",\"             <div class=\\\"item-content\\\">\",\"                 <p>Fullstack developer, I have high interests in new technologies and solid frameworks. I aim the gain of experience to be more confident and embrace any type of contract.<br></p>\",\"                 <p class=\\\"small-text color-main\\\">Fullstack developer</p>\",\"                 <div class=\\\"author-social fs-14\\\">\",\"                     <!--a.fa.fa-facebook.color-icon(href='#')-->\",\"                     <!--a.fa.fa-twitter.color-icon(href='#')--><a class=\\\"fa fa-github color-icon\\\" target=\\\"blank\\\" href=\\\"https:\\\"github.com/ManuUseGitHub\\\"></a><a class=\\\"fa fa-codepen color-icon\\\" target=\\\"blank\\\" href=\\\"https:\\\"codepen.io/manuusepen\\\"></a><a class=\\\"fa fa-linkedin color-icon\\\" target=\\\"blank\\\" href=\\\"https:\\\"www.linkedin.com/in/emmanuel-verhanneman-5a9381ab/\\\"></a></div>\",\"             </div>\",\"         </div>\",\"     </div>\"]},{\"id\":2,\"html\":null,\"htmlLines\":[\"<div class=\\\"withCustomBacground diplomed\\\">\",\"    </div>\",\"    <div class=\\\"row\\\">\",\"        <div class=\\\"d-md-none col-3 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/helmo.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-md-12 col-9 picture-zone\\\">\",\"                <h6>Graduated IT bachelor in 2020</h6>\",\"        </div>\",\"        <div class=\\\"d-none d-md-block col-md-3 col-lg-4 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/helmo.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-12 col-sm-12 col-md-9 col-lg-8\\\">\",\"            <div class=\\\"item-content\\\">\",\"                <p>After lots of efforts, I finally succeed. That was long, not easy, but in the end I learned so much. For me this is the start of a great adventure that has already started! <br></p>\",\"                <p class=\\\"small-text color-main\\\">From HELMo Guillemens Campus at Liège</p>\",\"            </div>\",\"        </div>\",\"</div>\"]},{\"id\":3,\"html\":null,\"htmlLines\":[\"<div class=\\\"withCustomBacground graphdesign\\\">\",\"    </div>\",\"    <div class=\\\"row\\\">\",\"        <div class=\\\"d-md-none col-3 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/FAVPNG_inkscape-vector-graphics-editor-logo_hqb02Uza.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-md-12 col-9 picture-zone\\\">\",\"                <h6>A part developer a part designer</h6>\",\"        </div>\",\"        <div class=\\\"d-none d-md-block col-md-3 col-lg-4 picture-zone\\\">\",\"            <div class=\\\"item-media covage\\\"><img src=\\\"assets/images/FAVPNG_inkscape-vector-graphics-editor-logo_hqb02Uza.png\\\" alt=\\\"\\\" /></div>\",\"        </div>\",\"        <div class=\\\"col-12 col-sm-12 col-md-9 col-lg-8\\\">\",\"            <div class=\\\"item-content\\\">\",\"                <p style=\\\"color: lightgoldenrodyellow;\\\">Sometimes asked for making a logo, I grab my design tools and create what logo or what email footer the client needs. Logos are made in SVG. I just take 50€ per production but every update is free of extra charge.<br></p>\",\"                <p class=\\\"small-text color-main\\\">Inkskape | The Gimp | Afinity</p>\",\"            </div>\",\"        </div>\",\"</div>\"]}]");
    /***/
  },

  /***/
  "./src/assets/js/typeFilter.json":
  /*!***************************************!*\
    !*** ./src/assets/js/typeFilter.json ***!
    \***************************************/

  /*! exports provided: 0, 1, 2, 3, 4, default */

  /***/
  function srcAssetsJsTypeFilterJson(module) {
    module.exports = JSON.parse("[{\"code\":\"000\",\"title\":\"Select ...\",\"default\":false},{\"code\":\"001\",\"title\":\"With weight\",\"default\":true},{\"code\":\"002\",\"title\":\"With ease\",\"default\":false},{\"code\":\"003\",\"title\":\"With achievements\",\"default\":false},{\"code\":\"004\",\"title\":\"Most skilled\",\"default\":false}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\source\Emmcode\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map