import { Gen } from '~app_interfaces/Gen';
import { TypeString } from '~app_interfaces/TypeStrings';

export interface TypeOption {
   key: string;
   value: TypeString | undefined;
}

export interface GenOption {
   key: string;
   value: Gen | undefined;
}
