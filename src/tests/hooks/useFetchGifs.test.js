import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el hook useFecthGifs', () => {

    test('Debe retonar el estado inicial', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Cowboy bebop'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {

        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs('Cowboy bebop'));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })

});