(function($) {
    "use strict";
	
	// ______________ Horizonatl
	$(document).ready(function() {
      $("a[data-theme]").click(function() {
        $("head link#theme").attr("href", $(this).data("theme"));
        $(this).toggleClass('active').siblings().removeClass('active');
      });
      $("a[data-effect]").click(function() {
        $("head link#effect").attr("href", $(this).data("effect"));
        $(this).toggleClass('active').siblings().removeClass('active');
      });
    });
	
	
	// ______________Full screen
	$("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })
	
	
	// ______________ Page Loading
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________Back to top Button
	$(window).on("scroll", function(e) {
    	if ($(this).scrollTop() > 0) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $("#back-to-top").on("click", function(e){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	
	// ______________ StarRating
	var ratingOptions = {
		selectors: {
			starsSelector: '.rating-stars',
			starSelector: '.rating-star',
			starActiveClass: 'is--active',
			starHoverClass: 'is--hover',
			starNoHoverClass: 'is--no-hover',
			targetFormElementSelector: '.rating-value'
		}
	};
	$(".rating-stars").ratingStars(ratingOptions);
	
	// ______________ Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: '#e5e9f2',
			  lineCap: 'round'
			});
		});
	}
	
	// ______________ Global Search
	$(document).on("click", "[data-toggle='search']", function(e) {
		var body = $("body");

		if(body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		}else{
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function() {
		var w = $(window);
		if(w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function(e) {
				if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		}else{
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);
	
	const DIV_CARD = 'div.card';
	// ______________ Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// ______________ Popover
	$('[data-toggle="popover"]').popover({
		html: true
	});
	
	// ______________ Card Remove
	$(document).on('click', '[data-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});
	
	// ______________ Card Collapse
	$(document).on('click', '[data-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// ______________ Card Fullscreen
	$(document).on('click', '[data-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// sparkline1
	$(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4], {
		height: 20,
		type: 'bar',
		colorMap: {
			'7': '#a1a1a1'
		},
		barColor: '#f72d66'
	});

	// sparkline2
	$(".sparkline_bar1").sparkline([3, 4, 3, 4, 5, 4, 5, 6, 4, 6,], {
		height: 20,
		type: 'bar',
		colorMap: {
			'7': '#a1a1a1'
		},
		barColor: '#2d66f7'
	});
	
	// ______________Skins
	 
	/*//////////////////// Horizontal skins  //////////////////////*/
	
	$('body').addClass("hor-skin1");  
	
	// $('body').addClass("hor-skin2"); //
	
	// $('body').addClass("hor-skin3"); //
	
	// $('body').addClass("menu1"); //
	
	// $('body').addClass("menu2"); //
	 
	/*//////////////////// Left-menu skins  //////////////////////*/
	
	$('body').addClass("side-skin1");  
	
	//$('body').addClass("side-skin2"); // 
	
	//$('body').addClass("side-skin3"); // 
	


		'use strict'
		/*-----echart2-----*/
	  
		var chartdata = [
		  {
			
			  name: 'sales',
			  type: 'line',
			smooth: true,
			pointShape: { type: 'triangle', rotation: 180 },
			  data: [10, 65, 89, 93, 109, 120],
			color:[ 'rgb(138,207,87)']
			},
			{
			  name: 'Profit',
			  type: 'line',
			smooth: true,
			pointstyle:'triangle',
			size:10,
			  data: [0,58,16,78,98,108,119],
			color:[ 'rgb(253,136,81)']
			}
		];
	  
		var chart = document.getElementById('echart1');
		var barChart = echarts.init(chart);
	  
		var option = {
		  grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		  },
		  
		  tooltip: {
			  show: true,
			  showContent: true,
			  alwaysShowContent: true,
			  triggerOn: 'mousemove',
			  trigger: 'axis',
			  axisPointer:
			  {
				  label: {
					  show: false,
				  }
			  }
	  
		  },
		xAxis: {
		  data: [ 'Category', 'Category', 'Category', 'Category'],
		  axisLine: {
			lineStyle: {
			  color: 'rgb(0,0,0)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: 'rgb(0,0,0)'
		  }
		},
		yAxis: {
		  // data:['0,20,40,60,80,100,120'],
		  splitLine: {
			lineStyle: {
			  color: 'rgb(67, 87, 133, .09)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgb(0,0,0)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: 'rgb(0,0,0)'
		  }
		},
		  series: chartdata,
		  color:[ '#2d66f7','rgb(138,207,87)', '#cedbfd',]
		};
	  
		barChart.setOption(option);
	  
	  
		/*-----echart1-----*/
		var chartdata2 = [
		  {
			name: 'sales',
			type: 'line',
			smooth: true,
			data: [20, 45, 69, 100, 106, 115],
			color:[ 'rgb(138,207,87)']
		  },
		  {
			name: 'Profit',
			type: 'line',
			smooth: true,
			size:10,
			data: [0,58,16,78,98,108,119],
			color:[ 'rgb(253,136,81)']
		  }
		];
	  
		var chart2 = document.getElementById('echart2');
		var barChart2 = echarts.init(chart2);
	  
		var option2 = {
		  grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		  },
		  tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
			  label: {
				show: false,
			  }
			}
		
		  },
		  xAxis: {
			data: [ 'Category', 'Category', 'Category', 'Category'],
			axisLine: { 
			  lineStyle: {
				color: 'rgb(0,0,0)'
				
			  }
			},
			axisLabel: {
			  fontSize: 10,
			  color: 'rgb(0,0,0)'
			}
		  },
		  yAxis: {
			// data:['0,20,40,60,80,100,120'],
			splitLine: {
			  lineStyle: {
				color: 'rgb(67, 87, 133, .09)'
			  }
			},
			axisLine: {
			  lineStyle: {
				color: 'rgb(0,0,0)'
			  }
			},
			axisLabel: {
			  fontSize: 10,
			  color: 'rgb(0,0,0)'
			}
		  },
		  series: chartdata2,
		  color:[ '#2d66f7','rgb(138,207,87)', '#cedbfd',]
	  
		};
		barChart2.setOption(option2);


	
})(jQuery);

