export interface NavLinkProps {
  name: string;
  link: string;
  onClickHandler?:()=>void;
}
export interface NavbarProps {
  hide?: boolean;
  onClickHandler?:()=>void;
  isScrolled?:boolean;
}
