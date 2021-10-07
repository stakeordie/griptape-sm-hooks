import React from 'react';
import stores from '../stores/global';

export function CountDisplayer() {
    const { loading, count, getCount } = stores.counterStore;

    if (loading) return (<>Loading...</>);

    return (
        <div>
            The count is: {count}
            <button onClick={getCount}>Get count</button>
        </div>
    );
}