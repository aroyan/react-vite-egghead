import React from 'react';
import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';

export default function Calculator() {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      minW={'full'}
      minH={'full'}
      flexDir={'column'}
      fontSize={'2rem'}
    >
      <Grid
        textAlign={'center'}
        gridTemplateRows={'auto'}
        templateColumns={'3fr 1fr'}
        gap={'1'}
      >
        <GridItem height={'70px'} bg={'cyan.600'} p={'2'} id="clear">
          AC
        </GridItem>
        <GridItem rowSpan={'2'}>
          <Flex flexDir={'column'} gap={'1'}>
            <Box
              height={'70px'}
              width={'70px'}
              bg={'purple.600'}
              p={'2'}
              id="divide"
            >
              /
            </Box>
            <Box
              height={'70px'}
              width={'70px'}
              bg={'purple.600'}
              p={'2'}
              id="multiply"
            >
              x
            </Box>
            <Box
              height={'70px'}
              width={'70px'}
              bg={'purple.600'}
              p={'2'}
              id="subtract"
            >
              -
            </Box>
            <Box
              height={'70px'}
              width={'70px'}
              bg={'purple.600'}
              p={'2'}
              id="add"
            >
              +
            </Box>
            <Box
              height={'70px'}
              width={'70px'}
              bg={'purple.600'}
              p={'2'}
              id="equals"
            >
              =
            </Box>
          </Flex>
        </GridItem>

        <Grid templateColumns={'repeat(3, 1fr)'} gap={'1'} row={'2'}>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="one"
          >
            1
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="two"
          >
            2
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="three"
          >
            3
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="four"
          >
            4
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="five"
          >
            5
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="six"
          >
            6
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="seven"
          >
            7
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="eight"
          >
            8
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="nine"
          >
            9
          </GridItem>
          <GridItem p={'2'} bg={'indigo'} height={'70px'} colSpan={2} id="zero">
            0
          </GridItem>
          <GridItem
            p={'2'}
            bg={'indigo'}
            height={'70px'}
            width={'70px'}
            id="decimal"
          >
            .
          </GridItem>
        </Grid>
      </Grid>
    </Flex>
  );
}
