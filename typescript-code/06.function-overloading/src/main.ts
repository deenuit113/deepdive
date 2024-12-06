function add1 (a: string, b: string): string {
    return a + b;
}

function add2 (a: number, b: number): number {
    return a + b;
}
function add (a: string, b: string): string;
function add (a: number, b: number): number;
function add (a: any, b: any): any {
    return a + b;
}