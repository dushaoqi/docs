webpackJsonp([17],{132:function(s,n,a){s.exports=a(264),'<h1>Palette Button</h1>\n<blockquote>\n<p>调色板按钮</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { PaletteButton } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(PaletteButton.name, PaletteButton);\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">mt-palette-button</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"+"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mt-palette-button</span>&gt;</span>\n</code></pre>\n<p>设置参数和事件，以及手动触发事件</p>\n<pre><code class="language-javascript">    methods: {\n      main_log(val) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'main_log\'</span>, val);\n      },\n      sub_log(val) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'sub_log\'</span>, val);\n        <span class="hljs-keyword">this</span>.$refs.target_1.collapse();\n      }\n    }\n</code></pre>\n<pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">mt-palette-button</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"+"</span> @<span class="hljs-attr">expand</span>=<span class="hljs-string">"main_log(\'expand\')"</span> @<span class="hljs-attr">expanded</span>=<span class="hljs-string">"main_log(\'expanded\')"</span> @<span class="hljs-attr">collapse</span>=<span class="hljs-string">"main_log(\'collapse\')"</span>\n      <span class="hljs-attr">direction</span>=<span class="hljs-string">"rt"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pb"</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"target_1"</span> <span class="hljs-attr">mainButtonStyle</span>=<span class="hljs-string">"color:#fff;background-color:#26a2ff;"</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">"left:30px;"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(1)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(2)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(3)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mt-palette-button</span>&gt;</span>\n</code></pre>\n<h2>选项</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>主按钮内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>角度偏移量</td>\n<td>Number</td>\n<td></td>\n<td>Math.PI / 4</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>按钮展开方向</td>\n<td>string</td>\n<td>lt, t, rt, r, rb, b, lb, l</td>\n<td>lt</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>按钮展开半径</td>\n<td>Number</td>\n<td></td>\n<td>90</td>\n</tr>\n<tr>\n<td>mainButtonStyle</td>\n<td>主按钮样式</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><p><img src="src/assets/palette-button.png" alt="一图胜千言"></p>\n<h2>方法</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>切换按钮展开/收起状态</td>\n</tr>\n<tr>\n<td>expand</td>\n<td>展开按钮</td>\n</tr>\n<tr>\n<td>collapse</td>\n<td>收起按钮</td>\n</tr>\n</tbody>\n</table></div><h2>事件</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>expand</td>\n<td>按钮开始展开</td>\n</tr>\n<tr>\n<td>expanded</td>\n<td>按钮完全展开（动画效果执行结束）</td>\n</tr>\n<tr>\n<td>collapse</td>\n<td>按钮开始收起</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Palette Button</h1>\n<blockquote>\n<p>调色板按钮</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { PaletteButton } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(PaletteButton.name, PaletteButton);\n</code></pre>\n<h2>例子</h2>\n<p>基本用法</p>\n<pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">mt-palette-button</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"+"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mt-palette-button</span>&gt;</span>\n</code></pre>\n<p>设置参数和事件，以及手动触发事件</p>\n<pre><code class="language-javascript">    methods: {\n      main_log(val) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'main_log\'</span>, val);\n      },\n      sub_log(val) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'sub_log\'</span>, val);\n        <span class="hljs-keyword">this</span>.$refs.target_1.collapse();\n      }\n    }\n</code></pre>\n<pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">mt-palette-button</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"+"</span> @<span class="hljs-attr">expand</span>=<span class="hljs-string">"main_log(\'expand\')"</span> @<span class="hljs-attr">expanded</span>=<span class="hljs-string">"main_log(\'expanded\')"</span> @<span class="hljs-attr">collapse</span>=<span class="hljs-string">"main_log(\'collapse\')"</span>\n      <span class="hljs-attr">direction</span>=<span class="hljs-string">"rt"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pb"</span> <span class="hljs-attr">:radius</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"target_1"</span> <span class="hljs-attr">mainButtonStyle</span>=<span class="hljs-string">"color:#fff;background-color:#26a2ff;"</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">"left:30px;"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(1)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(2)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"my-icon-button indexicon icon-popup"</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">"sub_log(3)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mt-palette-button</span>&gt;</span>\n</code></pre>\n<h2>选项</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>主按钮内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>角度偏移量</td>\n<td>Number</td>\n<td></td>\n<td>Math.PI / 4</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>按钮展开方向</td>\n<td>string</td>\n<td>lt, t, rt, r, rb, b, lb, l</td>\n<td>lt</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>按钮展开半径</td>\n<td>Number</td>\n<td></td>\n<td>90</td>\n</tr>\n<tr>\n<td>mainButtonStyle</td>\n<td>主按钮样式</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><p><img src="src/assets/palette-button.png" alt="一图胜千言"></p>\n<h2>方法</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>切换按钮展开/收起状态</td>\n</tr>\n<tr>\n<td>expand</td>\n<td>展开按钮</td>\n</tr>\n<tr>\n<td>collapse</td>\n<td>收起按钮</td>\n</tr>\n</tbody>\n</table></div><h2>事件</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>expand</td>\n<td>按钮开始展开</td>\n</tr>\n<tr>\n<td>expanded</td>\n<td>按钮完全展开（动画效果执行结束）</td>\n</tr>\n<tr>\n<td>collapse</td>\n<td>按钮开始收起</td>\n</tr>\n</tbody>\n</table></div>')},264:function(s,n){var a,t,l={};s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var n=l[s];p.computed[s]=function(){return n}})}});