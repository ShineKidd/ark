import{_ as a,c as e,o as t,b as i}from"./app.8a965c85.js";const j='{"title":"java \u5DE5\u5177\u7C7B\u4E4B\u65F6\u95F4","description":"","frontmatter":{"title":"java \u5DE5\u5177\u7C7B\u4E4B\u65F6\u95F4"},"headers":[{"level":2,"title":"Date","slug":"date"},{"level":2,"title":"Calendar","slug":"calendar"},{"level":2,"title":"java.time","slug":"java-time"},{"level":3,"title":"LocalDate","slug":"localdate"},{"level":3,"title":"LocalTime","slug":"localtime"},{"level":3,"title":"LocalDateTime","slug":"localdatetime"},{"level":3,"title":"DateTimeFormatter","slug":"datetimeformatter"},{"level":2,"title":"java.time.format","slug":"java-time-format"},{"level":2,"title":"java.time.zone","slug":"java-time-zone"},{"level":2,"title":"java.time.temporal","slug":"java-time-temporal"},{"level":2,"title":"java.time.chrono","slug":"java-time-chrono"},{"level":2,"title":"Instant","slug":"instant"}],"relativePath":"java/util-date-time.md","lastUpdated":1636210221519}',l={},r=i('<h2 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-hidden="true">#</a></h2><p>jdk 1.0 \u5F15\u5165</p><h2 id="calendar" tabindex="-1">Calendar <a class="header-anchor" href="#calendar" aria-hidden="true">#</a></h2><p>Calendar \u662F\u62BD\u8C61\u7C7B\uFF0Cjdk 1.1 \u5F15\u5165</p><h2 id="java-time" tabindex="-1">java.time <a class="header-anchor" href="#java-time" aria-hidden="true">#</a></h2><p>jdk 1.8 \u5F15\u5165\u7B2C\u4E09\u65B9\u5E93 joda-time \u505A\u4E3A <code>java.time</code></p><p>\u5F15\u5165\u539F\u56E0\uFF1A</p><ul><li>\u53EF\u53D8\u6027\uFF1A\u50CF\u65E5\u671F\u548C\u65F6\u95F4\u8FD9\u6837\u7684\u7C7B\u5E94\u8BE5\u662F\u4E0D\u53EF\u53D8\u7684</li><li>\u504F\u79FB\u6027\uFF1ADate \u4E2D\u7684\u5E74\u4EFD\u662F\u4ECE 1900 \u5E74\u5F00\u59CB\u7684\uFF0C\u800C\u6708\u4EFD\u90FD\u662F\u4ECE 0 \u5F00\u59CB\u7684</li><li>\u683C\u5F0F\u5316\uFF1A\u683C\u5F0F\u5316\u53EA\u5BF9 Date \u7528\uFF0C\u800C Calendar \u7C7B\u5219\u4E0D\u884C</li><li>\u5176\u4ED6\uFF1A\u5B83\u4EEC\u662F\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\uFF1B\u4E0D\u80FD\u5904\u7406\u95F0\u79D2</li></ul><h3 id="localdate" tabindex="-1">LocalDate <a class="header-anchor" href="#localdate" aria-hidden="true">#</a></h3><p>\u8868\u793A IOS \u683C\u5F0F(yyyy-MM-dd)\u7684\u65E5\u671F</p><h3 id="localtime" tabindex="-1">LocalTime <a class="header-anchor" href="#localtime" aria-hidden="true">#</a></h3><h3 id="localdatetime" tabindex="-1">LocalDateTime <a class="header-anchor" href="#localdatetime" aria-hidden="true">#</a></h3><h3 id="datetimeformatter" tabindex="-1">DateTimeFormatter <a class="header-anchor" href="#datetimeformatter" aria-hidden="true">#</a></h3><h2 id="java-time-format" tabindex="-1">java.time.format <a class="header-anchor" href="#java-time-format" aria-hidden="true">#</a></h2><h2 id="java-time-zone" tabindex="-1">java.time.zone <a class="header-anchor" href="#java-time-zone" aria-hidden="true">#</a></h2><h2 id="java-time-temporal" tabindex="-1">java.time.temporal <a class="header-anchor" href="#java-time-temporal" aria-hidden="true">#</a></h2><h2 id="java-time-chrono" tabindex="-1">java.time.chrono <a class="header-anchor" href="#java-time-chrono" aria-hidden="true">#</a></h2><h2 id="instant" tabindex="-1">Instant <a class="header-anchor" href="#instant" aria-hidden="true">#</a></h2><blockquote><p>IOS-8601 \u65E5\u5386\u7CFB\u7EDF\uFF0C\u662F\u56FD\u6807\u51C6\u5316\u7EC4\u7EC7\u6307\u5B9A\u7684\u73B0\u4EE3\u516C\u6C11\u7684\u65E5\u671F\u548C\u65F6\u95F4\u8868\u793A\u6CD5\uFF0C\u4E5F\u5C31\u662F\u516C\u5386</p></blockquote>',19),d=[r];function o(h,n,c,m,s,v){return t(),e("div",null,d)}var p=a(l,[["render",o]]);export{j as __pageData,p as default};