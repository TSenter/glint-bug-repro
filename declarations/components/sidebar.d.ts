import type { TOC } from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
interface ItemSignature {
    Element: HTMLAnchorElement | HTMLDivElement;
    Args: ({
        route: string;
        url?: never;
    } | {
        route?: never;
        url: string;
    }) & {
        active?: boolean;
        disabled?: boolean;
    };
    Blocks: {
        default: [];
        group: [
            {
                Group: ComponentLike<GroupSignature>;
            }
        ];
    };
}
interface GroupSignature {
    Element: HTMLAnchorElement;
    Args: {
        route?: string;
    };
    Blocks: {
        header: [];
        group: [ComponentLike<ItemSignature>];
    };
}
export interface SidebarSignature {
    Element: HTMLDivElement;
    Args: {
        sticky?: boolean;
    };
    Blocks: {
        default: [
            {
                Group: ComponentLike<GroupSignature>;
                Item: ComponentLike<ItemSignature>;
            }
        ];
    };
}
declare const Sidebar: TOC<SidebarSignature>;
export default Sidebar;
//# sourceMappingURL=sidebar.d.ts.map