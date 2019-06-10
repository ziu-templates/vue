## {{ name }}接口文档
<br>

---

### 1. 示例接口描述1 -- 示例接口名

---

+ **功能：** 示例接口描述1 

| URL | /api/示例接口名|
| ----- | ----- |
| method | POST |

+ **请求POST参数**

|参数|类型|是否必须|说明|
|-----|-----|-----|-----|
| param1 | STRING | 1 | param1说明 |
| param2 | INT | 0 | param2说明|

+ **返回值**

```

    {
        "retcode": 200,
        "msg": "",
        "data": {
            res1: "res1",
            res2: "res2"
        }
    }

```

+ **data参数**

| 参数 | 类型 | 说明 |
|-----|-----|-----|
| res1 | INT | res1说明 |
| res2 | STRING | res2说明 |

---

<br>
<br>
## 更新说明

2017.06.06
1. 接口传参增加param2参数

<br>
<br>