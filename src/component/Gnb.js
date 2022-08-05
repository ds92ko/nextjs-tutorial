import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react"

export default function Gnb() {
    const router = useRouter();
    let activeItem;

    if (router.pathname === '/') {
      activeItem = 'home';
    } else {
      activeItem = router.pathname.split('/')[1];
    }

    function goLink(e, data) {
      if (data.name === 'home') {
        router.push('/');
      } else {
        router.push(`/${data.name}`);
      }
    }

    return (
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={goLink}
        />
      </Menu>
    )
}