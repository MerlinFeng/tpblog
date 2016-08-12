
var timer;//定时器
//自定义变量
		var nameLis=['张笑','关晓彤','沈佳宜','李婷','王晓梅','石佳慧','吴小莉']
		var imgLis=['img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'];
		var msLis=[
					['img/food/1.jpg','img/food/2.jpg','img/food/3.jpg','img/food/4.jpg','img/food/5.jpg'],
					['img/food/6.jpg','img/food/7.jpg','img/food/8.jpg','img/food/9.jpg','img/food/10.jpg','img/food/9.jpg'],
					['img/food/1.jpg','img/food/2.jpg','img/food/3.jpg','img/food/4.jpg','img/food/5.jpg'],
					['img/food/6.jpg','img/food/7.jpg','img/food/8.jpg','img/food/9.jpg','img/food/10.jpg','img/food/9.jpg']
				];
		var lyLis=[
					['img/ly/1.jpg','img/ly/2.jpg','img/ly/3.jpg','img/ly/4.jpg','img/ly/5.jpg'],
					['img/ly/6.jpg','img/ly/7.jpg','img/ly/8.jpg','img/ly/9.jpg','img/ly/10.jpg','img/ly/11.jpg'],
					['img/ly/1.jpg','img/ly/2.jpg','img/ly/3.jpg','img/ly/4.jpg','img/ly/5.jpg'],
					['img/ly/6.jpg','img/ly/7.jpg','img/ly/8.jpg','img/ly/9.jpg','img/ly/10.jpg','img/ly/11.jpg']
				];
		var gwLis=[
					['img/shopping/1.jpg','img/shopping/2.jpg','img/shopping/3.jpg','img/shopping/4.jpg','img/shopping/5.jpg'],
					['img/shopping/6.jpg','img/shopping/7.jpg','img/shopping/8.jpg','img/shopping/9.jpg','img/shopping/10.jpg','img/shopping/11.jpg'],
					['img/shopping/1.jpg','img/shopping/2.jpg','img/shopping/3.jpg','img/shopping/4.jpg','img/shopping/5.jpg'],
					['img/shopping/6.jpg','img/shopping/7.jpg','img/shopping/8.jpg','img/shopping/9.jpg','img/shopping/10.jpg','img/shopping/11.jpg'],
				];
		var shLis=[
					['img/sh/1.jpg','img/sh/2.jpg','img/sh/3.jpg','img/sh/4.jpg','img/sh/5.jpg'],
					['img/sh/6.jpg','img/sh/7.jpg','img/sh/8.jpg','img/sh/9.jpg','img/sh/10.jpg','img/sh/11.jpg'],
					['img/sh/1.jpg','img/sh/2.jpg','img/sh/3.jpg','img/sh/4.jpg','img/sh/5.jpg'],
					['img/sh/6.jpg','img/sh/7.jpg','img/sh/8.jpg','img/sh/9.jpg','img/sh/10.jpg','img/sh/11.jpg'],
				];
		var wrap=$('#wrap');
		var big=$('#big');
		//居中
		big.css({
			'top':($(window).height()-big.height())/2,
			'left':($(window).width()-big.width())/2,
			'position':'absolute'
		});
		wrap.css({
			'top':($(window).height()-wrap.height())/2-35,
			'left':($(window).width()-wrap.width())/2-20,
			'position':'absolute'
		});
		//定时器，名字对应图片随机跳动	
		$('#start').click(function(){
	
			if($(this).text()=='开始'){
				$(this).html('停').css('color','red');
				timer=setInterval(function(){
					var num=parseInt(Math.random()*1000)%nameLis.length;
					$('#pic').css('border','1px solid green');
					$('#info1,#info2,#info3,#info4').fadeOut(1000);
					$('#name').html(nameLis[num]).css('color','#fff');
					$('#pic').attr('src',imgLis[num]);
					},50)
				}else{
					$(this).html('开始').css('color','green');
					$('#name').css('color','red');
					$('#name').append('<span>的关键词</span>');
					//个人简介淡入
					$('#info1,#info2,#info3,#info4').fadeIn('5000')
					$('#pic').css('border','1px solid red');
					clearInterval(timer);
					

					//鼠标移入关键词：美食,旅游,购物，生活
					$('#info1,#info2,#info3,#info4').mouseover(function(){
						$('#big ul').css({'display':'block','opacity':'1'});
						//移入关键词时候的样式改变
						var ulGe = 0;
						var imgArr;
						switch($(this).prop('id')){
							case 'info1':
								imgArr = msLis;
								$(this).css({'background':'pink','color':'red'});
								break;
							case 'info2':
								imgArr = lyLis;
								$(this).css({'background':'green','color':'black'});
								break;
							case 'info3':
								imgArr = gwLis;
								$(this).css({'background':'skyBlue','color':'black'});
								break;
							default:
								imgArr = shLis;
								$(this).css({'background':'red','color':'#fff'});
								break;
						}
						//移入不同关键词时，不同组图片的替换
						$('#big ul').each(function(){
							var liGe = 0;
							$(this).find('li').each(function(){
								$(this).find('img').prop('src',imgArr[ulGe][liGe])
								liGe++;
							});
							ulGe ++;
						})
						publicInterval($(this));	
					})
				}			
			});
		//每组关键词中的图片依次遍历，样式变化
		var timerInter;
		function publicInterval(dom){
			var ii = 0;
			//解决同时加载多张图片的bug
			if(timerInter)
			{
				clearInterval(timerInter);
			}
			timerInter = setInterval(function(){
				if(ii >= $('#big ul li').length) ii = 0;
				$('#big ul li').eq(ii).fadeOut('slow', function() {
					$(this).css('opacity',1);
					$(this).show();
					ii++;
				});	
			},500);

			dom.mouseout(function(){
				$(this).css({'background':'','color':''});
			});
			$('#big ul li img').mouseover(function() {
				clearInterval(timerInter);
			});
		}
		
			