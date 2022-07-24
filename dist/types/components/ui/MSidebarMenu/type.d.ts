interface TreeNode {
    type: string;
    title?: string;
    path?: string;
    icon_url: string | null;
    items?: Array<TreeNode>;
    fast_action?: TreeNode;
    options?: object | null;
    active?: boolean;
    current?: boolean;
    id: number;
}
export { TreeNode };
