import React from 'react';
import { useCounterStore } from '../stores';

export function CountIncrementer() {
    const { increment, loading } = useCounterStore();
    return (
        <div>
            <button onClick={increment} disabled={loading}>Increment</button>
        </div>
    );
}