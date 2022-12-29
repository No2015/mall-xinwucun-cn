import http from '@/http/index'
const javaBaseUrl = import.meta.env.VITE_php_base;
console.log(import.meta.env)

export const ProductList = (params:any) => http.request({
    url: javaBaseUrl + '/product/getList',
    method: 'post',
    data: {
        ...params
    }
})

export const ProducDetail = (params:any) => http.request({
    url: javaBaseUrl + '/product/getDetail',
    method: 'post',
    data: {
        ...params
    }
})

export const CateList = (params:any) => http.request({
    url: javaBaseUrl + '/cate/getList',
    method: 'post',
    data: {
        ...params
    }
})
