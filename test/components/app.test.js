//import { renderComponent , expect } from '../test_helper';
import React from 'react';
import { shallow, mount } from 'enzyme';
//import Link from '../Link.react';
import renderer from 'react-test-renderer';
import App from '../../src/components/app';
import Unit from '../../src/components/unit';
import Universe from '../../src/containers/universe'
import Header from '../../src/components/header';

/*
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
*/

describe('header', () =>{
  it('renders header component as expected', () =>{
    const headerComponent = renderer.create(
      <Header/>
    );

    let json = headerComponent.toJSON();
    expect(json).toMatchSnapshot();
  })
});

describe('universe', () =>{
  it('rendrs universe with random live and dead cells', () =>{
    const uni = shallow(<Universe/>);
    expect(uni).to.exist;

  })
});

/*
describe('unit', () => {
  it('unit is rendered as expected', ()=>{

    const wrapper = mount(<Unit data=
    {
      {
        cellState:1,
        key:'row 1, col 1'
      }
    }/>);
    expect(wrapper.find('td').hasClass('bg-suggess')).to.equal(true);
  });
});
*/
