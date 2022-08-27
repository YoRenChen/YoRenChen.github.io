import{_ as s,o as a,c as n,a as e}from"./app.287c3e30.js";const h=JSON.parse('{"title":"webpack\u5347\u7EA7Vite\u95EE\u9898\u6C47\u603B","description":"","frontmatter":{"title":"webpack\u5347\u7EA7Vite\u95EE\u9898\u6C47\u603B","date":"2021-12-20T00:00:00.000Z"},"headers":[],"relativePath":"md/webpack\u5347\u7EA7Vite\u95EE\u9898\u6C47\u603B.md","lastUpdated":1661572155000}'),l={name:"md/webpack\u5347\u7EA7Vite\u95EE\u9898\u6C47\u603B.md"},p=e(`<h1 id="webpack\u5347\u7EA7vite\u95EE\u9898\u6C47\u603B" tabindex="-1">webpack\u5347\u7EA7Vite\u95EE\u9898\u6C47\u603B <a class="header-anchor" href="#webpack\u5347\u7EA7vite\u95EE\u9898\u6C47\u603B" aria-hidden="true">#</a></h1><h4 id="the-following-dependencies-are-imported-but-could-not-be-resolved" tabindex="-1">The following dependencies are imported but could not be resolved <a class="header-anchor" href="#the-following-dependencies-are-imported-but-could-not-be-resolved" aria-hidden="true">#</a></h4><p>\u3010\u522B\u540D\u672A\u6B63\u786E\u914D\u7F6E\u3011</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createVuePlugin } from &quot;vite-plugin-vue2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [createVuePlugin()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /** \u6DFB\u52A0alias\u89C4\u5219 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { find: &#39;@/&#39;, replacement: &#39;/src/&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="failed-to-resolve-import-app-from-src-main-js" tabindex="-1">Failed to resolve import &quot;./App&quot; from &quot;src/main.js <a class="header-anchor" href="#failed-to-resolve-import-app-from-src-main-js" aria-hidden="true">#</a></h4><p>\u3010\u5F15\u5165App\u7EC4\u4EF6\u7684\u65F6\u5019\u6CA1\u6709\u5E26\u6587\u4EF6\u540E\u7F00.vue\u3011</p><ol><li>\u624B\u52A8\u6DFB\u52A0.vue\u540E\u7F00</li><li>\u914D\u7F6Evite.config.js\u7684extensions\u5B57\u6BB5\uFF0C\u6765\u6DFB\u52A0\u81EA\u52A8\u67E5\u627E\u6587\u4EF6\u6269\u5C55\u540D\u540E\u7F00</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">    extensions: [&quot;.vue&quot;, &quot;.js&quot;, &quot;.ts&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="dependency-less-not-found-did-you-install-it" tabindex="-1">dependency &quot;less&quot; not found. Did you install it <a class="header-anchor" href="#dependency-less-not-found-did-you-install-it" aria-hidden="true">#</a></h4><p>\u3010\u5B89\u88C5vite\u4E2D\u89E3\u6790less\u63D2\u4EF6\u3011 <code>npm install less -D</code></p><p>\u5728vite\u4E2D\u53EA\u9700\u8981\u5B89\u88C5\uFF0Cvite\u4F1A\u81EA\u52A8\u5904\u7406sass,less\u6587\u4EF6\u3002</p><h4 id="internal-server-error-ant-default-less-wasn-t-found" tabindex="-1">Internal server error: &#39;~ant.../default.less&#39; wasn&#39;t found. <a class="header-anchor" href="#internal-server-error-ant-default-less-wasn-t-found" aria-hidden="true">#</a></h4><p>\u76F4\u63A5\u5F15\u5165 @import &#39;~\u7EC4\u4EF6\u5E93.less&#39;\u6837\u5F0F\u5E93\u5BFC\u81F4</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { find: /^~/, replacement: &#39;&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="require-is-not-defined" tabindex="-1">require is not defined <a class="header-anchor" href="#require-is-not-defined" aria-hidden="true">#</a></h4><p>vite \u4E0D\u652F\u6301 <code>require</code></p><ol><li>\u4F7F\u7528 ES6 import</li><li>\u8DEF\u5F84\u8BBF\u95EE</li><li>i<wbr>mport.meta.glob()\uFF0C\u5F02\u6B65\uFF0C\u9002\u5408\u914D\u7F6E\u61D2\u52A0\u8F7D\u52A8\u6001\u8DEF\u7531</li></ol><h4 id="failed-to-resolve-import-\u2018-xxx-png\u2019" tabindex="-1">Failed to resolve import \u2018../xxx.png\u2019. <a class="header-anchor" href="#failed-to-resolve-import-\u2018-xxx-png\u2019" aria-hidden="true">#</a></h4><p>\u6CE8\u610F\u7F16\u8BD1\u4E4B\u540E\u7684\u8DEF\u5F84\u662Fpublic</p><h4 id="\u5904\u7406\u9879\u76EE\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668" tabindex="-1">\u5904\u7406\u9879\u76EE\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668 <a class="header-anchor" href="#\u5904\u7406\u9879\u76EE\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668" aria-hidden="true">#</a></h4><p><code>@vitejs/plugin-legacy</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import legacy from &#39;@vitejs/plugin-legacy&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">legacy({</span></span>
<span class="line"><span style="color:#A6ACCD;">  targets: [&#39;ie &gt;= 9&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  additionalLegacyPolyfills: [&#39;regenerator-runtime/runtime&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="css-\u524D\u7F00" tabindex="-1">css \u524D\u7F00 <a class="header-anchor" href="#css-\u524D\u7F00" aria-hidden="true">#</a></h4><p><code>npx install autoprefixer -D</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">css: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    postcss: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(&#39;autoprefixer&#39;)({</span></span>
<span class="line"><span style="color:#A6ACCD;">          overrideBrowserslist: [&#39;Android 4.1&#39;, &#39;iOS 7.1&#39;, &#39;Chrome &gt; 31&#39;, &#39;ff &gt; 31&#39;, &#39;ie &gt;= 9&#39;, &#39;&gt; 1%&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">          grid: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }),</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),o=[p];function t(i,r,c,d,C,A){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{h as __pageData,y as default};
