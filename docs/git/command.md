---
title: git 常用命令
date: 2017-10-14
---

> Linux 之父 Linus 一直痛恨的 CVS 及 SVN 都是集中式的版本控制系统，用 C 写了一个分布式版本控制系统 Git，也是目前世界上最先进的分布式版本控制系统（没有之一）。它安全性高，可离线操作，并有强大的分支管理策略！git 是程序猿必备的技能之一。

以下简单总结了日常用到的一些 git 命令


<!-- more -->

先[下载](https://git-scm.com/) git，安装成功后，打开 Git Bash，输入以下命令

## config

git 配置分全局配置（带 --global 参数），项目配置

```bash
# 显示是当前 git 配置
git config --list
# 编辑配置文件
git config -e [--global]
# 配置用户名
git config [--global] user.name shinekidd
# 配置邮箱
git config [--global] user.email shinekidd@163.com
# 配置命令别名
git config [--global] alias.logs 'log --graph --oneline --date=short'
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
```


## clone

```bash
# 从服务器克隆仓库，可指定目标文件夹（folderName）
git clone git@github.com:ShineKidd/example.git folderName
```


## add

```bash
# 工作区的状态于暂存区状态保持一致，add之前 head 和暂存区是状态是一致的
git add .
git add --all
git add -A
# 添加被追踪文件的修改改到暂存区
git add -u
# 添加指定文件或目录，支持通配符
git add fileName *.js
# 强制添加 .gitignore 忽略的文件
git add -f fileName
```


## commit

```bash
# 提交并填写提交日志，不使用 -m 参数可进入 vim 编辑器书写提交日志
git commit -m 'fix #issue #48'
# 修订最后一次提交，进入 vim 编辑 message 。会改变 head，合并冲突的时候不可用
git commit --amend
# 添加 tracked 的文件到暂存区，并提交已修改的文件
git commit -a -m 'message'
```

> 进到分离 HEAD 的状态，提交无法保存，因为提交是保存在分支里的


## remote

```bash
# 添加该远程地址，保存别名为 origin
git remote add origin git@github.com:ShineKidd/example.git
# 更换仓库地址
git remote set-url origin git@github.com:ShineKidd/test.git
# 删除别名为 origin 的远程地址
git remote rm origin
# 查看已添加的远程地址
git remote -v
# 显示远程与本地分支细节对比
git remote show origin
# 移除远程冗余分支
git remote prune origin branch-name
```

## branch

```bash
# 新键分支
git branch new-branch-name
# 删除分支
git branch -d branch-name
# 基于当前分支的某个节点，创建新的分支
git branch branch-name a8c1fe47
# 强制删除分支
git branch -D branch-name
# 查看分支信息，默认显示本地分支，参数 -v -vv 显示最后提交信息，参数 -r 显示远程分支，参数 -a 显示所有分支
git branch [-v][-r][-vv][-a]
# 使用 git 在本地新建一个分支 debug 后，需要指定远程 origin/debug 分支与本地 debug 的联系
git branch --set-upstream-to=origin/debug debug
# 或者
git branch --set-upstream debug origin/debug
# 将 master 分支强制指向 HEAD 的第 3 级父提交,前提是你当前不在 master 分支
git branch -f master HEAD~3
# 重命名
git branch -m oldName newName
```


## merge

```bash
# 将 debug 并入当前分支，默认是 fast-forward (快进模式)，会保留所有提交记录
git merge debug
# 将远程仓库 origin 上的 dev 分支并入当前分支，一般在执行 fetch 操作后
git merge origin/dev
#  禁用 fast-forward 模式合并，合并后保留合并分支合并细节，但是要求输入合并日志，不输入会使用默认日志
git merge debug --no-ff -m 'merged fix issue #455'
# 把 debug 的 commit 合并到当前分支的工作区，这需要手动在 commit 一次，合并只产生一个 commit
git merge --squash debug
# 如果发现冲突，取消合并操作
git merge --abort
```


## tag

```bash
# 查看所有 tag
git tag
# 在当前的 commit 上添加标签 v1.2
git tag v1.2
# 指定 commit 上添加标签 v1.1
git tag v1.1 5fe47d89a
# 指定 commit 上添加标签 v1.3，并附标签说明
git tag -a v1.3 -m '新增了xxx功能' 8feb8b26f
# 删除 v1.2 这个本地标签，删除线上见 git push
git tag -d v1.2
```


## fetch
fetch 与 push 操作恰好相反

```bash
# 不带参数的 fetch 会把所有的远程分支拉取到本地(不主动合并)
git fetch
# 同步远程仓库的分支到本地仓库中相应远程分支(origin/branch), 但不主动更新本地仓库的本地分支(branch)
git fetch origin [branch]
# 指定同步源，不能在当前检出的分支上干这个事。目标分支不存在会自动创建
git fetch origin <origin-source>:<local-destination>
```


## pull

```bash
# 接拉取远程分支，并入当前分支（前提：远程仓库分支与本地分支已建立联系）
git pull # 同 git fetch + git merge origin/branch
# 拉取远程 dev 分支并与本地 dev 分支合并
git pull origin dev # 同 git fetch orgin dev; git merge origin/dev
# 拉取远程 dev 分支与当前本地检出的分支合并（假设 master 是检出的分支）
git pull origin dev:master # 同 git fetch origin dev:master; git merge master
# 拉去远程分支，并入本地分支，并整理
git pull --rebase # 同 git fetch + git rebase origin/branch
```


## push

```bash
# 第一次推送本地分 dev 分支到远程服务器
git push -u origin dev
# 之后的推送， Git Bash 直接 git push 就可以推送的对应的分支，在 cmd 中，要带 origin dev 参数，来指定推送本地 dev 到远程
git push [origin dev]
# 推送本地分支或HEAD(source) 到远程(origin)的指定分支(destination)，HEAD 可以是 dev^ HEAD~3 。远程没有 destination 会自动创建
git push origin <source>[:<destination>]
# 推送 v1.2 这个标签到远程仓库
git push origin v1.2
# 推送所有的本地标签到远程仓库
git push origin --tags
# 同步本地已删除的标签 v1.2 到远程仓库
git push origin :refs/tags/v1.2
# 删除远程分支
git push origin -d branch-name
# 删除本地 origin/dev 和远程 dev。<source> 参数留空即可
git push origin :dev
```


## stash

当你在开发新功能的时候，突然有一个紧急 bug 要修复怎么办？
```bash
# 保存工作现场，这时工作区是 clean 的
git stash
# 查看保存的列表
git stash list
# 恢复某个记录到工作区
git apply stash@{0}
# 应用并删除最近的一次 stash
git stash pop
# 删除某个 stash
git stash drop stash@{0}
```


## status

```bash
git status
```


## diff

如果用 vscode 编辑器，推荐一款 git 插件 Git History Diff，非常方便查看提交历史
```bash
# 比较暂存区与当前工作区文件的区别
git diff
# 比较指定提交与当前工作区的区别
git diff eb667b8
# 比较两处提交的差异
git diff head^ head
# 比较指定提交中的某个文件与当前工作区的区别
git diff eb667b8 -- ./src/fileName
# 比较暂存区与最新本地版本库（本地库中最近一次commit的内容）
git diff --cached
# 比较暂存区与本地版本库指定提交的区别
git diff --cached eb667b8
# 比较工作区与远程 dev 分支的区别，显示简要信息
git diff --stat origin/dev
# 比较 dev 分支的指定提交与当前工作区的区别
git diff dev eb667b8
```


## reset

HEAD 指针默认指向最近的一次 commit，通过 reset 操作可以改变 HEAD 指针指向的 commit。git reset 默认参数是 --mixed，默认 commit 是 head

```bash
# 同 git reset --mixed head ，暂存区和最近一次 commit(head) 保持一致，即会放弃之前的 git add 操作，工作区不受影响
git reset
# 工作区和暂存区不受影响，只是 HEAD 指针指向特定的 commit 了
git reset --soft eb667b8
# 工作区和暂存区和指定 commit 保持一致，工作区未保存将会被覆盖，变成 clean 的状态，这是个危险的操作
git reset --hard eb667b8
# 重置 HEAD 到指定提交，不改变工作区和暂存区的状态
git reset --keep eb667b8
```


## revert

```bash
# 撤销指定提交的修改，会产生一个新的提交
git revert 785cda4
```


## checkout

检出分支后 HEAD 指向分支的最后一次提交，而检出某个 commmit 后，HEAD 指向这个 commmit 。工作区被这个 commit 的状态替换

```bash
# 切换当前分支为 debug 分支
git checkout debug
# 强制重置某分支的提交历史到指定的 commit ，不能重置当前分支
git checkout branch-name -f eb667b8
# 新键并切换分支，默认基于当前分支，可指定基于哪个分支创建
git checkout -b new-branch [baseBranch]
# 基于当前的分支，创建一个没有提交记录的新分支
git checkout --orphan new-branch
# 切换分支，并把当前分支修改的内容转移到目标分支
git checkout --merge branch-name
# 从暂存区检出文件，工作区的文件会被检出文件覆盖，可以用 . 表示所有文件
git checkout -- fileName
# 检出某个 commit ，如果你的工作区有变更未提交，操作不成功
git checkout eb667b8
# 强制检出某 commit，会丢失工作区的修改，危险操作
git checkout -f eb667b8
# 检出某个 commit 中的文件，工作区的文件会被检出文件覆盖，可以用 . 表示所有文件
git checkout eb667b8 -- fileName
# 检出 HEAD 的第 2 个父提交(只有合并才产生 2 个父提交)
git checkout <HEAD | branch*>^2
```


## rm

```bash
# 删除工作区区文件，该命令会把操作提交到暂存区
git rm fileName
# 文件已添加到暂存区，删除工作区区文件
git rm -f fileName
# 删除暂存区文件，并不再追踪文件的变化(文件状态变成 untracked)
git rm --cached fileName
```


## log

```bash
# 显示前 num 条
git log -n num
# 按 commit 显示前后两个 commit 间的差异，显示提交历史及文件改动
git log -p [commit]
# --graph 以图形画的形式显示
git log --graph
# 显示每次更新的修改文件的统计信息，每个提交都列出了修改过的文件，以及其中添加和移除的行数
git log --stat
# 一行显示，只显示哈希值和提交说明
git log --oneline
# 只显示 --stat 中最后的行数添加修改删除统计
git log --shortstat
# 尽在已修改的提交信息后显示文件清单
git log --name-only
# 显示新增、修改和删除的文件清单
git log --name-status
# 仅显示SHA-1的前几个字符，而非所有的40个字符
git log --abbrev-commit
# 过滤提交说明关键字
git log --grep="fix"
# 过滤 merge commit
git log --no-merges
# 只显示 merge commit
git log --merges
# 显示引用了分支或 tag 的提交，默认显示当前分支 --all 显示所有分支
git log --simplify-by-decoration
# 显示所有分支的提交
git log --all
# 格式显示历史提交信息
git log --pretty=[oneline,short,medium,full,fuller,email,raw,format]
# 显示用户提交次数，按提交次数排序
git shortlog -sn
# 查看输入过的 git 指令，在挽救错误方面很有用
git reflog
```

## show

```bash
# 查看 v1.2 这个标签的信息
git show v1.2
# 显示某次提交的内容差异
git show head^
# 显示某次提交的某文件的的内容差异
git show head -- file

```


## rebase

rebase 操作可以把本地未 push 的分叉提交历史整理成直线, rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比

```bash
# 对 debug 分支变基：参照 master 在 debug 上创建 master 提交的副本，并把 debug 分支的工作追加到 master 提交副本上
git rebase master debug
# 编辑未完成的 rebase 操作
git rebase --edit-todo
# 变基过程遇到冲突，添加到暂存区后继续执行
git rebase --continue
# 取消变基操作
git rebase --abort
# rebase -i 进入变基交互模式，可以控制变基过程
git rebase [-i | interactive ] [branch | HEAD]
# 复制其它分支的连续的提交(fromHash toHash] 到 baseBranch。
git rebase --onto baseBranch fromHash toHash
```
> rebase 操作会导致 commit 改变，说建议只本地未 push 的提交进行 rebase 操作。比如，本地 debug 分支还未提交，我们执行以下命令可以把 debug 分支的 commit 追加都 master 分支。


## cherry-pick

```bash
# 将某个（些）分支的 e34daf b88cea 创建副本（hash改变），追加到当前分支，e34daf b88cea 不能是 HEAD 上游的提交
git cherry-pick e34daf b88cea
# 中途取消操作
git cherry-pick --abort

```

## bisect

“两分法”查找，到底哪一次代码提交，引入了错误

```bash
# 命令启动查错，范围是最后一次提交和 4d83cf 之间
git bisect start <HEAD> <4d83cf>
# 范围内，中间的那次次提交没有问题，则输入
git bisect good
# 范围内，中间的那次次提交没有问题，则输入
git bisect bad
# 退出查错
git bisect reset
```


## describe

Git Describe 用来描述离你最近的锚点（也就是标签）

```bash
# <ref> 默认是 HEAD ，可以是 branch , commit
git describe <ref> # 返回 <tag>_<numCommits>_g<hash>
```

## check-ignore

```bash
git check-ignore -v fileName
```


<center> --- *The End* --- </center>
