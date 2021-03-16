import{o as s,c as a,d as n}from"./app.a7255a47.js";const e='{"title":"java 集合","description":"","frontmatter":{"title":"java 集合"},"headers":[{"level":2,"title":"Collection","slug":"collection"},{"level":3,"title":"List","slug":"list"},{"level":3,"title":"Set","slug":"set"},{"level":3,"title":"TreeSet","slug":"treeset"},{"level":2,"title":"Map","slug":"map"},{"level":3,"title":"方法","slug":"方法"},{"level":2,"title":"Collections","slug":"collections"}],"relativePath":"java/collection-map.md","lastUpdated":1615902852641}',p={},t=n('<p>数组和集合都是对多个数据进行存储操作的结构，简称 java 容器</p><p>数组特点回顾</p><ol><li>一旦初始化后，其长度就确定了，不可变</li><li>一旦定义好，其元素类型就确定，（多态性 Object[]）</li><li>提供对方法很有限，添加、删除、插入不方便，效率不高</li><li>存储的元素有序、可重复</li></ol><h2 id="collection"><a class="header-anchor" href="#collection" aria-hidden="true">#</a> Collection</h2><div class="language-bash"><pre><code>Collection\n  <span class="token operator">|</span>-- List\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- ArraryList\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- LinkedList\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- Vector\n  <span class="token operator">|</span>-- Set\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- HashSet\n  <span class="token operator">|</span>     <span class="token operator">|</span>-- LinkedHashSet\n  <span class="token operator">|</span>-- TreeSet\n\nMap\n  <span class="token operator">|</span>-- Hashtable\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- Properties\n  <span class="token operator">|</span>-- HashMap\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- LinkedHashMap\n  <span class="token operator">|</span>-- SortedMap\n  <span class="token operator">|</span>  <span class="token operator">|</span>-- TreeMap\n</code></pre></div><p>单列数据，元素有序、可重复（动态数组）</p><p>定义的方法</p><p><code>add()</code> <code>addAll()</code> <code>size()</code> <code>isEmpty</code> <code>clear()</code> <code>remove()</code> <code>removeAll()</code> <code>contains()</code> <code>containsAll()</code> <code>retainAll()</code> <code>equals()</code><code>hashCode()</code> <code>toArray()</code> <code>iterator()</code> <code>forEach()</code></p><h3 id="list"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h3><div class="language-java"><pre><code><span class="token class-name">ArrayList</span> lst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// jdk1.7 创建容量是 10 的 Object[](jdk1.8 第一次 add 时创建)，指定初始容量</span>\nlst<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// 容量不足时，扩容 1.5 倍，使用 copyOf 复制原有数据</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token operator">:</span> lst<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">💡</p><p><code>contains()</code> <code>remove()</code> 调用元素的 <code>equals()</code> 方法进行比较，添加对象时要重写该方法 <code>iterator.remove()</code> 不同于集合的 <code>remove()</code> 数组 转 集合 <code>Arrays.asList()</code></p></div><p>区别：</p><ul><li>ArrayList 作为 List 接口的主要实现类，线程不安全、效率高，底层存储 Object[]</li><li>LinkedList 底层存储 双向链表，删除、插入性能高</li><li>Vector 作为 List 接口的“古老”实现类 jdk1.0，线程安全、效率低 Object[]，基本不用了</li></ul><p>共同点：</p><ul><li>都实现类 List 接口，存储数据是有序的，可重复的</li></ul><p>ArrayList 特有</p><p><code>indexOf()</code> <code>lastIndexOf()</code> <code>get(index)</code> <code>set(index, ojb)</code> <code>subList()</code></p><h3 id="set"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h3><p>元素无序、不可重复(通过<code>equals()</code> <code>hasCode()</code>判断)，我们添加的对象要重写这两个方法</p><ul><li>HashSet Set: 接口主要实现类，线程不安全，底层使用数组和链表存储（HashMap）</li><li>LinkedHashSet: HashSet 子类，每个元素维护了对前、后元素的引用，遍历效率高于 HashSet</li><li>TreeSet: 可以按照添加的对象指定属性进行排序</li></ul><div class="tip custom-block"><p class="custom-block-title">💡 hasCode 之 31</p><p>尽量选择的大的系数，计算得到的 hash 地址越大，“冲突”越少，查找效率高 31 只占 5bits 相乘时数据溢出的概率小 31 可以由 i*31 == (i &lt;&lt; 5) - 1 表示，很多虚拟机有做优化 31 是一个素数，一个数乘以这个素数，得到的结果只能被这个素数、被乘数、1 整除，可以降低 hash 冲突的概率</p></div><h3 id="treeset"><a class="header-anchor" href="#treeset" aria-hidden="true">#</a> TreeSet</h3><div class="tip custom-block"><p class="custom-block-title">💡</p><p>仅保存相同类型的数据，数据要实现 Comparable 接口 内部判断是否相同使用 <code>compareTo()</code> 返回 0 就表示相同数据 内部红黑树的存储结构，查询效率比 List 高</p></div><div class="language-java"><pre><code><span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 自定义排序</span>\n<span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="map"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>双列数据 y = f(x)</p><p>Map 中的 key 是无序的，不可重复，使用 Set 存储所有的 key</p><p>Map 中的 value 是无序，可重复，使用 Collection 存储所有的 value</p><p>Map 中的 Entry 是无序，不可重复，使用 Set 存储所有的 value</p><h3 id="方法"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><p><code>put(Object: key, Object: value)</code> <code>putAll(Map: m)</code> <code>remove(Object: key)</code> <code>clear()</code> <code>size()</code> <code>isEmpty()</code> <code>equals()</code> <code>get(Object: key)</code> <code>containsKey(Object: key)</code> <code>containsValue(Object: value)</code> <code>keySet()</code> <code>values()</code> <code>entrySet()</code></p><ul><li>HashMap jdk 1.2 线程不安全，可存储 null 的 key value，底层 数组 + 链表</li></ul><p>初始容量 16，填充因子 0.75，当某一索引上的链表长度 &gt; 8 且 Node[] 长度 &gt; 64 ，该索引位置数据转为用红黑树存储</p><div class="language-java"><pre><code><span class="token class-name">HashMap</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Entry[] 长度 16  ，扩容时 容量翻倍</span>\nmap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n<span class="token comment">// key.hashCode()</span>\n<span class="token comment">// code 相同</span>\n<span class="token comment">//   key.equals() ? 替换 value : 添加成链表</span>\n<span class="token comment">// code 不同，添加</span>\n</code></pre></div><p>jdk8 用 Node[] 代替 Entry ，搜查 put 才创建。存储：数组 + 链表 + 红黑树（</p><ul><li><p>LinkedHashMap 遍历时按添加的顺序</p></li><li><p>TreeMap 底层使用 红黑树</p></li></ul><p>要求 key 是同一个类创建的对象，因为要根据 key 进行排序</p><div class="language-java"><pre><code><span class="token comment">// 定制排序，传入 Comparator 对象</span>\n<span class="token class-name">TreeMap</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Comparator</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@override</span>\n  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o1<span class="token punctuation">,</span> <span class="token class-name">Object</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>o1 <span class="token keyword">instanceof</span> <span class="token class-name">User</span> <span class="token operator">&amp;&amp;</span> o2 <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">User</span> u1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span>o1<span class="token punctuation">;</span>\n      <span class="token class-name">User</span> u2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span>o2<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>u1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> u2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;输入的类型不匹配&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>Hashtable: jdk 1.0 线程安全效率低，不建议使用，不能存储 null</li><li>Properties</li></ul><p>用于处理配置文件，key value 都是 string 型</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestProperties</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Properties</span> pros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;./jdbc.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    pros<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> name <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> pwd <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="collections"><a class="header-anchor" href="#collections" aria-hidden="true">#</a> Collections</h2><p>操作 Collection Map 的工具类</p><p>常用方法</p><p><code>reverse(List)</code> <code>shuffle(List)</code> <code>sort(List)</code> 自然排序 <code>swap(List, Int, Int)</code> <code>max(Collection, Comparator?)</code> <code>min(Collection, Comparator?)</code> <code>frequency(Collection, Object)</code> 自定元素出现的次数 <code>copy(List dest, List src)</code> <code>replaceAll(List, Object oldVal, Object newVal)</code></p><p>将指定集合包装成线程同步的集合</p><div class="language-java"><pre><code><span class="token class-name">List</span> unsafeList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span> safeList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span>lisunsafeListt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',47);p.render=function(n,e,p,o,c,l){return s(),a("div",null,[t])};export default p;export{e as __pageData};
