import{_ as s,o as n,c as a,a as e}from"./app.287c3e30.js";const _=JSON.parse('{"title":"\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605","description":"","frontmatter":{"title":"\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605","date":"2020-03-15T00:00:00.000Z"},"headers":[],"relativePath":"md/\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605.md","lastUpdated":1661572155000}'),t={name:"md/\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605.md"},l=e(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605" tabindex="-1">\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605 <a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F-\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a></h1><p>\u8BA2\u9605\u8005\u628A\u60F3\u8BA2\u9605\u7684\u4E8B\u4EF6\u653E\u7F6E\u5230\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u5F53\u53D1\u5E03\u8005\u53D1\u5E03\u8BE5\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u4E8B\u4EF6\u4E2D\u5FC3\u7684\u6240\u6709\u8C03\u5EA6\u3002 <code>vue eventBusVue</code> <code>\u53CC\u5411\u7ED1\u5B9A</code> <code>redux subscribe</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class EventEmitter {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.listener = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u8BA2\u9605</span></span>
<span class="line"><span style="color:#A6ACCD;">	subscribe(eventName, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		eventName in this.listener</span></span>
<span class="line"><span style="color:#A6ACCD;">			? this.listener[eventName].push(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">			: this.listener[eventName] = [fn]</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	offSubscribe(eventName, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		let cb = this.listener[eventName]</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (!cb) return &#39;not eventName&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		const CBCODE = \`success offSubscribe \${eventName}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (!fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.listener[eventName] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">			return CBCODE</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(let i in cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			if (cb[i] == fn || cb[i].fnCallback == fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				cb.splice(i, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">				break;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return CBCODE</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	emit(eventName, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		const cb = this.listener[eventName]</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (!cb) return &#39;not eventName emit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		cb.forEach(el =&gt; el(data))</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5355\u6B21\u8BA2\u9605, \u5148\u5C01\u88C5\u8BA2\u9605\u518D\u53D1\u5E03\u65F6\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">	once(eventName, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		const ev = (...arg) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			fn(...arg)</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.offSubscribe(eventName, ev)</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u81EA\u5B9A\u4E49\u503C\u7ED9 off \u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">		ev.fnCallback = fn</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.subscribe(eventName, ev)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),p=[l];function c(o,r,i,C,A,D){return n(),a("div",null,p)}const d=s(t,[["render",c]]);export{_ as __pageData,d as default};
