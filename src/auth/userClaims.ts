export interface UserClaims {
    uuid: string;
    claims: string[];

    // public constructor(readonly uuid: string, readonly claims: string[]) {}

    // public doesUserHavePermissions(allowedPermissions: string[]): boolean {
    //     return this.claims && allowedPermissions.some((claim) => allowedPermissions.includes(claim));
    // }
}
