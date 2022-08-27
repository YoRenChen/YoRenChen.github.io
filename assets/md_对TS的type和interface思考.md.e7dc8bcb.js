import{_ as s,o as e,c as n,a}from"./app.287c3e30.js";const d=JSON.parse('{"title":"\u5BF9TS\u7684type\u548Cinterface\u601D\u8003","description":"","frontmatter":{"title":"\u5BF9TS\u7684type\u548Cinterface\u601D\u8003","date":"2021-10-25T00:00:00.000Z"},"headers":[],"relativePath":"md/\u5BF9TS\u7684type\u548Cinterface\u601D\u8003.md","lastUpdated":1661572155000}'),t={name:"md/\u5BF9TS\u7684type\u548Cinterface\u601D\u8003.md"},p=a(`<h1 id="\u5BF9ts\u7684type\u548Cinterface\u601D\u8003" tabindex="-1">\u5BF9TS\u7684type\u548Cinterface\u601D\u8003 <a class="header-anchor" href="#\u5BF9ts\u7684type\u548Cinterface\u601D\u8003" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u77E5\u9053type \u548C interface\u7684\u533A\u522B\uFF0C\u5982\uFF1A</p><ol><li>\u57FA\u672C\u7C7B\u578B\u4F7F\u7528type\uFF0C\u56E0\u4E3A interface\u505A\u4E0D\u5230</li><li>\u5143\u7956\u4F7F\u7528 type\uFF0C\u56E0\u4E3A interface\u505A\u4E0D\u5230</li><li>\u51FD\u6570\u4F7F\u7528 type\uFF0C \u56E0\u4E3A\u53EF\u8BFB\u6027\u66F4\u597D</li><li>MappedType \u4F7F\u7528type</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Fruit = &#39;apple&#39; | &#39;orange&#39; | &#39;banana&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">type FruitCount = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [key in Fruit]: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const fruits: FruitCount = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  apple: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  orange: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">  banana: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>UnionType \u4F7F\u7528type\uFF0C\u56E0\u4E3Ainterface\u6CA1\u53D1Union</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Fruit = &#39;apple&#39; | &#39;pear&#39; | &#39;orange&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">type Vegetable = &#39;broccoli&#39; | &#39;carrot&#39; | &#39;lettuce&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// &#39;apple&#39; | &#39;pear&#39; | &#39;orange&#39; | &#39;broccoli&#39; | &#39;carrot&#39; | &#39;lettuce&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">type HealthyFoods = Fruit | Vegetable;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9664\u4E86\u4E4B\u5916\uFF0C\u90FD\u7528 interface\u3002\u56E0\u4E3A\u6027\u80FD\u66F4\u597D\uFF1A</p><blockquote><p>Interfaces create a single flat object type that detects property conflicts, which are usually important to resolve! Intersections on the other hand just recursively merge properties, and in some cases produce never. Interfaces also display consistently better, whereas type aliases to intersections can&#39;t be displayed in part of other intersections. Type relationships between interfaces are also cached, as opposed to intersection types as a whole. A final noteworthy difference is that when checking against a target intersection type, every constituent is checked before checking against the &quot;effective&quot;/&quot;flattened&quot; type.</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const enum A {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface K {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: A</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type V = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: A</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type CustomData&lt;T&gt; = T extends {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [key: string]: string | number</span></span>
<span class="line"><span style="color:#A6ACCD;">} ? T : never</span></span>
<span class="line"><span style="color:#A6ACCD;">const a: CustomData&lt;K&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Type &#39;A&#39; is not assignable to type &#39;never&#39;.(2322)</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: A.a</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>interface \u53EF\u4EE5\u591A\u6B21\u5B9A\u4E49\u3001\u6269\u5145\u548C\u8986\u76D6\uFF1B\u800C type \u662F\u4E00\u9524\u5B9A\u97F3\u7684\uFF0C\u90A3\u4E48\u5BF9\u4E8E type \u6765\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4E00\u53E3\u6C14\u63A8\u5BFC\u5230\u6700\u7EC8\u7ED3\u679C\uFF0C\u800C interface \u5374\u4E0D\u80FD\u3002</p><blockquote><p>Just to fill people in, this behavior is currently by design. Because interfaces can be augmented by additional declarations but type aliases can&#39;t, it&#39;s &quot;safer&quot; (heavy quotes on that one) to infer an implicit index signature for type aliases than for interfaces. But we&#39;ll consider doing it for interfaces as well if that seems to make sense</p></blockquote><p>(\u6765\u6E90)[<a href="https://github.com/microsoft/TypeScript/issues/15300#issuecomment-332366024" target="_blank" rel="noreferrer">https://github.com/microsoft/TypeScript/issues/15300#issuecomment-332366024</a>]</p>`,12),l=[p];function o(c,i,r,y,A,C){return e(),n("div",null,l)}const f=s(t,[["render",o]]);export{d as __pageData,f as default};
