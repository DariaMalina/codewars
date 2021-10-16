function deepCount(a) {
  if (!Array.isArray(a)) {
    return 0;
  }
  let sum = 0;
  sum += a.length;
  for (let i = 0; i < a.length; i += 1) {
    const el = a[i];
    if (Array.isArray(el)) {
      sum += deepCount(el);
    }
  }
  return sum;
}

deepCount([1, 2, 3]); // 3
deepCount(['x', 'y', ['z']]); // 4
deepCount([[[[[[[[[]]]]]]]]]); // 8
