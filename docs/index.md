---
title: Ark
sidebar: false
lastUpdated: false
---

<div class="slogan">
 <p class="typing">Ark, step by step...</p>
</div>

<style scoped>
  .slogan {
    margin-top: 40vh;
  }
  .typing {
    width: 20ch;
    margin: auto;
    border-right: 2px solid transparent;
    animation: typing 3.5s steps(20, end), blink-caret .75s step-end infinite;
    font-family: Consolas, Monaco;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.25;
    color: #888;
  }
  /* 打印效果 */
  @keyframes typing {
    from { width: 0; }
    to { width: calc(20ch + 2px); }
  }
  /* 光标闪啊闪 */
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: var(--c-brand); }
  }
</style>
