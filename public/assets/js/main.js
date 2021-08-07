// function myReadCookieforGA(name) {
//   var search = name + "=";
//   if (document.cookie.length > 0) {
//     offset = document.cookie.indexOf(search);
//     if (offset != -1) {
//       offset += search.length;
//       end = document.cookie.indexOf(";", offset);
//       if (end == -1) end = document.cookie.length;
//       return unescape(document.cookie.substring(offset, end));
//     }
//   }
// }

// var membertype;
// var admintype=false;
// var userc = myReadCookieforGA("v4iilex");
//     var empc = myReadCookieforGA("adminiil");
//     if  (empc!= undefined || empc=="")
//     {
//         admintype=true;
//     }
//     else if (empc == undefined && userc!=undefined && userc!="")
//     {   admintype=false;
//         var i = userc.indexOf("utyp=");//index on utyp in cookie
//         var utyp="";
//         if(i > 0){
//             utyp = userc.substring(i+5,i+6);
//         }
//         if(utyp == "P"){
//             membertype="MemberLoginPaid";
//         }
//         else{
//             membertype="MemberLoginFree";
//         }
//     }
//     else if (empc == undefined && userc!=undefined && userc==""){
//         membertype="MemberLogOut";
//     }
// if($.inArray("38",["34","38","35"])>=0)
// {
//     custypename="vGFCP";
// }
// else if($.inArray("38",["1","2","24","23","10","12","16","13","21","7","25","5","8"])>=0)
// {
//     custypename="Paid";
// }
// else if($.inArray("38",["22","6","28","33","29"])>=0)
// {
//     custypename="FCP";
// }
// else if($.inArray("38",["14","32"])>=0)
// {
//     custypename="vFCP";
// }
// else if($.inArray("38",["20"])>=0)
// {
//     custypename="Disable company";
// }
// else if($.inArray("38",["17"])>=0)
// {
//     custypename="qFCP";
// }
// else if($.inArray("38",["36"])>=0)
// {
//     custypename="gFCP";
// }
// else if($.inArray("38",["39"])>=0)
// {
//     custypename="qgFCP";
// }
// else if($.inArray("38",["9"])>=0)
// {
//     custypename="FREELIST";
// }
// else if($.inArray("38",["30"])>=0)
// {
//     custypename="non FCP";
// }
// else
// {
//     custypename="Others";
// }

//   Google Tag Manager
//   Google Tag Manager
//   Google Tag Manager
//   Google Tag Manager
//   Google Tag Manager
//   Google Tag Manager

// imgtm=[{'CD_User-Mode':'identified',"CD_User-Type":membertype,"CD_Admin_Login":admintype, "CD_Cust-Type-Name":custypename,"PV_Tracking":'vpv/pwim/SAAB/'}];
// var isLive = (location.hostname == "dev-seller.indiamart.com" || location.hostname== "stg-seller.indiamart.com") ? "Yes" : "Yes";

// if(isLive == "Yes")
// {
//     if(window.location.pathname.indexOf("bltxn"))
//     {
//         $(window).load(function(){
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','imgtm','GTM-NR4G');
//         });
//     }
//     else
//     {
//         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//         })(window,document,'script','imgtm','GTM-NR4G');
//     }
// }

//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->
//  <!-- End Google Tag Manager --><!--google analytics async code start-->

// function track(link,category,action,section)
// {
//     getGAEventTrackingJS(category+"_"+action);
//     $.browser.chrome = (typeof window.chrome === "object");
//     setTimeout(function()
//     {
//         if(link.target == "_blank" || link.target == "_new")
//         {
//             if($.browser.chrome)
//             {
//                 window.open(link.href,"_newtab")
//             }
//             else
//             {
//                 window.open(link.href,link.target)
//             }
//         }
//         else
//         {
//             location.href=link.href
//         }
//     }, 200);
//     return false;
// }
// if (typeof _gaq === "undefined" || typeof _gaq !== "object") {
//     var _gaq = {};
//         _gaq.push =  function(array){
//         if(array[0] === "_trackPageview"){
//             imgtm.push({
//             "event":"VirtualPageview",
//             "virtualPageURL":array[1],
//             "virtualPageTitle" :(array[2] ? array[2] : "")
//             });
//         }
//         else if(array[0] === "_trackEvent"){
//             var triggerevent = (array[5] == true) ? "IMEvent-NI" : "IMEvent";
//             imgtm.push({
//                 "event": triggerevent,
//                 "eventCategory": array[1],
//                 "eventAction": array[2],
//                 "eventLabel": array[3],
//                 "eventValue": array[4]
//             });
//         }
//     }
// }

// function enqtrack(link,category,action,section) {getGAEventTrackingJS(category+"_"+action);}

// if(empc)
// {
//     var expiry=new Date();var expirymins1 = 60;var c_name = "adminiil";expiry.setTime(expiry.getTime()+(expirymins1*60*1000));var c_value=escape(empc) +  ";expires="+ expiry.toGMTString();
//     c_value += "; domain=.indiamart.com; path=/";
//     document.cookie=c_name + "=" + c_value;

//     var expiry1=new Date();var c_name1 = "v4iilex"; var expirymins2 = 60;
//     expiry1.setTime(expiry1.getTime()+(expirymins2*60*1000));
//     var c_value1=escape(userc) +  ";expires="+ expiry1.toGMTString();
//     c_value1 += "; domain=.indiamart.com; path=/";
//     if((userc!="") && (userc!=undefined) && (userc!="undefined"))
//     {
//         document.cookie=c_name1 + "=" + c_value1;
//     }
//     var expiry2=new Date();var c_name2 = "ImeshVisitor";var datac = myReadCookieforGA("ImeshVisitor");var expirymins3 = 60;
//     expiry2.setTime(expiry2.getTime()+(expirymins3*60*1000));
//     var c_value2=escape(datac) +  ";expires="+ expiry2.toGMTString();
//     c_value2 += "; domain=.indiamart.com; path=/";
//     if((datac!="") && (datac!=undefined) && (datac!="undefined"))
//     {
//         document.cookie=c_name2 + "=" + c_value2;
//     }
//     var expiry3=new Date();var c_name3 = "im_iss";var datac = myReadCookieforGA("im_iss");var expirymins4 = 60;
//     expiry3.setTime(expiry3.getTime()+(expirymins4*60*1000));
//     var c_value3=escape(datac) +  ";expires="+ expiry3.toGMTString();
//     c_value3 += "; domain=.indiamart.com; path=/";
//     if((datac!="") && (datac!=undefined) && (datac!="undefined"))
//     {
//         document.cookie=c_name3 + "=" + c_value3;
//     }

// }

// < !--Validate logged in user code starts HERE-- >
// < !--Validate logged in user code starts HERE-- >
// < !--Validate logged in user code starts HERE-- >
// < !--Validate logged in user code starts HERE-- >

// function ReadCookieforVerify(name){
//     var search = name + "="
//     if (document.cookie.length > 0){
//         offset = document.cookie.indexOf(search)
//         if (offset != -1){
//             offset += search.length
//             end = document.cookie.indexOf(";", offset)
//             if (end == -1) end = document.cookie.length
//                 return unescape(document.cookie.substring(offset, end))
//         }
//     }
//     return "";
// }
// var pageGlid_imesh = ReadCookieforVerify("ImeshVisitor");
// $(window).bind("focus", function()
// {
//     var currentGlid_imesh = ReadCookieforVerify("ImeshVisitor");
//     var url = document.URL;

//     var imesh = ReadCookieforVerify("ImeshVisitor");
//     var imesh2 = decodeURIComponent(imesh);
//     var imesh2 = imesh2.split("|");
//     var glid1 = imesh2.indexOf("glid=3493837");
//     var glid2 = imesh2.indexOf("glid=27964002");
//     var glid3 = imesh2.indexOf("glid=17039134");
//     var glid4 = imesh2.indexOf("glid=3349904");

//     if(pageGlid_imesh != currentGlid_imesh)
//     {
//         if(url == "http://seller.indiamart.com/cgi/eto-post-ins-buy.mp"){
//             //window.location="//seller.indiamart.com/eto-post-sell.html";
//         }else if(url =="http://seller.indiamart.com/cgi/eto-post-ins-sell.mp" ){
//             window.location="//seller.indiamart.com/blgen/postbl/";
//         // if(url == "http://seller.indiamart.com/cgi/eto-post-ins-sell.mp"){
//         //     //window.location="//seller.indiamart.com/eto-post-sell.html";
//         // }else if(url == "http://seller.indiamart.com/cgi/eto-post-ins-buy.mp"){
//         //     window.location="//seller.indiamart.com/blgen/postbl/";
//         }
//         else{
//             if(glid1==-1 && glid2==-1 && glid3==-1 && glid4==-1){
//                 location.reload();
//             }
//         }
//     }
// });
