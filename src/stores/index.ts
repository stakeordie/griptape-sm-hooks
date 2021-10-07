import { useState } from 'react';
import { counter } from '../contracts';

export interface CounterStore {
    count?: number;
    loading: boolean;
    getCount(): Promise<void>;
    increment(): Promise<void>;
}

export function useCounterStore() {
    const [count, setCount] = useState<number>();
    const [loading, setLoading] = useState(false);

    async function $updateCount() {
        const res = await counter.getCount();
        setCount(res.count);
    }

    async function getCount() {
        setLoading(true);
        await $updateCount();
        setLoading(false);
    }

    async function increment() {
        setLoading(true);
        try {
            await counter.increment();
        } catch (e: unknown) {
            console.log(e);
            // ignore
        } finally {
            await $updateCount();
            setLoading(false);
        }
    }

    return { count, loading, getCount, increment };
}