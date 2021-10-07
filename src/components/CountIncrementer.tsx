import React from 'react';
import stores from '../stores/global';

export function CountIncrementer() {
    const { increment, loading } = stores.counterStore;
    return (
        <div>
            <button onClick={increment} disabled={loading}>Increment</button>
        </div>
    );
}