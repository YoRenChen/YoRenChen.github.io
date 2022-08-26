import{_ as e,c as a,o as i,a as t}from"./app.f6eafdd6.js";const g=JSON.parse('{"title":"gRPC \u5B66\u4E60","description":"","frontmatter":{"title":"gRPC \u5B66\u4E60","date":"2020-10-14T00:00:00.000Z"},"headers":[{"level":2,"title":"\u80CC\u666F","slug":"\u80CC\u666F"},{"level":2,"title":"\u540D\u8BCD\u89E3\u91CA","slug":"\u540D\u8BCD\u89E3\u91CA"},{"level":2,"title":"\u8BBE\u8BA1\u539F\u5219","slug":"\u8BBE\u8BA1\u539F\u5219"},{"level":2,"title":"\u7248\u672C\u63A7\u5236\u65B9\u6848","slug":"\u7248\u672C\u63A7\u5236\u65B9\u6848"}],"relativePath":"md/Grpc\u5B66\u4E60.md","lastUpdated":1661483318000}'),l={name:"md/Grpc\u5B66\u4E60.md"},r=t('<h1 id="grpc-\u5B66\u4E60" tabindex="-1">gRPC \u5B66\u4E60 <a class="header-anchor" href="#grpc-\u5B66\u4E60" aria-hidden="true">#</a></h1><h2 id="\u80CC\u666F" tabindex="-1">\u80CC\u666F <a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u5230\u5E94\u7528\u7684\u65B0\u529F\u80FD\u53EF\u80FD\u8981\u6C42\u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u7684 gRPC \u670D\u52A1\u8FDB\u884C\u66F4\u6539</p><ol><li>\u5E94\u8003\u8651\u66F4\u6539\u4F1A\u5982\u4F55\u5F71\u54CD\u5BA2\u6237\u7AEF\u3002</li><li>\u5E94\u5B9E\u73B0\u652F\u6301\u66F4\u6539\u7684\u7248\u672C\u63A7\u5236\u7B56\u7565</li></ol><h2 id="\u540D\u8BCD\u89E3\u91CA" tabindex="-1">\u540D\u8BCD\u89E3\u91CA <a class="header-anchor" href="#\u540D\u8BCD\u89E3\u91CA" aria-hidden="true">#</a></h2><ol><li><p>\u975E\u4E2D\u65AD\u6027\u53D8\u66F4\uFF1A\u5141\u8BB8\u73B0\u6709\u5BA2\u6237\u7AEF\u7EE7\u7EED\u5DE5\u4F5C\u800C\u4E0D\u505A\u4EFB\u4F55\u53D8\u66F4</p></li><li><p>\u4E2D\u65AD\u6027\u53D8\u66F4\uFF1AgRPC \u670D\u52A1\u53D1\u751F\u4E2D\u65AD\u6027\u53D8\u66F4\u65F6\uFF0C\u5FC5\u987B\u66F4\u65B0\u548C\u91CD\u65B0\u90E8\u7F72\u4F7F\u7528\u8BE5\u670D\u52A1\u7684\u5BA2\u6237\u7AEF</p></li></ol><h2 id="\u8BBE\u8BA1\u539F\u5219" tabindex="-1">\u8BBE\u8BA1\u539F\u5219 <a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219" aria-hidden="true">#</a></h2><p>\u5411\u540E\u517C\u5BB9\u6027\uFF0C\u5C3D\u91CF\u5BF9\u670D\u52A1\u8FDB\u884C\u975E\u4E2D\u65AD\u6027\u53D8\u66F4\uFF0C\u597D\u5904\u662F\uFF1A</p><ol><li>\u73B0\u6709\u5BA2\u6237\u7AEF\u53EF\u7EE7\u7EED\u8FD0\u884C</li><li>\u907F\u514D\u5411\u5BA2\u6237\u7AEF\u901A\u77E5\u4E2D\u65AD\u6027\u53D8\u66F4\u5E76\u8FDB\u884C\u66F4\u65B0</li><li>\u53EA\u9700\u8981\u8BB0\u5F55\u548C\u7EF4\u62A4\u670D\u52A1\u7684\u4E00\u4E2A\u7248\u672C</li></ol><h2 id="\u7248\u672C\u63A7\u5236\u65B9\u6848" tabindex="-1">\u7248\u672C\u63A7\u5236\u65B9\u6848 <a class="header-anchor" href="#\u7248\u672C\u63A7\u5236\u65B9\u6848" aria-hidden="true">#</a></h2><h4 id="proto-\u6587\u4EF6\u53D8\u66F4\u89C4\u8303" tabindex="-1">proto \u6587\u4EF6\u53D8\u66F4\u89C4\u8303 <a class="header-anchor" href="#proto-\u6587\u4EF6\u53D8\u66F4\u89C4\u8303" aria-hidden="true">#</a></h4><ol><li>proto \u6587\u4EF6\u9075\u5FAA\u53EA\u589E\u4E0D\u51CF\u7684\u539F\u5219</li><li>proto \u6587\u4EF6\u4E2D\u7684\u63A5\u53E3\u9075\u5FAA\u53EA\u589E\u4E0D\u51CF\u7684\u539F\u5219</li><li>proto \u6587\u4EF6\u4E2D\u7684 message \u5B57\u6BB5\u9075\u5FAA\u53EA\u589E\u4E0D\u51CF\u7684\u539F\u5219</li><li>proto \u6587\u4EF6\u4E2D\u7684 message \u5B57\u6BB5\u7C7B\u578B\u548C\u5E8F\u53F7\u4E0D\u5F97\u4FEE\u6539</li></ol>',12),o=[r];function d(s,h,c,n,p,_){return i(),a("div",null,o)}const f=e(l,[["render",d]]);export{g as __pageData,f as default};
