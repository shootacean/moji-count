import { expect, test } from "bun:test";
import { count } from "./count";

test("count", () => {
	expect(count("")).toBe(0);
	expect(count("a")).toBe(1);
	expect(count("abc")).toBe(3);
	expect(count("あいう")).toBe(3);
	expect(count("あいうえお")).toBe(5);
	expect(count("🍣🍺")).toBe(2);
	expect(count("🍣🍺🍣🍺")).toBe(4);
	expect(count("あ🍣い🍺う🍣え🍺お")).toBe(9);
});
