webpackJsonp([47],{100:function(t,n,d){t.exports=d(232),'<h1>Message box</h1>\n<blockquote>\n<p>弹出式提示框，有多种交互形式。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { MessageBox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>例子</h2>\n<p>以标题与内容字符串为参数进行调用</p>\n<pre><code class="language-javascript">MessageBox(<span class="hljs-string">\'提示\'</span>, <span class="hljs-string">\'操作成功\'</span>);\n</code></pre>\n<p>或者传入一个对象</p>\n<pre><code class="language-javascript">MessageBox({\n  title: <span class="hljs-string">\'提示\'</span>,\n  message: <span class="hljs-string">\'确定执行此操作?\'</span>,\n  showCancelButton: <span class="hljs-literal">true</span>\n});\n</code></pre>\n<p>此外，<code>MessageBox</code> 还提供了 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code> 三个方法，它们都返回一个 Promise</p>\n<pre><code class="language-javascript">MessageBox.alert(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.alert(<span class="hljs-string">\'操作成功\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(<span class="hljs-string">\'确定执行此操作?\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(<span class="hljs-string">\'请输入姓名\'</span>).then(({ value, action }) =&gt; {\n  ...\n});\n</code></pre>\n<p>在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>提示框的标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>message</td>\n<td>提示框的内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showConfirmButton</td>\n<td>是否显示确认按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>showCancelButton</td>\n<td>是否显示取消按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonText</td>\n<td>确认按钮的文本</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmButtonHighlight</td>\n<td>是否将确认按钮的文本加粗显示</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonClass</td>\n<td>确认按钮的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonText</td>\n<td>取消按钮的文本</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonHighlight</td>\n<td>是否将取消按钮的文本加粗显示</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>cancelButtonClass</td>\n<td>取消按钮的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showInput</td>\n<td>是否显示一个输入框</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>inputValue</td>\n<td>输入框的值</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>inputPlaceholder</td>\n<td>输入框的占位符</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Message box</h1>\n<blockquote>\n<p>弹出式提示框，有多种交互形式。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { MessageBox } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n</code></pre>\n<h2>例子</h2>\n<p>以标题与内容字符串为参数进行调用</p>\n<pre><code class="language-javascript">MessageBox(<span class="hljs-string">\'提示\'</span>, <span class="hljs-string">\'操作成功\'</span>);\n</code></pre>\n<p>或者传入一个对象</p>\n<pre><code class="language-javascript">MessageBox({\n  title: <span class="hljs-string">\'提示\'</span>,\n  message: <span class="hljs-string">\'确定执行此操作?\'</span>,\n  showCancelButton: <span class="hljs-literal">true</span>\n});\n</code></pre>\n<p>此外，<code>MessageBox</code> 还提供了 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code> 三个方法，它们都返回一个 Promise</p>\n<pre><code class="language-javascript">MessageBox.alert(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.alert(<span class="hljs-string">\'操作成功\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.confirm(<span class="hljs-string">\'确定执行此操作?\'</span>).then(action =&gt; {\n  ...\n});\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(message, title);\n</code></pre>\n<pre><code class="language-javascript">MessageBox.prompt(<span class="hljs-string">\'请输入姓名\'</span>).then(({ value, action }) =&gt; {\n  ...\n});\n</code></pre>\n<p>在 prompt 中，若用户点击了取消按钮，则 Promise 的状态会变为 rejected</p>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>提示框的标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>message</td>\n<td>提示框的内容</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showConfirmButton</td>\n<td>是否显示确认按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>showCancelButton</td>\n<td>是否显示取消按钮</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonText</td>\n<td>确认按钮的文本</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmButtonHighlight</td>\n<td>是否将确认按钮的文本加粗显示</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>confirmButtonClass</td>\n<td>确认按钮的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonText</td>\n<td>取消按钮的文本</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelButtonHighlight</td>\n<td>是否将取消按钮的文本加粗显示</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>cancelButtonClass</td>\n<td>取消按钮的类名</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showInput</td>\n<td>是否显示一个输入框</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>inputValue</td>\n<td>输入框的值</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>inputPlaceholder</td>\n<td>输入框的占位符</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>')},232:function(t,n){var d,e,s={};t.exports=d||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;e&&(a.template=e),a.computed||(a.computed={}),Object.keys(s).forEach(function(t){var n=s[t];a.computed[t]=function(){return n}})}});