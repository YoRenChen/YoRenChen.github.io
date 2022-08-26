import{_ as s,c as n,o as a,a as l}from"./app.f6eafdd6.js";const y=JSON.parse('{"title":"\u95ED\u5305\u4E0E\u67EF\u91CC\u5316","description":"","frontmatter":{"title":"\u95ED\u5305\u4E0E\u67EF\u91CC\u5316","date":"2021-11-14T00:00:00.000Z"},"headers":[],"relativePath":"md/\u95ED\u5305\u4E0E\u67EF\u91CC\u5316.md","lastUpdated":1661483318000}'),e={name:"md/\u95ED\u5305\u4E0E\u67EF\u91CC\u5316.md"},p=l(`<h1 id="\u95ED\u5305\u4E0E\u67EF\u91CC\u5316" tabindex="-1">\u95ED\u5305\u4E0E\u67EF\u91CC\u5316 <a class="header-anchor" href="#\u95ED\u5305\u4E0E\u67EF\u91CC\u5316" aria-hidden="true">#</a></h1><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const xy = (x) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return y =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return x * y</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">xy(2)(2) // 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function myCurry(func) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function curried(...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return args.length &gt;= func.length ?</span></span>
<span class="line"><span style="color:#A6ACCD;">      func.call(this, ...args) :</span></span>
<span class="line"><span style="color:#A6ACCD;">      (...rest) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return curried.call(this, ...args, ...rest);</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[p];function c(o,r,i,A,C,_){return a(),n("div",null,t)}const u=s(e,[["render",c]]);export{y as __pageData,u as default};
