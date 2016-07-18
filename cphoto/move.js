function getStyle(obj, name){
                return (obj.currentStyle || getComputedStyle(obj, false))[name];
      	};
		function move(obj,json,duration,complete){
			function getStyle(obj, name){
                return (obj.currentStyle || getComputedStyle(obj, false))[name];
      		};
			var start={};
			var dis={};
			for(var name in json){
                    start[name]=parseFloat(getStyle(obj, name));
                    dis[name]=json[name]-start[name];
            }
			var count=Math.floor(duration/30);
			var n=0;
			clearTimeout(obj.timer);
			obj.timer=setInterval(function(){
				n++;
				var a=n/count;
				for(var name in json){
					var cur=start[name]+dis[name]*a;
					if(name=='opacity'){
						obj.style.opacity=cur;
						obj.style.filter='alpha(opacity='+cur*100+')';
					}
					else{
						obj.style[name]=cur+'px';
					}	
				}
				if(n==count){
					clearTimeout(obj.timer);
					complete && complete()
				}
			},30)
		};		