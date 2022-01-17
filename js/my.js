/*
type your custom JavaScript here
在本文件中键入您的自定义JS脚本
升级主题文件时请注意保护本文件，防止意外覆盖。
*/

// 翻译类文章，特殊处理逻辑
// 隐藏p.en
$('div.article-entry > p.en').hide();
// 为中文段落绑定事件
$('div.article-entry > p[class!="en"]').click(function () {
    console.log("clicked")
    var prev = $(this).prev('p[class="en"]');
    console.dir(prev);
    prev.toggle();
});
// 翻译类文章，特殊处理逻辑，end
