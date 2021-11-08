/**
 * @file helper.js
 * @author liulei<liulei33@baidu.com>
 */

/**
 * 树结构转换成扁平树结构
 *
 * @param {Array} treeData 树结构数据
 * @param {number} parentId 一级的节点的父id
 * @return {Array} 扁平树结构数据
 */
export function treeToList(treeData = [], parentId = 0) {
    let stack = Object.assign([], treeData);
    let item;
    const ret = [];

    if (!stack || !stack.length) {
        return;
    }

    while (stack.length) {
        item = stack.shift();

        if (item.parentId === +parentId) {
            item.level = 1;
        }

        if (item.children && item.children.length) {
            let i = 0;
            const len = item.children.length;

            for (; i < len; i++) {
                item.children[i].level = item.level + 1;
            }

            item.isLeaf = false;
            stack = item.children.concat(stack);
        }
        else {
            item.isLeaf = true;
        }

        ret.push(item);
    }

    return ret;
}

/**
 * 扁平树结构转化成树结构
 *
 * @param {Array} listData 扁平树结构数据
 * @param {number} parentId 一级节点父节点
 * @return {Array} 返回多叉树
 */
export function listToTree(listData = [], parentId = 0) {
    const ret = [];
    let o;
    let temp;

    listData = Object.assign([], listData);

    listData.forEach(item => {
        if (item.parentId === +parentId) {
            o = item;
            temp = listToTree(listData, item.id);

            if (temp.length) {
                o.children = temp;
            }

            ret.push(o);
        }
    });

    return ret;
}

/**
 * 获取本节点数据
 *
 * @param {Array} listData 扁平树结构数据
 * @param {number} itemId 当前节点id
 * @return {Object} 当前节点
 */
export function getItem(listData = [], itemId) {
    let ret = {};

    listData = Object.assign([], listData);

    listData.forEach(item => {
        if (+itemId === item.id) {
            ret = item;
        }
    });

    return ret;
}

/**
 * 获取父节点
 *
 * @param {Array} listData 扁平树结构数据
 * @param {number} itemId 当前节点id
 * @return {Object} 父节点
 */
export function getParent(listData = [], itemId) {
    let ret = {};

    listData = Object.assign([], listData);

    listData.forEach(item => {
        if (+itemId === item.id) {
            listData.forEach(o => {
                if (o.id === item.parentId) {
                    ret = o;
                }
            });
        }
    });

    return ret;
}

/**
 * 获取节点所有父节点
 *
 * @param {Array} listData 扁平树结构数据
 * @param {number} parentId 一级节点的父id
 * @param {number} itemParentId 当前节点的父id
 * @param {Array} ret 返回的数据
 * @return {Array} ret 返回的数据
 */
export function getAllParents(listData = [], parentId = 0, itemParentId, ret = []) {
    listData = Object.assign([], listData);

    listData.forEach(item => {
        if (+itemParentId === item.id) {
            ret.unshift(item);

            if (item.parentId !== +parentId) {
                getAllParents(listData, item.parentId, ret);
            }
        }
    });

    return ret;
}

/**
 * 拼接分级节点名称
 *
 * @param {Array} listData 扁平树结构数据
 * @param {Object} item 当前节点数据
 * @return {string} 拼接的分级节点名称
 */
export function joinNames(listData, item) {
    const ret = [];
    let items;

    if (!item) {
        return '';
    }

    items = getAllParents(listData, 0, item.parentId);

    items.forEach(o => {
        ret.push(o.name);
    });

    ret.push(item.name);

    return ret.join('-');
}
