import { HeaderProps } from "../types/interfaces.ts";

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      <div>{children}</div>
    </header>
  );
}
