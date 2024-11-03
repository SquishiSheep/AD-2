import { useEffect, useRef } from 'react';
import { Box, Heading, Button, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const bgCanvasRef = useRef(null);
  const gameCanvasRef = useRef(null);

  useEffect(() => {
    const bgCanvas = bgCanvasRef.current;
    const bgContext = bgCanvas.getContext('2d');
    bgCanvas.width = 640;
    bgCanvas.height = 640;

    const grid = 32;
    const tetrominos = {
      I: [[1, 1, 1, 1]],
      J: [[1, 0, 0], [1, 1, 1]],
      L: [[0, 0, 1], [1, 1, 1]],
      O: [[1, 1], [1, 1]],
      S: [[0, 1, 1], [1, 1, 0]],
      Z: [[1, 1, 0], [0, 1, 1]],
      T: [[0, 1, 0], [1, 1, 1]],
    };

    const colors = ['#00ffff', '#ff0', '#ff00ff', '#0f0', '#f00', '#00f', '#ffa500'];
    let fallingBlocks = [];

    const createRandomBlock = () => {
      const keys = Object.keys(tetrominos);
      const name = keys[Math.floor(Math.random() * keys.length)];
      const matrix = tetrominos[name];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const col = Math.floor(Math.random() * (bgCanvas.width / grid - matrix[0].length));
      return { matrix, color, row: -matrix.length, col };
    };

    for (let i = 0; i < 5; i++) {
      fallingBlocks.push(createRandomBlock());
    }

    const drawBackgroundBlocks = () => {
      bgContext.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

      fallingBlocks.forEach((block, index) => {
        bgContext.fillStyle = block.color;
        for (let row = 0; row < block.matrix.length; row++) {
          for (let col = 0; col < block.matrix[row].length; col++) {
            if (block.matrix[row][col]) {
              bgContext.fillRect((block.col + col) * grid, (block.row + row) * grid, grid - 1, grid - 1);
            }
          }
        }

        block.row += 0.1;
        if (block.row * grid >= bgCanvas.height) {
          fallingBlocks[index] = createRandomBlock();
        }
      });

      requestAnimationFrame(drawBackgroundBlocks);
    };

    drawBackgroundBlocks();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="black"
    >
      <Box
        position="relative"
        width="640px"
        height="640px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="2px solid white"
        overflow="hidden"
        backgroundColor="black"
      >
        {/* Background Canvas */}
        <canvas ref={bgCanvasRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}></canvas>

        {/* Foreground Canvas */}
        <canvas ref={gameCanvasRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}></canvas>

        {/* Overlay Content */}
        <VStack
          position="absolute"
          zIndex={3}
          color="white"
          textAlign="center"
          spacing={5}
        >
          <Heading
            fontSize="48px"
            fontWeight="bold"
            textShadow="0 0 15px #0ff, 0 0 25px #f0f"
          >
            Smart calendar
          </Heading>
          <Heading
            fontSize="20px"
            fontWeight="bold"
            textShadow="0 0 15px #0ff, 0 0 25px #f0f"
          >
            With Claude  AI
          </Heading>
          <HStack spacing={5}>
            <Link to="/startplanning">
              <Button
                bgGradient="linear(to-r, #00f, #f0f)"
                color="white"
                _hover={{ bg: '#f0f', color: 'black', boxShadow: '0 0 15px #0ff, 0 0 25px #f0f' }}
                fontSize="14px"
                fontWeight="bold"
                textShadow="0 0 8px #0ff, 0 0 16px #f0f"
                border="2px solid #92e7ff"
                borderRadius="8px"
                textTransform="uppercase"
              >
                Add Task
              </Button>
            </Link>
            <Link to="/progress">
              <Button
                bgGradient="linear(to-r, #00f, #f0f)"
                color="white"
                _hover={{ bg: '#f0f', color: 'black', boxShadow: '0 0 15px #0ff, 0 0 25px #f0f' }}
                fontSize="14px"
                fontWeight="bold"
                textShadow="0 0 8px #0ff, 0 0 16px #f0f"
                border="2px solid #92e7ff"
                borderRadius="8px"
                textTransform="uppercase"
              >
                Progress
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Hero;
