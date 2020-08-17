// 贪心算法
// 满足条件：

// 可行的：即它必须满足问题的约束。
// 局部最优：他是当前步骤中所有可行选择中最佳的局部选择。
// 不可取消：即选择一旦做出，在算法的后面步骤就不可改变了。 贪心在解决问题上是目光短浅的，仅仅根据当前的已知信息就做出选择，并且一旦做了选择，就不再更改比如01背包问题，用贪心的话是不可解决的，因为贪心每次只顾眼前最优，即每次选择价值最大的，而忽略了另外一个变量，物品的重量，如果还考虑物品的重量的话，那就是dp了
// 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。注意：你可以假设胃口值为正。 一个小朋友最多只能拥有一块饼干。

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {// g 代表小孩胃口，s 代表饼干尺寸
    if (g === null || s === null) return 0;
    const newg = g.sort((a, b) => a - b);
    const news = s.sort((a, b) => a - b);
    let cookieIndex = 0,
        childrenIndex = 0;

    while (cookieIndex < news.length && childrenIndex < newg.length) {
        if (news[cookieIndex] >= newg[childrenIndex]) {
            childrenIndex++;
        }
        cookieIndex++;
    }
    return childrenIndex;
};
