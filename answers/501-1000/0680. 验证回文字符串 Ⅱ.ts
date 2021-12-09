function validPalindrome(s: string, canDel: boolean = true): boolean {
  let left = 0, right = s.length - 1;
  while (left < right) {
      const charLeft = s[left];
      const charRight = s[right];

      // 左右指针对应的字符不同
      // 删除左或右字符，判断是否回文
      if (charLeft !== charRight) {
          return canDel && (
              validPalindrome(s.slice(left + 1, right + 1), false)
              || validPalindrome(s.slice(left, right), false)
          );
      }

      ++left;
      --right;
  }

  return true;
};