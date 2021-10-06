import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setcategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');
    })

});