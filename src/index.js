import merge from 'lodash.merge';
import requireAll from 'require-all';

const combinedMetadataPublic = {};
const combinedMetadataComplete = {};


export const extendJmQuery = (name, metadataObj, addAsPrivate) => {
    merge(addAsPrivate ? combinedMetadataComplete : combinedMetadataPublic, {
        Query: {
            fields: {
                [name]: metadataObj
            }
        }
    });
};


// names can be an object or an array
export const extendJmMutation = (names, metadata, addAsPrivate) => {
    const nameList = Array.isArray(names) ? names : [names];

    for (let index in nameList) {
        merge(addAsPrivate ? combinedMetadataComplete : combinedMetadataPublic, {
            Mutation: {
                fields: {
                    [nameList[index]]: metadata
                }
            }
        });
    }
}


export const addJmType = (name, metadataObj, addAsPrivate) => {
    merge(addAsPrivate ? combinedMetadataComplete : combinedMetadataPublic, {
        [name]: metadataObj
    });
}


export const combineMetadata = (directory = '') => {
    const path = __dirname + '/../../' + directory;
    requireAll({
        dirname: path,
    });

    return [ combinedMetadataPublic, combinedMetadataComplete ];
};