$(document).ready( function() {
	$(".tomato").fadeTo(1500, 1, function() {
		$(".greenyellow").slideDown(1000, function() {
			$(".lightblue").animate({ opacity: '1', fontSize: '-=50px'}, 1000, function() {
				$(".purple").animate({ fontSize: '100px' }, 1500, function() {
					$(".white").animate({ opacity: '1', fontSize: '-=50px' }, 1000, function() {
						$(".pink").animate({ width: 'toggle' }, 1000, function() {
							$(".orange").fadeTo(1500, 1, function() {
								$(".green").animate({ fontSize: '100px' }, 1500, function() {
									$(".blue").fadeTo(1000, 1, function() {
										$(".letter").css("color", "purple");
										var myfunc=setInterval(function() {
											$(".letter").fadeToggle(500);
										},500);
									});
								})
							})
						})
					})
				});
			});
		});
	});
})