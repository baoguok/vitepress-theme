
//深度合并对象
export function deepMerge(target, source) {
    // 检查目标对象和源对象是否都是对象
    if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
        // 遍历源对象的所有属性
        for (const key in source) {
            if (!source.hasOwnProperty(key)) {
                continue;
            }
            //则递归调用 deepMerge 函数
            if (typeof target[key] === 'object' && target[key] !== null && typeof source[key] === 'object' && source[key] !== null) {
                target[key] = deepMerge(target[key], source[key]);
            } else {
                // 否则，直接用源对象的属性值覆盖目标对象的属性值
                target[key] = source[key];
            }
        }
    }
    return target;
}