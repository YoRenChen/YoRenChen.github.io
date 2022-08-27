import{_ as s,o as n,c as a,a as l}from"./app.287c3e30.js";const y=JSON.parse('{"title":"\u4E8C\u53C9\u6811","description":"","frontmatter":{"title":"\u4E8C\u53C9\u6811","date":"2022-02-10T00:00:00.000Z"},"headers":[{"level":2,"title":"\u4E8C\u53C9\u6811\u79CD\u7C7B","slug":"\u4E8C\u53C9\u6811\u79CD\u7C7B"},{"level":3,"title":"\u4E8C\u53C9\u641C\u7D22\u6811","slug":"\u4E8C\u53C9\u641C\u7D22\u6811"},{"level":3,"title":"\u6EE1\u4E8C\u53C9\u6811","slug":"\u6EE1\u4E8C\u53C9\u6811"},{"level":3,"title":"\u5B8C\u5168\u4E8C\u53C9\u6811","slug":"\u5B8C\u5168\u4E8C\u53C9\u6811"},{"level":3,"title":"\u5E73\u8861\u4E8C\u53C9\u6811\uFF08AVL\uFF09","slug":"\u5E73\u8861\u4E8C\u53C9\u6811\uFF08avl\uFF09"},{"level":2,"title":"\u5176\u4ED6\u6982\u5FF5","slug":"\u5176\u4ED6\u6982\u5FF5"},{"level":2,"title":"\u6DF1\u5EA6\u904D\u5386 DFS","slug":"\u6DF1\u5EA6\u904D\u5386-dfs"},{"level":3,"title":"\u5148\u4E2D\u540E\u5E8F\u57FA\u7840","slug":"\u5148\u4E2D\u540E\u5E8F\u57FA\u7840"},{"level":3,"title":"\u5148\u4E2D\u540E\u5E8F\u9012\u5F52\u4E0E\u975E\u9012\u5F52","slug":"\u5148\u4E2D\u540E\u5E8F\u9012\u5F52\u4E0E\u975E\u9012\u5F52"},{"level":3,"title":"\u540E\u5E8F\u904D\u5386-LRD","slug":"\u540E\u5E8F\u904D\u5386-lrd"},{"level":2,"title":"\u524D\u4E2D\u540E\u5E8F\u9006\u8F6C","slug":"\u524D\u4E2D\u540E\u5E8F\u9006\u8F6C"},{"level":3,"title":"\u4E8C\u53C9\u6811\u5BF9\u79F0\u6027\u9012\u5F52\u7684\u89E3\u9898\u6A21\u677F","slug":"\u4E8C\u53C9\u6811\u5BF9\u79F0\u6027\u9012\u5F52\u7684\u89E3\u9898\u6A21\u677F"}],"relativePath":"md/\u4E8C\u53C9\u6811.md","lastUpdated":1661572155000}'),p={name:"md/\u4E8C\u53C9\u6811.md"},e=l(`<h1 id="\u4E8C\u53C9\u6811-binary-tree" tabindex="-1">\u4E8C\u53C9\u6811 binary-tree <a class="header-anchor" href="#\u4E8C\u53C9\u6811-binary-tree" aria-hidden="true">#</a></h1><p>\u9047\u5230\u4E00\u9053\u4E8C\u53C9\u6811\u7684\u9898\u76EE\u65F6\u7684\u901A\u7528\u601D\u8003\u8FC7\u7A0B\u662F\uFF1A</p><p>1\u3001\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u904D\u5386\u4E00\u904D\u4E8C\u53C9\u6811\u5F97\u5230\u7B54\u6848\uFF1F\u5982\u679C\u53EF\u4EE5\uFF0C\u7528\u4E00\u4E2A traverse \u51FD\u6570\u914D\u5408\u5916\u90E8\u53D8\u91CF\u6765\u5B9E\u73B0\u3002</p><p>2\u3001\u662F\u5426\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\uFF0C\u901A\u8FC7\u5B50\u95EE\u9898\uFF08\u5B50\u6811\uFF09\u7684\u7B54\u6848\u63A8\u5BFC\u51FA\u539F\u95EE\u9898\u7684\u7B54\u6848\uFF1F\u5982\u679C\u53EF\u4EE5\uFF0C\u5199\u51FA\u8FD9\u4E2A\u9012\u5F52\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5E76\u5145\u5206\u5229\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002</p><p>3\u3001\u65E0\u8BBA\u4F7F\u7528\u54EA\u4E00\u79CD\u601D\u7EF4\u6A21\u5F0F\uFF0C\u4F60\u90FD\u8981\u660E\u767D\u4E8C\u53C9\u6811\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u9700\u8981\u505A\u4EC0\u4E48\uFF0C\u9700\u8981\u5728\u4EC0\u4E48\u65F6\u5019\uFF08\u524D\u4E2D\u540E\u5E8F\uFF09\u505A\u3002</p><h2 id="\u4E8C\u53C9\u6811\u79CD\u7C7B" tabindex="-1">\u4E8C\u53C9\u6811\u79CD\u7C7B <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u79CD\u7C7B" aria-hidden="true">#</a></h2><h3 id="\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1">\u4E8C\u53C9\u641C\u7D22\u6811 <a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a></h3><p>\u7279\u70B9\uFF1A</p><ol><li><p>\u5DE6\u8FB9\u5B50\u6811\u6570\u503C &lt; \u5F53\u524D\u503C &lt; \u53F3\u8FB9\u5B50\u6811\u6570\u503C (root.left.val &lt; root.val &lt; root.rigth.val)</p></li><li><p>\u5DE6\u5B50\u6811\u4E0A\u6240\u6709\u7ED3\u70B9\u7684\u503C &lt;= \u5B83\u6839\u7ED3\u70B9\u7684\u503C</p></li><li><p>\u53F3\u5B50\u6811\u4E0A\u6240\u6709\u7ED3\u70B9\u7684\u503C &gt;= \u5B83\u6839\u7ED3\u70B9\u7684\u503C</p></li><li><p>\u4E2D\u5E8F\u904D\u5386\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u4E00\u5B9A\u662F\u5347\u5E8F\u7684</p></li></ol><h3 id="\u6EE1\u4E8C\u53C9\u6811" tabindex="-1">\u6EE1\u4E8C\u53C9\u6811 <a class="header-anchor" href="#\u6EE1\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h3><h3 id="\u5B8C\u5168\u4E8C\u53C9\u6811" tabindex="-1">\u5B8C\u5168\u4E8C\u53C9\u6811 <a class="header-anchor" href="#\u5B8C\u5168\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h3><h3 id="\u5E73\u8861\u4E8C\u53C9\u6811\uFF08avl\uFF09" tabindex="-1">\u5E73\u8861\u4E8C\u53C9\u6811\uFF08AVL\uFF09 <a class="header-anchor" href="#\u5E73\u8861\u4E8C\u53C9\u6811\uFF08avl\uFF09" aria-hidden="true">#</a></h3><ol><li>\u5E73\u8861\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u6BCF\u4E2A\u7ED3\u70B9\u7684\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u6700\u591A\u76F8\u5DEE 1\uFF1B</li><li>\u5E73\u8861\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B50\u6811\u4E5F\u662F\u5E73\u8861\u4E8C\u53C9\u641C\u7D22\u6811\uFF1B</li><li>\u4E00\u68F5\u5B58\u6709 n \u4E2A\u7ED3\u70B9\u7684\u5E73\u8861\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u9AD8\u5EA6\u662F O(logn)\u3002</li></ol><h2 id="\u5176\u4ED6\u6982\u5FF5" tabindex="-1">\u5176\u4ED6\u6982\u5FF5 <a class="header-anchor" href="#\u5176\u4ED6\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u81EA\u9876\u5411\u4E0B\u4E3A\u6DF1\u5EA6\uFF1B \u81EA\u5E95\u5411\u4E0A\u4E3A\u9AD8\u5EA6\uFF1B</p><h2 id="\u6DF1\u5EA6\u904D\u5386-dfs" tabindex="-1">\u6DF1\u5EA6\u904D\u5386 DFS <a class="header-anchor" href="#\u6DF1\u5EA6\u904D\u5386-dfs" aria-hidden="true">#</a></h2><p>\u904D\u5386\u6846\u67B6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">funciton traverse(TreeNode root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (root == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u524D\u5E8F\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    traverse(root.left);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E2D\u5E8F\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    traverse(root.right);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u540E\u5E8F\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5148\u4E2D\u540E\u5E8F\u57FA\u7840" tabindex="-1">\u5148\u4E2D\u540E\u5E8F\u57FA\u7840 <a class="header-anchor" href="#\u5148\u4E2D\u540E\u5E8F\u57FA\u7840" aria-hidden="true">#</a></h3><h4 id="\u5148\u5E8F\u904D\u5386" tabindex="-1">\u5148\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u5148\u5E8F\u904D\u5386" aria-hidden="true">#</a></h4><p>\u3010\u5FEB\u901F\u6392\u5E8F\u3011 \u904D\u5386\u987A\u5E8F\uFF1A\u5F53\u524D\u8282\u70B9 -&gt; \u5DE6\u8FB9\u5B50\u8282\u70B9 -&gt; \u53F3\u8FB9\u5B50\u8282\u70B9</p><h4 id="\u4E2D\u5E8F\u904D\u5386" tabindex="-1">\u4E2D\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a></h4><p>\u4E3B\u8981\u7528\u5728 BST \u573A\u666F\u3002</p><p>\u7279\u70B9\uFF1A\u5347\u5E8F\u5E8F\u5217\u3002</p><p>\u904D\u5386\u987A\u5E8F\uFF1A\u5DE6\u8FB9\u5B50\u8282\u70B9 -&gt; \u5F53\u524D\u8282\u70B9 -&gt; \u53F3\u8FB9\u5B50\u8282\u70B9</p><h4 id="\u540E\u5E8F\u904D\u5386" tabindex="-1">\u540E\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u540E\u5E8F\u904D\u5386" aria-hidden="true">#</a></h4><p>\u3010\u5F52\u5E76\u6392\u5E8F\u3011 \u904D\u5386\u987A\u5E8F\uFF1A\u5DE6\u8FB9\u5B50\u8282\u70B9 -&gt; \u53F3\u8FB9\u5B50\u8282\u70B9 -&gt; \u5F53\u524D\u8282\u70B9 \u540E\u5E8F\u904D\u5386\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4E3A\u6839\u8282\u70B9</p><blockquote><p>\u53D1\u73B0\u9898\u76EE\u548C\u5B50\u6811\u6709\u5173\uFF0C\u90A3\u5927\u6982\u7387\u8981\u7ED9\u51FD\u6570\u8BBE\u7F6E\u5408\u7406\u7684\u5B9A\u4E49\u548C\u8FD4\u56DE\u503C\uFF0C\u5728\u540E\u5E8F\u4F4D\u7F6E\u5199\u4EE3\u7801\u3002\uFF08\u529B\u6263\u7B2C 543 \u9898\u300C \u4E8C\u53C9\u6811\u7684\u76F4\u5F84\u300D\uFF09</p></blockquote><h3 id="\u5148\u4E2D\u540E\u5E8F\u9012\u5F52\u4E0E\u975E\u9012\u5F52" tabindex="-1">\u5148\u4E2D\u540E\u5E8F\u9012\u5F52\u4E0E\u975E\u9012\u5F52 <a class="header-anchor" href="#\u5148\u4E2D\u540E\u5E8F\u9012\u5F52\u4E0E\u975E\u9012\u5F52" aria-hidden="true">#</a></h3><h4 id="\u5148\u5E8F\u904D\u5386-dlr" tabindex="-1">\u5148\u5E8F\u904D\u5386-DLR <a class="header-anchor" href="#\u5148\u5E8F\u904D\u5386-dlr" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u9012\u5F52 O(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">function inorderTraversal(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    const findNode = (node) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (node === null) return</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.push(node.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u9012\u5F52\u904D\u5386\u5DE6\u5B50\u6811</span></span>
<span class="line"><span style="color:#A6ACCD;">        findNode(node.left)</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u9012\u5F52\u904D\u5386\u53F3\u5B50\u6811</span></span>
<span class="line"><span style="color:#A6ACCD;">        findNode(node.right)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    findNode(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6808\u8FED\u4EE3 O(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">function persentTraversal(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (root === null) return []</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    const stk = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(root || stk.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        while(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            stk.push(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">            res.push(root.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">            root = root.l</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = stk.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = root.r</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = [1,null,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; res = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u4E2D\u5E8F\u904D\u5386-ldr" tabindex="-1">\u4E2D\u5E8F\u904D\u5386-LDR <a class="header-anchor" href="#\u4E2D\u5E8F\u904D\u5386-ldr" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">function inorderTraversal1(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(root === null)return null</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    function loop(p) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!p) return</span></span>
<span class="line"><span style="color:#A6ACCD;">        loop(p.l)</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.push(p.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        loop(p.r)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    loop(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6808\u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">function inorderTraversal(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(root === null)return null</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    const stk = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(root || stk.length &gt;0){</span></span>
<span class="line"><span style="color:#A6ACCD;">        while(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            stk.push(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">            root = root.l</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = stk.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.push(root.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = root.r</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u540E\u5E8F\u904D\u5386-lrd" tabindex="-1">\u540E\u5E8F\u904D\u5386-LRD <a class="header-anchor" href="#\u540E\u5E8F\u904D\u5386-lrd" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">function postOrderTraversal(root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!root) return null</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    function loop(p) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!p) return</span></span>
<span class="line"><span style="color:#A6ACCD;">        loop(p.r)</span></span>
<span class="line"><span style="color:#A6ACCD;">        loop(p.l)</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.push(p.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    loop(root)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6808</span></span>
<span class="line"><span style="color:#A6ACCD;">function postOrder(tree) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    const stk = [tree]</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(stk.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const node = stk.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (node.left) stk.push(node.left)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (node.right) stk.push(node.right)</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.unshift(node.val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">unshift \u987A\u5E8F\u63D2\u5165\u662F DRL\uFF0C\u6545\u7528 pop \u5148\u53D6 right,\u8F93\u51FALRD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u524D\u4E2D\u540E\u5E8F\u9006\u8F6C" tabindex="-1">\u524D\u4E2D\u540E\u5E8F\u9006\u8F6C <a class="header-anchor" href="#\u524D\u4E2D\u540E\u5E8F\u9006\u8F6C" aria-hidden="true">#</a></h2><h3 id="\u4E8C\u53C9\u6811\u5BF9\u79F0\u6027\u9012\u5F52\u7684\u89E3\u9898\u6A21\u677F" tabindex="-1">\u4E8C\u53C9\u6811\u5BF9\u79F0\u6027\u9012\u5F52\u7684\u89E3\u9898\u6A21\u677F <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u5BF9\u79F0\u6027\u9012\u5F52\u7684\u89E3\u9898\u6A21\u677F" aria-hidden="true">#</a></h3><p>1\u3001\u9012\u5F52\u7ED3\u675F\u6761\u4EF6\uFF1A\u7279\u6B8A\u60C5\u51B5\u7684\u5224\u65AD \u5982\u679C\u662F\u5355\u6811\u95EE\u9898\uFF0C\u4E00\u822C\u6765\u8BF4\u53EA\u8981\u8FDB\u884C\u4EE5\u4E0B\u5224\u65AD\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(!root) return true/false;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(!root-&gt;left) return true/false/\u9012\u5F52\u51FD\u6570;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(!root-&gt;right) return true/false/\u9012\u5F52\u51FD\u6570;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u662F\u53CC\u6811\u95EE\u9898(\u6839\u8282\u70B9\u5206\u522B\u4E3A p,q)\uFF0C\u4E00\u822C\u6765\u8BF4\u8FDB\u884C\u4EE5\u4E0B\u5224\u65AD\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(!p &amp;&amp; !q)return true/false;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(!p || !q)return true/false;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5224\u65AD\u662F\u5426\u76F8\u540C\u7684\u6811</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const isSameTree = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!q &amp;&amp; !p) return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    return p &amp;&amp; q &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        p.value === q.value &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        isSameTree(p.left, q.left) &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        isSameTree(p.right, q.right)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,43),o=[e];function r(t,c,i,A,C,d){return n(),a("div",null,o)}const D=s(p,[["render",r]]);export{y as __pageData,D as default};
