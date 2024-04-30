import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = () => {
  return (
    <>
        <PostHeader />
        <Box my={2}>
            <Image src='littlesongbird.png' alt='user profile pic'/>
        </Box>
        <PostFooter />    
    </>
  )
}

export default FeedPost