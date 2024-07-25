export const capitalizeSentences = (str: string) => {
  const sentences = str.split('. ');
  sentences.forEach((sentence, index) => (
    sentences[index] = sentence.charAt(0).toUpperCase() + sentence.slice(1)
  ));
  return sentences.join('. ');
}