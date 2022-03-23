var obj = JSON.parse($response.body);

const url = `https://himg.bdimg.com/sys/portrait/item/public.1.437e7ec3.pNFPM0hbrc0c_7NIX2g3vQ.jpg`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wxfe0e405895cafdf9/86/page-frame.html`,
'Host' : `xcx-static.yqgz.beijing.gov.cn`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001520) NetType/4G Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
$response.body = body;
$task.fetche(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
