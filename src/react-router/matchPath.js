import { pathToRegexp } from 'path-to-regexp'

const cache = {}
function compilePath(path, options) {
    let cacheKey = path + JSON.stringify(options);
    if(cache[cacheKey])return cache[cacheKey]
    const keys = [];
    const regexp = pathToRegexp(path, keys, options);
    const result = {keys,regexp}
    cache[cacheKey] = result
    return result
}

/**
 * 
 * @param {*} pathname 浏览器当前真实的路径名
 * @param {*} options Route组件的属性 path Component exact
 * path Route的路径
 * exact 是否精确匹配 后面能不能跟子路径
 * strict 是否严格匹配 后面能不能有可选的/
 * sensitive 是否是大小写敏感
 */

function matchPath(pathname, options = {}) {
    let { path = "/", exact = false, strict = false, sensitive = false } = options;
    let { keys, regexp } = compilePath(path, { end: exact, strict, sensitive });
    const match = regexp.exec(pathname);

    if (!match) return null;
    const [url, ...values] = match;
    const isExact = pathname === url;
    // 如果要求精确 但不精确 也返回null
    if (exact && !isExact) return null;
    return {
        path, // Route的path
        url, // 浏览器的url
        isExact, // 是否精确匹配
        patams: keys.reduce((memo, key, index) => {
            memo[key.name] = values[index];
            return memo;
        }, {})
    }
}
export default matchPath
