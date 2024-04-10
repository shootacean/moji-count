import { runes } from 'runes2';

/**
 * 文字列の長さを返す
 *
 * @param s
 * @returns 文字列の長さ
 * @reference https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * @reference https://qiita.com/hamakou108/items/d387383610b0c76b5ade
 * @reference https://flaviocopes.com/javascript-unicode/#get-the-proper-length-of-a-string
 * @reference https://zenn.dev/masa5714/articles/0e8663e9f98082
 * @reference https://zenn.dev/reds/articles/a495da65203d72
 * 
 */
export function count(s: string): number {
	return runes(s).length;
}

/**
 * 文字列内の行数をカウントする
 * @param s 
 * @returns 
 */
export function countLine(s: string): number {
	if (s === '') return 0;
	return (s.match(/\n/g) || []).length + 1;
}
