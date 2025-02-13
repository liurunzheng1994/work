var whirMain = {
	Home: function() {
		//Top0001
		$('body').addClass("Top0001_body");
		Top0001('.Top0001')
		function Top0001(v) {
			$(v).find(".Menu li").each(function(index, element) {
				var num = $(this).find(".sub").find("dl").find("dd").length
				if (num >= 1) {
					$(this).addClass("has-sub");
					$(this).hover(function(e) {
						$(this).addClass("aon");
						$(this).siblings().removeClass("aon");
						var subw = $(window).width() - $(v).outerWidth();
						$(this).find(".sub").width(subw);
						$(this).find(".sub").addClass("sub-show");
					}, function() {
						$(this).find(".sub").width(0);
						$(this).find(".sub").removeClass("sub-show");
						$(this).removeClass("aon");
						$("#m" + m).addClass("aon");
					});
				}
			});
			//移动端

		}
		$(".Top0001 .Menu li").click(function(e) {
			var num = $(this).index()
			$(this).addClass("aon");
			$(this).siblings().removeClass("aon");
		});
		$(".Top0001 .Menu li").eq(0).click()
		$(".m0  a").click(function() {
			$("html,body").animate({ scrollTop: $(".Floor0001").offset().top }, 500);
		});
		$(".m1   a").click(function() {
			$("html,body").animate({ scrollTop: $(".Floor0002").offset().top }, 500);
		});
		$(".m2   a").click(function() {
			$("html,body").animate({ scrollTop: $(".Floor0003").offset().top }, 500);
		});
		$('.Bottom_menu ul li').eq(0).addClass("on");
		$(".Bottom_menu ul li").each(function(e) {
			var num = $(this).index();
			var _top = $('.Contain .Part').eq(num).find('.home_title').offset().top;
			$(window).scroll(function() {
				var scrollBottom = $(window).scrollTop() + 200;
				if (scrollBottom >= _top) {
					$('.Bottom_menu ul li').eq(num).addClass("on").siblings().removeClass("on");
				}
			})
		});





		$(function() {
			setTimeout(function() {
				$(".Page-open").attr("aos", "zoom-out-down");
			}, 2000);

			setTimeout(function() {
				$(".Page-open").hide();
			}, 3000);

		})




		//Floor0001
		function scroll() {
			$(".Floor0001 .num dd ").eq(0).find('.con').width('90%');
			$(".Floor0001 .num dd ").eq(1).find('.con').width('90%');
			$(".Floor0001 .num dd ").eq(2).find('.con').width('90%');
			$(".Floor0001 .num dd ").eq(3).find('.con').width('70%');
			$(".Floor0001 .num dd ").eq(4).find('.con').width('50%');
			$(".Floor0001 .num dd ").eq(5).find('.con').width('50%');
			$(".Floor0001 .num dd ").eq(6).find('.con').width('50%');
		};
		scroll()
		//Floor0002
		$('.Floor0002 .ul').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			dots:true,
			infinite: false,
			autoplay: false,
			Speed: 1000,
			autoplaySpeed: 4000,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},]
		});
		//Floor0003
		$(".Floor0003 .tab .name").click(function(e) {
			$(".Floor0003 .tab dl").toggle();
		});
		$(".Floor0003 .tab dd").click(function(e) {
			$(".Floor0003 .tab dl").hide();
			var num = $(this).index();
			$(document).scrollTop(1000);
			$(this).addClass("on");
			$(this).siblings().removeClass("on");
		});
		$(".Floor0003 .tab dd").eq(0).click()
		const stalker = document.getElementById('stalker');
		var hovFlag = false;
		document.addEventListener('mousemove', function(e) {
			stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
		});
		const linkElem = document.querySelectorAll('a:not(.no_stick_)');
		for (var i = 0; i < linkElem.length; i++) {
			linkElem[i].addEventListener('mouseover', function(e) {
				hovFlag = true;
				stalker.classList.add('hov_');
			});
			linkElem[i].addEventListener('mouseout', function(e) {
				hovFlag = false;
				stalker.classList.remove('hov_');
			});
		}
		$(".Floor0003 .tab .name").click(function(e) {
			$(".Float_box").fadeIn(500);
		});
		$(".Float_box .close").click(function(e) {
			$(".Float_box").fadeOut(500);
		});


		//AOS
		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
			disable: 'mobile'
		});
	}
}
