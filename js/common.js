/* ===================================================================

 * スムーススクロール

=================================================================== */
// $(function(){
//    // #で始まるアンカーをクリックした場合に処理
//    $('a[href^=#]').click(function() {
//       // スクロールの速度
//       var speed = 400;// ミリ秒
//       // アンカーの値取得
//       var href= $(this).attr("href");
//       // 移動先を取得
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       // 移動先を数値で取得
//       var position = target.offset().top;
//       // スムーススクロール
//       $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
//       return false;
//    });
// });


//
$(function() {
   var $accBtn = $('.btn'),
       $accContents = $('.contents');
   
   $accContents.hide(); //contentsを全て隠す
   $accBtn.each(function() {
     $(this).click(function(e) {
       e.preventDefault(); //aタグのリンク無効化
       $(this).next().slideToggle(); //すぐ次の要素をスライド
     });
   });
 });