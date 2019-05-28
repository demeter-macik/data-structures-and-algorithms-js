// Find longest common substring
// https://www.ics.uci.edu/~eppstein/161/960229.html

// Time is O(MN)

function initMatchTable(str1, str2) {
  const array = [];
  for (let i = 0; i <= str1.length; i++) {
    const row = [];
    for (let j = 0; j <= str2.length; j++) {
      row.push(-1);
    }
    array.push(row);
  }
  return array;
}

function addTitles(str1, str2, table) {
  table.unshift(['-', ...str2, '-']);
  for (let i = 1; i < table.length; i++) {
    table[i] = [str1[i - 1] || '-', ...table[i]];
  }
  return table;
}

function getLongestCommonString(str1, str2) {

  const matchTable = initMatchTable(str1, str2);

  function searchForCommonChars(i, j) {

    if (str1[i + 1] === undefined || str2[j + 1] === undefined) {
      matchTable[i][j] = 0;
    } else if (str1[i] === str2[j]) {
      matchTable[i][j] = 1 + searchForCommonChars(i + 1, j + 1);
    } else {
      matchTable[i][j] = getMax(searchForCommonChars(i + 1, j), searchForCommonChars(i, j + 1));
    }
    return matchTable[i][j];
  }

  function getMax(n1, n2) {
    return n1 > n2 ? n1 : n2;
  }

  function getStringFromMatchTable(str1, str2, table) {
    let longestStr = '';
    let i = 0;
    let j = 0;
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        longestStr += str1[i];
        i++;
        j++;
      } else if ((table[i + 1][j] >= table[i][j + 1]) && i < str1.length-1) {
        i++;
      } else {
        j++;
      }
    }
    return longestStr;
  }

  searchForCommonChars(0, 0);

  const s = getStringFromMatchTable(str1, str2, matchTable);
  console.log('table:', addTitles(str1, str2, matchTable));
  return s;
}

let str1 = 'ABBA';
let str2 = 'ABBA';
console.log(getLongestCommonString(str1, str2));
// ABBA

str1 = 'ABBA';
str2 = 'ABCABA';
console.log(getLongestCommonString(str1, str2));
// ABBA

str1 = 'ABCABA';
str2 = 'ABBA';
console.log(getLongestCommonString(str1, str2));
// ABBA

str1 = 'ABBA';
str2 = 'ABBXYA';
console.log(getLongestCommonString(str1, str2));
// ABBA
