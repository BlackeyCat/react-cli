import request from '@/utils/request'

export function getNewsList() {
    return request({
        url: '/data/list.json',
        method: 'get'
    })
}