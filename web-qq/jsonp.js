/**
 * Created by ijiajia on 2016/6/17.
 */
function jsonp(json){
    // 考虑默认值
    var json=json || {};
    if(!json.url)return;
    json.cbName=json.cbName || 'cb';
    json.data=json.data || {};

    var fnName='show'+Math.random();
    // 替换fnName里面的小数点
    fnName=fnName.replace('.', '');
    window[fnName]=function(a){
        json.success && json.success(a);
        // 删除多余script标签
        oHead.removeChild(oS);
    };
    json.data[json.cbName]=fnName;
    var arr=[];
    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
    }
    var str=arr.join('&');
    var oS=document.createElement('script');
    oS.src=json.url+'?'+str;
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
}