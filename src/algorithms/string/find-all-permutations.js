// Find all possible permutation

// O(N!)

function permutation(perm, string) {

  if (!string) {
    console.log(perm + string);
    return;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    permutation(perm + char, string.slice(0, i) + string.slice(i + 1, string.length));
  }
}

permutation('', 'abc');