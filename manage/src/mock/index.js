import Mock from 'mockjs';
Mock.mock('http://127.0.0.1:8888/api/news', 'get', () => {
    return {
        'string': '@id()',
        'string1': '@city()'
    }
})