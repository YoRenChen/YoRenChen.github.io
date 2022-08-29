import{_ as a,o as s,c as t,a as i}from"./app.8256f9a4.js";const n="/images/git_rebase/img-10.png",r="/images/git_rebase/img-11.png",l="/images/git_rebase/img-12.png",o="/images/git_rebase/img-13.png",p="/images/git_rebase/img-14.png",c="/images/git_rebase/img-15.png",m="/images/git_rebase/img-16.png",g="/images/git_rebase/image.png",d="/images/git_rebase/img-02.png",e="/images/git_rebase/img-03.png",h="/images/git_rebase/img-04.png",b="/images/git_rebase/img-09.png",_="/images/git_rebase/img-07.png",T=JSON.parse('{"title":"git rebase","description":"","frontmatter":{"title":"git rebase","date":"2021-07-30T00:00:00.000Z"},"headers":[{"level":2,"title":"\u76EE\u5F55","slug":"\u76EE\u5F55"},{"level":2,"title":"\u7ED3\u8BBA","slug":"\u7ED3\u8BBA"},{"level":2,"title":"1. \u5DE5\u4F5C\u7684\u4F7F\u7528","slug":"_1-\u5DE5\u4F5C\u7684\u4F7F\u7528"},{"level":2,"title":"2. rebase \u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81","slug":"_2-rebase-\u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81"},{"level":2,"title":"3. git rebase -i \u591A\u6761\u8BB0\u5F55\u5408\u5E76","slug":"_3-git-rebase-i-\u591A\u6761\u8BB0\u5F55\u5408\u5E76"},{"level":2,"title":"4. rebase \u7406\u89E3","slug":"_4-rebase-\u7406\u89E3"},{"level":3,"title":"git rebase \u89E3\u51B3\u4E86\u4EC0\u4E48","slug":"git-rebase-\u89E3\u51B3\u4E86\u4EC0\u4E48"},{"level":3,"title":"\u5F53\u6267\u884C git rebase \u65F6\u505A\u4E86\u4EC0\u4E48","slug":"\u5F53\u6267\u884C-git-rebase-\u65F6\u505A\u4E86\u4EC0\u4E48"},{"level":2,"title":"\u5371\u9669\u64CD\u4F5C","slug":"\u5371\u9669\u64CD\u4F5C"},{"level":3,"title":"\u591A\u4EBA\u540C\u5206\u652F\u5F00\u59CB\u4F7F\u7528 rebase \u4F1A\u8986\u76D6\u5176\u4ED6\u7684 commit \u5386\u53F2\u8BB0\u5F55 .","slug":"\u591A\u4EBA\u540C\u5206\u652F\u5F00\u59CB\u4F7F\u7528-rebase-\u4F1A\u8986\u76D6\u5176\u4ED6\u7684-commit-\u5386\u53F2\u8BB0\u5F55"}],"relativePath":"md/git rebase.md","lastUpdated":1661784226000}'),A={name:"md/git rebase.md"},u=i(`<h1 id="git-rebase" tabindex="-1">git rebase <a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a></h1><blockquote><p>git-rebase: Forward-port local commits to the updated upstream head</p></blockquote><p>\u5C06\u4E00\u4E2A\u5206\u652F\u96C6\u6210\u5230\u53E6\u4E00\u4E2A\u5206\u652F, \u5C06\u4E00\u7CFB\u5217\u63D0\u4EA4\u7EC4\u5408\u5230\u65B0\u7684\u63D0\u4EA4\u7684\u8FC7\u7A0B\u3002</p><h2 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h2><ol><li>\u5DE5\u4F5C\u4E2D\u7684\u4F7F\u7528\u6B65\u9AA4</li><li>rebase \u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81</li><li>git rebase -i \u591A\u6761\u8BB0\u5F55\u5408\u5E76</li><li>rebase \u7406\u89E3</li></ol><h2 id="\u7ED3\u8BBA" tabindex="-1">\u7ED3\u8BBA <a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a></h2><p>\u4ECB\u7ECD\u4E00\u4E0B<code>git rebase</code>:</p><ol><li>\u548C <code>git merge</code> \u529F\u80FD\u4E00\u6837\u90FD\u662F\u5408\u5E76\u5206\u652F\u7684commit\u3002</li><li>\u4E0E merge \u76F8\u6BD4\u6CA1\u989D\u5916\u7684 merge \u5408\u5E76\u4FE1\u606F\uFF0C\u66F4\u4F18\u96C5\u663E\u793A\u5728\u540C\u4E00\u6761\u5206\u652F\u6D41\u4E0A.(\u628A\u76EE\u6807\u5206\u652F\u65B0\u589E\u7684 commit \u751F\u6210 patch \u5E76\u8FC1\u79FB\u5230\u5408\u5E76\u5206\u652F)</li><li>\u53EF\u4EE5\u5BF9\u81EA\u8EAB\u5206\u652F\u8FDB\u884C commit \u5408\u5E76\u7684\u64CD\u4F5C</li><li>\u907F\u514D\u5728\u516C\u5171\u7684\u5206\u652F\u6267\u884C rebase \u64CD\u4F5C\uFF0C\u4F1A\u8986\u76D6\u5176\u4ED6\u7684\u4EBA\u63D0\u4EA4\u7684 commit \u5386\u53F2\u8BB0\u5F55\u3002</li></ol><h2 id="_1-\u5DE5\u4F5C\u7684\u4F7F\u7528" tabindex="-1">1. \u5DE5\u4F5C\u7684\u4F7F\u7528 <a class="header-anchor" href="#_1-\u5DE5\u4F5C\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5DF2\u77E5\u8FDC\u7A0B\u5206\u652F master\uFF0C\u672C\u5730\u9ED8\u8BA4\u5206\u652F master\u3002 \u8FDC\u7A0B\u5206\u652F master \u548C\u672C\u5730\u5206\u652F feat \u7684\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- \u5148\u521B\u5EFA\u4E2A\u5206\u652F --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- git fetch origin master // \u62C9\u53D6\u8FDC\u7A0B master \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">- git checkout -b feat // \u67E5\u627E\u5E76\u5207\u6362\u5230\u5206\u652F feat (-b \u5728\u67E5\u627E\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u5C31\u65B0\u5EFA)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u8FDB\u884C\u5F00\u53D1 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># feat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\uFF08... do soming edit\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">- git add . // \u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">- git commit -m &#39;feat edit&#39; // \u5C06\u6682\u5B58\u533A\u5185\u5BB9\u6DFB\u52A0\u5230\u672C\u5730\u4ED3\u5E93\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">- git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u5F00\u53D1\u5B8C\u51C6\u5907\u63D0\u4EA4\u4EE3\u7801\u5230\u8FDC\u7A0B master\uFF0C\u5148\u8DDF\u65B0\u8FDC\u7A0B\u5185\u5BB9\u5230\u672C\u5730 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- git pull origin master // \u62C9\u53D6\u6700\u65B0\u8FDC\u7A0B master \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">- git checkout feat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u5408\u5E76\u4E24\u4E2A\u5206\u652F\uFF0C\u89E3\u51B3\u51B2\u7A81\u540E\u63D0\u4EA4\u6211\u4EEC\u5206\u652F\u4EE3\u7801 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># feat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- git rebase master // rebase</span></span>
<span class="line"><span style="color:#A6ACCD;">\uFF08... \u89E3\u51B3\u51B2\u7A81\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">- git push origin feat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-rebase-\u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81" tabindex="-1">2. rebase \u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81 <a class="header-anchor" href="#_2-rebase-\u8FC7\u7A0B\u4E2D\u89E3\u51B3\u51B2\u7A81" aria-hidden="true">#</a></h2><p><code>git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)</code></p><p>\u5408\u5E76\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u6210\u4E00\u6761\u4E34\u65F6\u5206\u652F\uFF0C\u8FD9\u6761\u4E34\u65F6\u5206\u652F\u5C31\u662F\u5904\u7406\u51B2\u7A81:</p><img src="`+n+'" width="400"><p><em>\u53EF\u4EE5\u770B\u5230\uFF0C\u6B64\u65F6\u7684\u5206\u652F\u4ECE feat-01 \u53D8\u6210\u4E34\u65F6\u5206\u652F 91b9...!(Rebasing)</em></p><p><code>git rebase --continue</code>\uFF1A \u5982\u679C\u5904\u7406\u5B8C\u51B2\u7A81\uFF0C\u6267\u884C <code>git commit</code>\u64CD\u4F5C\u4FDD\u5B58\u5F53\u524D\u7684 commit \u4FE1\u606F\uFF0C\u5982\u679C\u6B64\u65F6\u8FD8\u662F\u4E34\u65F6\u5206\u652F\uFF0C\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u8FDB\u884C\u4E0B\u4E00\u4E2A commit \u8282\u70B9\u68C0\u7D22\u3002</p><p><code>git rebase --skip</code>: \u8BA9\u6211\u4EEC\u5FFD\u7565\u8FD9\u6B21\u7684 commit \u8282\u70B9\uFF0C\u8FDB\u5165\u5230\u4E0B\u4E00\u6B21 commit \u8282\u70B9.</p><p><code>git rebase --abort</code>: \u653E\u5F03\u5408\u5E76\uFF0C\u9000\u51FA\u6B64\u6B21 rebase \u5E76\u56DE\u5230 rebase \u64CD\u4F5C\u4E4B\u524D\u7684\u72B6\u6001\u3002(\u4E5F\u5C31\u662F\u628A\u8FD9\u4E2A\u4E34\u65F6\u5206\u652F\u5F3A\u5236\u9000\u51FA\u5E76\u5207\u6362\u5230 feat-01)</p><p>\u5C06\u6240\u6709\u65B0\u7684 commit \u8FDB\u884C\u51B2\u7A81\u68C0\u7D22\u5E76\u5904\u7406\u5B8C\u4E4B\u540E\uFF0C\u4E34\u65F6\u5206\u652F\u4F1A\u88AB\u5220\u9664\uFF0C\u5F53\u524D\u5904\u7406\u7684 commit \u6700\u7EC8\u4F1A\u6307\u5411\u66FF\u6362\u4E3A feat-01\u3002</p><p><strong>\u6CE8\u610F\uFF1A\u5F53\u6211\u4EEC\u5728 Rebasing \u7684\u65F6\u5019\u53EF\u4EE5\u6267\u884C <code>git rebase --abort</code> \u9000\u51FA\u56DE\u5230\u539F\u59CB\uFF0C\u5982\u679C\u5408\u5E76\u5B8C\u6210\u4E86\u5C31\u53EA\u80FD\u4F7F\u7528 <code>git reset</code> \u7B49\u64CD\u4F5C\u56DE\u9000\u7248\u672C</strong></p><h2 id="_3-git-rebase-i-\u591A\u6761\u8BB0\u5F55\u5408\u5E76" tabindex="-1">3. git rebase -i \u591A\u6761\u8BB0\u5F55\u5408\u5E76 <a class="header-anchor" href="#_3-git-rebase-i-\u591A\u6761\u8BB0\u5F55\u5408\u5E76" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7684 commit \u4FE1\u606F\u6BD4\u8F83\u591A\u91CD\u590D\u9700\u8981\u5408\u5E76\u5904\u7406</p><img src="'+r+'" width="400"> \u4EE5\u56FE\u4E3A\u4F8B\u5B50\uFF1A \u6211\u9700\u8981\u5408\u5E76\u524D3\u6761 commit \u4FE1\u606F\u4E3A\u4E00\u6761\u3002\u6267\u884C ``git rebase -i HEAD~3 ``\uFF0C\u5C55\u793A\u5982\u56FE\uFF1A <img src="'+l+'" width="400"><p><em>\u7559\u610F\u524D\u4E09\u4E2A pick\uFF0C\u4ED6\u4EEC\u4F9D\u6B21\u5012\u53D9\uFF0C\u6700\u540E\u4E00\u6761 pick \u4E3A\u6700\u65B0\u63D0\u4EA4\u7684 commit</em></p><p>\u6211\u4EEC\u4F7F\u7528<code>s, squash &lt;commit&gt; = use commit, but meld into previous commit</code>\u8FDB\u884C\u5408\u5E76\uFF0C\u64CD\u4F5C\u5982 vim\u3002</p><img src="'+o+'" width="400"><p><em>\u6211\u4EEC\u5FC5\u987B\u8981\u7559\u4E00\u6761 pick\uFF0C\u4F46 pick \u4E0D\u80FD\u662F\u6700\u540E\u4E00\u6761(squash \u89C4\u5219)</em></p><p><code>!qw</code>\u9000\u51FA\u7F16\u8F91\u5E76\u4FDD\u5B58\uFF0C\u6B64\u65F6 git \u53C8\u4F1A\u63D0\u4F9B\u4E34\u65F6\u5206\u652F\uFF1A</p><img src="'+p+'" width="600"><p>\u6211\u4EEC\u65E0\u6539\u52A8\u53EA\u9700\u8981\u518D\u6B21 <code>!qw</code>\u9000\u51FA\u7F16\u8F91\u5E76\u4FDD\u5B58\u5373\u53EF\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u5F97\u5230\u4E86\u4E00\u6761\u5408\u5E76\u4E4B\u540E\u7684\u4FE1\u606F\uFF1A</p><img src="'+c+'" width="400"><p>\u5982\u679C\u6211\u4EEC\u5728\u7B2C\u4E00\u6B21\u4FDD\u5B58\u9000\u51FA\uFF0Cgit\u53C8\u7ED9\u6211\u63D0\u4F9B\u4E86\u4E34\u65F6\u5206\u652F\u7684\u90A3\u6B65\u9AA4\u6267\u884C\u4E86 <code>git commit</code> \u64CD\u4F5C\uFF0C\u5C31\u4F1A\u591A\u4E00\u6761\u5408\u5E76\u8BB0\u5F55:</p><img src="'+m+'" width="400"><h2 id="_4-rebase-\u7406\u89E3" tabindex="-1">4. rebase \u7406\u89E3 <a class="header-anchor" href="#_4-rebase-\u7406\u89E3" aria-hidden="true">#</a></h2><h3 id="git-rebase-\u89E3\u51B3\u4E86\u4EC0\u4E48" tabindex="-1">git rebase \u89E3\u51B3\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#git-rebase-\u89E3\u51B3\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u8BA9\u5206\u652F\u53D8\u5F97\u6574\u6D01\uFF0C\u51CF\u5C11\u4F7F\u7528 merge \u4EA7\u751F\u7684\u5408\u5E76\u8BB0\u5F55\u3002</p><h4 id="\u672C\u5730\u5206\u652F-feat-01-\u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728\u5F53\u524D\u5206\u652F\u4F7F\u7528-git-pull-\u62C9\u53D6-origin-master\uFF0C\u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A" tabindex="-1">\u672C\u5730\u5206\u652F feat-01 \u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728\u5F53\u524D\u5206\u652F\u4F7F\u7528 <code>git pull</code> \u62C9\u53D6 origin master\uFF0C\u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A <a class="header-anchor" href="#\u672C\u5730\u5206\u652F-feat-01-\u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728\u5F53\u524D\u5206\u652F\u4F7F\u7528-git-pull-\u62C9\u53D6-origin-master\uFF0C\u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A" aria-hidden="true">#</a></h4><img src="'+g+'" width="600"><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u505A\u4E86\u4E00\u6B21\u63D0\u4EA4\u4F1A\u63D0\u4EA42\u4E2A commit (\u4E3B\u5185\u5BB9 feat-01 \u548C merge \u4FE1\u606F):</p><img src="'+d+'" width="400"><h4 id="\u672C\u5730\u5206\u652F-feat-01-\u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728-master-\u5206\u652F\u4F7F\u7528-git-pull-\u62C9\u53D6-origin-master\uFF0C\u518D\u5207\u56DE-feat-01-\u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A" tabindex="-1">\u672C\u5730\u5206\u652F feat-01 \u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728 master \u5206\u652F\u4F7F\u7528 <code>git pull</code> \u62C9\u53D6 origin master\uFF0C\u518D\u5207\u56DE feat-01 \u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A <a class="header-anchor" href="#\u672C\u5730\u5206\u652F-feat-01-\u65B0\u589E\u5185\u5BB9\u540E\uFF0C\u5728-master-\u5206\u652F\u4F7F\u7528-git-pull-\u62C9\u53D6-origin-master\uFF0C\u518D\u5207\u56DE-feat-01-\u89E3\u51B3\u51B2\u7A81\u540E\u518D\u63D0\u4EA4\uFF1A" aria-hidden="true">#</a></h4><img src="'+e+'" width="400"><p>\u8FD9\u65F6\u6211\u4EEC\u5F97\u5230\u7684\u63D0\u4EA4 commit \u53EA\u6709\u4E00\u4E2A\uFF0C\u800C\u4E14\u4E5F\u8DDF\u5206\u652F master \u5728\u540C\u4E00\u6761\u7EBF\u4E0A\uFF1A</p><img src="'+h+'" width="400"><h3 id="\u5F53\u6267\u884C-git-rebase-\u65F6\u505A\u4E86\u4EC0\u4E48" tabindex="-1">\u5F53\u6267\u884C git rebase \u65F6\u505A\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#\u5F53\u6267\u884C-git-rebase-\u65F6\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u4EE5\u5728 feat-01 \u6267\u884C <code>git rebase master</code> \u4E3A\u4F8B\uFF1A</p><ol><li>git \u627E\u5230 feat-01 \u548C master \u7684\u5171\u540C commit \u8BB0\u5F55</li><li>\u628A feat-01 \u5171\u540C commit \u4E4B\u540E\u91CC\u9762\u7684\u6BCF\u4E2A commit \u63D0\u51FA\u4E34\u65F6\u4FDD\u5B58\u6210 patch \u6587\u4EF6\uFF0C\u5B58\u5728 .git/rebase \u76EE\u5F55\u4E0B</li><li>\u5C06\u63D0\u51FA\u7684 commit \u66F4\u65B0\u5230 master \u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4\u7684\u540E\u9762</li><li>\u5C06 feat-01 \u5206\u652F\u6307\u5411\u6700\u540E\u4E00\u4E2A commit <img src="'+b+'" width="100%"><img src="'+_+'" width="600"></li></ol><p>**\u6CE8\u610F\uFF1A\u5728 feat-01 \u5206\u652F \u6267\u884C git rebase master \u65F6\uFF0C\u662F\u57FA\u4E8E master \u4E3A\u57FA\u7840\uFF0C\u6240\u4EE5 current change \u662F master\uFF0CIncoming change\u4E86 feat-01 **</p><img src="'+e+'" width="400"><h2 id="\u5371\u9669\u64CD\u4F5C" tabindex="-1">\u5371\u9669\u64CD\u4F5C <a class="header-anchor" href="#\u5371\u9669\u64CD\u4F5C" aria-hidden="true">#</a></h2><h3 id="\u591A\u4EBA\u540C\u5206\u652F\u5F00\u59CB\u4F7F\u7528-rebase-\u4F1A\u8986\u76D6\u5176\u4ED6\u7684-commit-\u5386\u53F2\u8BB0\u5F55" tabindex="-1">\u591A\u4EBA\u540C\u5206\u652F\u5F00\u59CB\u4F7F\u7528 rebase \u4F1A\u8986\u76D6\u5176\u4ED6\u7684 commit \u5386\u53F2\u8BB0\u5F55 . <a class="header-anchor" href="#\u591A\u4EBA\u540C\u5206\u652F\u5F00\u59CB\u4F7F\u7528-rebase-\u4F1A\u8986\u76D6\u5176\u4ED6\u7684-commit-\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a></h3><p>\u4E0D\u8981\u5BF9\u4E00\u4E2A\u5171\u4EAB\u7684\u3001\u5DF2\u5728\u516C\u5171\u5E93\u4E0A\u7684\u5206\u652F\u8FDB\u884C rebase \u64CD\u4F5C\u3002\u53EA\u6709\u79C1\u6709\u5206\u652F\u624D\u9002\u7528 rebase \u3002</p>',56),C=[u];function f(D,y,w,v,x,k){return s(),t("div",null,C)}const S=a(A,[["render",f]]);export{T as __pageData,S as default};