# wxg-tools

> 自用小工具

---

## Table of contents

---

### Installation

```
npm install wxg-tools
```

---

### Usage

```
import Tools from 'wxg-tools/dist';
```

---

### Methods

#### downloadImage(url[,name])

> - url:
>   > - Type:String
>   > - A image url.http or base64.
> - name:
>   > - Type:String
>   > - Default: 'downloadImage.png'
>   > - default image name

```
Tools.downloadImage('http://...','下载图片')
// import { downloadImage } from 'wxg-tools';
downloadImage('http://...','下载图片')
```

#### urlToBase64(url[,callback])

> - url:
>   > - Type:String
>   > - A image url.http or base64.
> - name:
>   > - Type:Function
>   > - Default: ()=>{}
>   > - default callback

```
Tools.urlToBase64('http://...',(base64)=>{
  console.log('得到base64',base64)
})
// import { urlToBase64 } from 'wxg-tools';
Tools.urlToBase64('http://...',(base64)=>{
  console.log('得到base64',base64)
})
```

---

### License

[mit]: https://opensource.org/licenses/MIT
[wang xiaogang]: https://github.com/wangxiaogangbywin

[MIT] © [Wang Xiaogang]

---

### Keywords

[filesaver.js]: https://github.com/eligrey/FileSaver.js

[filesaver.js]
