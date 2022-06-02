import React, { useState } from 'react';
import {
  Text,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'

const SignIn = () => {
  const [show, setShow] = React.useState(false)
  const handleShow = () => setShow(!show)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <div className="m-auto max-w-[350px]">
        <h1>Sign in to your account</h1>
        <form>
          <Stack spacing={3}>
            <Text>
              <label htmlFor="username">
                Username
              </label>
            </Text>
            <Input
              htmlSize={4}
              width="auto"
              // variant="outlined"
              size="md"
              type="email"
              id="username"
            />
            <br />
            <Text>
              <label htmlFor="password">
                Password
              </label>
            </Text>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleShow}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <br />
            <Button colorScheme='teal' variant='solid' type="submit">Submit</Button>
          </Stack>
        </form>
      </div>
    </main>
  )
}

export default SignIn;