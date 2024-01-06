import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/skydecklogo.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='120px' marginLeft={8}/>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar