import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/skydecklogo.svg';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='120px' marginLeft={8}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar