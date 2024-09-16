declare module 'prompt-sync' {
    interface Prompt {
        (ask: string, value?: string, opts?: { echo?: string; value?: string; ask?: string }): string;
        hide(ask: string): string;
    }
    function promptSync(opts?: { sigint?: boolean; autocomplete?: (input: string) => string[]; history?: any }): Prompt;
    export = promptSync;
}