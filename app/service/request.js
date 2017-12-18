import fetchHelper from "../utils/fetchHelper";

export const postGoogs = ({start = 0, limit = 40, isSeckill = false}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = 'http://tk.word1k.com/goods/query'
            let header = isSeckill ? { isSeckill, start, limit} 
                    : {start, limit }
            const result = await fetchHelper.post(
                url,
                {},
                header
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

export const getPic = ({thirdId}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = 'http://tk.word1k.com/goods/detail/' + thirdId
            const result = await fetchHelper.get(
                url,
                {}
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};
