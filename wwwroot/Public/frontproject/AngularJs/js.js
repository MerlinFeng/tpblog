	
	var oDiv=$('.lunbo ul li div');
		
		for(var i=0;i<oDiv.length;i++){
			oDiv.eq(i).css({'background':"url(images/"+i+".jpg) no-repeat",'background-size':'100% 350px'});	
		} 
		//banner图轮播
		var oul=$('.lunbo ul');
		var ali=$('.lunbo ul li');
		var numLi=$('.lunbo ol li');
		var aliWidth=$('.lunbo ul li').eq(0).width();
		var _now=0;//控制数字样式的计数器
		var _now2=0;//控制图片运动距离的计数器
		var timeId=null;
		

		numLi.click(function(){
			var index=$(this).index();
			_now=index;
			_now2=index;
			$(this).addClass('current').siblings().removeClass();
			oul.animate({'left':-aliWidth*index},500);
		});
	//图片自动轮播
	autoPlay();
	function autoPlay(){
		timeId=setInterval(function(){
			if(_now==numLi.length-1){
				ali.eq(0).css({
					'position':'relative',
					'left': oul.width()
				});
				_now=0;
			}else{
				_now++;
			}
			_now2++;

			numLi.eq(_now).addClass('current').siblings().removeClass();
			// alert(aimg.eq(_now).attr('alt'));
			
			oul.animate({'left':-aliWidth*_now2},500,function(){
				if(_now==0){
				ali.eq(0).css('position','static');
				oul.css('left',0);
				_now2=0;
			}
			});
		
		},1500);
	}
	$('.lunbo').hover(function(){
		clearInterval(timeId);
	},function(){
		autoPlay();	
		
	});
	//登录页面
	var oBtn=$('#show');
	var oBtn = $('#show');
	var popWindow = $('.popWindow');
	var oClose = $('.popWindow h3 span');

	//浏览器可视区域的宽度
	var browserWidth = $(window).width();

	//浏览器可视区域的高度
	var browserHeight = $(window).height();

	//浏览器纵向滚动条距离上边界的值
	var browserScrollTop = $(window).scrollTop();
	//弹出窗口的宽度
	var popWindowWidth = popWindow.outerWidth(true);
	//弹出窗口的高度
	var popWindowHeight = popWindow.outerHeight(true);
	var positionLeft = browserWidth/2 - popWindowWidth/2;
	var positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;


	var oMask = '<div class="mask"></div>'
	//遮照层的宽度
	var maskWidth = $(document).width();
	var maskHeight=$(document).height();
	//遮照层的高度
	var maskHeight = $(document).height();
	oBtn.click(function(){
		popWindow.show().animate({
					'left':positionLeft+'px',
					'top':positionTop+'px'
		},500);

		$('body').append(oMask);
		$('.mask').width(maskWidth).height(maskHeight);

	});
	$(window).resize(function(){	
		if(popWindow.is(':visible')){
			browserWidth = $(window).width();
			browserHeight = $(window).height();
			positionLeft = browserWidth/2 - popWindowWidth/2;
			positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;

			popWindow.animate({
						'left':positionLeft+'px',
						'top':positionTop+'px'
			},500);		
		}
	});
	$(window).scroll(function(){
		if(popWindow.is(':visible')){
			browserScrollTop = $(window).scrollTop();
			browserScrollLeft = $(window).scrollLeft();
			positionLeft = browserWidth/2 - popWindowWidth/2;
			positionTop = browserHeight/2 - popWindowHeight/2+browserScrollTop;
			popWindow.animate({
						'left':positionLeft+'px',
						'top':positionTop+'px'
			},500).dequeue();
		}
				
	});
	oClose.click(function(){
		popWindow.hide();
		$('.mask').remove();
	});

	//声明模块
		angular.module('myapp',[])
		//控制器
		.controller('goodsListController',function($scope){
			$scope.goods=[
				{id:0,name:'全球通 榴莲饼',price:29.9,url:'images/01.jpg'},
				{id:1,name:'奥利奥巧克力棒',price:39.9,url:'images/02.jpg'},
				{id:2,name:'时尚中国风男士足银指',price:168.00,url:'images/03.jpg'},
				{id:3,name:'意大利进口饼干',price:28.5,url:'images/04.jpg'},
				{id:4,name:'个性时尚男士表',price:29.9,url:'images/05.jpg'},
				{id:5,name:'西部数据 蓝盘',price:329.00,url:'images/06.jpg'},
				{id:6,name:'金利来 为不凡而生',price:600.90,url:'images/07.jpg'},
				{id:7,name:'VR虚拟现实',price:129.9,url:'images/08.jpg'},
				{id:8,name:'小米note全网通',price:1499,url:'images/09.jpg'},
				{id:9,name:'乐帆TVR看电视',price:2299.9,url:'images/10.jpg'},
				{id:10,name:'性感欧洲杯',price:99.9,url:'images/11.jpg'},
				{id:11,name:'香奈儿时尚包',price:339.9,url:'images/12.jpg'},
				{id:12,name:'度假连衣裙',price:59.9,url:'images/13.jpg'},
				{id:13,name:'国际大牌 夏季上新',price:29.9,url:'images/14.jpg'},
				{id:14,name:'大牌洗护',price:29.9,url:'images/15.jpg'},
			];
			// 购物车数组
			$scope.cartList = {};
			$scope.buy = function(id){
				var index = getIndex(id,$scope.goods);
				$scope.cartList['a'+index] = $scope.goods[index];
				if($scope.cartList['a'+index].num==undefined){
					$scope.cartList['a'+index].num = 1;					
				}else{
					++$scope.cartList['a'+index].num;
				}

				// console.log($scope.cartList['a'+index].num );
				// $scope.cartList['a'+index].num=0;
			}

			
			// 购物车的商品总数
			$scope.getCartNum = function(){
				var num = 0;
				angular.forEach($scope.cartList,function(item){
					num +=  parseInt(item.num);

				});

				return num;	
			}
			// 用 产品 id 获得 在 $scope.goods 数组里对应的 key
			function getIndex(id,obj){
				var index = 0;
				angular.forEach(obj,function(item,key){
					if(id==item.id){
						index = key;
					}
				});
				return index;
			}
			// 订单总价
			$scope.totalPrice = function(){
				var total = 0;
				angular.forEach($scope.cartList,function(item){
					total += item.price*item.num;
				})
				return total;
			}
			// 删除指定的商品
			$scope.remove = function(id){
				var index =  getIndex(id,$scope.cartList);
				$scope.cartList[index].num=0;
				delete $scope.cartList[index];
				
			}
			// 添加商品数量
			$scope.add = function(id){
				var index =  getIndex(id,$scope.cartList);
				++$scope.cartList[index].num;

			}
				// 减少商品数量
			$scope.jian = function(id){
				var index =  getIndex(id,$scope.cartList);
				var num = $scope.cartList[index].num;

				if(num>1){
					--$scope.cartList[index].num;
				}else{
					// 如果商品数量为 0 就把商品从购物车中清除

					$scope.remove(id)

					if($scope.getCartNum()){
						$scope.cartBlockNone = false;
					}else{
						// 没有商品
						$scope.cartBlockNone = true;
					}


				}
			}
				// 清空购物车
			$scope.clearCart = function(){
				$scope.cartBlockNone = true;
				angular.forEach($scope.cartList,function(item){
					item.num = 0;
				});
				$scope.cartList = {};
			}
				// 打开购物车的弹框
			$scope.selectCart = function(){

				// alert($scope.getCartNum());

				if($scope.getCartNum()){
					$scope.cartBlockNone = false;
				}else{
					// 没有商品
					$scope.cartBlockNone = true;
				}

				document.getElementById('cartnone').style.display = 'block';
			}

			$scope.noneCart=function(){
			document.getElementById('cartnone').style.display = 'none';

		}

		});


		var oCartLi=$('.cart ul li');
		oCartLi.click(function(){
			$(this).addClass('current1').siblings().removeClass();
		});
