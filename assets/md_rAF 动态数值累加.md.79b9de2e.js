import{_ as s,o as n,c as a,a as l}from"./app.8256f9a4.js";const h=JSON.parse('{"title":"rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0","description":"","frontmatter":{"title":"rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0","date":"2021-10-10T00:00:00.000Z"},"headers":[{"level":3,"title":"rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0","slug":"raf-\u52A8\u6001\u6570\u503C\u7D2F\u52A0"}],"relativePath":"md/rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0.md","lastUpdated":1661784226000}'),p={name:"md/rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0.md"},e=l(`<h3 id="raf-\u52A8\u6001\u6570\u503C\u7D2F\u52A0" tabindex="-1">rAF \u52A8\u6001\u6570\u503C\u7D2F\u52A0 <a class="header-anchor" href="#raf-\u52A8\u6001\u6570\u503C\u7D2F\u52A0" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> /**</span></span>
<span class="line"><span style="color:#A6ACCD;">  * \u6570\u503C\u7D2F\u52A0 requestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">  * \u56FA\u5B9A\u65F6\u95F4\u6267\u884C\u5B8C\u6210\u3001\u56FA\u5B9A\u901F\u5EA6\u6267\u884C\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;"> class NumberAccumulation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.start = props.start || 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.end = props.end || 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.space = props.space || 0 // \u95F4\u9694, \u4F7F\u7528\u95F4\u9694\u589E\u957F</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.duration = props.duration || 0 // \u603B\u65F6\u957F, \u4F7F\u7528\u65F6\u957F\u589E\u957F</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.callback = props.callback</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.nodeNumer = 0 // \u6BCF\u6B21\u8DDF\u65B0\u6700\u5C0F\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.animationEngine = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.startTime = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.startTime = +new Date()</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.fpsTime = 1000 / 60 // \u5047\u8BBE\u662F60\u5E27\uFF0C\u5982\u679C\u51CF\u5E27\u60C5\u51B5\u76F4\u63A5\u5230\u6307\u5B9A\u65F6\u95F4\u5C31\u5230 end</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.isReverseSort = false // \u662F\u5426\u5012\u53D9</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const bit = this.getBit(this.end)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.isReverseSort = this.start &gt; this.end</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5224\u65AD\u662F \u6307\u5B9A\u65F6\u95F4 \u8FD8\u662F \u6307\u5B9A\u901F\u5EA6\uFF0C\u6307\u5B9A\u65F6\u95F4\u6700\u5927</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.space &amp;&amp; !this.duration) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.nodeNumer = Math.round(((this.end - this.start) / this.fpsTime) * Math.pow(10, bit)) / Math.pow(10, bit)</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this.nodeNumer);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.spaceAddNumber()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.duration) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.nodeNumer = Math.round(((this.end - this.start) / Math.ceil(this.duration / this.fpsTime)) * Math.pow(10, bit)) / Math.pow(10, bit)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.durationAddNumber()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8BA1\u7B97\u5C0F\u6570\u70B9\u540E\u4F4D\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  getBit(number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof number !== &#39;number&#39;) return 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    const str = \`\${this.end}\`.split(&#39;.&#39;)[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str ? str.length : 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6BD4\u8F83\u662F\u5426\u5230\u8FBE\u6700\u5927\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  getCompare(val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.isReverseSort ? val &lt;= this.end : val &gt;= this.end</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6307\u5B9A\u52A8\u753B\u901F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">  spaceAddNumber() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const val = this.start + this.nodeNumer</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.getCompare(val) || !this.nodeNumer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.callback &amp;&amp; this.callback(this.end)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.clearAnimation()</span></span>
<span class="line"><span style="color:#A6ACCD;">      return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const currentTime = +new Date()</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (currentTime - this.startTime &gt;= this.space) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.startTime = currentTime</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.start = val</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.callback(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.clearAnimation()</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setAnimation(this.spaceAddNumber)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u65F6\u95F4\u533A\u95F4\u5185\u6267\u884C\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  durationAddNumber() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const diffTime = (+new Date() - this.startTime) || 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    const diffNum = Math.abs(this.end - this.start)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5BF9\u6BD4\u8FDB\u5EA6\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    const val = this.isReverseSort</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? Math.round(this.start - (diffNum * diffTime / this.duration))</span></span>
<span class="line"><span style="color:#A6ACCD;">      : Math.round(diffNum * diffTime / this.duration)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.getCompare(val)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.callback &amp;&amp; this.callback(this.end)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.clearAnimation()</span></span>
<span class="line"><span style="color:#A6ACCD;">      return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.callback(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.clearAnimation()</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.setAnimation(this.durationAddNumber)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  setAnimation(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const animation = window.requestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.animationEngine = animation(fn.bind(this))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  clearAnimation() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const animation = window.cancelAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.animationEngine &amp;&amp; animation(this.animationEngine)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new NumberAccumulation({</span></span>
<span class="line"><span style="color:#A6ACCD;">    start: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    end: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // space: 50,</span></span>
<span class="line"><span style="color:#A6ACCD;">    duration: 1000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    callback: (res) =&gt; console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).init()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[e];function o(i,c,r,A,C,D){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{h as __pageData,d as default};
