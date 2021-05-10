import{o as a,c as e,d as t}from"./app.2a3e59c4.js";const l='{"title":"java 工具类之时间","description":"","frontmatter":{"title":"java 工具类之时间"},"headers":[{"level":2,"title":"Date","slug":"date"},{"level":2,"title":"Calendar","slug":"calendar"},{"level":2,"title":"java.time","slug":"java-time"},{"level":3,"title":"LocalDate","slug":"localdate"},{"level":3,"title":"LocalTime","slug":"localtime"},{"level":3,"title":"LocalDateTime","slug":"localdatetime"},{"level":3,"title":"DateTimeFormatter","slug":"datetimeformatter"},{"level":2,"title":"java.time.format","slug":"java-time-format"},{"level":2,"title":"java.time.zone","slug":"java-time-zone"},{"level":2,"title":"java.time.temporal","slug":"java-time-temporal"},{"level":2,"title":"java.time.chrono","slug":"java-time-chrono"},{"level":2,"title":"Instant","slug":"instant"}],"relativePath":"java/util-date-time.md","lastUpdated":1620648668820}',i={},r=t('<h2 id="date"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h2><p>jdk 1.0 引入</p><h2 id="calendar"><a class="header-anchor" href="#calendar" aria-hidden="true">#</a> Calendar</h2><p>Calendar 是抽象类，jdk 1.1 引入</p><h2 id="java-time"><a class="header-anchor" href="#java-time" aria-hidden="true">#</a> java.time</h2><p>jdk 1.8 引入第三方库 joda-time 做为 <code>java.time</code></p><p>引入原因：</p><ul><li>可变性：像日期和时间这样的类应该是不可变的</li><li>偏移性：Date 中的年份是从 1900 年开始的，而月份都是从 0 开始的</li><li>格式化：格式化只对 Date 用，而 Calendar 类则不行</li><li>其他：它们是线程不安全的；不能处理闰秒</li></ul><h3 id="localdate"><a class="header-anchor" href="#localdate" aria-hidden="true">#</a> LocalDate</h3><p>表示 IOS 格式(yyyy-MM-dd)的日期</p><h3 id="localtime"><a class="header-anchor" href="#localtime" aria-hidden="true">#</a> LocalTime</h3><h3 id="localdatetime"><a class="header-anchor" href="#localdatetime" aria-hidden="true">#</a> LocalDateTime</h3><h3 id="datetimeformatter"><a class="header-anchor" href="#datetimeformatter" aria-hidden="true">#</a> DateTimeFormatter</h3><h2 id="java-time-format"><a class="header-anchor" href="#java-time-format" aria-hidden="true">#</a> java.time.format</h2><h2 id="java-time-zone"><a class="header-anchor" href="#java-time-zone" aria-hidden="true">#</a> java.time.zone</h2><h2 id="java-time-temporal"><a class="header-anchor" href="#java-time-temporal" aria-hidden="true">#</a> java.time.temporal</h2><h2 id="java-time-chrono"><a class="header-anchor" href="#java-time-chrono" aria-hidden="true">#</a> java.time.chrono</h2><h2 id="instant"><a class="header-anchor" href="#instant" aria-hidden="true">#</a> Instant</h2><blockquote><p>IOS-8601 日历系统，是国标准化组织指定的现代公民的日期和时间表示法，也就是公历</p></blockquote>',19);i.render=function(t,l,i,d,h,o){return a(),e("div",null,[r])};export default i;export{l as __pageData};