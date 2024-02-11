import Image from "next/image";

import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  return (
    <Room>
      <CollaborativeApp />
    </Room>
  );
}