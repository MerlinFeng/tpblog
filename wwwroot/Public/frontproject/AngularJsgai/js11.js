	// banner图轮播开始

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
//banner轮播图结束

//我的登录页面开始
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

//我的登录页面结束

//AngularJs数据绑定开始
	// var num_1=0;
	// 	$("select").change(function(){		
	// 		if($("option:selected").val()==0){
	// 			shopType(0);
	// 		}else if($("option:selected").val()==1){
	// 			shopType(1);
	// 		}else if($("option:selected").val()==2){
	// 			shopType(2);
	// 		}
	// 		console.log(num_1);	
	// 	});
	// $(".shopType").attr("ng-repeat","item in goods["+num_1+"]");
	
	
	//声明模块
	angular.module('myapp',[])
		//控制器
	.controller('goodsListController',function($scope){
			//商品种类
			$scope.goods=[
				[
					{id:0,name:'美味香酥 榴莲饼',price:29.9,url:'images/01.jpg'},
					{id:1,name:'癞蛤蟆与白条鸡完美搭配',price:39.9,url:'images/02.jpg'},
					{id:2,name:'童趣花样饼干',price:50.00,url:'images/03.jpg'},
					{id:3,name:'固齿奶酪',price:28.5,url:'images/04.jpg'},
					{id:4,name:'旺仔小馒头',price:29.9,url:'images/05.jpg'},
					{id:5,name:'开心果',price:88.00,url:'images/06.jpg'},
					{id:6,name:'甜美糖球',price:40.90,url:'images/07.jpg'},
					{id:7,name:'童趣五彩软糖',price:29.9,url:'images/08.jpg'},
					{id:8,name:'四色磨牙小零食',price:49.9,url:'images/09.jpg'},
					{id:9,name:'孕妈咪饼干',price:99.9,url:'images/10.jpg'},
					{id:10,name:'唐炒小叶栗子',price:19.9,url:'images/11.jpg'},
					{id:11,name:'办公室巧吃间',price:39.9,url:'images/12.jpg'},
					{id:12,name:'美味海苔',price:9.9,url:'images/13.jpg'},
					{id:13,name:'香辣牛排',price:29.9,url:'images/14.jpg'},
					{id:14,name:'自然季葡萄',price:39.9,url:'images/15.jpg'},
				],
				[
					{id:0,name:'古典名著 红楼梦',price:199.9,url:'images/a.jpg'},
					{id:1,name:'四大名著 西游记',price:89.9,url:'images/b.jpg'},
					{id:2,name:'善良的公主',price:50.00,url:'images/c.jpg'},
					{id:3,name:'老梁批四大名著',price:49.5,url:'images/d.jpg'},
					{id:4,name:'四大名著集锦',price:229.9,url:'images/e.jpg'},
					{id:5,name:'金庸经典小说 神雕侠侣',price:88.00,url:'images/f.jpg'},
					{id:6,name:'当代棋艺名局佳作',price:40.90,url:'images/g.jpg'},
					{id:7,name:'金庸经典小说 书剑恩仇录',price:29.9,url:'images/h.jpg'},
					{id:8,name:'金庸经典小说 倚天屠龙记',price:29.9,url:'images/i.jpg'},
					{id:9,name:'世界名著 大卫.科波菲尔',price:19.9,url:'images/k.jpg'},
					{id:10,name:'童话 大林和小林',price:19.9,url:'images/l.jpg'},
					{id:11,name:'人类理智新论',price:39.9,url:'images/m.jpg'},
					{id:12,name:'水浒传小人书',price:9.9,url:'images/n.jpg'},
					{id:13,name:'世界名著 假如给我三天光明',price:39.9,url:'images/o.jpg'},
					{id:14,name:'吹牛大王历险记',price:29.9,url:'images/p.jpg'},
				],
				[
					{id:0,name:'真丝印花棉麻连衣裙',price:299.9,url:'images/x1.jpg'},
					{id:1,name:'纯棉条纹圆领专柜正品连衣裙',price:309.90,url:'images/x2.jpg'},
					{id:2,name:'honeys商城同款夏季翻旧边短裤',price:139.00,url:'images/x3.jpg'},
					{id:3,name:'翻领淑女长裙',price:249.5,url:'images/x4.jpg'},
					{id:4,name:'女式徽章直筒夏季休闲减龄连衣裙 ',price:169.9,url:'images/x5.jpg'},
					{id:5,name:'简约蓝白竖条纹海军连衣裙 ',price:188.00,url:'images/x6.jpg'},
					{id:6,name:'淑女屋时尚收腰显瘦蝴蝶印花连衣裙 ',price:400.90,url:'images/x7.jpg'},
					{id:7,name:'预售小熊商场同款夏季牛仔短裤 ',price:229.9,url:'images/x8.jpg'},
					{id:8,name:'esprit女士不规则几何印花收腰连衣裙 ',price:329.9,url:'images/x9.jpg'},
					{id:9,name:'曼娅奴同款时尚一字领露肩蕾丝连衣裙',price:199.9,url:'images/x10.jpg'},
					{id:10,name:'美特斯邦威舒适h型宽松印花连衣裙 ',price:449.9,url:'images/x1l.jpg'},
					{id:11,name:'恒源祥夏季女装针织衫冰丝外搭开衫披 ',price:139.9,url:'images/x12.jpg'},
					{id:12,name:'pancoat男女同款韩版休闲百搭t恤 ',price:129.9,url:'images/x13.jpg'},
					{id:13,name:'宽松新款短袖夏季2016同款雪纺商场女装',price:188.00,url:'images/x14.jpg'},
					{id:14,name:'stradivarius春夏折扣西装 ',price:129.9,url:'images/x15.jpg'},
				]
				
			];
			// 购物车数组
			$scope.cartList = {};
			$scope.buy = function(Url,id,event){
				var index = getIndex(id,$scope.goods);
				// alert(index);
				$scope.cartList['a'+index] = $scope.goods[index];
				if($scope.cartList['a'+index].num==undefined){
					$scope.cartList['a'+index].num = 1;					
				}else{
					++$scope.cartList['a'+index].num;
				}

			//购物车抛物线开始
			var pos=$('.cart').position();
						
			$('<img height="100" width="100"'+'src='+Url+'>'+'</img>').fly({
		        start: {top:event.clientY-150, left:event.clientX},
		      			end: {top: pos.top+103, left:pos.left+25, width:10, height:10},
		      			onEnd: function(){

		      			}
		    		});	
			}
			//商品种类
			$("select").change(function(){		
			if($("option:selected").val()==0){
			
				shopType(0);
				$(".goodsListController ul .one").addClass('block').siblings().addClass('hide');
				
			}else if($("option:selected").val()==1){
				
				shopType(1);
				$(".goodsListController ul .two").addClass('block').siblings().addClass('hide');
				
			}else if($("option:selected").val()==2){
				
				shopType(2);
				$(".goodsListController ul .three").addClass('block').siblings().addClass('hide');
				
			}
		});
	// $(".shopType").attr("ng-repeat","item in goods["+num_1+"]");
			// shopType(0);
			function shopType(num_1){
				$scope.showImg=function(id,event){
				var index = getIndex(id,$scope.goods[num_1]);
				var smallImgDiv=$('.goodsListController ul li .smallImg').eq(index);
				var smallMask=$('.goodsListController ul li .smallImg .mask1').eq(index);
				var largeImgDiv=$('.goodsListController ul li .largeImg').eq(index);
				// alert(largeImgDiv.width());
				var largeImg=$('.goodsListController ul li .largeImg img').eq(index);
				
				smallMask.show();
				largeImgDiv.show();
				smallImgDivOffset=smallImgDiv.offset();
				var x=event.pageX-smallImgDivOffset.left-smallMask.width()/2;
				var y=event.pageY-smallImgDivOffset.top-smallMask.height()/2;
				if(x<=0){
					x=0
				}else if(x>=smallImgDiv.width()-smallMask.width()){
					x=smallImgDiv.width()-smallMask.width();
				}
				if(y<=0){
					y=0
				}else if(y>=smallImgDiv.height()-smallMask.height()){
					y=smallImgDiv.height()-smallMask.height()
				}
				//比例尺
				var percentageX=x/(smallImgDiv.width()-smallMask.width());
				var percentageY=y/(smallImgDiv.height()-smallMask.height());
				largeImg.css({
						left:-percentageX*150,
						top:-percentageY*150
					}	
				);

				smallMask.css({
					'left':x+'px',
					'top':y+'px'
				});
			}
			$scope.hideImg=function(id){
				var index=getIndex(id,$scope.goods[num_1]);
				var smallMask=$('.goodsListController ul li .smallImg .mask1').eq(index);
				var largeImgDiv=$('.goodsListController ul li .largeImg').eq(index);
				smallMask.hide();
				largeImgDiv.hide();
			}
			}
			

	var num_1=0;
		$("select").change(function(){		
			if($("option:selected").val()==0){
				shopType(0);
			}else if($("option:selected").val()==1){
				shopType(1);
			}else if($("option:selected").val()==2){
				shopType(2);
			}
			console.log(num_1);	
		});
	$(".shopType").attr("ng-repeat","item in goods["+num_1+"]");		
	//放大图片结束

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
