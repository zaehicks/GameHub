import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/skydecklogo.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='120px' marginLeft={8}/>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar