import{_ as s,o as n,c as a,a as l}from"./app.8256f9a4.js";const d=JSON.parse('{"title":"\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392","description":"","frontmatter":{"title":"\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392","date":"2022-01-03T00:00:00.000Z"},"headers":[{"level":3,"title":"\u5FEB\u6392","slug":"\u5FEB\u6392"},{"level":3,"title":"\u4E09\u8DEF\u5FEB\u6392","slug":"\u4E09\u8DEF\u5FEB\u6392"}],"relativePath":"md/\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392.md","lastUpdated":1661784226000}'),p={name:"md/\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392.md"},e=l(`<h1 id="\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392" tabindex="-1">\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392 <a class="header-anchor" href="#\u5FEB\u6392\u4E0E\u4E09\u8DEF\u5FEB\u6392" aria-hidden="true">#</a></h1><h3 id="\u5FEB\u6392" tabindex="-1">\u5FEB\u6392 <a class="header-anchor" href="#\u5FEB\u6392" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export let quickSort = (arr, left, right) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var len = arr.length,</span></span>
<span class="line"><span style="color:#A6ACCD;">        partitionIndex,</span></span>
<span class="line"><span style="color:#A6ACCD;">        left = typeof left != &#39;number&#39; ? 0 : left,</span></span>
<span class="line"><span style="color:#A6ACCD;">        right = typeof right != &#39;number&#39; ? len - 1 : right;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (left &lt; right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        partitionIndex = partition(arr, left, right);</span></span>
<span class="line"><span style="color:#A6ACCD;">        quickSort(arr, left, partitionIndex-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        quickSort(arr, partitionIndex+1, right);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const partition = (arr, left, right) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let pivot = left, index = pivot + 1, key = index</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = index; i &lt;= right; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arr[i] &lt; arr[pivot]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap(arr, i, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      key++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  swap(arr, pivot, key - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return key - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const swap = (arr, i, j) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var temp = arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr[i] = arr[j];</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr[j] = temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let quickSort1 = (arr, left, right) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  left = typeof left != &#39;number&#39; ? 0 : left</span></span>
<span class="line"><span style="color:#A6ACCD;">  right = typeof right != &#39;number&#39; ? arr.length - 1 : right</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (left &gt;= right) return arr</span></span>
<span class="line"><span style="color:#A6ACCD;">  let index = left + 1, key = index</span></span>
<span class="line"><span style="color:#A6ACCD;">  while(index &lt;= right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arr[index] &lt; arr[left]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap(arr, index, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">      key++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    index++</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  swap(arr, left, key - 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort1(arr, left, key - 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort1(arr, key, right)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E09\u8DEF\u5FEB\u6392" tabindex="-1">\u4E09\u8DEF\u5FEB\u6392 <a class="header-anchor" href="#\u4E09\u8DEF\u5FEB\u6392" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let quickSort2 = (arr, left, right) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  left = typeof left === &#39;number&#39; ? left :0</span></span>
<span class="line"><span style="color:#A6ACCD;">  right = typeof right === &#39;number&#39; ? right : arr.length - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  let lt = left, index = lt + 1,rt = right + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (right &lt; left) return arr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  while(index &lt; rt) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (arr[index] &lt; arr[left]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap(arr, lt+1, index)</span></span>
<span class="line"><span style="color:#A6ACCD;">      lt++</span></span>
<span class="line"><span style="color:#A6ACCD;">      index++</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if(arr[index] &gt; arr[left]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      swap(arr, rt-1, index)</span></span>
<span class="line"><span style="color:#A6ACCD;">      rt--</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      index++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  swap(arr, lt, left)</span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort2(arr, left, lt -1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  quickSort2(arr, rt, right)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let swap = (arr, i, j) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [arr[i], arr[j]] = [arr[j], arr[i]]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),r=[e];function t(o,c,i,A,C,y){return n(),a("div",null,r)}const f=s(p,[["render",t]]);export{d as __pageData,f as default};
