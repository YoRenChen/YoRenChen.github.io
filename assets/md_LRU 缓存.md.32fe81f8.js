import{_ as s,o as a,c as n,a as e}from"./app.8256f9a4.js";const y=JSON.parse('{"title":"LRU \u7F13\u5B58","description":"","frontmatter":{"title":"LRU \u7F13\u5B58","date":"2022-03-01T00:00:00.000Z"},"headers":[{"level":3,"title":"keepAlive \u4E2D\u7684 LRU \u7F13\u5B58\u4F7F\u7528","slug":"keepalive-\u4E2D\u7684-lru-\u7F13\u5B58\u4F7F\u7528"},{"level":3,"title":"\u7EBF\u6027\u8868","slug":"\u7EBF\u6027\u8868"}],"relativePath":"md/LRU \u7F13\u5B58.md","lastUpdated":1661784226000}'),l={name:"md/LRU \u7F13\u5B58.md"},p=e(`<h1 id="lru-\u7F13\u5B58" tabindex="-1">LRU \u7F13\u5B58 <a class="header-anchor" href="#lru-\u7F13\u5B58" aria-hidden="true">#</a></h1><blockquote><p>LRU \u7684\u4E3B\u4F53\u601D\u60F3\u5728\u4E8E\uFF1A\u5982\u679C\u6570\u636E\u6700\u8FD1\u88AB\u8BBF\u95EE\u8FC7,\u90A3\u4E48\u5C06\u6765\u88AB\u8BBF\u95EE\u7684\u51E0\u7387\u4E5F\u66F4\u9AD8\u3002</p></blockquote><p><code>hashMap + \u53CC\u5411\u94FE\u8868</code></p><p>LRU\uFF08Least Recently Used\uFF09\u5373\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7F13\u5B58\uFF0C\u524D\u7AEF\u5728\u505A\u6027\u80FD\u4F18\u5316\u7684\u65F6\u5019\u4F1A\u7ECF\u5E38\u7528\u5230\u4F7F\u7528\u5230\u7F13\u5B58\uFF0C\u7528\u4EE5\u7A7A\u95F4\u6362\u65F6\u95F4\u7684\u65B9\u5F0F\u6765\u8FBE\u5230\u6027\u80FD\u4F18\u5316\u76EE\u6807\u3002</p><ol><li>\u9700\u8981\u7ED9\u5B9A\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u7684\u957F\u5EA6\uFF0C\u4E0D\u80FD\u65E0\u9650\u5236\u7684\u7F13\u5B58\u6570\u636E\uFF1B</li><li>LRU \u5B9E\u4F8B\u63D0\u4F9B\u4E00\u4E2A get \u65B9\u6CD5\uFF0C\u53EF\u901A\u8FC7\u5173\u952E\u5B57 key \u83B7\u53D6\u7F13\u5B58\u4E2D\u6570\u636E\uFF0C\u82E5\u6CA1\u6709\u5219\u8FD4\u56DE -1\uFF1B</li><li>LRU \u5B9E\u4F8B\u63D0\u4F9B\u4E00\u4E2A put \u65B9\u6CD5\uFF0C\u53D8\u66F4\u6570\u636E\u503C\uFF0C\u82E5\u6570\u636E\u5B58\u5728\u5219\u4FEE\u6539\uFF0C\u4E0D\u5B58\u5728\u5219\u63D2\u5165\u4E00\u6761\u65B0\u6570\u636E\uFF0C\u63D2\u5165\u65F6\u8D85\u8FC7\u6570\u636E\u957F\u5EA6\u5219\u5220\u9664\u6700\u4E45\u672A\u4F7F\u7528\u7684\u5173\u952E\u5B57\u3002</li><li>get\u3001put \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5FC5\u987B\u662F O(1)</li></ol><blockquote><p>\u5982\u679C\u7528\u6570\u7EC4\u5B58\u50A8\u90A3\u4E48\u7B2C 4 \u70B9\u7684\u590D\u6742\u5EA6\u4E3A O(n) \u5B9E\u73B0\u6570\u636E\u5BF9\u8C61\u64CD\u4F5C\u9009\u62E9\u4F7F\u7528 \u53CC\u5411\u94FE\u8868 \u4E3A\u4E86\u89E3\u51B3\u67E5\u8BE2 O(n)\uFF0C\u642D\u914D Map \u4F7F\u7528</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class LRUcache {</span></span>
<span class="line"><span style="color:#A6ACCD;">  capacity: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  cache: Map&lt;number, number | null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(capacity: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.capacity = capacity</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cache = new Map()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  get(key: number): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.cache.has(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const node = this.cache.get(key) as number</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.cache.delete(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.cache.set(key, node)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return node</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return -1</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  put(key: number, value: number): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.cache.has(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.cache.delete(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (this.cache.size &gt;= this.capacity) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FED\u4EE3\u5668\u83B7\u53D6\u4E0B\u4E00\u4E2A next().value\uFF0C\u7F6E\u7A7A\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.cache.delete(this.cache.keys().next().value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.cache.set(key, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="keepalive-\u4E2D\u7684-lru-\u7F13\u5B58\u4F7F\u7528" tabindex="-1">keepAlive \u4E2D\u7684 LRU \u7F13\u5B58\u4F7F\u7528 <a class="header-anchor" href="#keepalive-\u4E2D\u7684-lru-\u7F13\u5B58\u4F7F\u7528" aria-hidden="true">#</a></h3><p>keepAlive \u5305\u88F9\u7684\u7EC4\u4EF6\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u4E4B\u540E\u628A VNode \u7F13\u5B58\u8D77\u6765\uFF0C\u5E76\u4E0D\u9700\u8981\u8FDB\u884C\u7EC4\u4EF6\u521D\u59CB\u5316\u3002</p><h3 id="\u7EBF\u6027\u8868" tabindex="-1">\u7EBF\u6027\u8868 <a class="header-anchor" href="#\u7EBF\u6027\u8868" aria-hidden="true">#</a></h3><h4 id="\u6570\u636E\uFF1A\u987A\u5E8F\u50A8\u5B58\u7ED3\u6784" tabindex="-1">\u6570\u636E\uFF1A\u987A\u5E8F\u50A8\u5B58\u7ED3\u6784 <a class="header-anchor" href="#\u6570\u636E\uFF1A\u987A\u5E8F\u50A8\u5B58\u7ED3\u6784" aria-hidden="true">#</a></h4><ul><li>\u67E5\u8BE2\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)</li><li>\u589E\u548C\u5220\u4E3A O(N)(\u63D2\u5165\u5C3E\u90E8\u4E3A O(1))</li><li>\u9700\u8981\u5360\u636E\u8FDE\u7EED\u5185\u5B58\u7A7A\u95F4</li></ul><p>\u94FE\u8868\uFF1A\u94FE\u5F0F\u50A8\u5B58\u7ED3\u6784</p><ul><li>\u67E5\u8BE2\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)</li><li>\u589E\u548C\u5220\u4E3A O(1)</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class ListNode {</span></span>
<span class="line"><span style="color:#A6ACCD;">    val: number</span></span>
<span class="line"><span style="color:#A6ACCD;">    next: ListNode | null</span></span>
<span class="line"><span style="color:#A6ACCD;">    pre: ListNode | null</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(val?: any, pre?: ListNode | null, next?: ListNode | null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.val = val</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.next = (next===undefined ? null : next)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,15),c=[p];function t(o,i,r,A,C,d){return a(),n("div",null,c)}const u=s(l,[["render",t]]);export{y as __pageData,u as default};
