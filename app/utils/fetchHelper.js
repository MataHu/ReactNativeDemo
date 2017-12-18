
export default class fetchHelper {
    static async get(url, headers) {
        return new Promise(async (resolve, reject)=>{
            if (headers["Accept"] == undefined) {
                headers["Accept"] = "application/json"
            }
            if (headers["Content-Type"] == undefined) {
                headers["Content-Type"] = "application/json"
            }
            console.log("get request url:" + url)
            console.log("get request headers:" + JSON.stringify(headers))
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg:"请求超时"})
            }, 15000)
            fetch(url, {
                method: 'GET',
                headers: headers
            })
            .then(response =>response.json())
            .then(jsonData => {
                console.log("GET request succ")
                console.log(jsonData);
                resolve(jsonData)
            })
            .catch(error => {
                console.log("GET request fail: " + error)
                reject({msg:"网络异常，请检查一下手机网络是否正常", error})
            })
        })
    }

    static async post(url, headers, params) {
        return new Promise(async (resolve, reject)=>{
            if (headers["Accept"] == undefined) {
                headers["Accept"] = "application/json"
            }
            if (headers["Content-Type"] == undefined) {
                headers["Content-Type"] = "application/json"
            }
            console.log("post url:" + url)
            console.log("post headers:" + JSON.stringify(headers))
            console.log("post params:" + JSON.stringify(params))
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg:"请求超时"})
            }, 15000);
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            })
            .then(response =>response.json())
            .then(jsonData => {
                console.log("POST request succ")
                console.log(jsonData)
                resolve(jsonData)
            })
            .catch(error => {
                console.log("POST request fail: " + error)
                reject({msg:"网络异常，请检查一下手机网络是否正常", error})
            })
        })
    }
}
