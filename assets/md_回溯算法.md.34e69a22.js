import{_ as s,o as a,c as n,a as l}from"./app.287c3e30.js";const u=JSON.parse('{"title":"\u56DE\u6EAF\u7B97\u6CD5","description":"","frontmatter":{"title":"\u56DE\u6EAF\u7B97\u6CD5","date":"2022-01-04T00:00:00.000Z"},"headers":[{"level":3,"title":"\u9898\u76EE","slug":"\u9898\u76EE"}],"relativePath":"md/\u56DE\u6EAF\u7B97\u6CD5.md","lastUpdated":1661572155000}'),e={name:"md/\u56DE\u6EAF\u7B97\u6CD5.md"},p=l(`<h1 id="\u56DE\u6EAF\u7B97\u6CD5" tabindex="-1">\u56DE\u6EAF\u7B97\u6CD5 <a class="header-anchor" href="#\u56DE\u6EAF\u7B97\u6CD5" aria-hidden="true">#</a></h1><ul><li>\u56DE\u6EAF\u51FA\u53E3\uFF0C\u526A\u679D\u70B9</li><li>\u5F53\u4E0D\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5C31\u56DE\u6EAF\u8FD4\u56DE</li><li>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386 + \u72B6\u6001\u91CD\u7F6E + \u526A\u679D</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def backtrack(\u8DEF\u5F84, \u9009\u62E9\u5217\u8868):</span></span>
<span class="line"><span style="color:#A6ACCD;">    if \u6EE1\u8DB3\u7ED3\u675F\u6761\u4EF6:</span></span>
<span class="line"><span style="color:#A6ACCD;">        result.add(\u8DEF\u5F84)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for \u9009\u62E9 in \u9009\u62E9\u5217\u8868:</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u505A\u9009\u62E9</span></span>
<span class="line"><span style="color:#A6ACCD;">        backtrack(\u8DEF\u5F84, \u9009\u62E9\u5217\u8868)</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u64A4\u9500\u9009\u62E9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def backtrack(nums, i):</span></span>
<span class="line"><span style="color:#A6ACCD;">    if i == len(nums):</span></span>
<span class="line"><span style="color:#A6ACCD;">        if \u8FBE\u5230 target:</span></span>
<span class="line"><span style="color:#A6ACCD;">            result += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for op in { +1, -1 }:</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u9009\u62E9 op * nums[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u7A77\u4E3E nums[i + 1] \u7684\u9009\u62E9</span></span>
<span class="line"><span style="color:#A6ACCD;">        backtrack(nums, i + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u64A4\u9500\u9009\u62E9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h3><p><a href="https://leetcode.cn/problems/permutations-ii/" target="_blank" rel="noreferrer">\u5168\u6392\u5217</a></p>`,6),c=[p];function t(o,r,i,A,C,d){return a(),n("div",null,c)}const y=s(e,[["render",t]]);export{u as __pageData,y as default};
