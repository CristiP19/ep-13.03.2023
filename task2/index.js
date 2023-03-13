const uppercaseFirstLetter = (sentence) => {
  const words = sentence.split(' ');
  const capitalizedWords = words.map((word) => {
    const lastLetter = word[word.length - 1].toUpperCase();
    const withoutLastLetter = word.slice(0, -1);
    return withoutLastLetter + lastLetter;
  });
  const capitalizedSentence = capitalizedWords.join(' ');
  console.log(capitalizedSentence);
  return capitalizedSentence;
}

uppercaseFirstLetter("Astazi este joi");
