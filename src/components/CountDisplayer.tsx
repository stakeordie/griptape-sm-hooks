import React from 'react';
import { useCounterStore } from '../stores';

export function CountDisplayer() {
    const { count, loading, getCount } = useCounterStore();

    if (loading) return (<>Loading...</>);

    return (
        <div>
            The count is: {count}
            <button onClick={getCount}>Get count</button>
        </div>
    );
}