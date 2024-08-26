import { DesktopHeader } from './desktop';
import { MobileHeader } from './mobile';

interface HeaderProps {
  dir: 'ltr' | 'rtl';
}
export function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
