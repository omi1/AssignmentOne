/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WelcomeComponent from '../src/WelcomeComponent';

Enzyme.configure({adapter: new Adapter()});
describe('WelcomeComponent screen tested with enzyme', () => {
  function baseXML() {
    return <WelcomeComponent />;
  }
  const tree = renderer.create(baseXML()).toJSON();

  it('matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
  it('should render 3 Button Components', () => {
    const wrapper = mount(baseXML());
    const Buttons = wrapper.find('Button');
    expect(Buttons).toHaveLength(3);
  });
});
