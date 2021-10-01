import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {

    test('Debe mostrar el componente GifGridItem.js de manera correcta', () => {

        const wrapper = shallow( <GifGridItem /> );

        expect(wrapper).toMatchSnapshot();

    });

});