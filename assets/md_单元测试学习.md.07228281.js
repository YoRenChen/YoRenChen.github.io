import{_ as s,o as n,c as a,a as l}from"./app.8256f9a4.js";const d=JSON.parse('{"title":"\u4EE3\u7801\u5206\u652F\u6D41\u7A0B","description":"","frontmatter":{"title":"\u4EE3\u7801\u5206\u652F\u6D41\u7A0B","date":"2020-12-20T00:00:00.000Z"},"headers":[{"level":3,"title":"\u6D4B\u8BD5\u6846\u67B6","slug":"\u6D4B\u8BD5\u6846\u67B6"},{"level":3,"title":"\u6587\u4EF6\u7EC4\u7EC7\u7ED3\u6784","slug":"\u6587\u4EF6\u7EC4\u7EC7\u7ED3\u6784"},{"level":3,"title":"cicd \u6D41\u7A0B","slug":"cicd-\u6D41\u7A0B"},{"level":3,"title":"\u4EE3\u7801\u89C4\u8303","slug":"\u4EE3\u7801\u89C4\u8303"},{"level":3,"title":"\u4E0D\u9700\u8981\u6D4B\u8BD5","slug":"\u4E0D\u9700\u8981\u6D4B\u8BD5"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"md/\u5355\u5143\u6D4B\u8BD5\u5B66\u4E60.md","lastUpdated":1661784226000}'),p={name:"md/\u5355\u5143\u6D4B\u8BD5\u5B66\u4E60.md"},e=l(`<h3 id="\u6D4B\u8BD5\u6846\u67B6" tabindex="-1">\u6D4B\u8BD5\u6846\u67B6 <a class="header-anchor" href="#\u6D4B\u8BD5\u6846\u67B6" aria-hidden="true">#</a></h3><p>\u76EE\u524D\u57FA\u4E8E vue \u9879\u76EE\u6846\u67B6\u91C7\u7528 vue-jest</p><p><a href="https://next.vue-test-utils.vuejs.org/installation/" target="_blank" rel="noreferrer">vue test</a></p><p><a href="https://jestjs.io/docs/api" target="_blank" rel="noreferrer">jest</a></p><h3 id="\u6587\u4EF6\u7EC4\u7EC7\u7ED3\u6784" tabindex="-1">\u6587\u4EF6\u7EC4\u7EC7\u7ED3\u6784 <a class="header-anchor" href="#\u6587\u4EF6\u7EC4\u7EC7\u7ED3\u6784" aria-hidden="true">#</a></h3><ol><li>\u5168\u5C40\u901A\u7528\u7684\u914D\u7F6E</li></ol><p>\u7EDF\u4E00\u653E\u5728 test/setup.ts \uFF0C\u7ED3\u5408 jest.config \u914D\u7F6E setupFiles: [&#39;./src/test/setup.ts&#39;]</p><p>\u793A\u4F8B\uFF1A</p><p>import { config } from &#39;@vue/test-utils&#39;</p><p>config.global.mocks = { $ossPath: &#39;&#39; }</p><ol start="2"><li>api \u7684 mock \u6570\u636E</li></ol><p>\u6587\u4EF6\u4EE5<strong>mocks</strong>\u547D\u540D\uFF0C\u653E\u5728\u5BF9\u5E94 api \u6587\u4EF6\u4E0B \uFF0Cjest \u4F1A\u81EA\u52A8\u8BC6\u522B\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5728\u6D4B\u8BD5\u6587\u4EF6\u4E2D\u6309\u6B63\u5E38 api \u8C03\u7528\u7684\u5199\u6CD5\u5373\u53EF\u3002</p><ol start="3"><li>\u6D4B\u8BD5\u6587\u4EF6</li></ol><p>\u6587\u4EF6\u4EE5<strong>tests</strong>\u547D\u540D\uFF0C\u653E\u5728\u5BF9\u5E94\u9700\u8981\u6D4B\u8BD5\u7684\u6587\u4EF6\u4E0B</p><h3 id="cicd-\u6D41\u7A0B" tabindex="-1">cicd \u6D41\u7A0B <a class="header-anchor" href="#cicd-\u6D41\u7A0B" aria-hidden="true">#</a></h3><p>\u5728.gitlab-ci.yml \u6587\u4EF6\u4E2D\u52A0\u5165\u6D4B\u8BD5\u6D41\u7A0B\uFF0C\u6BCF\u4E00\u6B21\u53D1\u5E03\u90FD\u8981\u8DD1\u5355\u5143\u6D4B\u8BD5\uFF0C\u4EE3\u7801\u4EE5\u6A21\u7EC4\u4E3A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">stages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - autochart</span></span>
<span class="line"><span style="color:#A6ACCD;">  - detect</span></span>
<span class="line"><span style="color:#A6ACCD;">  - test</span></span>
<span class="line"><span style="color:#A6ACCD;">  - build</span></span>
<span class="line"><span style="color:#A6ACCD;">  - deploy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test:unit-test:</span></span>
<span class="line"><span style="color:#A6ACCD;">  stage: test</span></span>
<span class="line"><span style="color:#A6ACCD;">  image: \${CI_IMAGE_NODE}</span></span>
<span class="line"><span style="color:#A6ACCD;">  only:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - master</span></span>
<span class="line"><span style="color:#A6ACCD;">    - tags</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: .node-cache</span></span>
<span class="line"><span style="color:#A6ACCD;">  script:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - yarn run test --silent</span></span>
<span class="line"><span style="color:#A6ACCD;">  tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - ali</span></span>
<span class="line"><span style="color:#A6ACCD;">    - docker</span></span>
<span class="line"><span style="color:#A6ACCD;">    - new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4EE3\u7801\u89C4\u8303" tabindex="-1">\u4EE3\u7801\u89C4\u8303 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a></h3><p>\u76EE\u524D\u91C7\u7528 eslint-plugin-jest\uFF08 <a href="https://github.com/jest-community/eslint-plugin-jest#readme" target="_blank" rel="noreferrer">https://github.com/jest-community/eslint-plugin-jest#readme</a> \uFF09</p><h3 id="\u4E0D\u9700\u8981\u6D4B\u8BD5" tabindex="-1">\u4E0D\u9700\u8981\u6D4B\u8BD5 <a class="header-anchor" href="#\u4E0D\u9700\u8981\u6D4B\u8BD5" aria-hidden="true">#</a></h3><ul><li>\u7B2C\u4E09\u65B9\u63D0\u4F9B\u7684\u529F\u80FD</li><li>antdesign \u4E2D\u7684\u7EC4\u4EF6\u3001vue-router \u7684\u8DEF\u7531\u8DF3\u8F6C\u65B9\u6CD5</li><li>\u4E0E\u903B\u8F91\u65E0\u5173\u7684 UI</li><li>\u5E03\u5C40\u3001\u6837\u5F0F</li></ul><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\u7684\u7ED3\u6784</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">describe(&#39;\u4E00\u7C7B\u6D4B\u8BD5&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let wrapper: Wrapper&lt;Vue&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wrapper = shallowMount(component, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  afterEach(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    wrapper.destroy()</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;\u6D4B\u8BD5\u4E00&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect().toBeTruthy()</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;\u6D4B\u8BD5\u4E8C&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect().toBeTruthy()</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F02\u6B65 expect</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { nextTick } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const asyncExpect = (fn: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;aa&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  it(&#39;aaa&#39;, async() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">     // await wrapper.vm.$nextTick()</span></span>
<span class="line"><span style="color:#A6ACCD;">     // expect(getOrderInfo).toBeCalledTimes(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">     // expect(wrapper.vm.orderStatus).toBe(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">     await asyncExpect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      expect(getOrderInfo).toBeCalledTimes(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">      expect(wrapper.vm.orderStatus).toBe(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81EA\u5B9A\u4E49\u5339\u914D\u2014\u2014\u53EF\u4EE5\u62BD\u53D6\u51FA\u4E00\u4E9B\u76F8\u540C\u7ED3\u6784\u7684 matchers</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">expect.extend({</span></span>
<span class="line"><span style="color:#A6ACCD;">  innerHtmlToBe(ele, str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const pass = ele.element.innerHTML === str</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (pass) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: () =&gt; &#39;success&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        pass: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: () =&gt; &#39;fail&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        pass: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">describe(&#39;AlertTest&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  test(&#39;\u8BBE\u7F6Etitle\u65F6\uFF0C\u80FD\u6B63\u786E\u663E\u793Atitle&#39;, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const wrapper = shallowMount(Alert, {</span></span>
<span class="line"><span style="color:#A6ACCD;">      props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;aa&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // expect(wrapper.find(&#39;.alert-title&#39;).element.innerHTML).toBe(&#39;aa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(wrapper.find(&#39;.alert-title&#39;)).innerHtmlToBe(&#39;aa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>ts \u4E2D\u9700\u8981\u540C\u6B65\u914D\u7F6E\u8BE5 matchers \u7C7B\u578B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">namespace jest {</span></span>
<span class="line"><span style="color:#A6ACCD;">    interface Matchers&lt;R&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      innerHtmlToBe(s: string): R</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),t=[e];function c(o,r,i,A,C,y){return n(),a("div",null,t)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
