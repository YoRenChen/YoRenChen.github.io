import{_ as s,o as n,c as a,a as e}from"./app.287c3e30.js";const h=JSON.parse('{"title":"\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005","description":"","frontmatter":{"title":"\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005","date":"2020-03-15T00:00:00.000Z"},"headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":2,"title":"\u4E0E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u533A\u522B","slug":"\u4E0E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u533A\u522B"}],"relativePath":"md/\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005.md","lastUpdated":1661572155000}'),l={name:"md/\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005.md"},p=e(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005" tabindex="-1">\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005 <a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F-\u89C2\u5BDF\u8005" aria-hidden="true">#</a></h1><h2 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u5BF9\u8C61\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u5F53\u76EE\u6807\u5BF9\u8C61\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u901A\u77E5\u4F9D\u8D56\u5B83\u7684 Observer \u5BF9\u8C61\u3002</p><h2 id="\u4E0E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u533A\u522B" tabindex="-1">\u4E0E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u533A\u522B <a class="header-anchor" href="#\u4E0E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u533A\u522B" aria-hidden="true">#</a></h2><p>\u89C2\u5BDF\u8005\uFF1A \u4E00\u5BF9\u591A\uFF0C\u63A5\u53D7\u8005\u88AB\u8FEB\u63A5\u53D7\u901A\u77E5\u3002\u4F9D\u8D56\u6027\u5F3A \u53D1\u5E03\u8BA2\u9605\uFF1A\u591A\u4E86\u4E00\u5C42\u4E2D\u95F4\u5C42(\u4E8B\u4EF6\u8C03\u5EA6\u4E2D\u5FC3)\u3002\u89E3\u8026</p><ol><li>\u76EE\u6807\u5BF9\u8C61\u53EF\u4EE5 \u6DFB\u52A0\u3001\u5220\u9664\u3001\u901A\u77E5 Observer</li><li>Observer \u53EF\u4EE5\u63A5\u53D7\u5E76\u5904\u7406</li><li>\u76EE\u6807\u5BF9\u8C61\u53D1\u751F\u72B6\u6001\u53D8\u66F4\u65F6\uFF0C\u901A\u77E5\u6240\u6709 Observer</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Subject {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observer = []</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	add(obs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observer.push(obs)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	delete(obs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		const idx = this.observer.findIndex(el =&gt; el === obs)</span></span>
<span class="line"><span style="color:#A6ACCD;">		idx &gt; -1 &amp;&amp; this.observer.splice(idx, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	notify() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observer.forEach(el =&gt; (&#39;update&#39; in el &amp;&amp; el.update()))</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Observer {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	update() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&#39;\u6536\u5230\uFF1A&#39;, this.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const sub = new Subject()</span></span>
<span class="line"><span style="color:#A6ACCD;">sub.add(new Observer(&#39;\u82F9\u679C&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">sub.add(new Observer(&#39;\u9999\u8549&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">sub.notify()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),t=[p];function o(c,r,i,A,C,d){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
