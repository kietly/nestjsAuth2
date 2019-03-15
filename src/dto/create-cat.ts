export enum CatType {
    TIGER_ENUM = 'Tiger',
    LION_ENUM = 'Lion',
    HOUSE_CAT_ENUM = 'HouseCat',
}
export class CatDto {
    readonly name: string;
    readonly type: CatType;
}
