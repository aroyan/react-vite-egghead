import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const arrayOfNumbers = [
  { uid: 'satu', id: 'one', value: 1, display: '1' },
  { uid: 'dua', id: 'two', value: 2, display: '2' },
  { uid: 'tiga', id: 'three', value: 3, display: '3' },
  { uid: 'empat', id: 'four', value: 4, display: '4' },
  { uid: 'lima', id: 'five', value: 5, display: '5' },
  { uid: 'enam', id: 'six', value: 6, display: '6' },
  { uid: 'tujuh', id: 'seven', value: 7, display: '7' },
  { uid: 'delapan', id: 'eight', value: 8, display: '8' },
  { uid: 'sembilan', id: 'nine', value: 9, display: '9' },
  { uid: 'nol', id: 'zero', value: 0, display: '0' },
];

export default function Key() {
  const [input, setInput] = useState(0);
  const [savedInput, setSavedInput] = useState([0]);

  function handleClick(e) {
    // setInput((arr) => [...arr, e.target.textContent]);
    setInput(e.target.textContent);
    setSavedInput((arr) => [...arr, input]);
  }

  // useEffect(() => {
  //   const numberDisplay = document.getElementById('number-display');
  //   numberDisplay.addEventListener('click', handleClick);
  //   return () => {
  //     numberDisplay.removeEventListener('click', handleClick);
  //   };
  // });

  let renderedNumber = arrayOfNumbers.map((num) => {
    return (
      <Box
        key={num.uid}
        id={num.id}
        bg={'indigo'}
        w={'50px'}
        h={'50px'}
        p={'3'}
        textAlign={'center'}
        cursor={'pointer'}
        userSelect={'none'}
        onClick={handleClick}
      >
        {num.value}
      </Box>
    );
  });

  return (
    <Flex align={'center'} justify={'center'} flexDir={'column'}>
      <Heading as={'h2'} margin={'8'}>
        {input}
      </Heading>
      <Heading as={'h2'} margin={'8'} color={'yellow'}>
        {savedInput.reduce((prev, curr) => prev + curr)}
      </Heading>
      <Flex align={'center'} justify={'center'} id={'number-display'}>
        {renderedNumber}
      </Flex>
    </Flex>
  );
}

//todo
//https://thewebdev.info/2021/03/20/how-to-get-the-id-of-the-clicked-element-in-the-javascript-click-handler/
//https://www.techiediaries.com/react-usestate-hook-update-array/
