import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {

    const title = "Hola titulo";
    const url = "http://localhost/algo.jpg";
    const wrapper = shallow( <GifGridItem
        url = {url}
        title = {title}
    /> );

    test('Debe mostrar el componente GifGridItem.js de manera correcta', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toEqual(true);
    })
    

});