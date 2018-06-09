import FooterGray from './FooterGray';

describe('the FooterGray component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<FooterGray />);

    expect(wrapper).toMatchSnapshot()
  });
  /*
  it('', () => {
    
  });
  */
});