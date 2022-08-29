import{_ as s,o as n,c as a,a as e}from"./app.8256f9a4.js";const p="/images/sentry/img-03.png",l="/images/sentry/img-04.png",r="/images/sentry/img-01.png",t="/images/sentry/img-02.png",m=JSON.parse('{"title":"Sentry + Vue \u642D\u5EFA\u5BA2\u6237\u7AEF","description":"","frontmatter":{"title":"Sentry + Vue \u642D\u5EFA\u5BA2\u6237\u7AEF","date":"2021-07-12T00:00:00.000Z"},"headers":[{"level":2,"title":"Sentry \u521B\u5EFA\u65B0\u9879\u76EE","slug":"sentry-\u521B\u5EFA\u65B0\u9879\u76EE"},{"level":3,"title":"Sentry \u4FE1\u606F\u914D\u7F6E","slug":"sentry-\u4FE1\u606F\u914D\u7F6E"},{"level":3,"title":"\u9879\u76EE\u914D\u7F6E","slug":"\u9879\u76EE\u914D\u7F6E"},{"level":3,"title":"sourceMap \u4E0A\u4F20\u65B9\u5F0F","slug":"sourcemap-\u4E0A\u4F20\u65B9\u5F0F"},{"level":3,"title":"sentry-cli \u5982\u4F55\u4E0A\u4F20","slug":"sentry-cli-\u5982\u4F55\u4E0A\u4F20"}],"relativePath":"md/Sentry\u642D\u5EFAVue\u5BA2\u6237\u7AEF.md","lastUpdated":1661784226000}'),o={name:"md/Sentry\u642D\u5EFAVue\u5BA2\u6237\u7AEF.md"},c=e('<h1 id="sentry-vue-\u642D\u5EFA\u5BA2\u6237\u7AEF" tabindex="-1">Sentry + Vue \u642D\u5EFA\u5BA2\u6237\u7AEF <a class="header-anchor" href="#sentry-vue-\u642D\u5EFA\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h1><p>\u9879\u76EE\u4F7F\u7528 Vue 3.0 + vite\u3002\u4F7F\u7528 install \u63D2\u5165 sentrxy\u3002</p><h2 id="sentry-\u521B\u5EFA\u65B0\u9879\u76EE" tabindex="-1">Sentry \u521B\u5EFA\u65B0\u9879\u76EE <a class="header-anchor" href="#sentry-\u521B\u5EFA\u65B0\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u5728\u670D\u52A1\u7AEF\u4E0A\u65B0\u5EFA <code>Vue</code>\u9879\u76EE\u3002</p><img src="'+p+'" width="400"><p>\u521B\u5EFA\u4E4B\u540E\u53EF\u4EE5\u8FDB\u5165\u9879\u76EE\uFF0C\u6309\u7167\u63D0\u793A\u8FDB\u884C\u914D\u7F6E\u3002</p><img src="'+l+'" width="400"><p>\u4E5F\u53EF\u4EE5\u6839\u636E\u4E0B\u9762\u7684\u9879\u76EE\u9879\u76EE\u914D\u7F6E\u3002</p><h3 id="sentry-\u4FE1\u606F\u914D\u7F6E" tabindex="-1">Sentry \u4FE1\u606F\u914D\u7F6E <a class="header-anchor" href="#sentry-\u4FE1\u606F\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="\u83B7\u53D6\u670D\u52A1\u7AEF\u9879\u76EE-dsn" tabindex="-1">\u83B7\u53D6\u670D\u52A1\u7AEF\u9879\u76EE DSN <a class="header-anchor" href="#\u83B7\u53D6\u670D\u52A1\u7AEF\u9879\u76EE-dsn" aria-hidden="true">#</a></h4><img src="'+r+'" width="400"><h4 id="\u751F\u6210\u670D\u52A1\u7AEF-authtoken" tabindex="-1">\u751F\u6210\u670D\u52A1\u7AEF AuthToken <a class="header-anchor" href="#\u751F\u6210\u670D\u52A1\u7AEF-authtoken" aria-hidden="true">#</a></h4><img src="'+t+`" width="400"><h3 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add @sentry/integrations @sentry/tracing @sentry/vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add @sentry/cli -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://www.npmjs.com/package/@sentry/integrations" target="_blank" rel="noreferrer">@sentry/integrations</a>: JavaScript SDK \u96C6\u6210\uFF0C\u589E\u5F3A JS SDK \u7684\u53EF\u63D2\u62D4\u96C6\u6210\u3002</p><p><a href="https://www.npmjs.com/package/@sentry/tracing" target="_blank" rel="noreferrer">@sentry/tracing</a>: \u5305\u542B@sentry/hub\u5BF9\u542F\u7528 Sentry AM \u76F8\u5173\u529F\u80FD\u7684\u6269\u5C55\uFF0C\u4E3A Browser \u548C Node \u63D0\u4F9B\u96C6\u6210\u6574\u5408\u3002</p><p><a href="https://www.npmjs.com/package/@sentry/vue" target="_blank" rel="noreferrer">@sentry/vue</a>: @sentry/browser \u62D3\u5C55\uFF0C\u589E\u52A0\u4E0E Vue \u76F8\u5173\u7684\u529F\u80FD\u3002</p><p><a href="https://www.npmjs.com/package/@sentry/cli" target="_blank" rel="noreferrer">@sentry/cli</a>: Sentry \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\u3002</p><h4 id="\u9879\u76EE\u6587\u4EF6" tabindex="-1">\u9879\u76EE\u6587\u4EF6 <a class="header-anchor" href="#\u9879\u76EE\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .sentryclirc</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 uploadSourceMap.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 axios.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="sentryclirc" tabindex="-1">.sentryclirc <a class="header-anchor" href="#sentryclirc" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[auth]</span></span>
<span class="line"><span style="color:#A6ACCD;">token=\`\${\u4F60\u7684 AuthToken}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">[defaults]</span></span>
<span class="line"><span style="color:#A6ACCD;">org=\`\${\u4F60\u7684\u7EC4\u7EC7\u540D}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">project=\`\${\u4F60\u7684\u9879\u76EE\u540D}\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="uploadsourcemap-sh" tabindex="-1"><a href="http://uploadSourceMap.sh" target="_blank" rel="noreferrer">uploadSourceMap.sh</a> <a class="header-anchor" href="#uploadsourcemap-sh" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/usr/bin/env bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GIT_VERSION=\`git rev-parse --short HEAD\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">VERSION=&quot;$TAG_NAME-$GIT_VERSION&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">echo sentry VERSION $VERSION</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sentry-cli releases files $VERSION upload-sourcemaps ./dist/assets --url-prefix &#39;~/assets&#39; list --validate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cd ./dist/assets</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f *.map *.map.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>VERSION=&quot;$TAG_NAME-$GIT_VERSION&quot;</code> \u914D\u7F6E\u662F\u9632\u6B62\u4E0D\u540C\u73AF\u5883\u751F\u6210\u65F6\uFF0C\u4E2A\u522B\u73AF\u5883\u4F1A\u4F7F\u7528\u540C\u4E00\u4E2A\u5206\u652F commit hash\u3002\u5982\u679C\u6CA1\u6709\u8FD9\u7C7B\u987E\u8651\u7684\u53EF\u4EE5\u4F7F\u7528 <code>commit hash</code>\u4F5C\u4E3A VERSION\u3002</p><h4 id="vite-config-ts" tabindex="-1">vite.config.ts <a class="header-anchor" href="#vite-config-ts" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { execSync } from &#39;child_process&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function commitHash() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return execSync(&#39;git rev-parse --short HEAD&#39;, { encoding: &#39;utf8&#39; }).trim()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">   build: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourcemap: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   define: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      VITE_CONF: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        VITE_APP_VERSION: p<wbr>rocess.env.TAG_NAME + &#39;-&#39; + commitHash(), // \u5199\u5165VERSION</span></span>
<span class="line"><span style="color:#A6ACCD;">        VITE_APP_SENTRY_DSN: \`\${\u4F60\u7684 DSN}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="main-ts" tabindex="-1">main.ts <a class="header-anchor" href="#main-ts" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;@/router/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as Sentry from &#39;@sentry/vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CaptureConsole as CaptureConsoleIntegration } from &#39;@sentry/integrations&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Integrations } from &#39;@sentry/tracing&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App).use(router).use(store, key).use(Antd)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sentry.init({</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue: app,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release: VITE_CONF.VITE_APP_VERSION,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dsn: VITE_CONF.VITE_APP_SENTRY_DSN,</span></span>
<span class="line"><span style="color:#A6ACCD;">  environment: &#39;test&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  logErrors: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  integrations: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Integrations.BrowserTracing({</span></span>
<span class="line"><span style="color:#A6ACCD;">      routingInstrumentation: Sentry.vueRouterInstrumentation(router),</span></span>
<span class="line"><span style="color:#A6ACCD;">      tracingOrigins: [&#39;localhost&#39;, &#39;my-site-url.com&#39;, /^\\//]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new CaptureConsoleIntegration({</span></span>
<span class="line"><span style="color:#A6ACCD;">      levels: [&#39;error&#39;, &#39;info&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tracesSampleRate: 1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="axios-ts" tabindex="-1">axios.ts <a class="header-anchor" href="#axios-ts" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import * as Sentry from &#39;@sentry/vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cosnt errorHandler = (response) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ... ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  Sentry.setTag(&#39;api&#39;, response.config.url)</span></span>
<span class="line"><span style="color:#A6ACCD;">  Sentry.setExtra(&#39;data&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    request: JSON.stringify(response.config.data),</span></span>
<span class="line"><span style="color:#A6ACCD;">    response: JSON.stringify(response.data),</span></span>
<span class="line"><span style="color:#A6ACCD;">    headers: response.config.headers</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;error&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Sentry.captureException(new Error(\`API-\${response.config.url}-\${code}\`))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;info&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.info(\`Device-\${response.config.url}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="sourcemap-\u4E0A\u4F20\u65B9\u5F0F" tabindex="-1">sourceMap \u4E0A\u4F20\u65B9\u5F0F <a class="header-anchor" href="#sourcemap-\u4E0A\u4F20\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC sentry \u4E0A\u4F20 sourceMap \u65B9\u5F0F\u6709\u4E09\u79CD\uFF1A</p><ol><li>sentry-cli \u63D2\u4EF6(\u63A8\u8350)</li><li><a href="https://docs.sentry.io/api/" target="_blank" rel="noreferrer">sentry API</a></li><li>sertry webpack \u6253\u5305\u65F6\u8FDB\u884C\u4E0A\u4F20: <code>@sentry/webpack-plugin</code>/ <code>webpack-sentry-plugin</code></li></ol><h3 id="sentry-cli-\u5982\u4F55\u4E0A\u4F20" tabindex="-1">sentry-cli \u5982\u4F55\u4E0A\u4F20 <a class="header-anchor" href="#sentry-cli-\u5982\u4F55\u4E0A\u4F20" aria-hidden="true">#</a></h3><p>\u67E5\u770B <code>uploadSourceMap.sh</code></p>`,38),i=[c];function A(C,y,d,h,u,D){return n(),a("div",null,i)}const f=s(o,[["render",A]]);export{m as __pageData,f as default};
