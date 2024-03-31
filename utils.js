// Function to generate an array of Surah
function generateSurahList() {
  return [
    { number: 1, arabic: 'الفاتحة', transliteration: 'Al Fatiha', english: 'Al-Fatihah' },
    { number: 2, arabic: 'البقرة', transliteration: 'Al Baqarah', english: 'Al-Baqarah' },
    { number: 3, arabic: 'آل عمران', transliteration: 'Al Imran', english: 'Al-Imran' },
    { number: 4, arabic: 'النساء', transliteration: 'An Nisa', english: 'An-Nisa' },
    // Add more Surah objects as needed
  ];
}

module.exports = { generateSurahList };
