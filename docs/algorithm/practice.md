## 排序

### 冒泡


### 快排



## 字符串


### 给定两个字符串，找出它们之间最大相同子串

```js
function getMaxSubStr (str1, str2) {
  let maxStr, subStr
  if (str1 > str2) {
    maxStr = str1
    subStr = str2
  } else {
    maxStr = str2
    subStr = str1
  }

  let subStrLen = subStr.length
  for (let i = 0; i < subStrLen; i++) {
    // 移动头尾指针
    let start = 0, end = subStrLen - i
    while(end <= subStrLen) {
      const currStr = subStr.slice(start, end)
      if (maxStr.includes(currStr)) {
        return currStr
      }
      start++
      end++
    }
  }
}
console.log(getMaxSubStr('abcdabce', 'dab'))
```
