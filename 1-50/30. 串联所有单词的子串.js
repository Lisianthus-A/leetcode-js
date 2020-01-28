/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let res = [];
    let fullArr = ['0'];
    //生成全排列，由fullArr保存
    for (let i = 1; i < words.length; i++) {
        let len = fullArr.length;
        for (let j = 0; j < len; j++) {
            for (let k in fullArr[j]) {
                let arr = fullArr[j].split('');
                arr.splice(k, 0, i.toString());
                fullArr.push(arr.join(''));
            }
            fullArr.push(fullArr[j] + i.toString());
        }
        fullArr = fullArr.slice(len);
    }
    //根据fullArr与words生成words内元素的全排列字符串数组，由fullStrArr保存
    let fullStrArr = [];
    for (let i of fullArr) {
        let str = '';
        for (let j of i) {
            str += words[j];
        }
        fullStrArr.push(str);
    }
    //console.log(fullStrArr);
    for (let i of fullStrArr) {
        let idx = s.indexOf(i);
        if (idx !== -1 && res.indexOf(idx) === -1) {  //该s存在i字符串，该索引值不存在结果数组中
            res.push(idx);
                let ss = s.slice(idx + 1);
                let level = idx + 1;
                while (ss.indexOf(i) !== -1) {
                    idx = ss.indexOf(i) + level;  //在s中的索引
                    if (res.indexOf(idx) === -1) {
                        res.push(idx);
                    }
                    ss = s.slice(idx + 1);
                    level = idx + 1;
                }
            /*else {
                let ss = s.slice(idx + i.length);
                let level = 1;
                while (ss.indexOf(i) !== -1) {
                    idx = ss.indexOf(i) + level * i.length;  //在s中的索引
                    if (res.indexOf(idx) === -1) {
                        res.push(idx);
                    }
                    ss = ss.slice(idx);
                    level++;
                }
            }*/

        }
    }
    return res;
};

console.log(findSubstring("pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel", ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"]));
//console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]));
//findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]);