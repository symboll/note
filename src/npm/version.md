# version
### 一、版本号的位置及简述
每个npm 包都有一个package.json文件，文件中的version 字段即为当前包的版本号。

version 字段一般由三位数构成，格式如下：x.x.x，分别对应着version 里面的： major, minor, patch.； 若带预发号的话，
格式为： x.x.x-x，最后一位表示预发号。

### 二、修改版本号的命令
npm version 命令用于更改版本号的信息，并执行commit 操作；该命令执行后， package.json 里的 version 会自动更新。

一般来说，当版本有较大改动时，变更第一位， 执行命令：npm version major -m "description" , 例如1.0.0 -> 2.0.0;

当前包变动较小时，可变更第二位，执行命令：npm version minor -m "description", 例如: 1.0.0 -> 1.1.0;

当前包只是修复了些问题时，可变更第三位，执行命令：npm version patch -m "description", 例如: 1.0.0 -> 1.0.1;