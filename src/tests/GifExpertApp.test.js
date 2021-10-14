import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en gifExpertApp.js', () => {

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['cowboy bebop', 'evangelion'];

        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

});