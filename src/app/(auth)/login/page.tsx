'use client';

import { signIn } from 'next-auth/react';
import { 
  VStack,
  Text,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={8} align="stretch" bg="white" p={8} borderRadius="lg" boxShadow="sm">
        <VStack spacing={4} align="center" mb={4}>
          <Heading>IA Resumida</Heading>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="medium"
            textAlign="center"
            lineHeight="1.2"
          >
            Suas ideias,
            <br />
            simplificadas
          </Heading>
          <Text color="gray.600" textAlign="center">
            Utilize o poder de todas as IA&apos;s
          </Text>
        </VStack>

        <Button
          leftIcon={<FcGoogle />}
          variant="outline"
          width="100%"
          size="lg"
          onClick={() => signIn('google')}
        >
          Continuar com Google
        </Button>

        <Text fontSize="sm" color="gray.600" textAlign="center">
          Ao continuar, você concorda com os{' '}
          <Text as="span" color="blue.500" cursor="pointer">
            Termos de Consumidor
          </Text>{' '}
          e a{' '}
          <Text as="span" color="blue.500" cursor="pointer">
            Política de Privacidade
          </Text>
          .
        </Text>
      </VStack>
    </Container>
  );
} 