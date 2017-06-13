/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
export const LoadingComponent = () => {
    let styles = {
        loadingComponent: {
            textAlign:'center',
            height: 100
        },
    };
    return <div style={styles.loadingComponent}>Now Loading ...</div>
};
