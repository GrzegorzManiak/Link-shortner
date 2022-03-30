import { UserSchema as Schema000 } from '../def/000';

//                              UPDATE ME TOO   //
//                              VVV ------ VVV  //
export interface Schema extends Schema000.User {}

// MAP of the schema versions
export const Versions = new Map<[number, number, number], any>([
    [[0, 0, 0], Schema000], // <== Add new versions here
]);


// ----------[ Everything below this line is not to be modified ]----------//

export let LatestVersion: [number, number, number] = [0, 0, 0];

// Find the latest version
for(let version of Versions.keys()) {
    if(version[0] >= LatestVersion[0] && 
        version[1] >= LatestVersion[1] && 
        version[2] >= LatestVersion[2]) 
        LatestVersion = version;
}

export const verify = (User:any, template:any): boolean => {
    return true
}