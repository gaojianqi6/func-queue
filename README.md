### func-queue
this is function queue and axios queue.

chrome同时发送几千个请求，后面大部分都超时。因为在发送请求时候设置了超时请求，发送出去后就计算了超时时间。但其实他都还没有真正发送出请求，chrome并发限制，后面的可能就已经触发超时了。

判断当前有几个在发送，不要用for循环直接发送出去，等处理的差不多了再重新上传剩下的。

##### func-queue
多个方法执行的队列

##### axios-queue
拦截axios网络错误等信息，一样返回失败。

``` javascript
import AxiosQueue from "./axios";

// 单列模式，项目中都走同一队列模式
const axiosQueue = AxiosQueue.getInstance();

// 每次使用时实例化，在当前运行分支中使用，不影响其它队列
const axios_queue = new AxiosQueue();
```
