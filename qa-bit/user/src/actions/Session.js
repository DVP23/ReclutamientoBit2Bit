import { serverCall } from "../utility";

export const registrar = (data,callback=null) => {
    serverCall({
        type: "POST",
        url: `register`,
        body: data,
        success: (res) => {
            // const data = res.data;
            console.log(res)
            if(callback)callback(res);
        },
        fail: (e) => {
            console.log(e.response)
        },
    });
};