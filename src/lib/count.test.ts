import { expect, test } from "bun:test";
import { count, countLine } from "./count";

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

test("countLine", () => {
	expect(countLine("")).toBe(0);
	expect(countLine("a\nb\nc")).toBe(3);
	expect(countLine("Hello\nWorld")).toBe(2);
	expect(countLine("Line1\nLine2\nLine3\nLine4")).toBe(4);
	expect(countLine("🍣\n🍺\n🍣\n🍺")).toBe(4);
});
