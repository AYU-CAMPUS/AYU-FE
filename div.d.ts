import { AriaAttributes } from "react";

declare module "react" {
  interface HTMLAttributes extends AriaAttributes {
    type?: string;
  }
}
