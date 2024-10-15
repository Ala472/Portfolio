import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  "Hello !",
  "Hola !",
  "Bonjour",
  "Ciao",
  "مرحبا",
  "Merhaba",
  "こんにちは",
  "您好",
  "Hallo",
];

const Greetings = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
} 
export default Greetings;